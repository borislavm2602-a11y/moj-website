let ime = "Nikola";
console.log(`zdravo ${ime}`);




//mini baza//
const kartice = [{
    naslov: "ovo je prvi naslov",
    tekst: "ovo je tekst",
    dugme: "Klikni na prvu karticu"
}, {
    naslov: "ovo je drugi naslov",
    tekst: "ovo je tekst",
    dugme: "Klikni na drugu karticu"
},
{
    naslov: "ovo je prvi naslov",
    tekst: "ovo je tekst",
    dugme: "Klikni na prvu karticu"

}, {
    naslov: "ovo je prvi naslov",
    tekst: "ovo je tekst",
    dugme: "Klikni na prvu karticu"
}];

kartice.forEach(function (kartice) {
    const okvir = document.querySelector(".kartica-okvir");


    let html = `<div class="kartica">
                <h2 class="kartica-naslov">${kartice.naslov}</h2>
                <p class="kartica-paragraf">${kartice.tekst}</p>
                <button class="kartica-dugme">${kartice.dugme}</button>
            </div`;


    okvir.innerHTML += html;


});