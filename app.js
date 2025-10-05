
let btn = document.getElementById("counter") 
let headEl = document.getElementById("headEl")
//let change = document.getElementsById("heading") 

let count = 0 
function increment() {
    count += 1
    btn.innerText = count  
    let newSize = 20 + count ; 
    btn.style.fontSize = newSize + "px";
    
        if (count === 10) {
      headEl.innerText = "Great work" 
}
      if (count === 11) {
        headEl.innerText = "This is a counter" 
      }
      if (count === 5) 
      {
        btn.style.color = "white" 
        btn.style.fontSize = 50 +'px' 
      }
}
function change(){
    headEl.innerText = "Welcome User"
}
function back() {
    headEl.innerHTML = "<h1>Nice Going man </h1>"
    
}


