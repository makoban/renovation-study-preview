import * as THREE from 'three';
import {OrbitControls} from 'three/addons/OrbitControls.js';
import {source,products,concepts,columns,windows,removal,wallsFor,itemPlacements,planSVG,presentation,imageStem,layoutTypes} from './v2-core.mjs';
const $=s=>document.querySelector(s);
const state={style:'modern',phase:'before',selected:0,high:false};
const nameMarkup=name=>{const m=name.match(/^(STOCKHOLM 2025|STOCKHOLM|MÖRBYLÅNGA|675 MARALUNGA|527 MEXIQUE|Kチェア)(.*)$/);return m?`<span class="keep">${m[1]}</span> <span class="keep">${m[2].trim()}</span>`:name;};
const yen=n=>'¥'+n.toLocaleString('ja-JP');
const size=p=>`${Math.round(p.w*1000)} × ${Math.round(p.d*1000)} × ${Math.round(p.h*1000)} mm`;
const viewer=$('#model-view');let renderer,scene,camera,controls,group;let materials=[],geometries=[],textures=[];
function material(color,roughness=.78,extra={}){const m=new THREE.MeshStandardMaterial({color,roughness,...extra});materials.push(m);return m;}
function mesh(geo,m,x,y,z,angle=0){geometries.push(geo);const o=new THREE.Mesh(geo,m);o.position.set(x-source.width/2,y,z-source.depth/2);o.rotation.y=angle;o.castShadow=true;o.receiveShadow=true;group.add(o);return o;}
const box=(x,z,w,d,h,m,y=0,angle=0)=>mesh(new THREE.BoxGeometry(w,h,d),m,x,y+h/2,z,angle);
function rounded(x,z,w,d,h,m,y=0,r=.07,angle=0){
 r=Math.min(r,w/3,d/3);const s=new THREE.Shape(),l=-w/2,t=-d/2;s.moveTo(l+r,t);s.lineTo(l+w-r,t);s.quadraticCurveTo(l+w,t,l+w,t+r);s.lineTo(l+w,t+d-r);s.quadraticCurveTo(l+w,t+d,l+w-r,t+d);s.lineTo(l+r,t+d);s.quadraticCurveTo(l,t+d,l,t+d-r);s.lineTo(l,t+r);s.quadraticCurveTo(l,t,l+r,t);
 const geo=new THREE.ExtrudeGeometry(s,{depth:h,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:5,steps:1});geo.rotateX(-Math.PI/2);return mesh(geo,m,x,y,z,angle);
}
function ellipse(x,z,rx,rz,h,m,y=0){const g=new THREE.CylinderGeometry(1,1,h,36);g.scale(rx,1,rz);return mesh(g,m,x,y+h/2,z);}
function localBox(origin,x,z,w,d,h,m,y=0){const a=origin.angle||0,px=origin.x+x*Math.cos(a)+z*Math.sin(a),pz=origin.z-x*Math.sin(a)+z*Math.cos(a);return box(px,pz,w,d,h,m,y,a);}
function localRounded(origin,x,z,w,d,h,m,y=0,r=.07){const a=origin.angle||0;return rounded(origin.x+x*Math.cos(a)+z*Math.sin(a),origin.z-x*Math.sin(a)+z*Math.cos(a),w,d,h,m,y,r,a);}
function addSofa(item,wood,fabric){
 const {w,d,h,id}=item.product,o=item;
 if(id==='kchair'){
  localRounded(o,0,0,w-.22,d-.09,.13,fabric,.29,.045);localRounded(o,0,d*.32,w-.2,.13,.36,fabric,.37,.055);
  for(let x of [-w/2+.06,w/2-.06]){localRounded(o,x,0,.065,d,.065,wood,.51,.025);for(const z of [-d*.32,d*.32])localBox(o,x,z,.045,.05,.51,wood);}
  for(let x of [-.3,0,.3])for(let z of [-.04,.13])localBox(o,x,z,.016,.015,.008,material('#151c18'),.435);
 }else if(id==='maralunga'){
  localRounded(o,0,0,w-.12,d-.05,.32,fabric,.07,.13);for(const x of [-w/2+.16,w/2-.16])localRounded(o,x,0,.32,d,.51,fabric,.12,.13);
  for(let i=0;i<3;i++){let x=-w/3+(w/3)*i;localRounded(o,x,-.08,w/3-.04,d-.31,.15,fabric,.34,.09);localRounded(o,x,d*.32,w/3-.025,.25,.45,fabric,.29,.1);}
 }else{
  localBox(o,0,0,w,d,.09,wood,.14);for(const x of [-w/2+.11,w/2-.11])for(const z of [-d/2+.1,d/2-.1])localBox(o,x,z,.065,.065,.16,wood);
  localRounded(o,0,-.03,w-.19,d-.22,.24,fabric,.25,.075);localRounded(o,0,d*.39,w-.18,.19,h-.34,fabric,.3,.06);
  for(const x of [-w/2+.06,w/2-.06])localRounded(o,x,0,.1,d-.06,.4,fabric,.22,.035);
  for(let i=0;i<3;i++)localRounded(o,-w/3+i*w/3,d*.27,w/3-.045,.19,.39,fabric,.43,.08);
 }
}
function addTable(item,wood,metal){
 const p=item.product,o=item;
 if(p.id==='stockholmTable'){
  const g=new THREE.CylinderGeometry(1,1,.04,48);g.scale(p.w/2,1,p.d/2);const m=mesh(g,wood,item.x,p.h-.02,item.z,item.angle);for(const x of [-.68,.68])for(const z of [-.2,.2])localBox(o,x,z,.035,.035,p.h-.04,wood);localBox(o,0,0,p.w-.12,p.d-.08,.025,wood,.15);
 }else if(p.id==='mexique'){
  const sh=new THREE.Shape();sh.moveTo(-.55,-.25);sh.bezierCurveTo(-.75,-.42,.27,-.55,.52,-.18);sh.bezierCurveTo(.8,.18,.14,.5,-.2,.35);sh.bezierCurveTo(-.4,.25,-.52,.05,-.55,-.25);const g=new THREE.ExtrudeGeometry(sh,{depth:.04,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:14});g.rotateX(-Math.PI/2);g.computeBoundingBox();const bounds=g.boundingBox;const gw=bounds.max.x-bounds.min.x,gd=bounds.max.z-bounds.min.z;g.translate(-(bounds.max.x+bounds.min.x)/2,0,-(bounds.max.z+bounds.min.z)/2);g.scale(p.w/gw,1,p.d/gd);mesh(g,wood,item.x,p.h-.04,item.z,item.angle);for(const [x,z] of [[-.38,-.17],[.38,-.08],[-.02,.27]])localBox(o,x,z,.028,.028,p.h-.04,metal);
 }else if(p.id==='ktable'){
  localRounded(o,0,0,p.w,p.d,.035,wood,p.h-.035,.025);for(const x of [-p.w*.39,p.w*.39])for(const z of [-p.d*.33,p.d*.33])localBox(o,x,z,.04,.04,p.h-.035,wood);for(let x=-.43;x<.5;x+=.12)localBox(o,x,0,.045,.42,.025,wood,.15);
 }else{
  localRounded(o,0,0,p.w,p.d,.065,wood,p.h-.065,.022);for(const x of [-p.w*.36,p.w*.36]){for(const z of [-.38,.38])localBox(o,x,z,.11,.1,p.h-.065,wood);localBox(o,x,0,.12,.91,.1,wood,.03);}localBox(o,0,0,1.7,.08,.09,wood,.18);
 }
}
function bed(x,z,wood,white){box(x,z,1.6,2.05,.22,wood,.07);rounded(x,z,1.51,1.95,.22,white,.3,.07);box(x,z-1.0,1.65,.08,.8,wood);for(let dx of [-.38,.38])rounded(x+dx,z-.64,.61,.39,.11,white,.53,.07);}
function plant(x,z,scale=1){ellipse(x,z,.18*scale,.18*scale,.28*scale,material('#b6aa90'),.02);const m=material('#657b55');for(let i=0;i<8;i++){const a=i*2.4,o=mesh(new THREE.SphereGeometry(1,8,8),m,x+Math.cos(a)*.15*scale,.38*scale+i*.07*scale,z+Math.sin(a)*.16*scale);o.scale.set(.09*scale,.22*scale,.055*scale);o.rotation.z=Math.cos(a)*.6;}}
function numberPin(number,x,z,y){const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d');ctx.beginPath();ctx.arc(64,64,53,0,Math.PI*2);ctx.fillStyle=state.selected===number?'#a5633d':'#34523e';ctx.fill();ctx.strokeStyle='#fffefb';ctx.lineWidth=6;ctx.stroke();ctx.fillStyle='#fff';ctx.font='bold 47px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('0'+number,64,66);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);const m=new THREE.SpriteMaterial({map:t,depthTest:false,toneMapped:false});materials.push(m);const s=new THREE.Sprite(m);s.position.set(x-source.width/2,y,z-source.depth/2);s.scale.set(.55,.55,.55);group.add(s);}
function selectedRing(item){const p=item.product,g=new THREE.RingGeometry(.42,.48,48);g.rotateX(-Math.PI/2);const m=material('#bc7548',.7,{side:THREE.DoubleSide,transparent:true,opacity:.95});const ring=mesh(g,m,item.x,.075,item.z);ring.scale.set(Math.max(p.w,1)*.65,1,Math.max(p.d,1)*.65);}
function drawScene(){
 if(!renderer)return;
 if(group){scene.remove(group);for(const m of materials)m.dispose();for(const g of geometries)g.dispose();for(const t of textures)t.dispose();materials=[];geometries=[];textures=[];}
 group=new THREE.Group();scene.add(group);const c=concepts[state.style],wood=material(c.wood),white=material('#f5f1e6'),wall=material(c.wall),fabric=material(c.fabric,.95),metal=material('#444e43',.35,{metalness:.45}),glass=material('#bad3cc',.18,{transparent:true,opacity:.32});
 box(3.8,6.5,7.8,13.2,.2,material('#c8c4b8'),-.23);box(3.8,6.5,7.4,12.8,.04,wood,-.03);box(1.7,6.0,3,2.6,.025,material('#b2bdb4'),.02);box(6.1,4.95,2.45,.7,.025,material('#b2bdb4'),.02);box(3.8,13.45,7.2,.8,.09,material('#b1b5aa'),-.05);
 for(let x=.4;x<7.4;x+=.23)box(x,10.0,.008,5.7,.004,material('#9b7d59',.8,{transparent:true,opacity:.2}),.024);
 for(const w of wallsFor(state.phase))box(w.x,w.z,w.w,w.d,state.high?w.h:Math.min(w.h,.66),wall);
 for(const col of columns)box(col.x,col.z,col.w,col.d,state.high?2.5:1.05,material('#b2b7a9'));
 for(const w of windows){const h=state.high?(w.z>12?2.05:1.0):.32;box(w.x,w.z,w.w,w.d,h,glass,state.high?(w.z>12?.1:1.0):.12);box(w.x,w.z,w.w,.035,.045,metal,state.high?(w.z>12?.1:1.0):.1);box(w.x,w.z,.035,w.d,h,metal,state.high?(w.z>12?.1:1.0):.12);}
 bed(1.45,2.1,wood,white);bed(5.95,2.1,wood,white);rounded(.98,6.1,1.28,1.62,.45,white,0,.18);rounded(.98,6.1,1.1,1.4,.1,glass,.46,.17);box(2.5,6.86,.96,.43,.8,wood);ellipse(2.5,6.86,.25,.17,.065,white,.8);ellipse(5.35,4.95,.2,.28,.4,white);box(5.35,4.74,.36,.15,.72,white);
 box(6.12,7.3,2.35,.62,.86,wood);box(6.12,7.3,2.4,.65,.055,material('#d6d2c4'),.87);rounded(5.4,7.3,.55,.4,.025,metal,.92,.045);for(const x of [6.65,6.9])for(const z of [7.17,7.39])ellipse(x,z,.085,.085,.008,material('#2c3630'),.927);box(5.5,7.08,.025,.025,.3,metal,.93);box(5.44,7.08,.16,.025,.025,metal,1.2);
 if(state.phase==='before'){
  bed(1.55,10.6,wood,white);box(1.4,8.0,2.4,.95,state.high?2.3:1.15,material('#aa977a'));
  rounded(5.4,11.25,3.65,3.0,.018,material(c.rug),.035,.06);
 }else{
  rounded(2.0,10.8,3.3,3.6,.018,material(c.rug),.035,.06);
  if(state.style==='japandi'){
   box(1.65,10.85,2.65,3.45,.018,material('#bcb88f'),.06);for(let z=9.15;z<12.5;z+=.57)box(1.65,z,2.65,.014,.006,material('#8e9678'),.08);
   for(let z of [8.95,9.13]){box(3.2,z,.07,.5,state.high?2.15:1.3,wood);for(let i=0;i<5;i++)box(3.2,z-.2+i*.1,.025,.025,state.high?2.0:1.17,white,.1);}
   box(3.2,10.7,.025,4.2,.025,metal,.04);
  }
  if(state.style==='luxury'){box(5.4,8.6,2.2,.8,.9,wood);box(5.4,8.6,2.26,.86,.065,material('#c8bdab'),.91);}
  for(const w of removal)for(let t=0;t<(w.d>w.w?w.d:w.w);t+=.24){const alongZ=w.d>w.w;box(alongZ?w.x:w.x-w.w/2+t,alongZ?w.z-w.d/2+t:w.z,alongZ?.035:.12,alongZ?.12:.035,.012,material('#b77a5c'),.06);}
 }
 const placements=itemPlacements(state.style,state.phase);for(const item of placements){if(item.product.role==='sofa')addSofa(item,wood,fabric);else addTable(item,item.product.id==='mexique'?material('#313732'):wood,metal);if(state.selected===item.number)selectedRing(item);}
 for(const x of [4.8,6.0])for(const z of state.phase==='before'?[8.05,9.65]:[9.9,11.5]){const o={x,z,angle:z<(state.phase==='before'?8.8:10)?Math.PI:0};localRounded(o,0,0,.46,.46,.07,material(state.style==='luxury'?'#8f8878':'#bdbea4'),.43,.05);localRounded(o,0,.19,.44,.06,.38,wood,.47,.035);for(const dx of [-.16,.16])for(const dz of [-.16,.16])localBox(o,dx,dz,.035,.035,.43,wood);}
 for(const n of [1,2,3]){const item=placements.find(p=>p.number===n);numberPin(n,item.x,item.z,n===1?1.35:n===2?1.05:1.25);}
 plant(6.85,12.15,1.1);plant(.72,7.8,.9);
 $('#model-loading').style.display='none';$('#model-status').textContent='3Dモデルの表示が完了しました';$('#model-phase').textContent=`${layoutTypes[state.phase].name} ${layoutTypes[state.phase].plan}`;render();
}
function render(){renderer?.render(scene,camera);}
function resetView(){if(!camera)return;camera.position.set(11,15,19);camera.position.multiplyScalar(camera.aspect>1.4?.85:1.05);controls.target.set(0,.05,1.4);controls.update();render();}
function init3D(){try{
 renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;viewer.appendChild(renderer.domElement);renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label','壁を残す案と壁をなくす案を回して比べる住戸の3Dモデル');scene=new THREE.Scene();scene.background=new THREE.Color('#e8e6dd');camera=new THREE.PerspectiveCamera(36,1,.1,120);
 scene.add(new THREE.HemisphereLight('#fff8e7','#8b9581',3));const sun=new THREE.DirectionalLight('#fff4de',3.8);sun.position.set(-8,18,14);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-11;sun.shadow.camera.right=11;sun.shadow.camera.top=11;sun.shadow.camera.bottom=-11;sun.shadow.normalBias=.025;scene.add(sun);const fill=new THREE.DirectionalLight('#dce9ed',1.7);fill.position.set(10,8,-10);scene.add(fill);controls=new OrbitControls(camera,renderer.domElement);controls.enablePan=false;controls.minDistance=8;controls.maxDistance=33;controls.maxPolarAngle=Math.PI*.49;controls.addEventListener('change',render);resetView();new ResizeObserver(()=>{const r=viewer.getBoundingClientRect();if(r.width&&r.height){renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();render();}}).observe(viewer);drawScene();
 }catch(e){$('#model-loading').textContent='このブラウザでは3Dを表示できません。2D配置図をご覧ください。';console.error(e);}}
function drawPlan(){$('#plan-slot').innerHTML=planSVG(state.style,state.phase,state.selected);$('#plan-heading').textContent=layoutTypes[state.phase].name+'タイプの2D配置';$('#removal-legend').hidden=state.phase==='before';$('#plan-note').textContent=state.phase==='before'?'元図の間仕切り・収納・キッチンの区画を残す想定。建具や通路幅の細部は現地で確認します。':'柱・梁・外壁・窓を撤去する提案ではありません。撤去線は構造・設備調査を前提とする検討箇所です。';}
function openImage(src,caption){$('#lightbox-content').innerHTML='';const img=document.createElement('img');img.src=src;img.alt=caption;$('#lightbox-content').appendChild(img);$('#lightbox-caption').textContent=caption;$('#lightbox').showModal();}
$('#lightbox-close').addEventListener('click',()=>$('#lightbox').close());$('#lightbox').addEventListener('click',e=>{if(e.target===$('#lightbox'))$('#lightbox').close();});
$('#hero-open').addEventListener('click',()=>openImage(imageStem(state.style,state.phase)+'-1440.webp',layoutTypes[state.phase].name+' / '+presentation(state.style,state.phase).name+'／AI完成予想'));
$('#input-source-open').addEventListener('click',()=>openImage(source.image,'使用した原本図面：HILLSTON GMC販売図面・中古マンションB型の公開デザイン見本（未加工）'));
$('#source-open').addEventListener('click',()=>openImage(source.image,'出典：HILLSTON GMC販売図面・中古マンションB型の公開デザイン見本（未加工）'));
$('#candidate-open').addEventListener('click',()=>openImage('assets/v2/hillston-candidate-a.png','比較候補：HILLSTON GMC販売図面・97㎡の公開見本。水回りがLDと個室群の間にあるため今回は不採用。'));
$('#plan-zoom').addEventListener('click',()=>{$('#lightbox-content').innerHTML=planSVG(state.style,state.phase,state.selected);$('#lightbox-caption').textContent=layoutTypes[state.phase].name+'／概略の家具配置・寸法と工事条件は未確定';$('#lightbox').showModal();});
function setPhase(phase){state.phase=phase;state.selected=0;refresh();}
$('#phase-before').addEventListener('click',()=>setPhase('before'));$('#phase-after').addEventListener('click',()=>setPhase('after'));
document.querySelectorAll('[data-layout]').forEach(b=>b.addEventListener('click',()=>setPhase(b.dataset.layout)));
$('#view-reset').addEventListener('click',resetView);$('#wall-toggle').addEventListener('click',()=>{state.high=!state.high;$('#wall-toggle').textContent=state.high?'壁を低く':'壁を高く';$('#wall-toggle').setAttribute('aria-pressed',String(state.high));drawScene();});
function selectProduct(n,scroll=false){state.selected=n;drawPlan();drawScene();document.querySelectorAll('.product-card').forEach(e=>e.classList.toggle('selected',+e.dataset.number===n));if(scroll)$('#layout').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
for(const selector of ['#plan-slot','#lightbox-content']){const target=$(selector);target.addEventListener('click',e=>{const el=e.target.closest('[data-product-index]');if(el){if($('#lightbox').open)$('#lightbox').close();selectProduct(+el.dataset.productIndex);document.querySelector(`.product-card[data-number="${el.dataset.productIndex}"]`)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});}});target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const el=e.target.closest('[data-product-index]');if(el){e.preventDefault();el.dispatchEvent(new MouseEvent('click',{bubbles:true}));}}});}
function drawProducts(){const c=concepts[state.style];$('#products').innerHTML=c.ids.map((id,i)=>{const p=products[id],n=i+1,price=p.price?yen(p.price):'要見積り';return `<article class="product-card ${state.selected===n?'selected':''}" data-number="${n}"><a class="product-photo" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.brand} ${p.name}の公式ページ"><img src="${p.image}" width="640" height="440" loading="lazy" alt="${p.brand} ${p.name}の公式商品写真"><span class="product-no">0${n}</span></a><div class="product-body"><span class="product-brand">${p.brand}</span><h3>${nameMarkup(p.name)}</h3><p class="product-variant">${p.variant}</p><div class="product-spec"><p>W × D × H：${size(p)}</p><p class="product-sku">品番・モデル：${p.sku}</p></div><p class="product-price">${price}<small>${p.priceNote}${id==='kchair'?'／2台配置':''}</small></p><div class="product-actions"><a href="${p.url}" target="_blank" rel="noopener">公式商品ページ ↗</a><button data-locate="${n}">配置図の0${n}を確認</button></div><p class="product-credit">${p.credit}</p></div></article>`;}).join('');$('#products').querySelectorAll('[data-locate]').forEach(b=>b.addEventListener('click',()=>selectProduct(+b.dataset.locate,true)));}
function refresh(){
 const {style:id,phase}=state,c=presentation(id,phase),type=layoutTypes[phase],stem=imageStem(id,phase);
 const foots=phase==='before'?{modern:'IKEA / 3LDKを生かすLD',luxury:'Cassina / 個室を保つ上質空間',japandi:'カリモク60 / 木の家具で整えるLD'}:{modern:'IKEA / 大きな家族の居場所',luxury:'Cassina / カウンターのあるLDK',japandi:'カリモク60 / 可変ラウンジ'};
 document.querySelectorAll('.concept').forEach(b=>b.querySelector('.concept-foot>span').textContent=foots[b.dataset.style]);
 document.querySelectorAll('.concept').forEach(b=>{const on=b.dataset.style===id;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));b.querySelector('strong').innerHTML='<span class="keep">'+presentation(b.dataset.style,phase).name.replace('、','、</span><span class="keep">')+'</span>';});
 document.querySelectorAll('[data-layout]').forEach(b=>{const on=b.dataset.layout===phase;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 for(const [p,id] of [['before','phase-before'],['after','phase-after']]){const on=phase===p;$('#'+id).classList.toggle('selected',on);$('#'+id).setAttribute('aria-pressed',String(on));}
 $('#result-title').innerHTML=`${c.n} — <span class="keep">${c.name.replace('、','、</span><span class="keep">')}</span>`;$('#result-type').textContent=type.name+' / '+type.plan;$('#hero-mobile').srcset=stem+'-720.webp';$('#hero-desktop').srcset=stem+'-1440.webp';$('#hero-img').src=stem+'-1440.webp';$('#hero-img').alt=type.name+'タイプ：'+c.name+'のLD完成予想';$('#concept-copy').textContent=c.copy;$('#change-heading').textContent=c.headline;$('#change-list').innerHTML=c.details.map(t=>`<li>${t}</li>`).join('');$('#model-phase').textContent=type.name+' '+type.plan;
 drawPlan();drawProducts();drawScene();history.replaceState(null,'',`#${id}-${phase==='before'?'retain':'open'}`);
}
function selectStyle(id){state.style=id;state.selected=0;refresh();}
for(const phase of ['before','after'])for(const [id,c0] of Object.entries(concepts)){const c=presentation(id,phase),type=layoutTypes[phase],stem=imageStem(id,phase),card=document.createElement('article');card.className='gallery-card';card.dataset.style=id;card.dataset.phase=phase;card.innerHTML=`<button class="image-button" aria-label="${type.name}・${c.name}の画像を拡大"><picture><source media="(max-width:700px)" type="image/webp" srcset="${stem}-360.webp"><img src="${stem}-720.webp" width="1536" height="1024" loading="lazy" alt="${type.name}・${c.name}の完成予想"><span class="zoom-chip">↗ 拡大</span></picture></button><p>${type.name} / ${type.plan} · ${c.n}</p><h3>${c.name}</h3><button class="text-button">この案の間取り・家具を見る ↗</button>`;card.querySelector('.image-button').addEventListener('click',()=>openImage(stem+'-1440.webp',type.name+' / '+c.name+'／AI完成予想'));card.querySelector('.text-button').addEventListener('click',()=>{state.phase=phase;selectStyle(id);$('#layout').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});});$('#gallery').appendChild(card);}
document.querySelectorAll('.concept').forEach(b=>b.addEventListener('click',()=>selectStyle(b.dataset.style)));
const [initialStyle,initialType]=location.hash.slice(1).split('-');state.phase=initialType==='open'?'after':'before';selectStyle(concepts[initialStyle]?initialStyle:'modern');init3D();
