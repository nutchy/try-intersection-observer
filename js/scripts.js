const section2 = document.querySelector('.section-2')
console.log(section2);
const observer = new IntersectionObserver((element) => {
  console.log(element);
})
observer.observe(section2);