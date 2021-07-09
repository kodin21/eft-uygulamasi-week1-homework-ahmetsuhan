import { user } from './example-other-file';

const accountDOM = document.querySelector(".form_account");
const sendMoneyTotalDOM = document.querySelector(".form_number");
const sendFormDOM = document.querySelector(".form_send");
const mobilDOM = document.querySelector(".mobile");
const timeOut = 60 * 1000 * 2;

/** Timer */
window.addEventListener("load", () => {
    window.setTimeout(() => {
        alert("Oturumunuz sonlanmıştır");
        window.location.reload(true);
    }, timeOut);
    
});

/* Button İnaktif */
document.querySelector(".form_send").disabled = true;

let balance = 0;
let sendMoney = 0;
let count = 0;

user.accounts.forEach(item => {
    const optionDOM = document.createElement('option');
    optionDOM.textContent = item.iban;
    optionDOM.value = item.balance;
    accountDOM.appendChild(optionDOM);
   
});
accountDOM.addEventListener("change", function(){
    document.querySelector(".form_title").textContent = "Balance: " + this.value;
    balance = Number(this.value);
    
    sendMoneyTotalDOM.addEventListener("change", function(){
        sendMoney = Number(this.value);
        if(sendMoney > balance){
            document.querySelector(".form_send").disabled = true;
            alert("Girdiğiniz değer bakiyeden büyüktür!!!");
        }else{
            document.querySelector(".form_send").disabled = false;
        }
    });
});
sendFormDOM.addEventListener("click", (e) => {
    e.preventDefault();
    if(sendMoney < 500){
        alert("Başarılı");
    }else{
        mobilDOM.style.display = 'block';
        mobilDOM.addEventListener("keydown",(e) =>{
            if(e.key == "Enter"){
                e.preventDefault();
                if(mobilDOM.value === "1234"){
                    alert("Başarılı");
                }else{
                    if(count < 4){
                        count++;
                        alert("Şifre yanlış!")
                        return;
                    }else{
                        alert("Hesabınız bloke oldu!")
                    }
                }
            }
        });
    }
});