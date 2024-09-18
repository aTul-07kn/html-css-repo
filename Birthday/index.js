// create a birthday application, capture the user info like user name, DOB, by using TS
// it should show whose birthday is today
// it should show the list of all users whose birthday is in the given month
// if year is given then u should get the list of people who has the same birth year
var User = /** @class */ (function () {
    function User(name, age, DOB, bloodGroup) {
        this.name = name;
        this.age = age;
        this.DOB = DOB;
        this.bloodGroup = bloodGroup;
    }
    User.prototype.getUser = function () {
        return ("".concat(this.name, " | ").concat(this.age, " | ").concat(this.DOB.toDateString(), " | ").concat(this.bloodGroup));
    };
    return User;
}());
var users = [];
var u1 = new User("Jelal", 23, new Date("1997-08-23"), "O+");
users.push(u1);
var u2 = new User("Utkarsh", 20, new Date("2000-04-19"), "B+");
users.push(u2);
var u3 = new User("Maya", 29, new Date("1995-12-12"), "A+");
users.push(u3);
var u4 = new User("Taylor", 42, new Date("1981-11-30"), "AB-");
users.push(u4);
var u5 = new User("Jamie", 31, new Date("1992-09-05"), "A-");
users.push(u5);
var u6 = new User("Alex", 34, new Date("1989-03-22"), "B-");
users.push(u6);
var u7 = new User("Jordan", 27, new Date("1996-07-15"), "O+");
users.push(u7);
var u8 = new User("Sophia", 29, new Date("1994-11-08"), "AB+");
users.push(u8);
var u9 = new User("Ethan", 42, new Date("1981-02-14"), "A+");
users.push(u9);
var u10 = new User("Ava", 37, new Date("1986-12-25"), "B-");
users.push(u10);
var u11 = new User("Olivia", 26, new Date("1997-03-17"), "B+");
users.push(u11);
var u12 = new User("Liam", 34, new Date("1989-06-21"), "O-");
users.push(u12);
var u13 = new User("Karan", 21, new Date("2003-08-06"), "A+");
users.push(u13);
var u14 = new User("Shalini", 23, new Date("2001-08-06"), "B+");
users.push(u14);
function printAllUsers() {
    for (var i = 0; i < users.length; i++) {
        users[i].getUser();
    }
}
function findByMonth(month) {
    var outputCont = document.getElementById("output-container");
    if (outputCont) {
        outputCont.innerHTML = "";
        for (var i = 0; i < users.length; i++) {
            if (users[i].DOB.getMonth() + 1 === month) {
                var userDet = (users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML += "<p style=\"background-color: tomato; border: 2px solid grey;\">".concat(userDet, "</p>");
            }
        }
    }
}
function findByYear(year) {
    var outputCont = document.getElementById("output-container");
    if (outputCont) {
        outputCont.innerHTML = "";
        for (var i = 0; i < users.length; i++) {
            if (users[i].DOB.getFullYear() === year) {
                var userDet = (users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML += "<p style=\"background-color: tomato; border: 2px solid grey;\">".concat(userDet, "</p>");
            }
        }
    }
}
var handleByMonth = function () {
    var monthEle = document.getElementById("month-inp");
    var monthInput = Number(monthEle.value);
    findByMonth(monthInput);
};
var handleByYear = function () {
    var yearEle = document.getElementById("year-inp");
    var yearInput = Number(yearEle.value);
    findByYear(yearInput);
};
var todayBday = function () {
    var outputCont = document.getElementById("output-container");
    if (outputCont) {
        outputCont.innerHTML = "";
        var todayDate = new Date();
        for (var i = 0; i < users.length; i++) {
            if (users[i].DOB.getDate() === todayDate.getDate()) {
                var userDet = (users[i].getUser());
                console.log(userDet);
                outputCont.innerHTML += "<p style=\"background-color: tomato; border: 2px solid grey;\">".concat(userDet, "</p>");
            }
        }
    }
};
