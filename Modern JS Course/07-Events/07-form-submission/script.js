const form = document.getElementById('item-form')

function onSubmit(e){
  e.preventDefault()
  console.log('submit');
  
  const item = document.getElementById('item-input').value
  const priority = document.getElementById('priority-input').value

  if(item==='' || priority==='0'){
    alert('Please fill in all fields')
    return;
  }

  console.log(item, priority);
}

function onSubmit2(e){
  e.preventDefault()
  
  const formData = new FormData(form)
  console.log(formData);

  // const item = formData.get('item') //Here, 'item' is the name on the form in our HTML file
  // const priority = formData.get('priority')
  // console.log(item, priority)

  const entries = formData.entries()
  console.log(entries);
  
  for(let entry of entries){
    console.log(entry);
    console.log(entry[0]);
    console.log(entry[1]);
  }

}

form.addEventListener('submit', onSubmit)
form.addEventListener('submit', onSubmit2)
