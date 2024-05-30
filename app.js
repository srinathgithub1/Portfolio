const h2Ele=document.querySelector(".animation");
const careers=["Web - Developer", "Competitive Coder", "Instructor", "Freelancer"];
let ind=0;
let charind=0;
updateText();
function updateText(){
    charind++;
    h2Ele.innerHTML=`<h2>${careers[ind].slice(0,charind)}</h2>`;
    if(charind===careers[ind].length){
        charind=0;
        ind++;
    }
    if(ind===careers.length){
        ind=0;
    }
    setTimeout(updateText,200);
}

// menu bar
const root=document.querySelector(":root");
const bar=document.querySelector(".open-bar");
const cross=document.querySelector("#cross");
bar.addEventListener("click",()=>{
    root.style.setProperty("--bar-right","0px");
    bar.style.display="none";
});
cross.addEventListener("click",()=>{
    root.style.setProperty("--bar-right","-150px");
    bar.style.display="block";
})