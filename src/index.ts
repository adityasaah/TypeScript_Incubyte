interface User<T> {
    name: T;
    age: number;
    isStudent: boolean;
}

const u1: User<string> = {
    name: "Aditya",
    age: 22,
    isStudent: true
};

console.log(u1.age);
console.log(u1.name);


type tea = "Ginger" | "Lemon";

const t1: tea = "Ginger";

console.log(t1)

const add= (a: number,b: number) : number => {
    return a+b;
}

console.log(add(3,4));