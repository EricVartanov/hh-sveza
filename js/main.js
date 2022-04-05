'use strict'

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}


document.onreadystatechange = function() {
    window.addEventListener('resize', function() {
        banner_resize();
    });
    banner_resize();
}