document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("addMoney").classList.remove('hidden');
    document.getElementById("money").style.display = "none";
})
document.getElementById("add-money-btn").addEventListener("click",function(event){
   event.preventDefault();
    const accountNum = document.getElementById("account-num").value;
    const inputAmount = parseInt(document.getElementById("amount").value);
    const money = parseInt(document.getElementById("totalMoney").innerText);
    const sum = inputAmount + money;
    const pin = parseInt(document.getElementById("pinCode").value);
    const selectedBank = document.getElementById("select-bank").value;
     const banks = ["Bkash","Nogod","Rocket","Islami Bank"];
    if(accountNum.startsWith("01") && accountNum.length === 11 && banks.includes(selectedBank)){
       if(pin === 2025){
          document.getElementById("totalMoney").innerText = sum;
          alert(inputAmount + " Taka Added" );
          document.getElementById("form").reset();
       }
       else{
        alert("Murubbi uhuhu Pin thik nai")
       }
    }
    else if(!banks.includes(selectedBank)){
        alert("Please select a bank")
    }
    else{
        alert("Provide valid Number")
    }
})