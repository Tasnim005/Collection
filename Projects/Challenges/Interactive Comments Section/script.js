fetch('data.json')
.then((response)=>response.json())
.then((json)=>{
    console.log(json);

    const name = document.querySelectorAll('.name.main')
    name.forEach((item,index) => {
        item.textContent = json.comments[index].user.username
    });

    // const nestedName = document.querySelectorAll('.name')
    // nestedName.forEach((item,index) => {
    //     item.textContent = json.comments[1].replies[index].user.username
    // });

    const commentText = document.querySelectorAll('.text.main')
    commentText.forEach((item,index) => {
        item.textContent = json.comments[index].content
    });

    console.log(json.comments[1].replies[0].user.username);
    
})
