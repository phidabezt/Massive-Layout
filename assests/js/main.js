
// Scrolled navbar changes style
const navbar = document.querySelector("#navbar")
window.onscroll = function () {
  scrollFunction()
};


function scrollFunction() {
  if (navbar.clientWidth > 768.98) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("navbar").style.padding = "0 10px";
      document.getElementById("navbar").style.height = "50px";
      document.getElementById("navbar").style.backgroundColor = "hsla(0, 0%, 0%, 0.91)";
      document.getElementById("logo").style.width = "70%";
      document.getElementById("logo").style.transform = "translate(25%, 25%)";
    } else {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("navbar").style.height = "100px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("logo").style.width = "100%";
      document.getElementById("logo").style.transform = "translate(0%, 0%)";
    }
  } else {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("logo").style.width = "100%";
    document.getElementById("navbarNav").style.height = "500px";
    document.getElementById("navbar").style.padding = "0 0";
  }
}

// counter 
const counters = document.querySelectorAll('.counter .digit')
counters.forEach(counter => {
  counter.innerHTML = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increment = target / 500

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`

      setTimeout(updateCounter, 10)
    }
  }
  updateCounter()
})

// scoll to top
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
})