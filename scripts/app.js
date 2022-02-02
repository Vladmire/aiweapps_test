let parse = document.getElementById('parse'),
    show = document.getElementById('show'),
    requestURL = 'https://api.coingecko.com/api/v3/global',
    request = new XMLHttpRequest(),
    data;

    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        data = request.response;
        data = JSON.parse(data);
    };
parse.onclick = function () {
    let mkp = data.data.market_cap_percentage,
        db = new Object(),
        size = Object.keys(mkp).length;

    for (let i in mkp) {
        let criptoName;
        if (mkp.hasOwnProperty(i)) {
            criptoName = i;
        }
        db[criptoName] = mkp[i];
    }
};





show.onclick = function () {
    let table = document.createElement('table'),
        thead = document.createElement('thead'),
        tbody = document.createElement('tbody'),
        th = document.createElement('th'),
        tr = document.createElement('tr'),
        td = document.createElement('td');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    tbody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td);

    document.getElementById('body').appendChild(table);


    
};