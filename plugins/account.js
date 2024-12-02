(function() {
  var _0x7a3803 = {
    'needsSync': false,
    'isSyncSuccessful': false,
    'handleStorageChange': function(_0x4f08fd) {
      if (Lampa.Storage.field("acc_sync")) {
        this.loadDataFromServer(localStorage.getItem("token")).then(function(_0x37dead) {
          if (_0x37dead) {
            _0x7a3803.updateLocalStorage(_0x37dead);
            this.needsSync = true;
          }
        }.bind(this));
      }
    },
    'sendDataToServer': function(_0x53c3a0) {
      var _0x349838 = this.getSyncedData();
      var _0x523d48 = new FormData();
      for (var _0x5cca99 in _0x349838) {
        if (_0x349838.hasOwnProperty(_0x5cca99)) {
          _0x523d48.append(_0x5cca99, JSON.stringify(_0x349838[_0x5cca99]));
        }
      }
      _0x523d48.append("file", new Blob([JSON.stringify(_0x349838)], {'type': "application/json"}));
      return this.makeHttpRequest("POST", "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x53c3a0), _0x523d48).then(function(_0x3001ef) {
        if (_0x3001ef.status === 200) {
          this.isSyncSuccessful = true;
          return JSON.parse(_0x3001ef.responseText);
        }
      }.bind(this));
    },
    'getSyncedData': function() {
      return {
        'torrents_view': Lampa.Storage.get("torrents_view", '[]'),
        'plugins': Lampa.Storage.get("plugins", '[]'),
        'favorite': Lampa.Storage.get("favorite", '{}'),
        'file_view': Lampa.Storage.get("file_view", '{}'),
        'search_history': Lampa.Storage.get("search_history", '[]')
      };
    },
    'loadDataFromServer': function(_0x34190c) {
      return this.makeHttpRequest("GET", "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x34190c)).then(function(_0x53ab5d) {
        if (_0x53ab5d.status === 200) {
          return JSON.parse(_0x53ab5d.responseText);
        }
      }).then(function(_0x2b321d) {
        if (_0x2b321d.success && _0x2b321d.data) {
          return _0x2b321d.data;
        }
      });
    },
    'makeHttpRequest': function(_0x209225, _0x2e2a95, _0x5c795d) {
      return new Promise(function(_0x37ff99, _0x48900f) {
        var _0x3ec549 = new XMLHttpRequest();
        _0x3ec549.open(_0x209225, _0x2e2a95, true);
        if (_0x209225 === 'POST') {
          _0x3ec549.send(_0x5c795d);
        } else {
          _0x3ec549.send();
        }
        _0x3ec549.onload = function() {
          if (_0x3ec549.status >= 200 && _0x3ec549.status < 300) {
            _0x37ff99(_0x3ec549);
          } else {
            _0x48900f(new Error("HTTP error " + _0x3ec549.status));
          }
        };
        _0x3ec549.onerror = function() {
          _0x48900f(new Error("Network error"));
        };
      });
    },
    'updateLocalStorage': function(_0x151fe2) {
      var _0x12e146 = Lampa.Storage.get('plugins', []);
      for (var _0x5cca99 in _0x151fe2) {
        if (_0x151fe2.hasOwnProperty(_0x5cca99)) {
          if (_0x5cca99 === 'plugins') {
            var _0x37dead = _0x151fe2[_0x5cca99];
            for (var _0x6b5a8b in _0x37dead) {
              if (_0x37dead.hasOwnProperty(_0x6b5a8b)) {
                var _0x542c0c = _0x37dead[_0x6b5a8b];
                if (_0x542c0c.enabled) {
                  Lampa.Storage.set('plugin_' + _0x6b5a8b, _0x542c0c);
                }
              }
            }
          } else {
            Lampa.Storage.set(_0x5cca99, _0x151fe2[_0x5cca99]);
          }
        }
      }
    }
  };

  Lampa.Listener.follow("app", function(_0x40521f) {
    if (_0x40521f.type == "ready") {
      var _0x12baf1 = localStorage.getItem("token");
      var _0x448827 = Lampa.Storage.get("acc_sync", false);
      if (_0x12baf1 && _0x448827) {
        _0x7a3803.loadDataFromServer(_0x12baf1).then(function(_0x37dead) {
          if (_0x37dead) {
            _0x7a3803.updateLocalStorage(_0x37dead);
          }
        })["catch"](function(_0x3e438e) {
          console.log("Ошибка при загрузке данных:", _0x3e438e);
        });
      }
    }
  });

  Lampa.SettingsApi.addParam({
    'component': 'acc',
    'param': {'name': 'sync_reset', 'type': "static"},
    'field': {'name': "Сброс данных синхронизации", 'description': "Внимание !!! После нажатия ваши синхронизированные данные будут удалены"},
    'onRender': function(_0x5e64f2) {
      _0x5e64f2.on("hover:enter", function() {
        var _0x2e22b7 = localStorage.getItem("token");
        var _0x27e69b = "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x2e22b7);
        var _0x5556c9 = new XMLHttpRequest();
        _0x5556c9.open('DELETE', _0x27e69b);
        _0x5556c9.onload = function() {
          if (_0x5556c9.status === 200) {
            Lampa.Noty.show("Данные синхронизации удалены");
          } else {
            console.error("Ошибка при удалении данных синхронизации:", _0x5556c9.statusText);
            Lampa.Noty.show("Ошибка при удалении или данные отсутствуют");
          }
        };
        _0x5556c9.onerror = function() {
          console.error("Ошибка при удалении данных синхронизации:", _0x5556c9.statusText);
          Lampa.Noty.show("Ошибка при удалении или данные отсутствуют");
        };
        _0x5556c9.send();
      });
    }
  });
})();
