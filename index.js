import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(i,o="horizontal"){return fetch(`https://pixabay.com/api/?key=45808598-d89d2298a0dffc9605af6e928&q=${i}&image_type=photo&orientation=${o}&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(t.hits.length===0)throw c.error({position:"topLeft",message:"Sorry, there are no images matching your search query. Please, try again!"}),new Error(t.statusText);return t}).catch(t=>{console.log(t)})}function p(i,o){const t=i.map(e=>`<li class="photo-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <div class="card-content">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      <ul class="card-info-list">
        <li class="info-item">
          <p class="info-description">Likes</p>
          <p class="info-description-value">${e.likes}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Views</p>
          <p class="info-description-value">${e.views}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Comments</p>
          <p class="info-description-value">${e.comments}</p>
        </li>
        <li class="info-item">
          <p class="info-description">Downloads</p>
          <p class="info-description-value">${e.downloads}</p>
        </li>
      </ul>
    </div>
  </a>
</li>
`).join("");o.innerHTML=t,new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const d=document.querySelector(".form"),a=document.querySelector(".input-seach"),l=document.querySelector(".gallery");d.addEventListener("submit",i=>{i.preventDefault();const o=a.value.trim();l.innerHTML="",u(o).then(t=>{t.hits.length!==0&&p(t.hits,l)}).catch(t=>{console.error("Error fetching images:",t)}).finally(()=>{a.value=""})});
//# sourceMappingURL=index.js.map
