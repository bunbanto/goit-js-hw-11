import{a as u,i as n,S as d}from"./assets/vendor-CZCqCKWq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="49548683-ee808159962119513bc31ef98",f="https://pixabay.com/api/";function p(o){return u.get(f,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(t.data.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),t.data.hits)).catch(t=>(n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),[]))}const g=document.querySelector(".gallery");function F(o){const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:l,downloads:c})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}" >
        <img src="${i}" alt="${e}">
      </a>
      <div class="info">
        <p><b>👍 Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${l}</p>
        <p><b>Downloads:</b> ${c}</p>
      </div>
    </li>
  `).join("");g.innerHTML=t,new d(".gallery a",{captionsData:"alt"})}function h(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form"),L=document.querySelector(".gallery");b.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search term!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"});return}L.innerHTML="",h(),p(t).then(i=>F(i)).catch(i=>n.error({message:i})).finally(()=>y())});
//# sourceMappingURL=index.js.map
