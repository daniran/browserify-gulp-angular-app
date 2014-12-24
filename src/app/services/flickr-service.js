/* @ngInject */
module.exports = function FlickService($resource, FlickrApiKey) {
    'use strict';

    return $resource('https://api.flickr.com/services/rest/',
        {
            format: 'json',
            api_key: FlickrApiKey,
            nojsoncallback: 1
        },
        {
            'search': {
                method: 'GET',
                params: {
                    method: 'flickr.photos.search'
                }
            }
        }
    );

};
