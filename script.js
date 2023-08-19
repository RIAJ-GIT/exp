const accesskey = "q5RWZM-S-K2nmQJl6rJVr-hCpz81dVMl0si1fNLx2zo";
const formEl = document.querySelector("form");
const inputEl =document.querySelector("search-input");
const result = document.querySelector(".search-result");
const showmore = document.querySelector("show-more");

let inputdata ="";
 let page = 1;
 async function searchImages(){
    inputdata= inputEl.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

const response =await fetch(url);
const data =await response.json();
// the images are stored in results 
const results = data.result;

if(page ===1) {
    // now i will use the images from results
    result.innerHTML="";
}
results.map((result)=>{
const immagewaper = document.createElement("div");
immagewaper.classList.add("search-result");
const image = document.createElement("img");
image.src=result.urls.small
const imagelink= document.createElement("a");
imagelink.href=result.links.html;
imagelink.target="_blank";
immagewaper.appendChild(image);
immagewaper.appendChild(imagelink);
immagewaper.appendChild(immagewaper);
});

page++;
if(page >1)
{showmore.style.display="block";
}
 } 
 formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();

 });
    
 showmore.addEventListener("click",()=>{
    searchImages();
   
 });