/**
 * @author : COULIBALY MOUHAMED
 * @description :  une fonction appelée playTheGame() 
 * demander à l'utilisateur s'il souhaite jouer au jeu
 * si faux :return  Pas de problème, au revoir 
 * si oui :
 * entrez un nombre 0 a 10
 * -s'il saisi autre type de donnees ou s'il n'a pas saisi de chiffre entre 0 et 10 :retrn desolé
 * - sinon recuperer la valeur saisie et appliquer la methode Math.ramdom
 * @param :  aucun paramètre,
 * 
 */

/**
 *  part one
 */

// une variable compteur pourqu'il garde le nombre de tentative
let account = 3

function playTheGame() {
    //Demande a user s'il veut jouer

    //Verification de la saisie ,si c'est un nombre
    if (confirm("Wish you play the game") == false) {
        //La saisie n'est pas un nombre
        alert(" Sorry, not a number, goodbye ")
        //La saisie est un nombre
    } else {
        //Demander au user d'entrer un nombre entre 0 et 10
        let userNumber = prompt("Enter a number between 0 and 10")
        //Verifier si c'est  un nombre
        if (isNaN(userNumber)) {
            //true :signifie que c'est pas un nombre
            alert(" Sorry, not a number, goodbye")

            //Verifier si la saisie est compris entre 0 et 10
        } else if (Number(userNumber) > 10 || Number(userNumber) < 0) {
            //sinon 
            alert("Sorry, that's not a good number, bye")

        } else {
            //si oui
            let computerNumber = Math.floor(Math.random() * 11);
            //Appel de la fonction compareNumbers
            compareNumbers(userNumber, computerNumber)
            //Appel de la fonction CompareNumbersDeepen
            //CompareNumbersDeepen(userNumber, computerNumber)

        }
    }

}


/**
 * @author : COULIBALY MOUHAMED
 * @description :  une fonction appelée compareNumbers() 
 * la fonction compare la saisie userNumber et le  le resultat de Math.floor(Math.random() * 11)
 * si userNumber egale computerNumber : WINNER
 * si userNumber superieur computerNumber : Your number is bigger than computer number, guess again
 * -si userNumber inferieur computerNumber : Your number is smaller than computer number, guess again
 * - Tentative : repeter 3 fois si inferieur et superieur
 * @param : userNumber : Le nombre saisi par le user ,
 * @param : computerNumber : le resultat de Math.floor(Math.random() * 11) 
 * 
 */

function compareNumbers(userNumber, computerNumber) {
    // si egale
    if (userNumber == computerNumber) {
        alert("WINNER")
        // si superieur
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger than computer number, guess again")
        account--
        if (account == 0) {
            alert("out of chances")
        } else {
            playTheGame()
        }
        //si inferieur
    } else {
        alert("Your number is smaller than computer number, guess again")
        account--
        if (account == 0) {
            alert("out of chances")
        } else {
            playTheGame()
        }

    }

}

/****
 * Bonus
 * In the First Part, instead of stopping the process if the user didn’t enter a valid number. 
 * Continue asking for a number until the user enters a valid number.
 */

/**
 * @author : COULIBALY MOUHAMED
 * @description :  une fonction appelée CompareNumbersDeepen() 
 * la fonction compare la saisie userNumber et le  le resultat de Math.floor(Math.random() * 11)
 * si userNumber egale computerNumber : WINNER
 * si userNumber superieur computerNumber : Your number is bigger than computer number, guess again
 * -si userNumber inferieur computerNumber : Your number is smaller than computer number, guess again
 * - bonus : Tant que userNumber n'est pas egale a computerNumber continué.
 * @param : userNumber : Le nombre saisi par le user ,
 * @param : computerNumber : le resultat de Math.floor(Math.random() * 11) 
 * 
 */

function CompareNumbersDeepen(userNumber, computerNumber) {
    // si egale
    while (userNumber > computerNumber) {
        alert("Your number is bigger than computer number, guess again")
        playTheGame()
    }
    while (userNumber < computerNumber) {
        alert("Your number is smaller than computer number, guess again")
        playTheGame()
    }

}

