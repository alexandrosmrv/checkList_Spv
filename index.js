
$(".form-check").hover(function() {
    $(this).addClass("containerClassJs");
 }, function(){
    $(this).removeClass("containerClassJs"); 
 });
 $(".savebutton").hover(function() {
    $(this).addClass("savebuttonjs");
 }, function(){
    $(this).removeClass("savebuttonjs"); 
 });
 $(".imgcls").hover(function() {
   $(this).addClass("imgjs", 100000);
}, function(){
   $(this).removeClass("imgjs", 100000); 
});

let datePlace = document.getElementById("realDate") 
datePlace.innerText = theDay()+" "+ theNumDay()+" "+ theMonth() + " " + theYear()

function theDay (){
   var d= new Date();
   var theday= d.getDay();
 if (theday === 1 ){
   return ("Monday");
 }
 else if (theday===2){
   return ("Tuesday")
 }
else if (theday===3){
   return ("Wednesday")
}
else if(theday===4){
   return("Thursday")
}
else if (theday===5){
   return ("Friday")
}
else if (theday===6){
   return("Saturday")
}
else{return ("Sunday")}
}
function theNumDay (){
   var tnm = new Date();
   var thenumday= tnm.getDate();
   return thenumday;

}
function theMonth (){
   var m = new Date();
   var themonth= (m.getMonth())+1;
   return themonth;
}

function theYear (){
   var y = new Date();
   var theyear = y.getFullYear();
   return theyear;

}
