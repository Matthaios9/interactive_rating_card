//seletced rating
let buttonClicked = null;
let rating = document.querySelector(".ratingBtn");
let ratingBtn = document.querySelector(".ratingBtn");
  function highlight(id)
   {
    if(buttonClicked != null)
    {
        buttonClicked.style.background = "grey";
        buttonClicked.style.color="black";
    }

 
    buttonClicked  = document.getElementById(id);
    buttonClicked.style.background =  "hsl(217, 12%, 63%)";
    buttonClicked.style.color="white";
    ratingBtn.innerText = "You selected " + buttonClicked.innerText + " out of 5";
   }

//show popupContainer
let popupContainer = document.querySelector(".popup__container");
let cardContainer = document.querySelector(".card__container");
let submitBtn = document.querySelector(".submitBtn");


submitBtn.addEventListener('click', ()=>{
    if(buttonClicked === null){
        return alert("Please select rating");
    }else{
        popupContainer.classList.add("active");
        cardContainer.classList.add("inactive");
    }
});
