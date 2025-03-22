function save(service){
    //----example---/ console.log(service);//obj
    // get data
    let currentService = readService(); //either [] or data

    //push the new item to array
    currentService.push(service);

    //-------let val = JSON.stringify(service);
    let stringData = JSON.stringify(currentService);
    //console.log(val);// JSON - this is a string

    localStorage.setItem("service",stringData);//save string to local storage
    //------localStorage.setItem("service",val);

}

function readService(){
    //get data from Local Storage
    let storeData = localStorage.getItem("service");

    //if nothing
    if(storeData==null){
        return [];//empty array
    }

    //if data found
    let serviceArray = JSON.parse(storeData);

    //return array of service
    return serviceArray;
}
