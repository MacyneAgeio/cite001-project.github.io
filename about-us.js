/* -- First Function used but failed due to unknown incompatibility or errors --
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
   
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
   
}
*/

const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click', () => {
    modal_container1.classList.add('show');
})

close1.addEventListener('click', () => {
    modal_container1.classList.remove('show');
})

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
    modal_container2.classList.add('show');
})

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
})