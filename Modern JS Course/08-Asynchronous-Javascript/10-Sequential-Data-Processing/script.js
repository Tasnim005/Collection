async function fetchData(url){
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(`HTTP error! Status:${response.status}`)
        }

        const userData = await response.json()
        console.log(userData)
    }
    catch(error){
        console.log('An error occured', error)
    }
}

async function userInfo(){
    const emails = await fetchData('https://jsonplaceholder.typicode.com/users')

    const todos = await fetchData('https://jsonplaceholder.typicode.com/todos')

    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts')
}

userInfo()

// In Case 1, you have a single userInfo function that fetches user data, todos, and posts one after the other sequentially. The key points are:
// Each data fetch operation (fetchData) is performed one at a time, waiting for the previous one to complete before starting the next.
// If any of the fetch operations fail (e.g., due to network issues or response errors), an error is caught and logged, but the subsequent fetch operations continue.
// This approach is straightforward and ensures that data is fetched in a specific order. However, it can be slow when dealing with multiple API calls, as it doesn't take full advantage of parallelism.