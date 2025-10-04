// Create Account js file

let us = document.getElementById('us');
let em = document.getElementById('em');
let ps = document.getElementById('ps');
let create = document.getElementById('create')

create.addEventListener('click', function (){
    window.location.href = 'create.html';
})

function crt() {
    let allUserdata = JSON.parse(localStorage.getItem("userData")) || [];

    if (us.value === "" && em.value === "" && ps.value === "") {
        alert("Please fill all fields before creating an account!");
        return;
    }

    let userAlready = false;
    for (let i = 0; i < allUserdata.length; i++) {
        if (em.value === allUserdata[i].email) {
            userAlready = true;
            break;
        }
    }

    if (userAlready) {
        alert("Your account is already created, please login!")
        console.log("Your Account is Already Created");
        return ;
    } else {
        alert("Creating new account...")
        console.log("Creating new account...");
    }
    
    let userData = {
        user: us.value,
        email: em.value,
        pass: ps.value
    };

    allUserdata.push(userData);
    localStorage.setItem("userData", JSON.stringify(allUserdata));
    console.log("Account Created:", allUserdata);

    us.value = "";
    em.value = "";
    ps.value = "";

    window.location.href = "index.html";
}

console.log(window.location.pathname);