let parse = document.getElementById('parse'),
    show = document.getElementById('show'),
    request = new XMLHttpRequest();
    
    
request.open('GET', 'https://api.coingecko.com/api/v3/global');
request.responseType = 'text';
parse.onclick =  function() {
    console.log('!')
};
show.onclick = function() {
    alert('!');
};