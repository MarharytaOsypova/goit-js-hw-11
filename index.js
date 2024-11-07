import{a as m,i,S as p}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="46831660-d1aa08367accf9e9e1755dc5b",h="https://pixabay.com/api/";async function y(a,o=1){try{const t=await m.get(`${h}`,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});if(t.data.hits.length===0)throw new Error("No images found");return t.data}catch(t){throw console.error("Error fetching images:",t),t}}function b(a){const o=document.querySelector(".gallery");o.innerHTML="";const t=a.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:d,comments:u,downloads:f})=>`
        <div class="photo-card">
            <a href="${e}" data-lightbox="image" data-title="${r}">
                <img src="${s}" alt="${r}" loading="lazy" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${n}</p>
                <p><b>Views:</b> ${d}</p>
                <p><b>Comments:</b> ${u}</p>
                <p><b>Downloads:</b> ${f}</p>
            </div>
        </div>
    `).join("");o.insertAdjacentHTML("beforeend",t)}const c=document.querySelector(".search-form"),l=document.querySelector(".loader");c.addEventListener("submit",a=>{a.preventDefault();const o=c.elements.query.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term."});return}l.style.display="block",y(o).then(t=>{t.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(t),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Please try again."})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
