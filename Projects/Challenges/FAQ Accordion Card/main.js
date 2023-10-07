const accordionContent = document.querySelectorAll(".content");
const accordionTrigger = document.querySelectorAll("button");
const questionTrigger = document.querySelectorAll(".question")
const question = document.querySelectorAll(".question p")
const answer = document.querySelectorAll(".content p")

for (let i = 0; i < accordionTrigger.length; i++) {
  accordionTrigger[i].addEventListener("click", slide);
  function slide() {
    accordionContent[i].classList.toggle("closed");
    accordionTrigger[i].classList.toggle("rotation");
    answer[i].classList.toggle('open');

    if(answer[i].classList.value === "open"){
      question[i].style.fontWeight = "bold";
    }else{
      question[i].style.fontWeight = "normal";
    }

    console.log(answer[i])

  }
}

