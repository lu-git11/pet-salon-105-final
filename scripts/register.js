//inputs
let pets=[];
let edit = false;
let selectedId = 0;
let inputName = $("#txtName");
let inputAge = $("#txtAge");
let inputGender = $("#txtGender");
let inputBreed = $("#txtBreed");
let inputService = $("#txtService");
let inputPay = $("#txtPay");

//constructor
function Pet(name,age,gender,breed,service,pay){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.pay=pay;
}

function isValid(pet){
    //let validation = true;
    let isValidName=true;
    let isValidAge=true;

    if(pet.name==""){
        isValidName=false;
        $("#nameRequirementText").show().css("color","red");
    }else{
        $("#nameRequirementText").hide();
    }

    if(pet.age==""){
        isValidAge=false;
        $("#ageRequirementText").show().css("color","red");
    }else{
        $("#ageRequirementText").hide();
    }
    return isValidName && isValidAge;
}

//register function
function register(){
    if(edit){
        let modifiedPet = new Pet(inputName.val(),inputAge.val(),inputGender.val(),inputBreed.val(),inputService.val(),inputPay.val());
        pets[selectedId] = modifiedPet;
        $("input").val("");
        $("select").val("");
        displayRow();
        edit = false
    }else{
    let newPet = new Pet(inputName.val(),inputAge.val(),inputGender.val(),inputBreed.val(),inputService.val(),inputPay.val());
    
    if(isValid(newPet)){

        pets.push(newPet);
        console.log(pets);
        displayRow();
    }
    console.log(pets);
    $("input").val("");
    $("select").val("");
}
}

function deletePet(petId){
    $("#petId").remove();
    pets.splice(petId,1);
    displayRow();
}

/*function clearInputs(){
    inputAge.value = "";
    inputName.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputPay.value = "";
}
*/
function displayRow(){
    $("#pets").empty();
    let row = "";
    for(let i = 0; i < pets.length; i++){
        let pet = pets[i]
        row =`
        <tr>
            <td>${i + 1}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.pay}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="editPet(${i})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deletePet(${i})")>Delete</button>
            </td>
        </tr>`;  
        $("#pets").append(row);
    }
}

function displayInfo(){
    let groomingDiv = document.getElementById("gTotal");
    let totalDiv = document.getElementById("total");
    let grooming=0;

    totalDiv.innerHTML = pets.length
    for (let i = 0; i < pets.length; i++){
        if(pets[i].service == "Grooming"){
            grooming++;
                }
                groomingDiv.innerHTML=grooming
    }
}

function deletePet(petId){
    console.log("deleting pet with Id: " + petId)
    $("#petId").remove();
    pets.splice(petId,1);
    displayRow();
    displayInfo();
}

function editPet(petId){
    console.log("edit pet information: " + petId)
    console.log(pets[petId]);
    let pet = pets[petId];
    inputName = pet.name;
    inputAge = pet.age;
    inputGender = pet.gender;
    inputBreed = pet.breed;
    inputService = pet.service;
    inputPay = pet.pay;
    edit = true;
    selectedId = petId
}

function init(){
    let pet1 = new Pet("test",2,"male","dog","grooming","cash");
    pets.push(pet1);

    displayRow();
    readService();
        $("#nameRequirementText").hide();
        $("#ageRequirementText").hide();
    
    $("#register").on("click",register);
}


window.onload=init;






