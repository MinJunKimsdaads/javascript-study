let user = {
    name: "john",
    surname: "Smith",

    get fullName(){
        return `${this.name} ${this.surname}`
    },

    set fullNmae(value){
        [this.name,this.surname] = value.split(" ");
    }
};

let descriptor = Object.getOwnPropertyDescriptor(user,'name');

alert(JSON.stringify(descriptor, null,2));

user.fullName = "Alice Cooper";

alert(user.name);
alert(user.surname);



