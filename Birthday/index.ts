// create a birthday application, capture the user info like user name, DOB, by using TS
// it should show whose birthday is today
// it should show the list of all users whose birthday is in the given month
// if year is given then u should get the list of people who has the same birth year

class User{
    public name: string;
    public age: number;
    public DOB: Date;
    public bloodGroup: string;

    public constructor(name: string, age: number, DOB: Date, bloodGroup: string){
        this.name=name;
        this.age=age;
        this.DOB=DOB;
        this.bloodGroup=bloodGroup;
    }

    public getUser(): string{
        return (`${this.name} | ${this.age} | ${this.DOB.toDateString()} | ${this.bloodGroup}`);
    }
}

let users:User[]=[]

const u1=new User("Jelal", 23, new Date("1997-08-23"), "O+");
users.push(u1);

const u2=new User("Utkarsh", 20, new Date("2000-04-19"), "B+");
users.push(u2);

const u3=new User("Maya", 29, new Date("1995-12-12"), "A+");
users.push(u3);

const u4 = new User("Taylor", 42, new Date("1981-11-30"), "AB-");
users.push(u4);

const u5 = new User("Jamie", 31, new Date("1992-09-05"), "A-");
users.push(u5);

const u6 = new User("Alex", 34, new Date("1989-03-22"), "B-");
users.push(u6);

const u7 = new User("Jordan", 27, new Date("1996-07-15"), "O+");
users.push(u7);

const u8 = new User("Sophia", 29, new Date("1994-11-08"), "AB+");
users.push(u8);

const u9 = new User("Ethan", 42, new Date("1981-02-14"), "A+");
users.push(u9);

const u10 = new User("Ava", 37, new Date("1986-12-25"), "B-");
users.push(u10);

const u11 = new User("Olivia", 26, new Date("1997-03-17"), "B+");
users.push(u11);

const u12 = new User("Liam", 34, new Date("1989-06-21"), "O-");
users.push(u12);

const u13 = new User("Karan", 21, new Date("2003-08-06"), "A+");
users.push(u13);

const u14 = new User("Shalini", 23, new Date("2001-08-06"), "B+");
users.push(u14);

function printAllUsers():void{
    for(let i=0;i<users.length;i++){
        users[i].getUser();
    }
}

function findByMonth(month: number): void{
    let outputCont=document.getElementById("output-container") as HTMLInputElement;
    if(outputCont){
        outputCont.innerHTML="";

        for(let i=0; i<users.length; i++){
            if(users[i].DOB.getMonth()+1===month){
                const userDet=(users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML+=`<p style="background-color: tomato; border: 2px solid grey;">${userDet}</p>`;
            }
        }
    }
}

function findByYear(year: number): void{
    let outputCont=document.getElementById("output-container") as HTMLInputElement;
    if(outputCont){
        outputCont.innerHTML="";

        for(let i=0; i<users.length; i++){
            if(users[i].DOB.getFullYear()===year){
                const userDet=(users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML+=`<p style="background-color: tomato; border: 2px solid grey;">${userDet}</p>`;
            }
        }
    }
}

const handleByMonth=()=>{
    let monthEle=document.getElementById("month-inp") as HTMLInputElement;
    let monthInput=Number(monthEle.value);
    findByMonth(monthInput);
}

const handleByYear=()=>{
    let yearEle=document.getElementById("year-inp") as HTMLInputElement;
    let yearInput=Number(yearEle.value);
    findByYear(yearInput);
}

const todayBday=()=>{
    let outputCont=document.getElementById("output-container");
    if(outputCont){
        outputCont.innerHTML="";

        let todayDate=new Date();

        for(let i=0;i<users.length;i++){
            if(users[i].DOB.getDate()===todayDate.getDate()){
                const userDet=(users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML+=`<p style="background-color: tomato; border: 2px solid grey;">${userDet}</p>`;
            }
        }
    }
}