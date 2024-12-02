(function() {
  'use strict';

  Lampa.Platform.tv();

  function setupAccountAddDevice() {
    const modalTitle = Lampa.Modal.open({
      title: 'Авторизация',
      html: Lampa.Template.get('account_add_device'),
      size: "full",
      onBack() {
        setupAccountAddDevice();
      }
    });

    $(".modal__title").css("text-align", "center");

    const inputButton = modalTitle.find(".simple-button");
    inputButton.html("Ввести токен").on("hover:enter", () => {
      Lampa.Modal.close();
      Lampa.Input.edit({
        free: true,
        title: Lampa.Lang.translate("Введите токен"),
        nosave: true,
        value: ''
      }, (token) => {
        if (token) {
          checkToken(token);
        } else {
          Lampa.Noty.show("Некорректный токен");
          setupAccountAddDevice();
        }
      });

      setTimeout(() => {
        const keyboard = document.querySelector("#orsay-keyboard");
        if (keyboard) {
          Lampa.Controller.focus(keyboard);
          Navigator.focus(keyboard);
        }
      }, 100);
    });
  }

  function checkToken(token) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://212.113.103.137:3003/checkToken", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.userId) {
            console.log("Токен действителен");
            Lampa.Noty.show("Токен действителен");
            localStorage.setItem("token", token);
            Lampa.Controller.toggle("content");
          } else {
            Lampa.Noty.show("Токен недействителен");
            setupAccountAddDevice();
          }
        } else {
          Lampa.Noty.show("Ошибка сервера");
          setupAccountAddDevice();
        }
      }
    };
    xhr.send(JSON.stringify({ token }));
  }

  if (window.appready) {
    setupAccountAddDevice();
  } else {
    Lampa.Listener.follow("app", ({ type }) => {
      if (type === "ready") {
        setupAccountAddDevice();
      }
    });
  }
})();
