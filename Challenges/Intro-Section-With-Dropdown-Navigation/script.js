const features = document.getElementById('features')
const company = document.getElementById('company')
const featureDropdown = document.querySelector('.dropdown.one')
const companyDropdown = document.querySelector('.dropdown.two')

features.addEventListener('click', ()=>{
    featureDropdown.classList.toggle('active') 
})

company.addEventListener('click', ()=>{
    companyDropdown.classList.toggle('active') 
})

console.log(company)