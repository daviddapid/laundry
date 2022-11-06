const hamburger = document.querySelector(('.hamburger .modal-button'))
const hamburgerModal = document.querySelector('.hamburger .modal')
const drawerCloseButton = document.querySelector('.hamburger .close-modal')

hamburger.addEventListener('click', ()=>{
    console.log('ok')
    hamburgerModal.classList.add('active')
})

drawerCloseButton.addEventListener('click', ()=>{
    console.log('yoi')
    hamburgerModal.classList.add('close')
    setTimeout(() => {
        hamburgerModal.classList.remove('active')
        hamburgerModal.classList.remove('close')
    }, 1000);
})