let menuOpener = document.querySelector('.main-nav-open');
let menuCloser = document.querySelector('.main-nav-close');
let mobileNav = document.querySelector('.main-nav-mobile');

menuOpener.onclick = function() {
	mobileNav.style.display = 'block';
}

menuCloser.onclick = function() {
	mobileNav.style.display = 'none';
}