// Universal File

let email = document.getElementById('email');
let password = document.getElementById('inp');
let icon = document.getElementById('ic');
let profile = document.getElementById('profile');

// Local Storage
let allUserdata = JSON.parse(localStorage.getItem("userData")) || [];

// Login Function
function login() {
    let emailLogin = email.value;
    let passwordLogin = password.value;
    let foundIndex = -1;

    if (emailLogin === "" && passwordLogin === "") {
        alert("Please fill all fields before login your account!");
        return;
    }

    for (let i = 0; i < allUserdata.length; i++) {
        if ((emailLogin === allUserdata[i].user || emailLogin === allUserdata[i].email) && passwordLogin === allUserdata[i].pass) {
            console.log('Your data is found');
            alert('Login Successful')
            foundIndex = i

            localStorage.setItem('login', 'true');
            localStorage.setItem('currentUser', JSON.stringify(allUserdata[i]));
            window.location.href = 'dashboard.html';
            return;
        }
    }

    console.log('Your data is not found');
    alert('Login Failed')
}

// Logout Function
function logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

let status = localStorage.getItem('login');
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('profile.html')) {
    if (!status) {
        window.location.href = 'index.html';
    } else {
        if (profile && currentUser) {
            profile.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${currentUser.user}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Password:</strong> ${currentUser.pass}</p><br>
                <button id="logout" onclick="logout()">logout</button>
            `;
        }
    }
}