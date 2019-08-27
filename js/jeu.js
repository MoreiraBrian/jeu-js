const cases = document.querySelectorAll(".case");
const joueur = document.getElementById("jou");
let i = 0;
let X = 0;
let O = 0;
let E = 0;
let span1 = document.getElementById("x");
let span2 = document.getElementById("o");
let span3 = document.getElementById("e");
let win = document.getElementById("gagne");
let good = document.getElementById("final");
let bouton = document.querySelector("button");

function tour() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

function fermer() {
    win.style.display = "none";
}
bouton.addEventListener("click", fermer);


function affi() {
    span1.innerHTML = X;
    span2.innerHTML = O;
    span3.innerHTML = E;
}

function afficher(gagnant) {
    win.style.display = "block";
    good.innerHTML = `${gagnant} a gagner!`;
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
        if (cases[0].innerHTML !== "" && cases[0].innerHTML === 'X') {
            X++;
        } else if (cases[0].innerHTML !== "" && cases[0].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[0].innerHTML)", 200);

    } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        if (cases[3].innerHTML !== "" && cases[3].innerHTML === 'X') {
            X++;
        } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[3].innerHTML)", 200);
    } else if (cases[6].innerHTML !== "" && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        if (cases[6].innerHTML !== "" && cases[6].innerHTML === 'X') {
            X++;
        } else if (cases[6].innerHTML !== "" && cases[6].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[6].innerHTML)", 200);
    } else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        if (cases[0].innerHTML !== "" && cases[0].innerHTML === 'X') {
            X++;
        } else if (cases[0].innerHTML !== "" && cases[0].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[0].innerHTML)", 200);
    } else if (cases[1].innerHTML !== "" && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        if (cases[1].innerHTML !== "" && cases[1].innerHTML === 'X') {
            X++;
        } else if (cases[1].innerHTML !== "" && cases[4].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[1].innerHTML)", 200);
    } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        if (cases[3].innerHTML !== "" && cases[3].innerHTML === 'X') {
            X++;
        } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[3].innerHTML)", 200);
    } else if (cases[4].innerHTML !== "" && cases[4].innerHTML === cases[0].innerHTML && cases[0].innerHTML === cases[8].innerHTML) {
        if (cases[4].innerHTML !== "" && cases[4].innerHTML === 'X') {
            X++;

        } else if (cases[4].innerHTML !== "" && cases[1].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[4].innerHTML)", 200);
    } else if (cases[4].innerHTML !== "" && cases[4].innerHTML === cases[2].innerHTML && cases[2].innerHTML === cases[6].innerHTML) {
        if (cases[4].innerHTML !== "" && cases[4].innerHTML === 'X') {
            X++;

        } else if (cases[4].innerHTML !== "" && cases[1].innerHTML === 'O') {
            O++;
        };
        setTimeout("afficher(cases[4].innerHTML)", 200);
    } else if (cases[0].innerHTML !== "" && cases[1].innerHTML !== "" && cases[2].innerHTML !== "" && cases[3].innerHTML !== "" && cases[4].innerHTML !== "" && cases[5].innerHTML !== "" && cases[6].innerHTML !== "" && cases[7].innerHTML !== "" && cases[8].innerHTML !== "") {
        E++;
        setTimeout(function() {
            win.style.display = "block";
            good.innerHTML = `Egalitée !`;

            cases.forEach(el => el.innerHTML = "");
        }, 200);
        i = 0;
        joueur.innerHTML = "Au joueur X de jouer.";
    }
    setTimeout(affi(), 200);
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