(function () {
  'use strict';

  Lampa.Platform.tv();

  function add() {
    var button = $("<!-- <li class=\"menu__item selector\" data-action=\"lampishe_collections\">\n                <div class=\"menu__ico\">\n                    <?xml version=\"1.0\" encoding=\"utf-8\"?>\n                    <svg viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"CurrentColor\">\n                        <defs>\n                        </defs>\n                        <path d=\"M 21.022 26 L 1.993 26 C 0.9 26 0 25.109 0 24.009 L 0 13 L 29 13 L 29 16.498 C 28.23 16.177 27.386 16 26.5 16 C 22.91 16 20 18.91 20 22.5 C 20 23.789 20.375 24.99 21.022 26 Z M 0 12 L 0 5.991 C 0 4.89 0.897 4 2.003 4 L 13 4 L 15 8 L 26.994 8 C 28.103 8 29 8.893 29 9.995 L 29 12 Z M 31.993 22.507 C 31.993 25.543 29.53 28.006 26.494 28.006 C 23.456 28.006 20.993 25.543 20.993 22.507 C 20.993 19.469 23.456 17.006 26.494 17.006 C 29.53 17.006 31.993 19.469 31.993 22.507 Z M 29.493 22.507 C 29.493 22.211 29.34 21.947 29.084 21.798 L 25.718 19.854 C 25.462 19.708 25.157 19.708 24.902 19.854 C 24.646 20.003 24.493 20.267 24.493 20.564 L 24.493 24.449 C 24.493 24.745 24.646 25.009 24.902 25.158 C 25.03 25.23 25.17 25.268 25.31 25.268 C 25.451 25.268 25.59 25.23 25.718 25.158 L 29.084 23.214 C 29.34 23.065 29.493 22.801 29.493 22.507 Z\" id=\"folder-remove\" fill=\"CurrentColor\" transform=\"matrix(1, 0, 0, 1, 0, 4.440892098500626e-16)\"/>\n                      </svg>\n                </div>\n                <div class=\"menu__text\">Подборки</div>\n            </li> -->");
    
    button.on("hover:enter", function () {
      Lampa.Activity.push({
        url: "",
        title: "Подборки",
        component: "lampishe_collections",
        source: "",
        card_type: "true",
        page: 1
      });
    });

    $(".menu .menu__list").eq(0).append(button);
  }

  if (window.appready) add();
    else {
      Lampa.Listener.follow("app", function (event) {
      if (event.type == "ready") {
        add();
      }
      });
    }
})();