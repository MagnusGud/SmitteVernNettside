// DOM-elementer
var kart = document.getElementById('kart').paths;          
var totaltS = document.getElementById('totaltS');
var nyeS = document.getElementById('nyeS');
var per100kS = document.getElementById('per100kS');


// Objekter med byinfo
var fylkesinfo = [
    {TotaltS: "1 362", NyeS: "6", Per100kS: "50,6"},
];

// Gir tilbake info utifra byen du har trykket på
for (var i = 0; i < 10; i++) {
    // Kopler område med riktig info
    kart[i].b = fylkesinfo[i];
    
    kart[i].onclick = function(evt){ 
        event.preventDefault();
        //Viser info til valgte byen
        totaltS.innerHTML = this.b.TotaltS;
        nyeS.innerHTML = this.b.NyeS;
        per100kS.innerHTML = this.b.Per100kS;
    }
} 
