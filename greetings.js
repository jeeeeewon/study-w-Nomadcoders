const loginForm=document.querySelector('#login-form');
const loginInput=document.querySelector('#login-form input');
const greeting=document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';  
//string으로만 이루어진 변수는 대문자로 표기
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value
    localStorage.setItem(USERNAME_KEY, typedUsername);
    // greeting.innerText = 'Hello ' + typedUsername + "!";
    paintGreetings(typedUsername);
}

const date = new Date();

function greetingSentence(USERNAME_KEY){
    if (date.getHours() > 6 && date.getHours() < 12){
        greeting.innerText = `Good morning, ${USERNAME_KEY}`
    } else if (date.getHours() >= 12 && date.getHours() < 19) {
        greeting.innerText = `Good afternoon, ${USERNAME_KEY}`
    } else if (19 <= date.getHours() && date.getHours() < 22){
        greeting.innerText = `Good evening, ${USERNAME_KEY}`
    } else {
        greeting.innerText = `Good night, ${USERNAME_KEY}`
    };
}

function paintGreetings(USERNAME_KEY){
    greetingSentence(USERNAME_KEY);
    //백틱(Caps+~)`${}` {}안에 변수넣으면 위의 두 코드 같은 뜻
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}