// My solution
function showKeyCodes(e){
    const keyContainer = document.querySelector('.key p')
    const unicode = document.querySelector('.unicode p')
    const location = document.querySelector('.location p')

    if(e.key === ' '){
        keyContainer.textContent = 'Space'
    }else{
        keyContainer.textContent = e.key
    }

    unicode.textContent = e.keyCode
    location.textContent = e.code
}

document.body.addEventListener('keydown',  showKeyCodes)

// Alterate
// function showKeyCodes(e){
//     const insert = document.getElementById('insert')
//     insert.innerHTML = ''

//      const keyCodes = {
//         'e.key' : e.key === ' ' ? 'Space' : e.key,
//         'e.keyCode' : e.keyCode,
//         'e.code' : e.code
//      }

//      console.log(keyCodes);
     
//      for(let key in keyCodes){
//         const div = document.createElement('div')
//         div.className = 'key'

//         const small = document.createElement('small')

//         const keyText = document.createTextNode(key)
//         const valueText = document.createTextNode(keyCodes[key])

//         small.appendChild(keyText)
//         div.appendChild(valueText)
//         div.appendChild(small)

//         insert.appendChild(div)
//      }
// }



// window.addEventListener('keydown', showKeyCodes)