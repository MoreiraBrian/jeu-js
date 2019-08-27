const cases = document.querySelectorAll(".case");
const joueur = document.querySelector("p");
let i = 0;
let X = 0;
let Y = 0;
let E = 0;

function tour() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

function afficher(gagnant) {
    alert(`${gagnant} a gagner!`)
    cases.forEach(el => el.innerHTML = "");
    i = 0;
    joueur.innerHTML = 'Au joueur X de jouer.';
}

function tourj() {
    if (joueur.innerHTML === 'Au joueur X de jouer.') {
        joueur.innerHTML = "Au joueur O de jouer."
    } else if (joueur.innerHTML === 'Au joueur O de jouer.') {
        joueur.innerHTML = "Au joueur X de jouer."
    }
}

function gagner() {
    if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        setTimeout("afficher(cases[0].innerHTML)", 200);
    } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        setTimeout("afficher(cases[3].innerHTML)", 200);
    } else if (cases[6].innerHTML !== "" && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        setTimeout("afficher(cases[6].innerHTML)", 200);
    } else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        setTimeout("afficher(cases[0].innerHTML)", 200);
    } else if (cases[1].innerHTML !== "" && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        setTimeout("afficher(cases[1].innerHTML)", 200);
    } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        setTimeout("afficher(cases[3].innerHTML)", 200);
    } else if (cases[4].innerHTML !== "" && cases[4].innerHTML === cases[0].innerHTML && cases[0].innerHTML === cases[8].innerHTML) {
        setTimeout("afficher(cases[4].innerHTML)", 200);
    } else if (cases[4].innerHTML !== "" && cases[4].innerHTML === cases[2].innerHTML && cases[2].innerHTML === cases[6].innerHTML) {
        setTimeout("afficher(cases[4].innerHTML)", 200);
    } else if (cases[0].innerHTML !== "" && cases[1].innerHTML !== "" && cases[2].innerHTML !== "" && cases[3].innerHTML !== "" && cases[4].innerHTML !== "" && cases[5].innerHTML !== "" && cases[6].innerHTML !== "" && cases[7].innerHTML !== "" && cases[8].innerHTML !== "") {
        setTimeout(function() {
            alert(`Egalitée !`)
            cases.forEach(el => el.innerHTML = "");
        }, 200);
        i = 0;
        joueur.innerHTML = "Au joueur X de jouer.";
    }

}

function jouer() {
    if (!this.innerHTML) this.innerHTML = tour();
    if (this.innerHTML === 'X') {
        this.style.color = 'red';
    } else if (this.innerHTML === 'O') {
        this.style.color = 'blue';
    }
    gagner();
    tourj();

}
cases.forEach(el => el.addEventListener("click", jouer));