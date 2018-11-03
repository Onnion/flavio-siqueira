var config = {
    API_URL: 'http://api.propertysolutions.com.br/api',
    HEADERS: {
        'Access-Control-Allow-Headers': '*',
        'Accept': '*',
        'Content-Type': 'application/json'
    }
}


function initNewsCarousel() {
    
    $('#news-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


}


function preview(text) {
    var preview = text;

    if (preview.lenght > 115) {
        preview = preview.subStr(0,155) + '...';
    }

    return preview;
}


function renderNew($new) {
    return (
        '<div class="text-center">'+
            '<div class="blog-single">'+
                '<h6>' + $new.title + '</h6>'+
                '<h5><a href="#">' + preview($new.text) + '</a></h5>'+
            '</div>'+
        '</div>');
}


function renderNews(news, $newsCarousel) {

    [1,2,3,4,5].forEach(function() {

        news.forEach(function($new) {
       
            $newsCarousel.append(renderNew($new));
            
        });
        
    });

    initNewsCarousel();

}


function injectionNews() {
    var url = config.API_URL + '/contents/news';
    var $newsCarousel = $('#news-carousel');

    $.get(url, function (data) {
        var news = data.data;

        renderNews(news, $newsCarousel);
    })

}


$(document).ready(function () {

    $.ajaxSetup({
        headers: config.HEADERS
    });

    injectionNews();

});