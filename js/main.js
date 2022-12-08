//Loading Animation
var loading = document.getElementById("loading");

window.addEventListener("load", function() {
    loading.style.display = "none";
})


// Color Toggle Function
function colorToggle() {
    var myBody = document.body;
    myBody.classList.toggle('night');
}


// Show Time Function
function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var span = document.getElementById('am-pm');

    if (seconds < 10) {
        seconds = `0${seconds}`;
    } 
    if (hours > 12) {
        span = "pm";
        hours = hours - 12;
        if (hours < 10) {
            hours = `0${hours}`;
        }
    } else {span = "am"};
    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 
    var fullClock = `${span} ${hours} : ${minutes} : ${seconds}`;
    document.getElementById('clock').innerHTML = fullClock;
    console.log(seconds);
    setTimeout(showTime, 1000);
}
showTime()


// Sign Up Form
function formValidate() {
    var userName = document.getElementById('username').value;
    var eMail = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var error = document.getElementById('error');
    var text = "";
    if (userName.length < 5) {
        text = "Please Enter A valid Username";
        error.innerHTML = text;
        return false;
    } else if (eMail.indexOf("@") == -1 || eMail.length < 10) {
        text = "Please Enter A valid Email";
        error.innerHTML = text;
        return false;
    } else if (isNaN(phone) || phone.length != 11) {
        text = "Please Enter A valid Phone";
        error.innerHTML = text;
        return false; 
    } else {
        alert("We are Done!");
        return true;
    }
}

    // Using Filter
    let switcherLis = document.querySelectorAll(".switcher li");
    let imgs = document.querySelectorAll(".all")
    
    switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
    });
    
    // Remove Active Class From All Lis And Add To Current
    function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
    }
    
    // Manage Imgs
    function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
    }









// Email JS
// function sendMail() {
//     var params = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         message : document.getElementById("message").value
//     };
    
    // const serviceID = "service_vrtfbqn";
    // const templateID = "template_7ris7iy";

    // emailjs.send("service_vrtfbqn", "template_7ris7iy", params)
    // .then(function (res) {
    //         document.getElementById("name").value = "";
    //         document.getElementById("email").value = "";
    //         document.getElementById("message").value = "";
    //         console.log(res);
    //         alert("Your Message Sent Successfuly");
        
    //     .catch((err) => console.log(err)));


// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_vrtfbqn";
//     const templateID = "template_7ris7iy";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }



// function sendMail(params) {
//     var tempParams = {
//         from_name: document.getElementById("fromName").value,
//         to_name: document.getElementById("toName").value,
//         message: document.getElementById("msg").value,
//     };

//     emailjs.send("service_vrtfbqn", "template_7ris7iy", tempParams)
//     .then(function(res){
//         console.log("success", res.status);
//     })
// }

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_vrtfbqn";
    const templateID = "template_7ris7iy";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Sent Successfuly");
        })
        .catch((err) => console.log(err));
}