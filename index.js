let arsFC = {};

arsFC.nameOfFootbalClub = "Arsenal FC";
arsFC.founded= 1886;
arsFC.country = "England";
arsFC.nickname = "The Gunners";
arsFC.ground = "Emirates Stadium";
arsFC.capacity = 60704;
arsFC.owner = "Kroenke Sports & Entertainment";
arsFC.manager = "Mikel Arteta";
arsFC.league = "Premier League";




console.log(arsFC);

const FC  = {
    nameOfFootbalClub:"Chelsea FC",
    founded:1905,
    country:"England",
    nickname:"The Blues",
    ground:"Stamford Bridge",
    capacity: 40341,
    owner: "Blueco 22 Limited",
    headCoach: "Graham Potter",
    league: "Premier League",
    isTheBestClubInEurope:  false
}

FC.location = "London";
FC.chairman	= "Todd Boehly";

delete FC.chairman;
// delete FC.headCoach;
FC.headCoach = "Tomas Tuchel";

console.log(FC);

let vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "M5";
vehicle.model = "M7";
delete vehicle.model;


let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);