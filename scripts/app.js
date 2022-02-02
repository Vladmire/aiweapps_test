let parse = document.getElementById('parse'),
    show = document.getElementById('show'),
    requestURL = 'https://api.coingecko.com/api/v3/global',
    request = new XMLHttpRequest(),
    data,
    db = new Object(),
    criptoName;

    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        data = request.response;
        data = JSON.parse(data);
    };
parse.onclick = function () {
    let mkp = data.data.market_cap_percentage,
        size = Object.keys(mkp).length;
        

    for (let i in mkp) {
        
        if (mkp.hasOwnProperty(i)) {
            criptoName = i;
        }
        db[criptoName] = mkp[i];
    }
};





show.onclick = function () {
    let table = document.createElement('table'),
        tbody = document.createElement('tbody'),
        th = document.createElement('th'),
        tr = document.createElement('tr'),
        td = document.createElement('td');
        //text = document.createTextNode()

    

    for (let i in db) {
        console.log(i);
        tbody.appendChild(tr);
        tr.appendChild(th);
        th.innerHTML = criptoName;
        tr.appendChild(td);
        td.innerHTML = db[criptoName];
    }
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
};