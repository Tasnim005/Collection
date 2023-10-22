// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json))

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const userData = await response.json()
        console.log(userData)
    } 
    catch (error) {
        console.log('An error occurred:', error)
    }

}

fetchUserData()