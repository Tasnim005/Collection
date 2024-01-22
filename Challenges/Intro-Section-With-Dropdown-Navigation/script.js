const features = document.getElementById('features')
const company = document.getElementById('company')
const dropdowns = document.querySelectorAll('.dropdown')

features.addEventListener('click', ()=>{
    dropdowns[0].classList.toggle('active') 
})

company.addEventListener('click', ()=>{
    dropdowns[1].classList.toggle('active') 
})

console.log(company)