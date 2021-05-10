var myAge = 30;
var myName = "Job";
var myName = "Malu";
var totalAmount = 35;


if (myAge >= 18 && myAge <= 25) {
    console.log("Je bent tussen de 18 en de 25 jaar en krijgt 50% korting");
}

else {
    console.log("Jouw leeftijd komt niet in aanmerking voor de korting");
}


if (myName === "Bram" || myName === "Sarah" ) {
    console.log("Yes, jij heet Sarah of Bram en krijgt een gratis biertje");
}

else {
    console.log("Jij mag een ook biertje maar betaalt hier €1,50 voor");
}


if (totalAmount >= 25) {
    console.log("Je bestelt voor minimaal 25 euro aan drank en krijgt daarom een portie bitterballen van het huis!");
}
 
else {
    console.log("Sorry, het totaal bedrag van je bestelling is te laag om gratis bitterballen te ontvangen");

}

if (totalAmount >= 50) {
    console.log("Je bestelt voor minimaal 50 euro aan drank en krijgt daarom een portie Nachos van het huis!");
}
 
else {
    console.log("Sorry, het totaal bedrag van je bestelling is te laag om gratis NACHOS te ontvangen");

}

if (totalAmount >= 100) {
    console.log("Je bestelt voor minimaal 100 euro aan drank en krijgt daarom een flesje Champagne van het huis!");
}
 
else {
    console.log("Sorry, het totaal bedrag van je bestelling is te laag om flesje Champagne te ontvangen");

}