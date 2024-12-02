(function () {
  'use strict';

  Lampa.Platform.tv();

  function removeAds() {
    setTimeout(() => {
      if (Lampa.Activity.active().component == 'full') {
        document.querySelector(".ad-server")?.remove();
      }

      if (Lampa.Activity.active().component === "modss_online") {
        document.querySelectorAll(".selectbox-item--icon").forEach(el => el.remove());
      }
    }, 20);
  }

  function hideElements() {
    setTimeout(() => {
      document.querySelectorAll('.selectbox-item__lock').forEach(el => el.style.display = 'none');

      if (!$("[data-name=\"account_use\"]").length) {
        $("div > span:contains(\"Статус\")").parent().remove();
      }
    }, 10);
  }

  function addStyles() {
    const style = document.createElement("style");
    style.innerHTML = ".button--subscribe { display: none; }";
    document.body.appendChild(style);

    Lampa.Listener.follow('full', ({ name }) => {
      if (name == "discuss") {
        setTimeout(() => {
          $(".full-reviews").parent().parent().parent().parent().remove();
        }, 100);
      }
    });
  }

  function setupListeners() {
    $(document).ready(function () {
      const regionTime = new Date().getTime();
      localStorage.setItem("region", "{\"code\":\"uk\",\"time\":" + regionTime + '}');
    });

    $("[data-action=\"tv\"]").on("hover:enter hover:click hover:touch", () => {
      setInterval(() => {
        document.querySelector('.ad-bot')?.remove();
        clearInterval(_0x2b2ae1);
        setTimeout(() => Lampa.Controller.toggle('content'), 0);
      }, 50);

      setInterval(() => {
        document.querySelector(".card__textbox")?.parent().parent().remove();
        clearInterval(_0x51beae);
      }, 50);
    });

    setTimeout(() => {
      $(".open--feed").remove();
      $(".open--premium").remove();
      $(".open--notice").remove();

      if ($(".icon--blink").length > 0) {
        $(".icon--blink").remove();
      }
    }, 1000);

    Lampa.Settings.listener.follow("open", ({ name }) => {
      if (name == "account") {
        setTimeout(() => {
          $(".settings--account-premium").remove();
          $("div > span:contains(\"CUB Premium\")").remove();
        }, 0);
      }
      if (name == "server") {
        document.querySelector('.ad-server')?.remove();
      }
    });

    Lampa.Listener.follow('full', ({ type }) => {
      if (type == 'complite') {
        $(".button--book").on("hover:enter", () => hideElements());
      }
    });
  }

  function main() {
    removeAds();
    hideElements();
    addStyles();

    Lampa.Storage.listener.follow("change", ({ name }) => {
      if (name == 'activity') {
        if (Lampa.Activity.active().component === 'bookmarks') {
          document.querySelectorAll('.register').forEach(el => el.style.display = 'none');
        }
        setTimeout(() => setupListeners(), 200);
      }
    });
  }

  window.appready ? main() : Lampa.Listener.follow("app", ({ type }) => {
    if (type == 'ready') {
      main();
      $("[data-action=feed]").eq(0).remove();
      $("[data-action=subscribes]").eq(0).remove();
      $("[data-action=myperson]").eq(0).remove();
    }
  });
})();
