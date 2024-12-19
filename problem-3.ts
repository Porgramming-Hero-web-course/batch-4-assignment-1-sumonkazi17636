{

    //
    function countWordOccurrences(sentence:string,word:string):number{

        const lowerCaseSentence = sentence.toLowerCase()
        const lowerWord = word.toLowerCase()

        const words = lowerCaseSentence.split('')

        let count = 0
        for(const word of words){
            if(word === lowerWord){
                count++
            }
        }

        return count

}

//sample input
const result = countWordOccurrences("I love typescript", "typescript")


//sample output
console.log(result);

//
}