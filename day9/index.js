let obj = {
    name: "siya",
    uni: "ADTU",
    course: "btech",
    year: 3,
    isAlumni: false,
    sub: ["FS", "AT", "DL", "ML"],
    hobbies: {
        games: ["tennis", "volleyball"],
        music: "punk rock",
        test: {
            test1: {
                test2: {
                    test3: {
                        100: "SM"
                    }
                }
            }
        }
    }
}

console.log(obj.hobbies.test.test1.test2.test3["100"]);

console.log(obj);

let firstValue = obj["name"]
console.log(firstValue);

obj["course"] = "mca"
console.log(obj);

let deletedKetValue = delete obj["uni"]
console.log(deletedKetValue);

console.log(obj.hobbies);
console.log(obj);

obj["isMarried"] = false;
console.log(obj);
console.log(obj.hobbies);

//LOOPS - for, white, for of, for in

let num = 10;

for (let i = 0; i < num; i++) {
    console.log(i);
}

let std = ["Nisha", "Ria", "Homer", "Anne"]

for (let i = 0; i < std.length; i++) {
    console.log(std[i]);
}

let firstStudent = std[0]
for (let i = 0; i < firstStudent.length; i++) {
    console.log(firstStudent[i]);
}

for (let i = 0; i < std.length; i++) {
    for (let j = 0; j < std[i].length; j++) {
        console.log(std[i][j]);
    }
}

let alph = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alph.length; i++) {
    console.log(alph[i]);
}

for (let i = 0; i < alph.length; i++) {
    if (i % 2 == 0){
        console.log("this alphabet ", alph[i], " is on an even index");
        if(i==10){
            console.log("this alphabet is SPECIAL: ",alph[i]);
            
        }
    }
    else
        console.log("this alphabet ", alph[i], " is on an odd index");
}
