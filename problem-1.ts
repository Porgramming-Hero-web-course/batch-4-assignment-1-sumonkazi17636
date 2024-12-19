{
    //sum array

    function sumArray(numbers: number[]): number {
        let sum = 0

        for (const num of numbers) {
            sum = sum + num
        }

        return sum

    }
    //Sample Input
    const result = sumArray([1, 2, 3, 4, 5])

    //Sample Output
    console.log(result);

    //
}