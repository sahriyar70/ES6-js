const person = {name : "sahriyar", age : 18, job : "none", addass: "rongpur" };

const {name, addass,age}= person;
const friendName = ["amir", "sakib","hero","jodhu","modhu"];
const [ choto,boro, ...friends] = friendName;
console.log(friends);
 console.log(name, addass,age);

 const complaxObjact= {
    name : "aktar",
    info : {
        addass : "dhaka",
        phone  : 5777888886,
    }
    
 }
 const {phone} = complaxObjact.info;
 console.log(phone);
