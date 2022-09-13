let input = document.getElementById("input");
let btn = document.getElementById("btn");

let itemC = document.querySelector(".item-character");

const sound = new Audio("sound/binge.mp3");



input.addEventListener("focus", function(e){
   if (input.value.length == 0){
    setTimeout(() => {
        itemC.textContent = "enter to-do item"   
        });     
   }else{
    itemC.innerText = ""
   }
})



input.addEventListener("input", function(e){
    if (input.value.length <= 5){
         setTimeout(() => {
             itemC.innerText = "to-do item must have longer characters"   
             }); 
             itemC.style.color = "rgb(242 59 59)"
    }else{
        itemC.innerText = ""
    }
})


btn.addEventListener("click", function (e){


   
 if(input.value.length == 0){
 setTimeout(() => {
itemC.textContent = "enter to-do item"   
},);      
itemC.style.color ="#00ffd8"  
}




else if(input.value.length <= 5){
 setTimeout(() => {
itemC.textContent = "to-do item must have longer characters"   
}, 1000);  
}

else{
 
itemC.innerText = "";
let div = document.createElement("div");
let containerHeader = document.createElement("div");
let header = document.createElement("h1");

let btnCont = document.createElement("div");

let dateHeader = document.createElement("h4");

let removeBtn = document.createElement("button")
 
removeBtn.innerText = "bin"
console.log(removeBtn)

  

 
header.innerText = input.value;
 
div.classList.add("div")
containerHeader.classList.add("containerheader");
removeBtn.classList.add("removebtn");
header.classList.add("heading");
btnCont.classList.add("btncont")

dateHeader.classList.add("dateheader");
    
containerHeader.appendChild(header);
div.appendChild(containerHeader);
btnCont.appendChild(removeBtn);
containerHeader.appendChild(dateHeader);
div.append(btnCont)
document.body.appendChild(div);

dateHeader.innerHTML = new Date().toLocaleString().toLocaleLowerCase();

div.style.opacity = 0;
setTimeout(() => {
 div.style.opacity = 1;   
}, 0);

sound.play()

 
removeBtn.addEventListener("click", function(e){
        div.remove()
})
 
}
 
});

    
    


