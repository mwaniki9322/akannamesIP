var welcome=function(welcoming){
    alert(welcoming)
}
alert('Welcome!Get to know your Akan name')

var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function result(){
    var dateofbirthinput=document.getElementById('datepicker').value;

    //input set to current date
    var date=new Date(dateofbirthinput);

    //get day of the week
    var weekday=date.getDay();


}