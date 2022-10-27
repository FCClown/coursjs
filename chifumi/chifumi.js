// Utilisateur
for(i = 1; i <= 3; i++) {

    const choixUtilisateur = prompt("Choisir votre signe !").toLowerCase()
    console.log(choixUtilisateur)
    // bot
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let random = getRandomInt(3)
    //console.log(random)
    let resultRandom

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
                alert("L'ordinateur gagne")
            } else if(choixUtilisateur === "ciseaux") {
                alert("L'utilisateur gagne")
            } else if(choixUtilisateur === "papier") {
                alert("Egalité")
            }
            break
        case "ciseaux":
            if(choixUtilisateur === "pierre") {
                alert("L'utilisateur gagne")
            } else if(choixUtilisateur === "ciseaux") {
                alert("Egalité")
            } else if(choixUtilisateur === "papier") {
                alert("L'ordinateur gagne")
            }
            break
        case "pierre":
            if(choixUtilisateur === "pierre") {
                alert("Egalité")
            } else if(choixUtilisateur === "ciseaux") {
                alert("L'ordinateur gagne")
            } else if(choixUtilisateur === "papier") {
                alert("L'utilisateur gagne")
            }
            break
    }

}
