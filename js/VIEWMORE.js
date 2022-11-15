const VIEWMORE = document.getElementById("VIEWMORE");
console.log(VIEWMORE);

const itemcontents4 = document.getElementById("itemcontents4");
console.log(itemcontents4);

const itemcontents5 = document.getElementById("itemcontents5");

VIEWMORE.addEventListener("click",()=>{
  itemcontents4.style.display = "flex";
  itemcontents5.style.display = "flex";
})

const VIEWMORE2 = document.getElementById("VIEWMORE2");

const NEWITEM2 = document.getElementById("newitem2");


VIEWMORE2.addEventListener("click",()=>{
  NEWITEM2.style.display = "flex";
})