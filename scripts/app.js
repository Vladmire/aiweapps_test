let parse = document.getElementById('parse'),
    show = document.getElementById('show'),
    requestURL = 'https://api.coingecko.com/api/v3/global', //request to api
    request = new XMLHttpRequest(), // using XMLHttp api for making request
    data,              // data from api
    db = new Object(), // create data base   
    criptoName;
//get data from api
    request.open('GET', requestURL); 
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        data = request.response;
        data = JSON.parse(data);
    };
//load data to db by clicking button
parse.onclick = function () {     
    let mkp = data.data.market_cap_percentage; 

    for (let i in mkp) {
        
        if (mkp.hasOwnProperty(i)) {
            criptoName = i;
        }
        db[criptoName] = mkp[i];
    }
};





show.onclick = function () {
    let mkp = data.data.market_cap_percentage,
        size = Object.keys(mkp).length,
        table = document.createElement('table'),
        tbody = document.createElement('tbody'),
        tr = [],
        th = [],
        td = [];
    // create a table 
    for (let i=0; i<size; i++) {
        tr[i] = document.createElement('tr');
        th[i] = document.createElement('th');
        td[i] = document.createElement('td');
    
        tr[i].appendChild(th[i]);
        tr[i].appendChild(td[i]);
        tbody.appendChild(tr[i]);
    }
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
    //fill the table
    let i = 0;
    for (let j in db) {
        
        if (db.hasOwnProperty(j)) {
            th[i].innerHTML = j;
            td[i].innerHTML = db[j];
            i++;
        }
    }
};