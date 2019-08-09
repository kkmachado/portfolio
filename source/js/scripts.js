var navbar = document.querySelector('#nav');

if (navbar) {
  window.onscroll = function () {
    if (this.scrollY > 300) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
  };
}