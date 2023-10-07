const carousel = document.getElementById('carousel')
const slides = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.carousel-button.prev')
const nextButton = document.querySelector('.carousel-button.next')

let activeSlide = 0

prevButton.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide<0){
        activeSlide = slides.length-1
    }

    setBgToBody()
    setActiveSlide()
})

nextButton.addEventListener('click', ()=>{
    activeSlide++
    if(activeSlide > slides.length-1){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

function setBgToBody(){
    carousel.style.backgroundImage = slides[activeSlide]
}

function setActiveSlide(){
    slides.forEach(
        function(slide){
            slide.classList.remove('active')
        }
    )
    slides[activeSlide].classList.add('active')
    

}
