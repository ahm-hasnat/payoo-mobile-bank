document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("addMoney").classList.remove('hidden');
    document.getElementById("money").style.display = "none";
})
document.getElementById("add-money-btn").addEventListener("click",function(event){
   event.preventDefault();
    const selectedBank = document.getElementById("select-bank").value;
    const accountNum = document.getElementById("account-num").value;
    console.log(accountNum);
})