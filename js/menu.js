const HEADER = document.getElementById("header");
const HEADERHEIGHT = HEADER.getBoundingClientRect().height;

console.log(HEADERHEIGHT);

console.log(HEADER);


window.addEventListener("mousewheel", ()=>{
  if(window.scrollY > HEADERHEIGHT) {
    HEADER.style.backgroundColor = "rgba(255, 255, 255, 0.651)";
  } else {
    HEADER.style.backgroundColor = "white";
  }
});
