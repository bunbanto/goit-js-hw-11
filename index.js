import{S as d,a as g,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h=document.querySelector(".gallery"),c=document.querySelector(".loader");function F(o){const t=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:m,comments:p,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}" >
        <img src="${a}" alt="${r}">
      </a>
      <div class="info">
        <p><b>Likes:</b> ${i}</p>
        <p><b>Views:</b> ${m}</p>
        <p><b>Comments:</b> ${p}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");h.innerHTML=t,new d(".gallery a",{captionsData:"alt"}).refresh()}function u(){c.style.display="block"}function l(){c.style.display="none"}const y="49548683-ee808159962119513bc31ef98",b="https://pixabay.com/api/";function L(o){return u(),g.get(b,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",per_page:"15",safesearch:!0}}).then(t=>(l(),t.data.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),t.data.hits)).catch(t=>(l(),n.error({message:"An error occurred while fetching images. Please try again later.",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"}),[]))}const B=document.querySelector(".form"),S=document.querySelector(".gallery");B.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search term!",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight"});return}u(),S.innerHTML="",L(t).then(s=>F(s)).catch(s=>n.error({message:s})).finally(()=>l())});
//# sourceMappingURL=index.js.map
