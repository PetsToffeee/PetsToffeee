const imageSlide = document.querySelector('.image-slide');
const slideImages = document.querySelectorAll('.image-slide .mySlides');

//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = slideImages[0].clientWidth;

imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button Listeners
nextBtn.addEventListener('click', () => {
	if(counter >= slideImages.length -1)return;
	imageSlide.style.transition = "transform 0.9s ease-in-out";
	counter++;
	imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	console.log(counter);
	});

prevBtn.addEventListener('click', () => {
	if(counter <= 0)return;
	imageSlide.style.transition = "transform 0.9s ease-in-out";
	counter--;
	imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	console.log(counter);
	});

imageSlide.addEventListener('transitionend', () => {
	if(slideImages[counter].id === 'lastClone') {
		imageSlide.style.transition = "none";
		counter = slideImages.length -2 ;
		imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(slideImages[counter].id === 'firstClone') {
		imageSlide.style.transition = "none";
		counter = slideImages.length - counter;
		imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});