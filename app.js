'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const {companies,cases}=PORTFOLIO;
const career=document.querySelector('#career-list');
career.innerHTML=companies.map(c=>`<a class="career-row" href="#case-${c.start}"><span class="date">${esc(c.period)}<small>${esc(c.duration)}</small></span><strong>${esc(c.name)}</strong><span class="role"><span class="role-heading">${esc(c.role)}${c.rank?`<span class="rank-tag">${esc(c.rank)}</span>`:""}</span><small>${esc(c.intro)}</small></span><span class="arrow">→</span></a>`).join('');
const filters=document.querySelector('#filters');
filters.innerHTML=[{key:'all',name:'전체'},...companies].map(c=>`<button type="button" data-company="${c.key}" aria-pressed="${c.key==='all'}">${esc(c.name)}</button>`).join('');
function previewWidth(p,count){
  if(!p.width||!p.height)return 560;
  const ratio=p.width/p.height;
  const portrait=ratio<.72;
  const height=portrait?480:(p.wide||count===1?380:250);
  const width=portrait?270:(p.wide||count===1?560:300);
  return Math.round(Math.min(width,height*ratio,p.width));
}
function evidenceHTML(c,special){
const originals=c.originals;
const pictures=originals||[{src:c.image,label:c.title}];
const steps=c.evaluationSteps?`<ol class="evaluation-steps">${c.evaluationSteps.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>`:'';
return `<figure class="evidence ${special?'full':''} ${originals?'original-evidence':''} ${c.responseExamples?'response-examples':''}">${c.evidenceTitle?`<figcaption class="evidence-title">${esc(c.evidenceTitle)}</figcaption>`:""}${steps}<div style="--image-count:${c.galleryColumns||pictures.length}" class="evidence-gallery ${originals&&originals.length>1?'phone-gallery':''}">${pictures.map(p=>`<div class="${p.wide?'evidence-wide':''}" style="--item-width:${previewWidth(p,pictures.length)}px">${p.heading?`<p class="evidence-subheading">${esc(p.heading)}</p>`:""}${p.prompt?`<p class="response-prompt">${esc(p.prompt)}</p>${p.ctr?`<p class="response-stats"><span>CTR <b>${esc(p.ctr)}</b></span><span>${esc(c.shareLabel||"추정 공유율")} <b>${esc(p.share)}</b></span></p>`:""}`:""}<button type="button" class="evidence-button" style="--preview-width:${previewWidth(p,pictures.length)}px" data-image="${esc(p.src)}" data-title="${esc(p.label)}" aria-label="${esc(p.label)} 자료 확대"><img src="${esc(p.src)}" alt="${esc(p.label)}" ${p.width?`width="${p.width}" height="${p.height}"`:""} loading="lazy" decoding="async"><span class="zoom">자료 확대</span></button>${p.caption?`<p class="image-caption">${esc(p.caption)}</p>`:""}</div>`).join('')}</div>${c.evidenceNote?`<p class="evidence-note">${esc(c.evidenceNote)}</p>`:''}${c.disclaimer?`<p class="image-disclaimer">${esc(c.disclaimer)}</p>`:""}</figure>`;
}
function pairedCaseHTML(c){
 const meta=`<dl class="project-meta"><dt>담당 역할</dt><dd>${esc(c.role)}</dd><dt>기여도</dt><dd>${esc(c.contribution)}</dd>${c.team?`<dt>${esc(c.teamLabel||"협업 구성")}</dt><dd>${esc(c.team)}</dd>`:''}</dl>`;
 return `<article class="project paired-project" id="${c.id}"><header class="project-header"><p class="eyebrow">${esc(companies.find(x=>x.key===c.company).name)}${c.position?` · ${esc(c.position)}`:""} / PROJECT ${String(cases.indexOf(c)+1).padStart(2,'0')}</p><h3>${esc(c.title)}</h3></header><div class="project-body paired-body"><div class="paired-grid">${c.sections.map((s,i)=>`<section class="paired-item"><div class="project-copy"><h4>${esc(s.title)}</h4><ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>${evidenceHTML({...c,originals:[c.originals[i]],galleryColumns:1},false)}</section>`).join('')}</div>${meta}</div></article>`;
}
function caseHTML(c){if(c.id==='case-22')return pairedCaseHTML(c);const special=false;return `<article class="project ${c.textOnly?"text-only":""} ${special?'special':''}" id="${c.id}"><header class="project-header"><p class="eyebrow">${esc(companies.find(x=>x.key===c.company).name)}${c.position?` · ${esc(c.position)}`:""} / PROJECT ${String(cases.indexOf(c)+1).padStart(2,'0')}</p><h3>${esc(c.title)}</h3></header><div class="project-body"><div class="project-copy">${c.sections.map((s,i)=>`<section class="${!special&&i===2?'results':''}"><h4>${esc(s.title)}</h4><ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`).join('')}${c.role?`<dl class="project-meta"><dt>담당 역할</dt><dd>${esc(c.role)}</dd><dt>기여도</dt><dd>${esc(c.contribution)}</dd>${c.team?`<dt>${esc(c.teamLabel||"협업 구성")}</dt><dd>${esc(c.team)}</dd>`:''}</dl>`:''}</div>${c.textOnly?"":evidenceHTML(c,special)}</div></article>`}
document.querySelector('#case-list').innerHTML=companies.map(c=>`<div class="company-group" data-group="${c.key}" id="company-${c.key}" tabindex="-1"><header class="company-heading"><div><h3>${esc(c.name)}</h3><p>${esc(c.intro)}</p></div></header>${cases.filter(x=>x.company===c.key).map(caseHTML).join('')}</div>`).join('');
function selectCompany(key){document.querySelectorAll('[data-company]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.company===key)));}
function focusSection(id){const target=document.getElementById(id);if(!target)return;target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:'smooth',block:'start'});}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const key=b.dataset.company;selectCompany(key);const id=key==='all'?'projects':`company-${key}`;history.replaceState(null,'',`#${id}`);focusSection(id);});
function revealHash(){const id=decodeURIComponent(location.hash.slice(1));const c=cases.find(x=>x.id===id);const company=companies.find(x=>`company-${x.key}`===id);if(c)selectCompany(c.company);else if(company)selectCompany(company.key);else if(id==='projects')selectCompany('all');if(c||company)requestAnimationFrame(()=>focusSection(id));}
window.addEventListener('hashchange',revealHash);selectCompany('all');if(location.hash)revealHash();
const dialog=document.querySelector('#viewer'),viewerImg=document.querySelector('#viewer-image');let lastTrigger;
document.querySelector('#case-list').addEventListener('click',e=>{const b=e.target.closest('[data-image]');if(!b)return;lastTrigger=b;viewerImg.src=b.dataset.image;viewerImg.alt=b.dataset.title;document.querySelector('#viewer-title').textContent=b.dataset.title;document.querySelector('#original-link').href=b.dataset.image;dialog.showModal();document.body.style.overflow='hidden'});
function closeViewer(){dialog.close()}
document.querySelector('#close-viewer').addEventListener('click',closeViewer);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeViewer()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus()});

