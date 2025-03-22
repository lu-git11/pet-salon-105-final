//service constructor
function Service(title,price){
    this.title=title;
    this.price=price;
}

function validService(service){
    let isValidTitle=true;
    let isValidPrice=true;

    if(service.title==""){
        isValidTitle=false;
        $("#titleRequirementText").show().css("color","red");
    }else{
        $("#titleRequirementText").hide();
    }

    if(service.price==""){
        isValidPrice=false;
        $("#priceRequirementText").show().css("color","red");
    }else{
        $("#priceRequirementText").hide();
    }

    return isValidPrice && isValidTitle;
}


function register(){
    //get value
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();

    //create obj
    let newService = new Service(inputTitle,inputPrice);
    //display on console
    if(validService(newService)){
        save(newService); //this function is on manager.js
        console.log(newService);
        $("input").val("");
    }
}

function init(){
    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();
    //hook event

    $("#btnRegister").on(`click`, register);
}

window.onload=init;

