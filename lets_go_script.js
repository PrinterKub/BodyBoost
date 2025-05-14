document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault();


    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    let isValid=true

    if(username===''){
        document.getElementById('usernameError').textContent='Это обязательное поле.';
        isValid=false;
    } 
    else{
        document.getElementById('usernameError').textContent='';
    }

    let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent='Такой почты не существует'
        isValid=false;
    }
    else{
        document.getElementById('emailError').textContent='';
    }

    if(password.length<6){
        document.getElementById('passwordError').textContent='Пароль должен содержать не менее 6 символов'
        isValid=false
    }
    else{
        document.getElementById('passwordError').textContent=''
    }

    if(checkbox===false){
        document.getElementById('checkError').textContent='Это подтверждение обязательно'
        isValid=false
    }
    else{
        document.getElementById('checkError').textContent=''
    }

    if(isValid){
        alert('Форма успешно отправлена!');
    }
});