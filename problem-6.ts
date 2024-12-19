{
    //
    
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
    }

    // Sample Input
    const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };

    // Sample Output
    console.log(updateProfile(myProfile, { age: 26 }));

    //
}