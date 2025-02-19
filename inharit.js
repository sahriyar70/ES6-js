class parant{
    constructor(){
       this.fatherName = "mohosin"
    }
}

class child extends parant {
    constructor(name){
        super();
        this.name = name;

    }



}

const baybe = new child ("'tom");
const baybe2 = new child("jarry");
console.log(baybe,baybe2);