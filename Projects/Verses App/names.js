const main = document.querySelector('main')

async function fetchData() {
    const response = await fetch('names.json')
    const data = await response.json()

    const names = data.data
    console.log(names)

    names.forEach(item => {
        const name = item.name
        const transliteration = item.transliteration
        const eng = item.en.meaning
        const number = item.number
        
        populateDOM(name, transliteration, eng, number)
    });
} 


function populateDOM(arabic, trans, english, number){
    const box = document.createElement('div')
    box.classList = 'box'
    main.append(box)

    const arabicName = document.createElement('p')
    arabicName.classList = 'arabicName'
    arabicName.innerText = arabic
    box.append(arabicName)

    const transliteration = document.createElement('p')
    transliteration.classList = 'transliteration'
    transliteration.innerText = trans
    box.append(transliteration)


    const meaning = document.createElement('p')
    meaning.classList = 'meaning'
    meaning.innerText = english
    box.append(meaning)

    const serial = document.createElement('p')
    serial.classList = 'serial'
    serial.innerText = number
    // box.append(serial)
}

fetchData()
