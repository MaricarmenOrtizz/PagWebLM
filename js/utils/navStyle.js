const navLinksElements = document.querySelectorAll('.menu-item-link');
const windowPathName = window.location.pathname;

const btnNavbar = document.getElementById("btn-navbar");
const menu = document.getElementsByClassName("menu");

btnNavbar.addEventListener("click", () => {
  if (menu[0].classList.contains("active")) menu[0].classList.remove("active");
  else menu[0].classList.add("active");
});

navLinksElements.forEach(e => {
  const navLinkPathName = new URL(e.href).pathname;
  if(windowPathName === navLinkPathName){
    e.classList.add('active');
  }
});

const header = document.querySelector('header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "80px 0px 0px 0px"});

navObserver.observe(scrollWatcher);
