let parse = document.getElementById('parse'),
    show = document.getElementById('show'),
    requestURL = 'https://api.coingecko.com/api/v3/global',
    request = new XMLHttpRequest(),
    data;

parse.onclick = function () {
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        data = request.response;
        data = JSON.parse(data);
    };
    console.log(data);
};
show.onclick = function () {
    alert('!');
};