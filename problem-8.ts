{
    //

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {

        for (const key of keys) {
            if (!(key in obj)) {
                return false
            }
        }
        return true


    }
    //sample input
    const person = { name: "Alice", age: 25, email: "alice@example.com" }

    //sample output
    console.log(validateKeys(person, ["name", "age"])); // Output: true
    console.log(validateKeys(person, ["name", "address"])); // Output: false


    //
}