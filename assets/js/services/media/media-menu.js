var config = {
    API_URL: 'http://api.propertysolutions.com.br/api',
    HEADERS: {
        'Access-Control-Allow-Headers': '*',
        'Accept': '*',
        'Content-Type': 'application/json'
    }
}


function preview(text) {
    var preview = text;

    if (preview.lenght > 115) {
        preview = preview.subStr(0, 155) + '...';
    }

    return preview;
}


function renderOne($new) {
    return (
        '<div class="data-single-container col-md-3 col-sm-4 col-xs-12">' +
        '<div class="data-single">' +
        '<h6>' + $new.title + '</h6>' +
        '<h5><a href="#">' + preview($new.text) + '</a></h5>' +
        '</div>' +
        '</div>');
}


function renderData(news, $dataCarousel) {

    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function () {

        news.forEach(function ($new) {

            $dataCarousel.append(renderOne($new));

        });

    });

}


function injectionData() {
    var type = $('.content-type.active').attr('id');
    var url = config.API_URL + '/contents/' + type;

    $dataCarousel = $('#dataLoad');
    $dataCarousel.html('');

    try {

        $.get(url, function (data) {

            var $data = data.data;
            renderData($data, $dataCarousel);

        })
        .fail(function () {
            $dataCarousel.html('<div id="no-data">Nenhum resultado encontrado</div>');

        });

    } catch (error) {

    }

}


function toogleMenu(current) {
    $('.content-type').removeClass('active');
    $(current).addClass('active');
}


$(document).ready(function () {

    $.ajaxSetup({
        headers: config.HEADERS
    });

    injectionData();

    $('.content-type').on('click', function () {

        toogleMenu(this);
        injectionData();
    });

});