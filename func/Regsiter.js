const formRegister = document.getElementById('formRegister');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');

// const userRegistered = [];
let id = 0;

export const userRegistered = JSON.parse(localStorage.getItem('user')) || [];



formRegister.addEventListener("submit", registerUser);


// Registrar Usuario

export function registerUser(event){
    // Prevenir eventos precargados
    event.preventDefault();
    // Agregar un id
    // id++;
    // Crear un objeto con los datos del usuario
    const newUser = {
        id: new Date().getTime(),
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        favoritos: [],
    };
    // Validar que los campos no esten vacios
    if (
        userName.value === '' || 
        userEmail.value === '' || 
        userPassword.value === ''
    ){
        console.log('Por favor, llene todos los campos');
        // alert('Por favor, llene todos los campos');
    }
    // Validar que el usuario no este registrado
    else if (userRegistered.find(user => user.email === userEmail.value)){
        alert('El usuario ya esta registrado');
    }
    // Registrar usuario
    else {
        userRegistered.push(newUser);
        localStorage.setItem('users', JSON.stringify(userRegistered));
        alert('Usuario registrado correctamente');
        window.location.href = 'LogIn.html';
   
    // Limpiar campos
        userName.value = '';
        userEmail.value = '';
        userPassword.value = '';
    }
}