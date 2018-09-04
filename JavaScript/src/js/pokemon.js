class Pokemon{
    constructor(name, tipo, attack,defense){
        this._name = name;
        this._tipo = tipo;
        this._attack = attack;
        this._defense = defense;
    }

    get name() {
        return this._name;
    }
    
    get tipo() {
        return this._tipo;
    }

    get attack(){
        return this._attack;
    }

    get defense(){
        return this._defense;
    }
}

function defineEffectiveness(typeFirstPokemon, typeSecondPokemon){
    var valueEffentiveness = {
        "fire": function (){
            if(typeSecondPokemon === "grass"){
                return 2;
            }else if(typeSecondPokemon === "water"){
                return 0.5;
            }else if(typeSecondPokemon === "electric"){
                return 1;
            }else{
                return 0.5;
            }
        },
        "grass": function (){
            if(typeSecondPokemon === "fire"){
                return 0.5;
            }else if(typeSecondPokemon === "water"){
                return 2;
            }else if(typeSecondPokemon === "electric"){
                return 1;
            }else{
                return 0.5;
            }
        },
        "water": function (){
            if(typeSecondPokemon === "grass"){
                return 0.5;
            }else if(typeSecondPokemon === "fire"){
                return 2;
            }else if(typeSecondPokemon === "electric"){
                return 0.5;
            }else{
                return 0.5;
            }
        },
        "electric": function (){
            if(typeSecondPokemon === "grass"){
                return 1;
            }else if(typeSecondPokemon === "water"){
                return 2;
            }else if(typeSecondPokemon === "fire"){
                return 1;
            }else{
                return 0.5;
            }
        }
    };
    return valueEffentiveness[typeFirstPokemon]();
}

function damage(pokemon1, pokemon2){
    let damage = 50 * (pokemon1.attack / pokemon2.defense) * defineEffectiveness(pokemon1.tipo, pokemon2.tipo);
    return Math.floor(damage);
}

function mainFunction(){
    const pokemonFire = new Pokemon("1", "fire", Math.random()*100,Math.random()*80);
    const pokemonGrass = new Pokemon("2", "grass", Math.random()*100,Math.random()*80);
    const pokemonWater = new Pokemon("3", "water", Math.random()*100,Math.random()*80);
    const pokemonElectric = new Pokemon("4", "electric", Math.random()*100,Math.random()*80);

    console.log(`\nFire attack ${pokemonFire.attack} defense ${pokemonFire.defense}`);
    console.log(`Grass attack ${pokemonGrass.attack} defense ${pokemonGrass.defense}`);
    console.log(`Water attack ${pokemonWater.attack} defense ${pokemonWater.defense}`);
    console.log(`Electric attack ${pokemonElectric.attack} defense ${pokemonElectric.defense}`);
    console.log(`\n\n\nDamage: ${damage(pokemonGrass, pokemonWater)}\n`);
}

mainFunction();