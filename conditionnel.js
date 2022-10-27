/*console.log('test');


if (ma condition) {
    
} else {
    
}

if (ma condition) {
    
} else if () {
    
} else {

}

const userLoggedIn = true;

if(userLoggedIn) {
    console.log("je suis identifié");
} else {
    console.log("je ne suis pas identifié");
}*/

//condition ? si c'est vrai : si c'est faux

/*const name = "Tim";

switch(name) {
    case "Tim": 
        console.log("Je suis Tim")
        break
    case "Daniel":
        console.log("Je suis Daniel")
        break

    default:
        console.log("Tu es Zinzin")
}



for(var i = 1; i < 199; i++) {

    const multipleThree = i % 3
    const multipleFive = i % 5

    if(multipleThree === 0 && multipleFive === 0) {
        console.log("CoucouHello")
    } else if(multipleFive === 0) {
        console.log("Hello")
    } else if(multipleThree === 0) {
        console.log("Coucou")
    } else {
        console.log(i);
    }
}

var i = 1

while(i <= 199) {

    const multipleThree = i % 3
    const multipleFive = i % 5

    if(multipleThree === 0 && multipleFive === 0) {
        console.log("CoucouHello")
    } else if(multipleFive === 0) {
        console.log("Hello")
    } else if(multipleThree === 0) {
        console.log("Coucou")
    } else {
        console.log(i);
    }

    i++
}*/


var i = 1

while(i <= 199) {

    const multipleThree = i % 3
    const multipleFive = i % 5

    switch(true){
        case multipleThree === 0 && multipleFive === 0:
            console.log("CoucouHello")
            break
        case multipleFive === 0:
            console.log("Hello")
            break
        case multipleThree === 0:
            console.log("Coucou")
            break
        
        default:
            console.log(i)
            break
    }
    i++
}



const answer = prompt("Avez vous une douleur ?");
const answerLower = answer.toLowerCase();

switch(answerLower) {
    case "abdomen":
        alert('Vous avez une Appendicite')
        break
    case "gorge":
        const fievre = prompt("Avez-vous de la Fievre")
        const fievreLower = fievre.toLowerCase();
        if (fievreLower === "oui") {
            alert('Vous avez un Rhume')
        } else {
            alert('Vous avez un Mal de gorge')
        }
        break

        case "aucune":
            const toux = prompt("Avez-vous de la Toux")
            const touxLower = toux.toLowerCase()
            if (touxLower == "oui") {
                const fievreux = prompt("Avez-vous de la Fievre")
                const fievreuxLower = fievreux.toLowerCase();
                if(fievreuxLower == "oui") {
                    alert('Vous avez un Rhume')
                } else {
                    alert("Vous avez un Refroidissement")
                }
            } else {
                alert('Vous avez Rien')
            }
            break

    default:
        alert("Vous etes surement malade")
}