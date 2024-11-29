(function () {
    'use strict';

    Lampa.Utils.putScriptAsync([
        'https://bylampa.github.io/tmdb-proxy.js,
        'http://cub.red/plugin/tracks',
        'https://lampame.github.io/main/pubtorr/pubtorr.js',
        'https://lampame.github.io/main/nc/nc.js',
        'https://lampame.github.io/main/its/its.js',
 /* Off 'KPrating' ! don't work with 'cardify', need update.
        'https://nb557.github.io/plugins/rating.js', */
        'https://idavlaff.github.io/lampa/plugins/timecode.js',
        'https://idavlaff.github.io/lampa/plugins/beautify.js',
/* Combine 'interface' & 'cardify' plugins => 'beautify' ! 'cardify' without trailers, only cards beauty. 
        'https://idavlaff.github.io/lampa/plugins/interface.js',
        'https://idavlaff.github.io/lampa/plugins/cardify.js', */
        'https://idavlaff.github.io/lampa/plugins/new4k.js'
    ], function () { });

})();
