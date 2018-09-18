
var data = {
    "companies": [{
            "name": "Chuck Norris' Bodyguards",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
            "rate": "500",
            "hours": "8",
            "isCertified": true,
            "image": "https://gdurl.com/BW3g"
        },
        {
            "name": "Power Rangers Squad",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            "rate": "100",
            "hours": "12",
            "isCertified": false,
            "image": "https://gdurl.com/rcnX"
        },
        {
            "name": "Kame Security Ltda.",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            "rate": "150",
            "hours": "10",
            "isCertified": false,
            "image": "https://gdurl.com/V1w0"
        },
        {
            "name": "Capsule Corp.",
            "description": "Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas.",
            "rate": "125",
            "hours": "12",
            "isCertified": true,
            "image": "https://gdurl.com/vycp"
        },
        {
            "name": "Raptor Squad",
            "description": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.",
            "rate": "225",
            "hours": "8",
            "isCertified": false,
            "image": "https://gdurl.com/jej2"
        },
        {
            "name": "Donuts Security",
            "description": "Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia.",
            "rate": "50",
            "hours": "12",
            "isCertified": false,
            "image": "https://gdurl.com/9xia"
        },
        {
            "name": "S.H.I.E.L.D",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
            "rate": "250",
            "hours": "12",
            "isCertified": false,
            "image": "https://gdurl.com/JwFZ"
        }
    ]
    };

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

show(data);    

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
var $ = URL("https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.2/mustache.min.js");
function show(dataJ) {
    var templateX = $('#template').html();
    var html = Mustache.to_html(templateX, dataJ);
    $('#p').html(html);
}

