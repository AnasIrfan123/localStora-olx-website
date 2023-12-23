
// *************** Theme color function *************************
function updateTheme(color){
    const body = document.getElementsByTagName('body')[0]
    body.className = `${color}-theme`
}


function onLogin(){
    const allInputs = document.getElementsByTagName('input')
    const email = allInputs[0]
    const password = allInputs[1]

    const users = JSON.parse(localStorage.getItem('users'))

    var found = false
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email.value && users[i].password === password.value){
            alert('Logged In successfully!')
            found = true

            window.location.href = './src/signup/dashboard/index.html'

            break;
        }
    }
    if (!found) {
        alert('invalid email/password')
    }
}

//ya to login par ya to dashboard par hoga login hon to login link par user name aye


