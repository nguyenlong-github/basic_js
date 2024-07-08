// checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `Thank for your Subcribe <3`;
        
        if(visaBtn.checked){
            paymentResult.textContent = `Your payment method is: Visa `;

        }
        else if(paypalBtn.checked){
            paymentResult.textContent = `Your payment method is: Paypal `;

        }
        else if(masterCardBtn.checked){
            paymentResult.textContent = `Your payment method is: Master Card `;

        }
        else if(visaBtn.checked){
            paymentResult.textContent = `Your payment method is: Visa `;

        }

    }else{
        paymentResult.textContent = ` `;
        subResult.textContent = `Please Subcribe <3`;
    }
}