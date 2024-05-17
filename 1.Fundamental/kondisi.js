// If Else
const bahasa = "Indonesia";

if (bahasa == "Indonesia") {
    console.log("Hallo, Apa Kabar?");
} else if(bahasa == "English") {
    console.log("Hello, what's up?");
}
else{
    console.log("xxxxxxxxxx, ????~!");
}

// Tenary Operator
const bahasa_t = "Kimoci Language";
bahasa_t == "Indonesia" ? console.log("Hallo, Apa Kabar?") : bahasa_t == "English"? console.log("Hello, what's up?") : console.log("xxxxxxxxxx, ????~!");

// Truthy dan Falsy
trutly = null
if (trutly) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Switch Case
const bahasa_s = "Indonesia";
switch (bahasa_s) {
    case "Indonesia":
        console.log("Hallo, Apa Kabar?");
        break;
    case "English":
        console.log("Hello, what's up?");
        break;
    default:
        console.log("xxxxxxxxxx, ????~!");
}