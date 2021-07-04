// TODO: Create a variable to hold the count
var sheep = document.getElementById("count");
var counter = 0
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
// TODO: Create a function that displays the current count on the page
function sheepCounter(){
    sheep.textContent = counter
}
// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
increment.addEventListener("click", function(){
    counter++
    sheepCounter();
    
})
// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrement.addEventListener("click", function(){
    counter--
    sheepCounter();
})






//trying to make the counter change color
var sheep //time = new date().getHours();
    if (count <0) {
        document.getElementById("counter").style.color = "#FF0000";
    } else {
        
    }



//if value of sheepCounter is < 0 make textContent red
//if value of sheepCounter is > 0 make textContent green