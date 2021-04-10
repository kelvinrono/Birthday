// var firstName = document.querySelector(".firstName");
var lastName = document.getElementById("lastName");
// var DOB = document.querySelector("#date");
// var month = document.querySelector("#month");
// var year = document.querySelector("#year");
// var display = document.queryselector("#display");
// var gender = $("#gender").val();
var  discover  = document.querySelector("#discover");
var akanMale=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];

var akanFemale =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua", "Ama"]
var days=["Sunday","Monday","Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

var DOB=24
var month = "August";
var year = 1997;
gender="Male"
var DOB2 = parseInt(DOB);
var combinedDate = month+" "+DOB2+" "+year;
var date = new Date(combinedDate)

function findOut(){
    let dayBorn = date.getDay();
   if(dayBorn==0 && gender=="Male"){
    alert("You were born on "+ days[0]+ " and you Akan name is "+akanMale[0])
   }

}

