
// Hide and show divs

var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function divVisibility(divId) {
    if (visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}


//Assignment Question 2

var details = {
    name: "Danish",
    email: "Danish@gmail.com",
    password: "Secrate",
    age: 23,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}
var a = 'age' in details
var b = 'country' in details
var c = 'firstName' in details
var d = 'lastName' in details

document.getElementById("output").innerHTML = "Age exist in Object" + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + a + "<br/> <br/>" + "Country exist in Object" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + b + "<br/> <br/>" + "firstName exist in Object" + "&nbsp&nbsp&nbsp " + c + "<br/> <br/>" + "lastName exict in Object" + "&nbsp&nbsp&nbsp&nbsp " + d;



// // //Assignment Question 3

function Students(name, fName, _class, id, phoneNo) {
    this.name = name;
    this.fName = fName;
    this._class = _class;
    this.id = id;
    this.phoneNo = phoneNo;
}

var student1 = new Students("Danish", "Shamsuddin", 12, 0001, "03120250");
var student2 = new Students("Junaid", "Nazeer", 11, 0002, "03002121");
var student3 = new Students("Sharjeel", "Shakel", 10, 0003, "0333121212");

document.getElementById("student").innerHTML = JSON.stringify(student1, null, 2) + "<br>" + JSON.stringify(student2, null, 2) + "<br>" + JSON.stringify(student3, null, 2);


// // //Assignment Question 4

var details = [];

const addDetails = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    function Population(Name, gender, education, profession) {
        this.Name = Name
        this.gender = gender
        this.education = education
        this.profession = profession
    }
    details.push(new Population(document.getElementById('name').value, document.getElementById("gender").value, document.getElementById('education').value, document.getElementById('profession').value));
    document.querySelector('form').reset();


    console.warn('added', { details });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(details, '\t', 2);

    //saving to localStorage
    localStorage.setItem('PopulationData', JSON.stringify(details));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addDetails);
});


//Assignment Question 1
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }];
var arr = [];
for (i = 0; i <= itemsArray.length; i++) {
    var iteamPrice = itemsArray[i].price * itemsArray[i].quantity
    arr.push(iteamPrice);
    document.getElementById("totalPrice").innerHTML = "Total price of" + " " + itemsArray[0].name + arr[0] + "<br> <br>" + "Total price of" + " " + itemsArray[1].name + arr[1] + "<br> <br>" + "Total price of" + " " + itemsArray[2].name + arr[2] + "<br> <br>" + "Total price of" + " " + itemsArray[3].name + arr[3];
    document.getElementById("Gtotal").innerHTML = "Sum of all total prices " + arr.reduce(totalSum);

    function totalSum(total, num) {
        return total + num;
    }

}

