(function () {
    'use strict';

    const overrideCheckPremium = () => {
        if (typeof window.checkPremium === 'function') {
            // Перезаписываем её
            window.checkPremium = function () {
                console.log('Перезаписанная checkPremium вызвана');
                return 1; // Всегда возвращаем 1
            };
        } else {
            console.error('Функция checkPremium не найдена!');
        }
    };

    function cub_off() {

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'account') {
                setTimeout(function () {
                    $('.settings--account-premium').remove()
                    $('div > span:contains("CUB Premium")').remove()
                }, 0);
            }
        });

    if (window.appready) cub_off();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') {
                cub_off();
            }
        });
    }
    }
})();
