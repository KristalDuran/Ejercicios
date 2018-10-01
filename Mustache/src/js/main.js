//const Mustache = require('mustache');

var data = {};
const URL_JSON = "https://api.myjson.com/bins/uptto";

function getKeyPress(e) {
    key = (document.all) ? e.keyCode : e.which;
    if (key===13) getAgentsByInput();
}

function getPromiseAction() {
    return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', "",true);
    request.onload = function() {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(Error("Error"));
        }
    };
    request.onerror = function() {
        reject(Error('There was a network error.'));
    };
    request.send();
    });
}

function getAgentsByInput(){
    var userInput = document.getElementById("input").value;
    getPromiseAction().then(function(response) {
        showEspecificInfo(userInput);
    }, function(Error) {
        console.log(Error);
        show(data);
    });
}

function showEspecificInfo(userInput){
    if (userInput !== "") {
        var companieJson = getAgentByName(userInput);
        if(companieJson !== undefined){
            var listCompanies = {"companies":[companieJson]};
            show(listCompanies);
            return;
        }
    }
    
}

function getAgentByName(name) {
    
    for (let index = 0; index < data["companies"].length; index++) {
        const element = data["companies"][index];
        if(element["name"] === name){
            return data["companies"][index];
        }
    }
}

function show(dataJ) {
    const template = fetch('../mustache/template.mustache').then(function(response) { return response.text()});
    Promise.all([dataJ,template])
    .then(response => {

        resolvedData = response[0];
        resolvedTemplate = response[1];

        Mustache.parse(resolvedTemplate);

        var output = Mustache.render(resolvedTemplate, resolvedData);

        document.getElementById('containerId').innerHTML = output;

    }).catch(error => console.log('Unable to get all template data: ', error.message));
}

function getJson(){
    var client = new XMLHttpRequest()
    client.open("GET", URL_JSON);
    client.onreadystatechange = function() { 
        data = JSON.parse(client.responseText);
        show(data); 
    }
    client.send()
}

getJson();

document.getElementById("lens").onclick = function() {
    getAgentsByInput();
};

document.getElementById("input").onkeypress = function(event){
    getKeyPress(event);
};

document.getElementById("menu-agents").onclick = function() {
    show(data);
};
