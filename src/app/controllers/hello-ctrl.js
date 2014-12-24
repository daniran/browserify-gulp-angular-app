/* @ngInject */
module.exports = function HelloCtrl($http, FlickrService) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = 'forest';
    vm.size = 'm';

    vm.search = function () {
        FlickrService.search({ tags: vm.tags }, function (resource) {
            vm.photos = resource.photos.photo;
        });
    };

    vm.search();
};
