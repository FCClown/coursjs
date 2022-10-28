function anagramme(anagramme1, anagramme2) {

    if(anagramme1.length !== anagramme2.length) {
        return false
    }

    let an1 = anagramme1.split("").sort().join()
    let an2 = anagramme2.split("").sort().join()


    if(an1 === an2) {
        return "les deux mots sont " + anagramme1 + " et " + anagramme2
    }


}

console.log(anagramme("abc", "cab"))