// Fit complete images and their captions to the neighboring copy height.
function fitCompactEvidence(project){
 const copy=project.querySelector('.project-copy'),figure=project.querySelector('.evidence'),gallery=figure.querySelector('.evidence-gallery');
 const items=[...gallery.children];
 if(!window.matchMedia('(min-width:761px)').matches){items.forEach(item=>item.style.removeProperty('--fitted-width'));return;}
 const rows=project.id==='case-26'?[items]:[items.slice(0,2),items.slice(2,4),items.slice(4)];
 const captionSpace=rows.reduce((sum,row)=>sum+Math.max(...row.map(item=>{const cap=item.querySelector('.image-caption');if(!cap)return 0;const cs=getComputedStyle(cap);return cap.getBoundingClientRect().height+parseFloat(cs.marginTop)+parseFloat(cs.marginBottom)})),0);
 const overhead=figure.getBoundingClientRect().height-gallery.getBoundingClientRect().height;
 const imageHeight=Math.max(60,(copy.getBoundingClientRect().height-overhead-captionSpace-14*(rows.length-1)-4)/rows.length);
 items.forEach(item=>{const img=item.querySelector('img');item.style.setProperty('--fitted-width',`${imageHeight*Number(img.getAttribute('width'))/Number(img.getAttribute('height'))}px`)});
}
const compactProjects=[...document.querySelectorAll('#case-26,#case-29')];
const compactObserver=new ResizeObserver(()=>compactProjects.forEach(fitCompactEvidence));
compactProjects.forEach(project=>compactObserver.observe(project.querySelector('.project-copy')));
document.fonts.ready.then(()=>compactProjects.forEach(fitCompactEvidence));
window.addEventListener('resize',()=>compactProjects.forEach(fitCompactEvidence));
