let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

document.querySelector("#host-name").innerHTML = 'Jane'
document.querySelector("#collaborator-name").innerHTML = 'Kate'



// Question 2
// You can also create their own CSS classes in style.css file and use that. 

let instructionButton = document.querySelector("#instruction_button") //the where
instructionButton.querySelectorAll(".question").addEventListener("click", hideQuestions) //then when and the what (on click, we run the hideQuestions function)

function hideQuestions () {
    console.log(this);
    // get all the questions
    let setOfQuestions = document.querySelectorAll(".question"); // going to get us all of the questions (class name of question), gives us an array
     // this is ran only if youre questions are displayed to you
    if (this.innterHTML === "Hide Instructions") { //refers to the element on which the event occured (variable in JS) //if my label of the button sayd "Hide INstrcutions"
        for (let question of setOfQuestions) { // for indiv. question in the set of questions ()
            question.style.display = "none"; // make the question go away
            this.innerHTML = "Show Instructions"; //I'm going to change the html to Show Instructions
        }
    // when your questions are hidden, it will change their display to default (block), then update the label again
     } else {
        for (let question of setOfQuestions) {
            question.style.display = "block";
            this.innerHTML = "Hide Instructions";
        }
     }
}

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8





//Question 9 

