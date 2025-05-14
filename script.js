function slide(sliderTrack, direction, itemWidth, maxOffset){
    const currentPosition = parseFloat(sliderTrack.style.transform.replace('translateX(', '').replace('px)', '') || 0);
    let newPosition = currentPosition;
  
    if(direction === 'next'){
      newPosition = currentPosition - itemWidth;
      if (newPosition < -maxOffset){
        newPosition = 0;
      }
    } else{
      newPosition = currentPosition + itemWidth;
      if (newPosition > 0){
        newPosition = -maxOffset;
      }
    }
  
    sliderTrack.style.transform = `translateX(${newPosition}px)`;
}
  
  function initializeSlider(sliderTrackClass){
    const sliderTrack = document.querySelector(sliderTrackClass);
    const images = sliderTrack.querySelectorAll('img');
    const itemWidth = images[0].offsetWidth + 10; // Ширина изображения + margin
    const maxOffset = (images.length - 1) * itemWidth;
  
    return{ sliderTrack, itemWidth, maxOffset};
}
  
  function prevSlide(){
    const { sliderTrack, itemWidth, maxOffset } = initializeSlider('.slider-track');
    slide(sliderTrack, 'prev', itemWidth, maxOffset);
}
  
  function nextSlide(){
    const { sliderTrack, itemWidth, maxOffset } = initializeSlider('.slider-track');
    slide(sliderTrack, 'next', itemWidth, maxOffset);
}
  
  function prevSlideOffice(){
    const { sliderTrack, itemWidth, maxOffset } = initializeSlider('.office-slider');
    slide(sliderTrack, 'prev', itemWidth, maxOffset);
}
  
  function nextSlideOffice(){
    const { sliderTrack, itemWidth, maxOffset } = initializeSlider('.office-slider');
    slide(sliderTrack, 'next', itemWidth, maxOffset);
}



const reviewItems = document.querySelectorAll('.review-item');

reviewItems.forEach(reviewItem => {
  reviewItem.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
















const modal = document.getElementById("myModal");
const openModalBtn = document.querySelectorAll(".service-button");
const closeModalBtn = document.getElementsByClassName("close")[0];
const form = document.getElementById("myForm");

openModalBtn.forEach(btn=>{
  btn.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display="block";
  });
});

closeModalBtn.onclick = function(){
  modal.style.display = "none";
};

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function(event){
  event.preventDefault();


  const name=document.getElementById("name").value;
  const phone=document.getElementById("phone").value;
  const email=document.getElementById("email").value;


  if (name&&phone&&email){
      console.log("Форма отправлена!");
      alert("Cпасибо! Ваша заявка отправлена.");
      modal.style.display = "none";
  } else {
      alert("Пожалуйста, заполните все поля!");
  }
});