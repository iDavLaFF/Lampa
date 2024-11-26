(function () {
    'use strict';

    Lampa.Utils.putScriptAsync([
        'http://cub.red/plugin/tmdb-proxy',
        'http://cub.red/plugin/tracks',
        'https://idavlaff.github.io/lampa/plugins/timecode.js',
        'https://lampame.github.io/main/pubtorr/pubtorr.js',
        'https://lampame.github.io/main/nc/nc.js',
 /* Off 'KPrating' ! don't work with 'cardify', need update.
        'https://nb557.github.io/plugins/rating.js', */
        'https://idavlaff.github.io/lampa/plugins/interfacify.js',
/* Combine 'interface' & 'cardify' plugins => 'interfacify' ! 'cardify' without trailers, only interface beauty. 
        'https://idavlaff.github.io/lampa/plugins/interface.js',
        'https://idavlaff.github.io/lampa/plugins/cardify.js', */
        'https://idavlaff.github.io/lampa/plugins/inquality.js',
        'https://idavlaff.github.io/lampa/plugins/cuboff.js'
    ], function () { });

})();
