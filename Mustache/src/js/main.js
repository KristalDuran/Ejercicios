//const Mustache = require('mustache');

var data = {};

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla===13) callPromise();
}

function promiseC() {
    return new Promise(function(resolve, reject) {
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

function callPromise(){
    var userInput = document.getElementById("input").value;
    promiseC().then(function(response) {
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
            var lis = [companieJson];
            var s = {"companies":[companieJson]};
            console.log("n " + s);
            show(s);
            return;
        }
    }
    
}

function getAgentByName(name) {
    var jsonCompañies = data;
    for (let index = 0; index < jsonCompañies["companies"].length; index++) {
        const element = jsonCompañies["companies"][index];
        if(element["name"] === name){
            return jsonCompañies["companies"][index];
        }
    }
}

function showAll(){
    show(data);
}

function show(dataJ) {
    const template = fetch('../mustache/template.mustache').then(response => response.text());
    Promise.all([dataJ,template])
    .then(response => {

        resolvedData = response[0];
        resolvedTemplate = response[1];

        Mustache.parse(resolvedTemplate);

        var output = Mustache.render(resolvedTemplate, resolvedData);

        return document.getElementById('containerId').innerHTML = output;

    }).catch(error => console.log('Unable to get all template data: ', error.message));
}

function getJson(){
    var client = new XMLHttpRequest()
    client.open("GET", "https://api.myjson.com/bins/uptto");
    client.onreadystatechange = function() { 
        data = JSON.parse(client.responseText);
        show(data); 
    }
    client.send()
}

getJson();
 
