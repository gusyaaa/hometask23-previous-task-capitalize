function capitalizeWords(text){
    let eachWord = text.split(" ")
    let word1 = eachWord[0][0].toUpperCase() + eachWord[0].slice(1);
    let word2 = eachWord[1][0].toUpperCase() + eachWord[1].slice(1);
    let word3 = eachWord[2][0].toUpperCase() + eachWord[2].slice(1);
    let word4 = eachWord[3][0].toUpperCase() + eachWord[3].slice(1);
    let word5 = eachWord[4][0].toUpperCase() + eachWord[4].slice(1);
    let result = word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5
    return result
}
console.log(capitalizeWords("this is new, beautiful world"))