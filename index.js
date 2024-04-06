class herosOfThalassia {
    constructor(name, age, type, power, animal){
        this.name = name;
        this.age = age;
        this.type = type;
        this.power = power;
        this.animal = animal;
    }
}

let heroes = [
    new herosOfThalassia("Prince Jurihan", "308 years Thalassians", "Celestial Warrior", "Primor Power", "Phoenix/Lion"),
    new herosOfThalassia("Lady Evora", "162 years Thalassians", "Royal Archer", "Ancestral Bow", "Tiger"),
    new herosOfThalassia("Sir Aldric", "327 years Thalassians", "Royal Warrior", "Vulcian Steel", "Wolf"),
    new herosOfThalassia("Lord Dallas", "414 years Thalassians", "Magus of Critonya", "3 Fingers", "Black Dragon")
];

heroes.forEach(hero => {
    console.log(`The ${hero.name} of ${hero.age} is a ${hero.type} and has the power of ${hero.power}. And follow
    as a cosmic animal ${hero.animal}.`);
});