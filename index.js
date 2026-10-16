import{S as w,a as u,i as m}from"./assets/vendor-CDIvIIN2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const q=new w(".gallery-link",{captionsData:"alt",captionDelay:250}),l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrapper"),loadMoreButton:document.querySelector(".load-more")},p=t=>{const a=t.map(({largeImageURL:i,webformatURL:o,tags:e,likes:r,views:n,comments:M,downloads:S})=>`
    <li class="gallery-item">
  	  <a class="gallery-link" href="${i}">
  	  	<img
  	  		class="gallery-image"
  	  		src="${o}"
  	  		alt="${e}"
  	  		/>
        <ul class="gallery-meta">
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Likes:</span>
            ${r}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Views:</span>
            ${n}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Comments:</span>
            ${M}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Downloads:</span>
            ${S}
          </li>
        </ul>
  	  </a>
    </li>
  `).join("");l.gallery.insertAdjacentHTML("beforeend",a),q.refresh()},v=()=>{l.gallery.innerHTML=""},y=()=>{l.loader.classList.remove("is-hidden")},h=()=>{l.loader.classList.add("is-hidden")},f=()=>{l.loadMoreButton.classList.remove("is-hidden")},P=()=>{l.loadMoreButton.classList.add("is-hidden")};u.defaults.baseURL="https://pixabay.com/api/";const L=async({query:t,page:a,perPage:i=15})=>{const o={key:"57971034-8c5a8e627d304003806052b2f",q:t,page:a,per_page:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await u.get("/",{params:o})).data},b={class:"message",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",theme:"dark",position:"topRight",maxWidth:"432px"},c=t=>{m.error({...b,title:"",message:t,backgroundColor:"#ef4040"})},x=t=>{m.info({...b,title:"",message:t,backgroundColor:"#3498db"})},g={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loadMoreButton:document.querySelector(".load-more")};let d="";const s={page:1,perPage:15,totalPages:0,reset:function(){this.page=1},setTotalPages:function(t){this.totalPages=Math.ceil(t/this.perPage)},isNextPage:function(){return this.page<this.totalPages},nextPage:function(){this.page++}},B=async t=>{try{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),!d){c("Query cannot be empty");return}v(),P(),y(),s.reset();const a=await L({query:d,page:s.page,perPage:s.perPage});if(a.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}s.setTotalPages(a.totalHits),p(a.hits),s.isNextPage()?f():x("We're sorry, but you've reached the end of search results.")}catch(a){c(`An error occurred: ${a.message}`)}finally{h()}},$=async()=>{try{P(),y(),s.nextPage();const t=await L({query:d,page:s.page,perPage:s.perPage});p(t.hits);const a=g.gallery.firstElementChild.getBoundingClientRect().height;scrollBy({top:a*2,behavior:"smooth"}),s.isNextPage()?f():x("We're sorry, but you've reached the end of search results.")}catch(t){c(`An error occurred: ${t.message}`)}finally{h()}};g.form.addEventListener("submit",B);g.loadMoreButton.addEventListener("click",$);
//# sourceMappingURL=index.js.map
