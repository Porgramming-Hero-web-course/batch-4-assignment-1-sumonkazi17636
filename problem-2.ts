{

    //
    function removeDuplicates(numbers: number[]): number[] {
        const uniqueNumbers: number[] = []
        for (const number of numbers) {
            if (!uniqueNumbers.includes(number)) {
                uniqueNumbers.push(number)
            }
        }

        return uniqueNumbers
    }

    //sample input
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])


    //sample output
    console.log(result);
    //

}