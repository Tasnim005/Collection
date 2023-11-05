const prevButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')

const wrapper = document.querySelectorAll('.wrapper')

// wrapper[1].style.display = 'block'

nextButton.addEventListener('click', forward)
prevButton.addEventListener('click', backward)

let i = 0

function forward() {
    i++
    // wrapper[i].classList.toggle('active')
    // console.log(i)
    updateIndex()
}

function backward() {
    i--
    // console.log(i)
    updateIndex()
}

function updateIndex() {
    const index = i
    wrapper[index].classList.toggle('active')
}