let DATA = "secrete information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

viewData() {
    console.log("DATA: ", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData() {
        DATA = "edited information";
    }
}


let student1 = new User("Yakshitha", "xyz@example.com");
let student2 = new User("Nidhi", "abc@example.com");

student1.viewData();
student2.viewData();

let teacher1 = new User("Dr. Smith", "dr.smith@example.com");
teacher1.viewData();
let  admin1 = new Admin("Admin", "admin@example.com");
admin1.viewData();
admin1.editData();
admin1.viewData();