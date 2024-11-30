(function () {
    'use strict';

    Lampa.Utils.putScriptAsync([
// @CUB thanks for all yout work
        'http://cub.red/plugin/tmdb-proxy',
        'http://cub.red/plugin/tracks',
// @LME thanks. Public parsers
        'https://lampame.github.io/main/pubtorr/pubtorr.js',
// @LME thanks. new categories & collection button for 'franchises'
        'https://lampame.github.io/main/nc/nc.js',
// @LME thanks. torrents to Infuse saver (iOS/macOS). !NB 'Save all' need 'shortcut': https://www.icloud.com/shortcuts/406d7f6bdfcf466da153a38dea6bb663 
        'https://lampame.github.io/main/its/its.js',
// @NB557 thanks. 'KPrating.plugin' !NB Need update 'cause not work with 'cardify'
        'https://nb557.github.io/plugins/rating.js',
        'https://idavlaff.github.io/lampa/plugins/timecode.js',
// @CUB.RED thanks. Combine 'interface' & 'cardify' plugins => 'beautify' !NB 'cardify' without trailers, only cards beauty.
        'https://idavlaff.github.io/lampa/plugins/beautify.js',
// Add new category "4K releases"
        'https://idavlaff.github.io/lampa/plugins/new4k.js'
    ], function () { });

})();
