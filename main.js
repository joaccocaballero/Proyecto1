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
function onload(){
    if(localStorage.getItem("login")=="empresa"){
        openModal.innerHTML="EMPRESAS"
        openModal.style.backgroundColor="#17a2b8"
    }
    else if(localStorage.getItem("login")=="organizaciones"){
        openModal.innerHTML="ORGANIZACIONES"
        openModal.style.backgroundColor="#5227cc"
    }
}
