const images = document.querySelectorAll('.gallery-content img')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const closeBtn = document.querySelector('.close-btn')

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('active')
    modalImg.src = img.src
    modalImg.alt = img.alt
  })
})

closeBtn.addEventListener('click', e => {
  e.stopPropagation()
  modal.classList.remove('active')
})

modal.addEventListener('click', () => modal.classList.remove('active'))