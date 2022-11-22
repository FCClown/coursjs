let scoreUtilisateur = 0
let scoreOrdinateur = 0

for(i = 1; i <= 3; i++) {

    let resultRandom

    // Utilisateur
    const choixUtilisateur = prompt("Choisir votre signe !").toLowerCase()
    //console.log(choixUtilisateur)

    // bot
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let random = getRandomInt(3)
    //console.log(random)

    if(random === 0) {
        console.log("BOT : papier")
        resultRandom = "papier"
    } else if (random === 1) {
        console.log("BOT : pierre")
        resultRandom = "pierre"
    } else if(random === 2) {
        console.log("BOT : ciseaux")
        resultRandom = "ciseaux"
    }
    //console.log(resultRandom)

    // Resultat
    switch(resultRandom) {
        case "papier":
            if(choixUtilisateur === "pierre") {
                scoreOrdinateur+=1
                //console.log(scoreOrdinateur)
                alert("L'ordinateur gagne")
            } else if(choixUtilisateur === "ciseaux") {
                scoreUtilisateur+=1
                //console.log(scoreUtilisateur)
                alert("L'utilisateur gagne")
            } else if(choixUtilisateur === "papier") {
                alert("Egalité")
            }
            break
        case "ciseaux":
            if(choixUtilisateur === "pierre") {
                scoreUtilisateur+=1
                //console.log(scoreUtilisateur)
                alert("L'utilisateur gagne")
            } else if(choixUtilisateur === "ciseaux") {
                alert("Egalité")
            } else if(choixUtilisateur === "papier") {
                scoreOrdinateur+=1
                //console.log(scoreOrdinateur)
                alert("L'ordinateur gagne")
            }
            break
        case "pierre":
            if(choixUtilisateur === "pierre") {
                alert("Egalité")
            } else if(choixUtilisateur === "ciseaux") {
                scoreOrdinateur+=1
                //console.log(scoreOrdinateur)
                alert("L'ordinateur gagne")
            } else if(choixUtilisateur === "papier") {
                scoreUtilisateur+=1
                //console.log(scoreUtilisateur)
                alert("L'utilisateur gagne")
            }
            break
    }
    console.log("Score Ordinateur " + scoreOrdinateur)
    console.log("Score Utilisateur " + scoreUtilisateur)
}
