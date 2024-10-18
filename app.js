const btnModal = document.querySelector('.btn-modal')
const btnClose = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

btnModal.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('open-modal')
})
