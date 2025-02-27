document.getElementById("login-btn").addEventListener("click",function(){
    const accountNum =document.getElementById("phone-num").value;
    const pinNum = parseInt(document.getElementById("pin-num").value);
    if(accountNum.length === 11){
        if(typeof pinNum === "number"){
          window.location.href="./main.html"
        }
        else {
            alert("provide valid pin")
        }
    }
    else{
        alert("Please provide valid number")
    }
})