'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const {companies,cases}=PORTFOLIO;
const career=document.querySelector('#career-list');
career.innerHTML=companies.map(c=>`<a class="career-row" href="#${esc(c.entryId||`case-${c.start}`)}"><span class="date">${esc(c.period)}<small>${esc(c.duration)}</small></span><strong>${esc(c.name)}</strong><span class="role"><span class="role-heading">${esc(c.role)}${c.rank?`<span class="rank-tag">${esc(c.rank)}</span>`:""}</span><small>${esc(c.intro)}</small></span><span class="arrow">→</span></a>`).join('');
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
function evaluationGuideHTML(guide){
 if(!guide)return '';
 return `<aside class="evaluation-guide" aria-label="${esc(guide.title)}"><p class="evaluation-guide-title">${esc(guide.title)}</p><dl>${guide.rows.map(row=>`<div><dt>${esc(row.label)}</dt><dd>${esc(row.text)}</dd></div>`).join('')}</dl>${guide.note?`<p class="evaluation-guide-note">${esc(guide.note)}</p>`:''}</aside>`;
}
function supportingDetailsHTML(details){
 if(!details)return '';
 return `<details class="supporting-details"><summary>${esc(details.title)}</summary><dl>${details.rows.map(row=>`<div><dt>${esc(row.label)}</dt><dd>${esc(row.text)}</dd></div>`).join('')}</dl></details>`;
}
function growthResultsHTML(c){
 if(!c.growthResults)return '';
 return `<div class="growth-results"><table><thead><tr><th scope="col">실제로 바꾼 내용</th><th scope="col">그 과제에서 확인한 결과</th></tr></thead><tbody>${c.growthResults.map(row=>`<tr><td>${esc(row.change).replaceAll('\n','<br>')}</td><td><span class="growth-metric">${esc(row.metric)}</span><strong class="growth-result">${esc(row.result)}</strong><span class="growth-comparison">${esc(row.comparison)}</span></td></tr>`).join('')}</tbody></table><p class="growth-summary"><span>${esc(c.growthSummary.title)}</span><strong>${c.growthSummary.items.map(esc).join(' · ')}</strong></p></div>`;
}
function evidenceHTML(c,special){
const originals=c.originals;
const pictures=originals||[{src:c.image,label:c.title}];
const steps=c.evaluationSteps?`<ol class="evaluation-steps">${c.evaluationSteps.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>`:'';
return `<figure class="evidence ${special?'full':''} ${originals?'original-evidence':''} ${c.responseExamples?'response-examples':''}">${c.evidenceTitle?`<figcaption class="evidence-title">${esc(c.evidenceTitle)}</figcaption>`:""}${evaluationGuideHTML(c.evaluationGuide)}${steps}${growthResultsHTML(c)}<div style="--image-count:${c.galleryColumns||pictures.length}" class="evidence-gallery ${originals&&originals.length>1?'phone-gallery':''}">${pictures.map(p=>`<div class="${p.wide?'evidence-wide':''}" style="--item-width:${previewWidth(p,pictures.length)}px">${p.heading?`<p class="evidence-subheading">${esc(p.heading)}</p>`:""}${p.prompt?`<p class="response-prompt">${esc(p.prompt)}</p>${p.ctr?`<p class="response-stats"><span>클릭률 <b>${esc(p.ctr)}</b></span><span>${esc(c.shareLabel||"추정 공유율")} <b>${esc(p.share)}</b></span></p>`:""}`:""}<button type="button" class="evidence-button" style="--preview-width:${previewWidth(p,pictures.length)}px" data-image="${esc(p.src)}" data-title="${esc(p.label)}" aria-label="${esc(p.label)} 자료 확대"><img src="${esc(p.src)}" alt="${esc(p.label)}" ${p.width?`width="${p.width}" height="${p.height}"`:""} loading="lazy" decoding="async"><span class="zoom">자료 확대</span></button>${p.caption?`<p class="image-caption">${esc(p.caption)}</p>`:""}</div>`).join('')}</div>${c.evidenceNote?`<p class="evidence-note">${esc(c.evidenceNote)}</p>`:''}${supportingDetailsHTML(c.supportingDetails)}${c.disclaimer?`<p class="image-disclaimer">${esc(c.disclaimer)}</p>`:""}</figure>`;
}
function metaHTML(c){
 return c.role?`<dl class="project-meta"><dt>담당 역할</dt><dd>${esc(c.role)}</dd>${c.contribution?`<dt>기여도</dt><dd>${esc(c.contribution)}</dd>`:''}${c.team?`<dt>${esc(c.teamLabel||'협업 구성')}</dt><dd>${esc(c.team)}</dd>`:''}</dl>`:'';
}
function contextHTML(options,c){
 if(options.scenario)return '';
 const company=companies.find(x=>x.key===c.company);
 return options.product?`<div class="case-kicker"><a class="product-badge" href="#${esc(options.product.id)}">${esc(options.product.title)}</a><span class="detail-label">${esc(options.label||'')}</span></div>`:`<p class="eyebrow">${esc(company.name)}${c.position?` · ${esc(c.position)}`:''}</p>`;
}
function sectionCopyHTML(c,heading){
 return c.sections.map((s,i)=>`<section class="${s.title==='결과/성과'?'results':''}"><${heading} class="copy-label">${esc(s.title)}</${heading}><ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`).join('');
}
function pairedCaseHTML(c,options={}){
 const heading=options.scenario?'h6':options.detail?'h5':'h4';
 return `<section class="${options.scenario?'scenario-case':options.detail?'project-detail':'project'} paired-project" id="${esc(options.id||c.id)}"><header class="project-header">${contextHTML(options,c)}<${heading} class="case-title">${esc(c.title)}</${heading}></header><div class="project-body paired-body"><div class="paired-grid">${c.sections.map((s,i)=>`<section class="paired-item"><div class="project-copy"><p class="copy-label">${esc(s.title)}</p><ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>${evidenceHTML({...c,originals:[c.originals[i]],evaluationGuide:null,evidenceTitle:null,disclaimer:null,galleryColumns:1},false)}</section>`).join('')}</div>${c.disclaimer?`<p class="image-disclaimer">${esc(c.disclaimer)}</p>`:''}${options.hideMeta?'':metaHTML(c)}</div></section>`;
}
function moreEvidenceHTML(c){
 const extra=c.additionalEvidence;
 return extra?`<details class="additional-evidence"><summary>${esc(extra.title)}</summary><div class="additional-evidence-body">${evidenceHTML({...extra,evidenceTitle:null},false)}</div></details>`:'';
}
function additionalWorkHTML(c){
 const extra=c.additionalWork;
 return extra?`<details class="additional-work" id="${esc(extra.id)}"><summary>${esc(extra.title)}<span>대출·보험 공통 실행 관리</span></summary>${caseHTML(extra,{scenario:true,id:extra.id+'-content'})}</details>`:'';
}
function caseHTML(c,options={}){
 if(c.id==='case-22')return pairedCaseHTML(c,options);
 const detail=options.detail,scenario=options.scenario,tag=detail||scenario?'section':'article',heading=scenario?'h6':detail?'h5':'h4',sectionHeading=scenario?'p':detail?'h6':'h5';
 const cls=scenario?'scenario-case':detail?'project-detail':'project';
 const aliases=(c.anchorAliases||[]).map(id=>`<span class="case-anchor" id="${esc(id)}"></span>`).join('');
 const body=c.parts?`<div class="project-overview"><div class="project-copy">${sectionCopyHTML(c,sectionHeading)}</div></div><div class="grouped-examples">${c.parts.map(part=>caseHTML(part,{scenario:true,hideMeta:true})).join('')}</div><div class="grouped-meta">${metaHTML(c)}</div>`:`<div class="project-body"><div class="project-copy">${sectionCopyHTML(c,sectionHeading)}${options.hideMeta?'':metaHTML(c)}</div>${c.textOnly?'':evidenceHTML(c,false)}</div>`;
 return `<${tag} class="${cls} ${c.parts?'grouped-project':''} ${c.textOnly?'text-only':''}" id="${esc(options.id||c.id)}">${aliases}<header class="project-header">${contextHTML(options,c)}<${heading} class="case-title">${esc(c.title)}</${heading}></header>${body}${moreEvidenceHTML(c)}${additionalWorkHTML(c)}</${tag}>`;
}
const projectsByCompany={kakao:PORTFOLIO.kakaoProjects||[],toss:PORTFOLIO.tossProjects||[]};
const coreProjects=Object.values(projectsByCompany).flat();
function detailId(p,id){return id===p.id?`${id}-detail`:id;}
function coreProjectHTML(p){
 const company=companies.find(c=>c.key===p.company);
 return `<article class="project core-project" id="${esc(p.id)}" data-product-company="${esc(p.company)}"><header class="project-header core-header"><p class="eyebrow">${esc(company.name)} · ${esc(p.position)}</p><h4 class="product-title">${esc(p.title)}</h4><p class="core-intro">${esc(p.intro)}</p><p class="product-status"><strong>${esc(p.outcomes[0].value)}</strong><span>${esc(p.outcomes[0].label)}</span></p><p class="product-role"><b>담당 역할</b>${esc(p.role)}</p><nav class="case-index" aria-label="${esc(p.title)} 하위 사례">${p.detailIds.map((id,i)=>`<a href="#${esc(detailId(p,id))}">${esc(p.labels[i])}</a>`).join('')}</nav></header><div class="core-details">${p.detailIds.map((id,i)=>caseHTML(cases.find(c=>c.id===id),{detail:true,label:p.labels[i],product:p,id:detailId(p,id)})).join('')}</div></article>`;
}
function companyProjectsHTML(company){
 const groups=projectsByCompany[company.key]||[];
 if(!groups.length)return cases.filter(c=>c.company===company.key).map(c=>caseHTML(c)).join('');
 return groups.map(coreProjectHTML).join('');
}
document.querySelector('#case-list').innerHTML=companies.map(c=>`<div class="company-group" data-group="${esc(c.key)}" id="company-${esc(c.key)}" tabindex="-1"><header class="company-heading"><div><div class="company-title"><h3>${esc(c.name)}</h3><span>${esc(c.role)}${c.rank?` · ${esc(c.rank)}`:''}</span></div><p class="company-period">${esc(c.period)} · ${esc(c.duration)}</p><p>${esc(c.intro)}</p></div></header>${companyProjectsHTML(c)}</div>`).join('');
const productNav=document.querySelector('#product-links');
let locationKey='';
function updateScrollOffset(){document.documentElement.style.setProperty('--portfolio-scroll-offset',`${document.querySelector('.topbar').offsetHeight+document.querySelector('.project-nav').offsetHeight+20}px`);}
function selectCompany(key,productId){
 filters.querySelectorAll('[data-company]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.company===key)));
 const groups=projectsByCompany[key]||[],nextKey=`${key}:${productId||''}`;
 if(nextKey!==locationKey){
  productNav.hidden=!groups.length;
  productNav.innerHTML=groups.map(p=>`<a href="#${esc(p.id)}"${p.id===productId?' aria-current="location"':''}>${esc(p.title)}</a>`).join('');
  if(groups.length)productNav.setAttribute('aria-label',`${companies.find(c=>c.key===key).name} 제품 위치로 이동`);
  locationKey=nextKey;updateScrollOffset();
 }
}
function revealContainers(target){
 let node=target;
 while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}
}
function focusSection(id,behavior='instant'){
 const target=document.getElementById(id);if(!target)return;
 revealContainers(target);target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':behavior,block:'start'});
}
function revealHash(options={}){
 let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
 let target=document.getElementById(id);if(!target)return;
 if(target.classList.contains('case-anchor'))target=target.closest('.project-detail,.scenario-case')||target;
 const company=target.closest('.company-group'),product=target.closest('.core-project');
 selectCompany(company?.dataset.group||'all',product?.id);focusSection(target.id,options.behavior||'instant');
}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const key=b.dataset.company;selectCompany(key);const id=key==='all'?'projects':`company-${key}`;history.replaceState(null,'',`#${id}`);focusSection(id);});
window.addEventListener('hashchange',revealHash);
let trackingFrame=0;
function trackLocation(){
 trackingFrame=0;const nav=document.querySelector('.project-nav'),cursor=nav.getBoundingClientRect().bottom+22;
 const company=[...document.querySelectorAll('.company-group')].find(el=>{const r=el.getBoundingClientRect();return r.top<=cursor+80&&r.bottom>cursor;});
 if(!company){selectCompany('all');return;}
 const product=[...company.querySelectorAll('.core-project')].find(el=>{const r=el.getBoundingClientRect();return r.top<=cursor&&r.bottom>cursor;});
 selectCompany(company.dataset.group,product?.id);
}
window.addEventListener('scroll',()=>{if(!trackingFrame)trackingFrame=requestAnimationFrame(trackLocation);},{passive:true});
new ResizeObserver(updateScrollOffset).observe(document.querySelector('.project-nav'));
selectCompany('all');if(location.hash)requestAnimationFrame(()=>revealHash({behavior:'instant'}));
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


