function anagramme(anagramme1, anagramme2) {

    if(anagramme1.length !== anagramme2.length) {
        return false
    }

    const an1 = anagramme1.split("").sort().join()
    const an2 = anagramme2.split("").sort().join()


    if(an1 === an2) {
        return true
    }
    return false

}

console.log(anagramme("abc", "cab"))