const features = document.getElementById('features')
const company = document.getElementById('company')
const featureDropdown = document.querySelector('.dropdown.one')
const companyDropdown = document.querySelector('.dropdown.two')

const heroImage = document.getElementById('hero');

if (window.innerWidth <= 500) {
    heroImage.setAttribute('src', 'images/image-hero-mobile.png');
}

features.addEventListener('click', () => {
    featureDropdown.classList.toggle('active')
})

company.addEventListener('click', () => {
    companyDropdown.classList.toggle('active')
})

console.log(company)

