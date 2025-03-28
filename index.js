import{a as d,i as n,S as m}from"./assets/vendor-CZCqCKWq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="49548683-ee808159962119513bc31ef98",g="https://pixabay.com/api/";function p(o){return d.get(g,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(t.data.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),t.data.hits)).catch(t=>(n.error({message:"An error occurred while fetching images. Please try again later.",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),[]))}const h=document.querySelector(".gallery");function F(o){const t=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:l,comments:c,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}" >
        <img src="${a}" alt="${r}">
      </a>
      <div class="info">
        <p><b>Likes:</b> ${i}</p>
        <p><b>Views:</b> ${l}</p>
        <p><b>Comments:</b> ${c}</p>
        <p><b>Downloads:</b> ${u}</p>
      </div>
    </li>
  `).join("");h.innerHTML=t,new m(".gallery a",{captionsData:"alt"}).refresh()}function y(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form"),B=document.querySelector(".gallery");L.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search term!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"});return}B.innerHTML="",y(),p(t).then(s=>F(s)).catch(s=>n.error({message:s})).finally(()=>b())});
//# sourceMappingURL=index.js.map
