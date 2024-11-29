(function () {
  'use strict';

  Lampa.Platform.tv();
    (function _0x5899e5() {
      var _0xd2fa00 = $("<div class=\"myBot\" style=\"line-height: 1;color: #ffffff;font-family: &quot;SegoeUI&quot;, sans-serif;font-size: 1em;box-sizing: border-box;outline: none;user-select: none;display: flex;-webkit-box-align: start;align-items: flex-start;position: relative;background-color: rgba(255, 255, 255, 0.1);border-radius: 0.3em;margin: 1.5em 2em;\"><div class=\"ad-server__text\">Для получения токена перейдите в наш телеграм бот</div><div class=\"ad-server__label\">@bylampa_sync_bot</div><img src=\"http://bylampa.online/img/qr_sync.png\" class=\"ad-server__qr\"></div>");
      var _0x319723 = {
        component: 'acc',
        name: 'Аккаунт',
        icon: "<svg fill=\"#ffffff\" width=\"256px\" height=\"256px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <title>user</title> <path d=\"M16 17.25c4.556 0 8.25-3.694 8.25-8.25s-3.694-8.25-8.25-8.25c-4.556 0-8.25 3.694-8.25 8.25v0c0.005 4.554 3.696 8.245 8.249 8.25h0.001zM16 3.25c3.176 0 5.75 2.574 5.75 5.75s-2.574 5.75-5.75 5.75c-3.176 0-5.75-2.574-5.75-5.75v0c0.004-3.174 2.576-5.746 5.75-5.75h0zM30.898 29.734c-1.554-6.904-7.633-11.984-14.899-11.984s-13.345 5.080-14.88 11.882l-0.019 0.102c-0.018 0.080-0.029 0.172-0.029 0.266 0 0.69 0.56 1.25 1.25 1.25 0.596 0 1.095-0.418 1.22-0.976l0.002-0.008c1.301-5.77 6.383-10.016 12.457-10.016s11.155 4.245 12.44 9.93l0.016 0.085c0.126 0.566 0.623 0.984 1.219 0.984h0c0 0 0 0 0 0 0.095 0 0.187-0.011 0.276-0.031l-0.008 0.002c0.567-0.125 0.984-0.623 0.984-1.219 0-0.095-0.011-0.187-0.031-0.276l0.002 0.008z\"></path> </g></svg>"
      };
      Lampa.SettingsApi.addComponent(_0x319723);
      Lampa.Settings.listener.follow("open", function (_0x3beec7) {
        setTimeout(function () {
          $("div[data-component=interface]").before($("div[data-component=acc]"));
        }, 30);
        if (_0x3beec7.name == "acc") {
          $("div[data-name=\"acc_auth\"]").before(_0xd2fa00);
          if (localStorage.getItem("token") !== null) {
            $("div[data-name=\"acc_auth\"]").hide();
            var _0x5ac3ae = document.querySelector("#app > div.settings > div.settings__content.layer--height > div.settings__body > div > div > div > div > div:nth-child(5)");
            Lampa.Controller.focus(_0x5ac3ae);
            Lampa.Controller.toggle("settings_component");
          } else {
            $("div > span:contains(\"Аккаунт\")").hide();
            $(".settings-param > div:contains(\"Выйти\")").parent().hide();
          }
        }
      });
      var _0x1414dd = {
        name: "acc_title_auth",
        type: "title"
      };
      var _0x22a280 = {
        name: "Авторизация",
        description: ''
      };
      var _0x511c9b = {
        component: "acc",
        param: _0x1414dd,
        field: _0x22a280
      };
      Lampa.SettingsApi.addParam(_0x511c9b);
      Lampa.SettingsApi.addParam({
        'component': 'acc',
        'param': {
          'name': "acc_auth",
          'type': 'input',
          'values': '',
          'placeholder': "Нужно будет ввести токен",
          'default': ''
        },
        'field': {
          'name': "Выполнить вход",
          'description': ''
        },
        'onChange': function (_0x1055cd) {
          console.log("Введенный токен:", _0x1055cd);
          var _0x3afb14 = new XMLHttpRequest();
          _0x3afb14.open("POST", "http://212.113.103.137:3003/checkToken", true);
          _0x3afb14.setRequestHeader("Content-Type", "application/json");
          _0x3afb14.onreadystatechange = function () {
            if (_0x3afb14.readyState === 4 && _0x3afb14.status === 200) {
              var _0x55baad = JSON.parse(_0x3afb14.responseText);
              console.log("Ответ сервера:", _0x55baad);
              if (_0x55baad.userId) {
                console.log("Токен действителен");
                localStorage.setItem("token", _0x1055cd);
                Lampa.Noty.show("Токен действителен");
                Lampa.Settings.update();
              } else {
                console.log("Токен недействителен");
                localStorage.removeItem("token");
                Lampa.Noty.show("Токен недействителен");
              }
            } else {
              Lampa.Noty.show("Ошибка запроса");
            }
          };
          var _0x565876 = {
            token: _0x1055cd
          };
          _0x3afb14.send(JSON.stringify(_0x565876));
        }
      });
      var _0x319218 = {
        component: 'acc',
        param: {},
        field: {}
      };
      _0x319218.param.name = "acc_status";
      _0x319218.param.type = "title";
      _0x319218.field.name = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:1.3em;height:1.3em;padding-right:.1em\"><!-- icon666.com - MILLIONS vector ICONS FREE --><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><path style=\"fill:#1E0478;\" d=\"M334.975,0c95.414,0,173.046,77.632,173.046,173.046c0,95.426-77.632,173.046-173.046,173.046 c-21.224,0-41.843-3.771-61.415-11.224l-40.128,40.128c-2.358,2.358-5.574,3.695-8.916,3.695h-27.139v27.126 c0,6.974-5.65,12.611-12.611,12.611h-12.359v12.359c0,6.974-5.65,12.611-12.611,12.611h-30.833v30.884 c0,3.342-1.337,6.558-3.708,8.916l-25.146,25.108C97.753,510.676,94.55,512,91.208,512H16.59c-6.961,0-12.611-5.65-12.611-12.611 v-90.546c0-3.342,1.337-6.558,3.695-8.916l165.467-165.479c-7.44-19.572-11.211-40.191-11.211-61.402 C161.929,77.632,239.549,0,334.975,0z M482.8,173.046c0-81.504-66.32-147.824-147.824-147.824 c-81.516,0-147.824,66.32-147.824,147.824c0,20.644,4.162,40.607,12.371,59.334c2.131,4.843,0.958,10.303-2.522,13.872 c-0.038,0.038-0.063,0.076-0.101,0.113L29.2,414.064v22.788l138.089-138.089c4.439-4.426,11.615-4.426,16.054,0 c4.426,4.439,4.426,11.615,0,16.054L29.2,468.959v17.819h56.787l17.756-17.731v-38.261c0-6.961,5.65-12.611,12.611-12.611h30.833 v-12.359c0-6.961,5.65-12.611,12.611-12.611h12.359V366.08c0-6.974,5.65-12.611,12.611-12.611h34.528l42.347-42.36 c0.038-0.038,0.076-0.063,0.113-0.101c3.581-3.481,9.029-4.653,13.872-2.522c18.74,8.222,38.703,12.384,59.347,12.384 C416.479,320.87,482.8,254.562,482.8,173.046z\"/><path style=\"fill:#9B8CCC;\" d=\"M334.975,25.222c81.504,0,147.824,66.32,147.824,147.824c0,81.516-66.32,147.824-147.824,147.824 c-20.644,0-40.607-4.162-59.347-12.384c-4.843-2.131-10.29-0.958-13.872,2.522c-0.038,0.038-0.076,0.063-0.113,0.101l-42.347,42.36 h-34.528c-6.961,0-12.611,5.637-12.611,12.611v27.126h-12.359c-6.961,0-12.611,5.65-12.611,12.611v12.359h-30.833 c-6.961,0-12.611,5.65-12.611,12.611v38.261l-17.756,17.731H29.2v-17.819l154.142-154.142c4.426-4.439,4.426-11.615,0-16.054 c-4.439-4.426-11.615-4.426-16.054,0L29.2,436.852v-22.788l167.699-167.699c0.038-0.038,0.063-0.076,0.101-0.113 c3.481-3.569,4.653-9.029,2.522-13.872c-8.21-18.727-12.371-38.69-12.371-59.334C187.151,91.542,253.459,25.222,334.975,25.222z M434.866,120.383c0-26.041-21.186-47.24-47.228-47.24c-26.054,0-47.24,21.199-47.24,47.24s21.186,47.24,47.24,47.24 C413.68,167.623,434.866,146.424,434.866,120.383z\"/><path style=\"fill:#1E0478;\" d=\"M387.638,73.143c26.041,0,47.228,21.199,47.228,47.24s-21.186,47.24-47.228,47.24 c-26.054,0-47.24-21.199-47.24-47.24S361.584,73.143,387.638,73.143z M409.644,120.383c0-12.144-9.874-22.019-22.006-22.019 c-12.144,0-22.018,9.874-22.018,22.019s9.874,22.019,22.018,22.019C399.77,142.402,409.644,132.527,409.644,120.383z\"/><path style=\"fill:#FFFFFF;\" d=\"M387.638,98.365c12.132,0,22.006,9.874,22.006,22.019s-9.874,22.019-22.006,22.019 c-12.144,0-22.019-9.874-22.019-22.019S375.494,98.365,387.638,98.365z\"/></svg></div><div style=\"font-size:1.1em\"><div style=\"padding: 0.3em 0.3em; padding-top: 0;\"><div style=\"background: #d99821; padding: 0.5em; border-radius: 0.4em;color: white;\"><div style=\"line-height: 0.3;\">Аккаунт подключен</div></div></div></div></div>";
      _0x319218.field.description = '';
      Lampa.SettingsApi.addParam(_0x319218);
      Lampa.SettingsApi.addParam({
        'component': 'acc',
        'param': {
          'name': 'acc_exit',
          'type': "static"
        },
        'field': {
          'name': "Выйти из аккаунта",
          'description': ''
        },
        'onRender': function (_0x44c0ce) {
          _0x44c0ce.on("hover:enter", function () {
            localStorage.removeItem("token");
            Lampa.Storage.set("acc_sync", false);
            Lampa.Settings.update();
          });
        }
      });
      var _0xf1fb6d = {
        name: "Синхронизация",
        description: ''
      };
      var _0x3c856a = {
        component: 'acc',
        param: {},
        field: _0xf1fb6d
      };
      _0x3c856a.param.name = "acc_title_sync";
      _0x3c856a.param.type = "title";
      Lampa.SettingsApi.addParam(_0x3c856a);
      Lampa.SettingsApi.addParam({
        'component': 'acc',
        'param': {
          'name': "acc_backup",
          'type': "static",
          'default': ''
        },
        'field': {
          'name': Lampa.Lang.translate("settings_cub_backup"),
          'description': "Бэкап всех настроек аккаунта с возможностью дальнейшего импорта на любом устройстве"
        },
        'onRender': function (_0x1299df) {
          _0x1299df.on("hover:enter", function () {
            var _0xa8f799 = localStorage.getItem("token");
            if (_0xa8f799) {
              Lampa.Select.show({
                'title': Lampa.Lang.translate("settings_cub_backup"),
                'items': [{
                  'title': Lampa.Lang.translate("settings_cub_backup_export"),
                  'export': true,
                  'selected': true
                }, {
                  'title': Lampa.Lang.translate("settings_cub_backup_import"),
                  'import': true
                }, {
                  'title': Lampa.Lang.translate("cancel")
                }],
                'onSelect': function _0x1beb68(_0x3ce5c8) {
                  if (_0x3ce5c8['export']) {
                    Lampa.Select.show({
                      'title': Lampa.Lang.translate("sure"),
                      'items': [{
                        'title': Lampa.Lang.translate("confirm"),
                        'export': true,
                        'selected': true
                      }, {
                        'title': Lampa.Lang.translate("cancel")
                      }],
                      'onSelect': function _0x47b2e8(_0x186853) {
                        if (_0x186853['export']) {
                          var _0x1d835c = "http://212.113.103.137:3003/lampa/backup/export?token=" + encodeURIComponent(_0xa8f799);
                          var _0x292747 = new File([JSON.stringify(localStorage)], "backup.json", {
                            'type': 'text/plain'
                          });
                          var _0x43474d = new FormData();
                          _0x43474d.append('file', _0x292747);
                          $.ajax({
                            'url': _0x1d835c,
                            'type': "POST",
                            'data': _0x43474d,
                            'async': true,
                            'cache': false,
                            'contentType': false,
                            'enctype': "multipart/form-data",
                            'processData': false,
                            'success': function _0x381351(_0x125d71) {
                              if (_0x125d71.result) {
                                Lampa.Noty.show(Lampa.Lang.translate("account_export_secuses"));
                              } else {
                                Lampa.Noty.show(Lampa.Lang.translate("account_export_fail"));
                              }
                            },
                            'error': function _0x4363ee() {
                              Lampa.Noty.show(Lampa.Lang.translate("account_export_fail"));
                            }
                          });
                        }
                        Lampa.Controller.toggle("settings_component");
                      },
                      'onBack': function _0x199c2c() {
                        Lampa.Controller.toggle("settings_component");
                      }
                    });
                  } else {
                    if (_0x3ce5c8["import"]) {
                      var _0x309dd1 = "http://212.113.103.137:3003/lampa/backup/import?token=" + encodeURIComponent(_0xa8f799);
                      $.ajax({
                        'url': _0x309dd1,
                        'type': "GET",
                        'async': true,
                        'cache': false,
                        'contentType': false,
                        'enctype': "application/x-www-form-urlencoded",
                        'processData': false,
                        'success': function _0x26fcfd(_0x491977) {
                          if (_0x491977.result) {
                            if (_0x491977.data) {
                              var _0x2d3541 = Lampa.Arrays.decodeJson(_0x491977.data, {});
                              var _0x427913 = Lampa.Arrays.getKeys(_0x2d3541);
                              for (var _0x218873 in _0x2d3541) {
                                localStorage.setItem(_0x218873, _0x2d3541[_0x218873]);
                              }
                              Lampa.Noty.show(Lampa.Lang.translate("account_import_secuses") + " - " + Lampa.Lang.translate("account_imported") + " (" + _0x427913.length + ") - " + Lampa.Lang.translate("account_reload_after"));
                              setTimeout(function () {
                                window.location.reload();
                              }, 5000);
                            } else {
                              Lampa.Noty.show(Lampa.Lang.translate('nodata'));
                            }
                          } else {
                            Lampa.Noty.show(Lampa.Lang.translate("account_import_fail"));
                          }
                        },
                        'error': function _0x560d1f() {
                          Lampa.Noty.show(Lampa.Lang.translate("account_import_fail"));
                        }
                      });
                      Lampa.Controller.toggle("settings_component");
                    } else {
                      Lampa.Controller.toggle("settings_component");
                    }
                  }
                },
                'onBack': function _0x4e913e() {
                  Lampa.Controller.toggle("settings_component");
                }
              });
            } else {
              Lampa.Noty.show("Вы не зашли в аккаунт");
            }
          });
        }
      });
      Lampa.SettingsApi.addParam({
        'component': 'acc',
        'param': {
          'name': "acc_sync",
          'type': "trigger",
          'default': false
        },
        'field': {
          'name': "Синхронизация данных",
          'description': "Синхронизация ваших закладок, плагинов, таймкодов, историй просмотров и поиска между устройствами"
        },
        'onChange': function (_0x4dc85a) {
          if (_0x4dc85a === "true") {
            var _0x3022d8 = localStorage.getItem("token");
            if (_0x3022d8) {
              _0x7a3803.loadDataFromServer(_0x3022d8).then(function (_0xa198cd) {
                if (_0xa198cd) {
                  _0x7a3803.updateLocalStorage(_0xa198cd);
                  Lampa.Noty.show("Приложение будет перезапущено ...");
                  setTimeout(function () {
                    window.location.reload();
                  }, 3000);
                } else {
                  console.log("Не удалось загрузить данные для синхронизации");
                }
              })["catch"](function (_0x2bb066) {
                console.log("Ошибка при загрузке данных:", _0x2bb066);
              });
            } else {
              Lampa.Noty.show("Вы не зашли в аккаунт");
              if (Lampa.Storage.field("acc_sync")) {
                Lampa.Storage.set("acc_sync", false);
                Lampa.Settings.update();
              }
            }
          }
        }
      });
      var _0x5cccdc = ["torrents_view", "plugins", "favorite", "file_view", "search_history"];
      var _0x7a3803 = {
        'timer': null,
        'needsSync': false,
        'isSyncSuccessful': false,
        'handleStorageChange': function (_0x24e03f) {
          var _0x27b5a6 = _0x24e03f.name;
          if (_0x5cccdc.indexOf(_0x27b5a6) !== -1) {
            console.log("Изменен ключ в локальном хранилище: " + _0x27b5a6);
            this.needsSync = true;
            if (this.timer) {
              clearTimeout(this.timer);
            }
            this.timer = setTimeout(function () {
              if (this.needsSync && !_0x141de9) {
                var _0x25ce06 = localStorage.getItem("token");
                if (_0x25ce06) {
                  this.startSync(_0x25ce06);
                }
                this.needsSync = false;
              }
              _0x141de9 = null;
            }.bind(this), 500);
          }
        },
        'startSync': function (_0x201aa0) {
          console.log("Запуск синхронизации...");
          this.isSyncSuccessful = false;
          this.sendDataToServer(_0x201aa0).then(function () {
            if (this.isSyncSuccessful) {
              console.log("Синхронизация успешно завершена");
            } else {
              console.log("Ошибка: Данные для синхронизации отсутствуют");
            }
            this.needsSync = false;
          }.bind(this))["catch"](function (_0x350b25) {
            console.log("Ошибка синхронизации:", _0x350b25);
            this.needsSync = true;
          }.bind(this));
        },
        'sendDataToServer': function (_0x53c3a0) {
          var _0x349838 = this.getSyncedData();
          var _0x523d48 = new FormData();
          for (var _0x5cca99 in _0x349838) {
            if (_0x349838.hasOwnProperty(_0x5cca99)) {
              _0x523d48.append(_0x5cca99, JSON.stringify(_0x349838[_0x5cca99]));
            }
          }
          _0x523d48.append("file", new Blob([JSON.stringify(_0x349838)], {
            'type': "application/json"
          }));
          return this.makeHttpRequest("POST", "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x53c3a0), _0x523d48).then(function (_0x3001ef) {
            if (_0x3001ef.status === 200) {
              this.isSyncSuccessful = true;
              return JSON.parse(_0x3001ef.responseText);
            } else {
              this.isSyncSuccessful = false;
              console.log("Ошибка при синхронизации: " + _0x3001ef.status + " - " + _0x3001ef.statusText);
            }
          }.bind(this));
        },
        'getSyncedData': function () {
          return {
            'torrents_view': Lampa.Storage.get("torrents_view", '[]'),
            'plugins': Lampa.Storage.get("plugins", '[]'),
            'favorite': Lampa.Storage.get("favorite", '{}'),
            'file_view': Lampa.Storage.get("file_view", '{}'),
            'search_history': Lampa.Storage.get("search_history", '[]')
          };
        },
        'loadDataFromServer': function (_0x34190c) {
          return this.makeHttpRequest("GET", "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x34190c)).then(function (_0x53ab5d) {
            if (_0x53ab5d.status === 200) {
              return JSON.parse(_0x53ab5d.responseText);
            } else {
              console.log("Ошибка при загрузке данных: " + _0x53ab5d.status + " - " + _0x53ab5d.statusText);
            }
          }).then(function (_0x2b321d) {
            if (_0x2b321d.success && _0x2b321d.data) {
              return _0x2b321d.data;
            } else {
              console.log("Ошибка: Данные для синхронизации отсутствуют");
              return null;
            }
          });
        },
        'makeHttpRequest': function (_0x209225, _0x2e2a95, _0x5c795d) {
          return new Promise(function (_0x37ff99, _0x48900f) {
            var _0x3ec549 = new XMLHttpRequest();
            _0x3ec549.open(_0x209225, _0x2e2a95, true);
            if (_0x209225 === 'POST') {
              _0x3ec549.send(_0x5c795d);
            } else {
              _0x3ec549.send();
            }
            _0x3ec549.onload = function () {
              if (_0x3ec549.status >= 200 && _0x3ec549.status < 300) {
                _0x37ff99(_0x3ec549);
              } else {
                _0x48900f(_0x3ec549);
              }
            };
            _0x3ec549.onerror = function () {
              _0x48900f(_0x3ec549);
            };
          });
        },
        'updateLocalStorage': function (_0x151fe2) {
          if (typeof _0x151fe2 === "undefined") {
            return;
          }
          if (typeof _0x151fe2 !== "object" || _0x151fe2 === null) {
            console.log("Ошибка: Данные для синхронизации некорректны или отсутствуют");
            return;
          }
          var _0x5ec1fe = ["torrents_view", "plugins", "favorite", "file_view", "search_history"];
          for (var _0x1df98e = 0; _0x1df98e < _0x5ec1fe.length; _0x1df98e++) {
            var _0x13a08c = _0x5ec1fe[_0x1df98e];
            if (_0x151fe2.hasOwnProperty(_0x13a08c) && (Array.isArray(_0x151fe2[_0x13a08c]) || typeof _0x151fe2[_0x13a08c] === "object")) {
              if (_0x13a08c === 'plugins') {
                var _0x12e146 = Lampa.Storage.get("plugins") || [];
                for (var _0x5dff3d = 0; _0x5dff3d < _0x151fe2[_0x13a08c].length; _0x5dff3d++) {
                  var _0x1a9a9f = _0x151fe2[_0x13a08c][_0x5dff3d];
                  var _0x57b2c6 = _0x12e146.find(function (_0x34eb3c) {
                    return _0x34eb3c.url === _0x1a9a9f.url;
                  });
                  if (!_0x57b2c6) {
                    _0x12e146.push({
                      'name': _0x1a9a9f.name || "Без названия",
                      'url': _0x1a9a9f.url,
                      'status': typeof _0x1a9a9f.status === 'number' ? _0x1a9a9f.status : 1,
                      'author': _0x1a9a9f.author || "@bylampa"
                    });
                    if (typeof _0x1a9a9f.status === "number" && _0x1a9a9f.status === 1) {
                      var _0x56ce15 = document.createElement("script");
                      _0x56ce15.src = _0x1a9a9f.url;
                      document.getElementsByTagName("head")[0].appendChild(_0x56ce15);
                    }
                  } else {
                    if (typeof _0x1a9a9f.status === 'number') {
                      if (_0x1a9a9f.status === 1 && _0x57b2c6.status !== 1) {
                        var _0x17100e = document.createElement("script");
                        _0x17100e.src = _0x1a9a9f.url;
                        document.getElementsByTagName("head")[0].appendChild(_0x17100e);
                      }
                      _0x57b2c6.status = _0x1a9a9f.status;
                    }
                  }
                }
                Lampa.Storage.set("plugins", _0x12e146);
                _0x12e146 = Lampa.Storage.get('plugins') || [];
                var _0x17acc0 = _0x12e146.filter(function (_0x29ec4f) {
                  var _0x55853a = _0x151fe2[_0x13a08c].find(function (_0x1e63f3) {
                    return _0x1e63f3.url === _0x29ec4f.url;
                  });
                  return _0x55853a === undefined;
                });
                _0x17acc0.forEach(function (_0x590f57) {
                  var _0x1807d9 = document.querySelector("script[src=\"" + _0x590f57.url + "\"]");
                  if (_0x1807d9) {
                    _0x1807d9.parentNode.removeChild(_0x1807d9);
                  }
                  var _0xcc76c7 = _0x12e146.indexOf(_0x590f57);
                  if (_0xcc76c7 !== -1) {
                    _0x12e146.splice(_0xcc76c7, 1);
                  }
                  Lampa.Storage.set('plugins', _0x12e146);
                });
              } else {
                Lampa.Storage.set(_0x13a08c, _0x151fe2[_0x13a08c]);
              }
            } else {
              console.log("Ошибка: Данные для ключа \"" + _0x13a08c + "\" некорректны");
            }
          }
        }
      };
      Lampa.Storage.listener.follow("change", function (_0x4f08fd) {
        if (Lampa.Storage.field("acc_sync")) {
          _0x7a3803.handleStorageChange(_0x4f08fd);
        }
      });
      var _0x141de9 = setInterval(function () {
        if (typeof Lampa !== "undefined") {
          clearInterval(_0x141de9);
          var _0x12baf1 = localStorage.getItem("token");
          var _0x448827 = Lampa.Storage.get("acc_sync", false);
          if (_0x12baf1 && _0x448827) {
            _0x7a3803.loadDataFromServer(_0x12baf1).then(function (_0x37dead) {
              if (_0x37dead) {
                _0x7a3803.updateLocalStorage(_0x37dead);
                _0x141de9 = true;
              } else {
                console.log("Не удалось загрузить данные для синхронизации");
              }
            })["catch"](function (_0x3e438e) {
              console.log("Ошибка при загрузке данных:", _0x3e438e);
            });
          } else {
            console.log("Вы не зашли в аккаунт или синхронизация отключена");
          }
        }
      }, 200);
      Lampa.SettingsApi.addParam({
        'component': 'acc',
        'param': {
          'name': 'sync_reset',
          'type': "static"
        },
        'field': {
          'name': "Сброс данных синхронизации",
          'description': "Внимание !!! После нажатия ваши синхронизированные данные будут удалены"
        },
        'onRender': function (_0x5e64f2) {
          _0x5e64f2.on("hover:enter", function () {
            var _0x2e22b7 = localStorage.getItem("token");
            var _0x27e69b = "http://212.113.103.137:3003/lampa/sync?token=" + encodeURIComponent(_0x2e22b7);
            var _0x5556c9 = new XMLHttpRequest();
            _0x5556c9.open('DELETE', _0x27e69b);
            _0x5556c9.onload = function () {
              if (_0x5556c9.status === 200) {
                Lampa.Noty.show("Данные синхронизации удалены");
              } else {
                console.error("Ошибка при удалении данных синхронизации:", _0x5556c9.status, _0x5556c9.statusText);
                Lampa.Noty.show("Ошибка при удалении или данные отсутствуют");
              }
            };
            _0x5556c9.onerror = function () {
              console.error("Ошибка при удалении данных синхронизации:", _0x5556c9.status, _0x5556c9.statusText);
              Lampa.Noty.show("Ошибка при удалении или данные отсутствуют");
            };
            _0x5556c9.send();
          });
        }
      });
    }
    if (window.appready) {
      _0x248c67();
    } else {
      Lampa.Listener.follow("app", function (_0x40521f) {
        if (_0x40521f.type == "ready") {
          _0x248c67();
        }
      });
    }
  })();
})();