
function findOut(){

// var firstName = document.querySelector(".firstName");
// var lastName = document.getElementById("lastName");
//  var DOB = document.querySelector("#date").value;
// var month = document.querySelector("#month").value;
// var year = document.querySelector("#year").value;
// var display = document.queryselector("#display");
var gender = $("#gender").val();
const  discover  = document.querySelector("#discover");
var akanMale=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];

var akanFemale=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua", "Ama"]
var days=["Sunday","Monday","Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

var DOB=25
var month = "August";
var year = 1997;
 gender="Male"
var DOB2 = parseInt(DOB);
var combinedDate = month+" "+DOB2+" "+year;
var date = new Date(combinedDate);

    let dayBorn = date.getDay();
  if(gender=="Male"){
      if(dayBorn==0){
          alert("You were born on "+days[0]+" and your Akan name is "+akanMale[0])
      }
      if(dayBorn==1){
        alert("You were born on "+days[1]+" and your Akan name is "+akanMale[1])
    }
    if(dayBorn==2){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[2])
    }
    if(dayBorn==3){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[3])
    }
    if(dayBorn==4){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[4])
    }
    if(dayBorn==5){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[5])
    }
    
    if(dayBorn==6){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[6])
    }
  }

}

