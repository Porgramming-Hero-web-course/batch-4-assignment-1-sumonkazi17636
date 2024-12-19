{
    //
    function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
        return obj[key]
    }

    // Sample Input:
    const person = { name: "Alice", age: 30 };

    //sample output
    console.log(getProperty(person, 'name'));

    //
}