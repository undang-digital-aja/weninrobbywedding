// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		toggleNav = document.getElementById('nav-toggle'),
		closeNav = document.getElementById('nav-close');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MOBILE MENU ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// ===== end remove mobile menu ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active menu ===== //

/* ===== COUNTDOWN TIMER ===== */
const countdownDate = new Date("May 15, 2022 11:00:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
   }
}, 1000);
// ===== end countdown timer ===== //

// ===== BACKSOUND ===== //
const backsound = document.getElementById('song'),
backsoundIcon = document.getElementById('backsound-icon'),
popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	backsound.play();
	backsoundIcon.src = "assets/img/pause.png";
})

backsoundIcon.onclick = ()=>{
	if(backsound.paused){
		backsound.play();
		backsoundIcon.src = "assets/img/pause.png";
	}else{
		backsound.pause();
		backsoundIcon.src = "assets/img/play.png";
	}
}
// ===== end backsound ===== //

// ===== WEDDING GIFT ===== //
const giftButton = document.getElementById('gift-button'),
		giftRekening = document.getElementById('gift-rekening');

giftButton.addEventListener('click', ()=>{
	giftRekening.classList.add('show-rekening');
	giftButton.style.marginBottom = "3rem";
});

const bca = document.getElementById('bca'),
		bri = document.getElementById('bri');
const copyBca = document.querySelector('.copy__bca'),
		copyBri = document.querySelector('.copy__bri');

copyBca.addEventListener('click', ()=>{
	document.execCommand("copy");
});
copyBri.addEventListener('click', ()=>{
	document.execCommand("copy");
});

copyBca.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bca.textContent);
		alert("BCA Copied")
	}else{
		alert("Not copied!")
	}
});
copyBri.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bri.textContent);
		alert("BRI Copied")
	}else{
		alert("Not Copied!")
	}
});
// ===== end wedding gift ===== //

/* ===== POPUP ===== */
const popup = document.getElementById('popup');
// const popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	popup.style.display = 'none';
});
// ===== end popup ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__img-mobile, .home__description.mobile

// 2. quotes -> .quotes__container

// 3. couple -> .couple__container

// 4. event -> .event__box, .event__line
const eventBox = document.querySelectorAll('.event__box');
eventBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 5. timer -> .timer__box
const timerBox = document.querySelectorAll('.timer__box');
timerBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 6. gallery -> .gallery__box
const galleryBox = document.querySelectorAll('.gallery__box');
galleryBox.forEach((img, i) => {
	img.dataset.aos = 'zoom-in-down';
	img.dataset.aosDelay = i * 100;
});

// 7. video -> .video__container

// 8. pray -> .pray__container

// 9. prokes -> prokes__content

// 10. footer -> .footer__box
const footerBox = document.querySelectorAll('.footer__box');
footerBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //