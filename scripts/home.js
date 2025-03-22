let pet1 = {
    name: "Bear",
    age:2,
    gender: "male",
    service: "nail",
    breed: "husky"
}
let pet2 = {
    name: "Juno",
    age:3,
    gender: "female",
    service: "grooming",
    breed: "lab"
}
let pet3 = {
    name: "Avo",
    age:4,
    gender: "male",
    service: "check-up",
    breed: "bulldog"
}

let petList = [pet1, pet2, pet3];

document.getElementById("petCounter").innerHTML=`There are ${petList.length} pets in the shop.`;

let age = petList.reduce((sum, pet) => sum + pet.age, 0) / petList.length;
document.getElementById("age").innerHTML=`Average age: ${age}`


function getPetNames(){
    let list = document.getElementById("petNames");
    for(let i=0;i<petList.length;i++){
        console.log(petList[i].name);
        list.innerHTML+=`<li> ${petList[i].name} </li>`
    }
}

getPetNames();



//getting input from HTML



//constructor


//register function