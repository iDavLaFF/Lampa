(function () {
  'use strict';

  var network = new Lampa.Reguest();
  var api_url = 'https://api.lampishe.cc/collections/';

  function main(params, oncomplete, onerror) {
    network.silent(api_url + '?page=' + params.page, function (data) {
      data.collection = true;
      data.total_pages = data.total_pages || 5;
      data.results.forEach(function (element) {
        element.poster_path = element.img;
        element.backdrop_path = element.img;
      });
      oncomplete(data);
    }, onerror);
  }

  function full(params, oncomplete, onerror) {
    network.silent(api_url + params.url + '?page=' + params.page, function (data) {
      data.total_pages = data.total_pages || 15;
      oncomplete(data);
    }, onerror);
  }

  function clear() {
    network.clear();
  }

  var Api = {
    main: main,
    full: full,
    clear: clear
  };

  function component$1(object) {
    var comp = new Lampa.InteractionCategory(object);

    comp.create = function () {
      Api.main(object, this.build.bind(this), this.empty.bind(this));
    };

    comp.nextPageRequest = function (object, resolve, reject) {
      Api.main(object, resolve.bind(comp), reject.bind(comp));
    };

    comp.cardRender = function (object, element, card) {
      card.onMenu = false;

      card.onEnter = function () {
        Lampa.Activity.push({
          url: element.hpu,
          title: element.title,
          component: 'lampishe_collection',
          page: 1
        });
      };
    };

    return comp;
  }

  function component(object) {
    var comp = new Lampa.InteractionCategory(object);

    comp.create = function () {
      Api.full(object, this.build.bind(this), this.empty.bind(this));
    };

    comp.nextPageRequest = function (object, resolve, reject) {
      Api.full(object, resolve.bind(comp), reject.bind(comp));
    };

    return comp;
  }

  function startPlugin() {
    var manifest = {
      type: 'video',
      version: '1.1.1',
      name: 'Коллекции',
      description: '',
      component: 'lampishe_collections'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('lampishe_collection', component$1);
    Lampa.Component.add('lampishe_collections', component);

    function addMenuItem() {
      var button = $('<li class="menu__item selector"></li>');
      var icon = $('<div class="menu__ico"></div>');
      var svg = $('<svg viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xmlns="http://www.w3.org/2000/svg" fill="CurrentColor"> <path d="M 21.022 26 L 1.993 26 C 0.9 26 0 25.109 0 24.009 L 0 13 L 29 13 L 29 16.498 C 28.23 16.177 27.386 16 26.5 16 C 22.91 16 20 18.91 20 22.5 C 20 23.789 20.375 24.99 21.022 26 Z M 0 12 L 0 5.991 C 0 4.89 0.897 4 2.003 4 L 13 4 L 15 8 L 26.994 8 C 28.103 8 29 8.893 29 9.995 L 29 12 Z M 31.993 22.507 C 31.993 25.543 29.53 28.006 26.494 28.006 C 23.456 28.006 20.993 25.543 20.993 22.507 C 20.993 19.469 23.456 17.006 26.494 17.006 C 29.53 17.006 31.993 19.469 31.993 22.507 Z M 29.493 22.507 C 29.493 22.211 29.34 21.947 29.084 21.798 L 25.718 19.854 C 25.462 19.708 25.157 19.708 24.902 19.854 C 24.646 20.003 24.493 20.267 24.493 20.564 L 24.493 24.449 C 24.493 24.745 24.646 25.009 24.902 25.158 C 25.03 25.23 25.17 25.268 25.31 25.268 C 25.451 25.268 25.59 25.23 25.718 25.158 L 29.084 23.214 C 29.34 23.065 29.493 22.801 29.493 22.507 Z" id="folder-remove" fill="CurrentColor" transform="matrix(1, 0, 0, 1, 0, 4.440892098500626e-16)"/> </svg>');
      var text = $('<div class="menu__text">' + manifest.name + '</div>');

      icon.append(svg);
      button.append(icon);
      button.append(text);

        // Обработчик для клика и фокуса
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: manifest.name,
          component: 'lampishe_collections',
          page: 1
        });
      });

    if (!window.lampishe_collections_ready) {
      window.lampishe_collections_ready = true;
      addMenuItem();
    }

    if (window.appready) {
      addMenuItem();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          addMenuItem();
        }
      });
    }
  }

  startPlugin();

})();