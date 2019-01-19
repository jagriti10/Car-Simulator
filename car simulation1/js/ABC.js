                      //accelarator//
var accSlide = document.getElementById("acc");
var output0 = document.getElementById("press").innerHTML;
output0 = accSlide.value;
                      //clutch//

var clutchSlide = document.getElementById("clutch");
var output1 = document.getElementById("release").innerHTML;
output1 = clutchSlide.value;
// Update the current slider value (each time you drag the slider handle)
accSlide.oninput = function() {
  output0 = this.value;
} 
clutchSlide.oninput = function() {
    output1 = this.value;
  } 

                    //////////////////////////////
                    /////////Syncronizer//////////
                    //////////////////////////////

  if (output0=='2'&&output1>'6') {
    console.log('good going');
  } else {
    console.log('try again');
  }
                    ////////////////////////
                    ///////Gear status//////
                    ////////////////////////
var gearStatus= document.getElementById('gear').value;
          
document.getElementById('sub').addEventListener('click',function (){
   if (gearStatus==0) {
     alert('can not go below 0 gear')
   } else {
    document.getElementById('gear').value = --gearStatus;
   }})
document.getElementById('add').addEventListener('click',function (){
  if (gearStatus==5) {
    alert('can not go above 5 gear')
  } else {
   document.getElementById('gear').value= ++gearStatus;
  }})
















