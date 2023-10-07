function myFunction(){
    const input = document.getElementById('myInput')
    const filter = input.value.toUpperCase()
    const ul = document.getElementById("myUL")
    const li = document.querySelectorAll('li')

    for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
    }
}