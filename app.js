'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const {companies,cases}=PORTFOLIO;
const career=document.querySelector('#career-list');
career.innerHTML=companies.map(c=>`<a class="career-row" href="#case-${c.start}"><span class="date">${esc(c.period)}<small>${esc(c.duration)}</small></span><strong>${esc(c.name)}</strong><span class="role">${esc(c.role)}<small>${esc(c.intro)}</small></span><span class="arrow">→</span></a>`).join('');
const filters=document.querySelector('#filters');
filters.innerHTML=[{key:'all',name:'전체'},...companies].map(c=>`<button type="button" data-company="${c.key}" aria-pressed="${c.key==='all'}">${esc(c.name)}</button>`).join('');
function evidenceHTML(c,special){
const originals=c.originals;
const pictures=originals||[{src:c.image,label:c.title}];
return `<figure class="evidence ${special?'full':''} ${originals?'original-evidence':''}"><div style="--image-count:${pictures.length}" class="evidence-gallery ${originals&&originals.length>1?'phone-gallery':''}">${pictures.map(p=>`<div><button type="button" class="evidence-button" data-image="${p.src}" data-title="${esc(p.label)}" aria-label="${esc(p.label)} 자료 확대"><img src="${p.src}" alt="${esc(p.label)}" loading="eager" decoding="async"><span class="zoom">자료 확대</span></button></div>`).join('')}</div></figure>`;
}
function caseHTML(c){const special=c.page===22;return `<article class="project ${special?'special':''}" id="${c.id}"><header class="project-header"><p class="eyebrow">${esc(companies.find(x=>x.key===c.company).name)} / PROJECT ${String(cases.indexOf(c)+1).padStart(2,'0')}</p><h3>${esc(c.title)}</h3></header><div class="project-body"><div class="project-copy">${c.sections.map((s,i)=>`<section class="${!special&&i===2?'results':''}"><h4>${esc(s.title)}</h4><ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`).join('')}${c.role?`<dl class="project-meta"><dt>담당 역할</dt><dd>${esc(c.role)}</dd><dt>기여도</dt><dd>${esc(c.contribution)}</dd>${c.team?`<dt>협업 구성</dt><dd>${esc(c.team)}</dd>`:''}</dl>`:''}</div>${evidenceHTML(c,special)}</div></article>`}
document.querySelector('#case-list').innerHTML=companies.map(c=>`<div class="company-group" data-group="${c.key}" ${c.key==='all'?'':'hidden'}><header class="company-heading"><div><h3>${esc(c.name)}</h3><p>${esc(c.intro)}</p></div></header>${cases.filter(x=>x.company===c.key).map(caseHTML).join('')}</div>`).join('');
function selectCompany(key){document.querySelectorAll('[data-company]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.company===key)));document.querySelectorAll('[data-group]').forEach(g=>g.hidden=key!=='all'&&g.dataset.group!==key);const selected=cases.filter(c=>key==='all'||c.company===key);document.querySelector('#project-count').textContent=`${selected.length}개 프로젝트`;}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(b)selectCompany(b.dataset.company)});
function revealHash(){const id=location.hash.slice(1);const c=cases.find(x=>x.id===id);if(!c)return;selectCompany(c.company);requestAnimationFrame(()=>document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'}))}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#case-"]');if(a){const c=cases.find(x=>`#${x.id}`===a.getAttribute('href'));if(c)selectCompany(c.company)}});
window.addEventListener('hashchange',revealHash);selectCompany('all');if(location.hash)revealHash();
const dialog=document.querySelector('#viewer'),viewerImg=document.querySelector('#viewer-image');let lastTrigger;
document.querySelector('#case-list').addEventListener('click',e=>{const b=e.target.closest('[data-image]');if(!b)return;lastTrigger=b;viewerImg.src=b.dataset.image;viewerImg.alt=b.dataset.title;document.querySelector('#viewer-title').textContent=b.dataset.title;document.querySelector('#original-link').href=b.dataset.image;dialog.showModal();document.body.style.overflow='hidden'});
function closeViewer(){dialog.close()}
document.querySelector('#close-viewer').addEventListener('click',closeViewer);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeViewer()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus()});
