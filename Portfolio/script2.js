const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 200)
});

const btnScrollToTop = document.getElementById('btnScrollToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    btnScrollToTop.classList.add('show');
  } else {
    btnScrollToTop.classList.remove('show');
  }
});

btnScrollToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});