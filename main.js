var openModal = document.getElementById("displayModal")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".closeModal")

openModal.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.add("modal--show")
})

closeModal.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("modal--show")
})
const empresas = document.getElementById("modalEnterprise")
empresas.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("modal--show")
    openModal.innerHTML="EMPRESAS"
    localStorage.setItem ("login","empresa")
    openModal.style.backgroundColor="#17a2b8"
})
const organizaciones = document.getElementById("modalOrganization")
organizaciones.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("modal--show")
    openModal.innerHTML="ORGANIZACIONES"
    localStorage.setItem ("login","organizaciones")
    openModal.style.backgroundColor="#5227cc"
})

function pageLoad(){
    if(localStorage.getItem("login")=="empresa"){
        openModal.innerHTML="EMPRESAS"
        openModal.style.backgroundColor="#17a2b8"
    }
    else if(localStorage.getItem("login")=="organizaciones"){
        openModal.innerHTML="ORGANIZACIONES"
        openModal.style.backgroundColor="#5227cc"
    }
}

const botonEnviar = document.getElementById("sendForm")
botonEnviar.addEventListener("click",validationForm)

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validationForm(){
    const email = document.getElementById("in1")
    const telefono = document.getElementById("in2")
    const mensaje = document.getElementById("messageInput")
    let esValido = false;
    esValido = validateEmail(email.value) && telefono.value!="" && mensaje.value != ""
    if(!esValido){
        alert("Ingrese todos los datos.")
    }
}
