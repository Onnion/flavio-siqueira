var order = [
    'header'
];

function readTextFile(path) {    
    fetch('components/' + path + '/' + path + '.html')
    .then(response => response.text())
    .then(text => console.log(text))
};

$('document').ready(function() {
    order.forEach(component => {
        readTextFile(component);
    });
});