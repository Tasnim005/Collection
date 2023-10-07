document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener('click', addPost)

// function getText() {
//   fetch("sample.txt")
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// Using Arrow function
// Fetching a local text file
function getText() {
  fetch("sample.txt")
    .then((response) => response.text())
    // .then((data) => console.log(data));
    .then((data) => (document.getElementById("output").innerHTML = data))
    // To catch an error
    .catch((err) => console.log(err));
}

// Fetching a local JSON file
function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        output += `
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

// Fetching a JSON file from URL
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach((post)=>{
        output += `
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((response)=> response.json())
    .then((data)=> console.log(data))
}