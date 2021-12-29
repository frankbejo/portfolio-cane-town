//inputs
const email = document.querySelector('#email').value;
const pass = document.querySelector('#pass').value;

const notif = document.querySelector('.notif');

const login = document.querySelector('#login-btn');
login.addEventListener('click', Login);

function Login(){
    if(email === ''|| pass === ''){
        notif.innerHTML = 
        `
        <div class = 'container'>
        <div class = 'error'> 
            <span>Invalid Input</span> 
            <div>
                <i class = 'material-icons'>close</i>
            </div>
        </div>
        </div>
        `;
    }

    setTimeout(() => {
        notif.innerHTML = "";
    }, 3000);
}