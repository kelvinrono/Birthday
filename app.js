var discover = document.querySelector("#discover")
discover.addEventListener('click', function(e){
    e.preventDefault();

var firstName = document.querySelector(".firstName").value;
var lastName = document.getElementById("lastName").value;
var DOB = document.querySelector("#date").value;
var year = document.querySelector("#year").value;
var show = document.querySelector(".show");
var gender = $("#gender").val();
var month = $("#month").val();
const  discover  = document.querySelector("#discover");
var akanMale=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];

var akanFemale=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua", "Ama"]
var days=["Sunday","Monday","Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];



let fullNames ="Hello, "+ firstName.concat(" "+lastName);
var DOB2 = parseInt(DOB);
var combinedDate = month+" "+DOB2+" "+year;
var date = new Date(combinedDate);

//create element
const Div1 = document.createElement('div');
Div1.classList.add('display');
//append items
const todoItem = document.createElement('li')
todoItem.classList.add('display')
Div1.appendChild(todoItem)
show.appendChild(Div1);

    let dayBorn = date.getDay();
  if(gender=="Male"){
      if(dayBorn==0){
        todoItem.innerHTML=fullNames +", you were born on "+days[0]+" and your Akan name is " +akanMale[0];
      }
      if(dayBorn==1){
        todoItem.innerHTML= fullNames+"You were born on "+days[1]+" and your Akan name is "+akanMale[1]
    }
    if(dayBorn==2){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanMale[2]
    }
    if(dayBorn==3){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanMale[3]
    }
    if(dayBorn==4){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanMale[4]
    }
    if(dayBorn==5){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanMale[5]
    }
    
    if(dayBorn==6){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanMale[6]
    }
  }

  if(gender=="Female"){
    if(dayBorn==0){
        todoItem.innerHTML= fullNames+"You were born on "+days[0]+" and your Akan name is "+akanFemale[0]
    }
    if(dayBorn==1){
        todoItem.innerHTML= fullNames+"You were born on "+days[1]+" and your Akan name is "+akanFemale[1]
  }
  if(dayBorn==2){
    todoItem.innerHTML= fullNames+"You were born on "+days[2]+" and your Akan name is "+akanFemale[2]
  }
  if(dayBorn==3){
    todoItem.innerHTML= fullNames+"You were born on "+days[3]+" and your Akan name is "+akanFemale[3]
  }
  if(dayBorn==4){
    todoItem.innerHTML= fullNames+"You were born on "+days[4]+" and your Akan name is "+akanFemale[4]
  }
  if(dayBorn==5){
    todoItem.innerHTML= fullNames+"You were born on "+days[5]+" and your Akan name is "+akanFemale[5]
  }
  
  if(dayBorn==6){
    todoItem.innerHTML= fullNames+"You were born on "+days[6]+" and your Akan name is "+akanFemale[6]
  }
}



})


// function validate(){
//     if( document.myform.firstName.value == "" ) {
//         alert( "Please provide your name!" );
//         document.myorm.firstName.focus() ;
//         return false;
// }
// }