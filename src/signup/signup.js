//regex signup par he lgta ha
const users = JSON.parse(localStorage.getItem('users')) || []
//phly is m empty arr rkha tha or browser me jb hm kxh push krte to again page reload hota or empty arr ata or porane users chale jate 
//to hmne 1 condit lgae localStorage me users to nh parehoey agr localstor me hn to wo leaye or empty ha to wo assign krde/wo leaye
//or neechy se setItem kr k push kr rahy thy

function onSignup(){
     const allInputs = document.getElementsByTagName('input')
     const FullName = allInputs[0]
     const email = allInputs[1]
     const password = allInputs[2]
     const confirmPassword = allInputs[3]

     if (!FullName.value || !email.value || !password.value || !confirmPassword.value){
        alert('please fill out the proper all input fields')
        return
     }

     if (FullName.value.length < 2) {
        alert('please insert your FullName with minimum 3 letters!')
        return
     }

     //email condition

     // Validate email format
     if (!isValidEmail(email.value)) {
        alert('Please insert a proper email');
        return;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

     if (password.value !== confirmPassword.value) {
        alert('Password is not matchable with confirm password!')
        return
     }
      //Sign ka form submit hojaega!
    //localStorage

    // console.log(FullName.value);
    // console.log(email.value);
    // console.log(password.value); //ab ye value loop k zariye bhn conso me dekh sakte thy

    const user = {
        FullName: FullName.value,
        email: email.value,
        password: password.value
    }
    users.push(user)

   localStorage.setItem('users', JSON.stringify(users))

   alert('Registered Successfully!')

   // for (var i = 0; i < allInputs.value.length; i++) {
   //    allInputs.value = ''
   // }
   for (var i = 0; i < allInputs.length; i++){
      allInputs[i].value = '' //data localstorage me save k bad allinputs empty
   }
}


//idhr mre khyal sy hm phly local storage ka variab me localstorage sy get karegy phir
//loop chlayengy or loop k bad 1 conditon sy login ki jga name laengy or login link ko  css me hide karengy











