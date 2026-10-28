export const source={title:'HILLSTON / GMC販売図面「中古マンション」B型',url:'https://www.hillston.co.jp/gmc-maisoku/works/mansion/',image:'assets/v2/hillston-original.jpg',area:98.76,width:7.6,depth:13,height:2.5,note:'寸法線がない公開見本のため、幅7.6m・奥行13m・天井高2.5mは作図用の仮定。98.76㎡は見本の表示値。'};
export const products={
 stockholmSofa:{id:'stockholmSofa',brand:'IKEA',name:'STOCKHOLM 2025 3人掛けソファ',variant:'スンドハムン ベージュ',sku:'505.860.94',w:2.33,d:1.03,h:.84,price:199990,priceNote:'税込・確認時点',url:'https://www.ikea.com/jp/ja/p/stockholm-2025-3-seat-sofa-sundhamn-beige-50586094/',image:'assets/v2/products/modern-sofa.webp',role:'sofa',credit:'© Inter IKEA Systems B.V.'},
 stockholmTable:{id:'stockholmTable',brand:'IKEA',name:'STOCKHOLM コーヒーテーブル',variant:'ウォールナット材突き板',sku:'903.530.78',w:1.8,d:.59,h:.4,price:49990,priceNote:'税込・確認時点',url:'https://www.ikea.com/jp/ja/p/stockholm-coffee-table-walnut-veneer-90353078/',image:'assets/v2/products/modern-table.webp',role:'coffee',credit:'© Inter IKEA Systems B.V.'},
 maralunga:{id:'maralunga',brand:'Cassina',name:'675 MARALUNGA 3人掛',variant:'シリーズ写真中央の3人掛（張地は要指定）',sku:'675 MARALUNGA / 3P',w:2.35,d:.895,h:.73,price:null,priceNote:'張地・仕様により見積り',url:'https://www.cassina-ixc.jp/shop/g/gmaralunga/',image:'assets/v2/products/luxury-sofa.webp',role:'sofa',credit:'画像出典：Cassina ixc. 公式（シリーズ使用例）'},
 mexique:{id:'mexique',brand:'Cassina',name:'527 MEXIQUE ローテーブル',variant:'W1180・H380 / ブラック染色（写真右手前）',sku:'527 MEXIQUE / H380',w:1.18,d:.8,h:.38,price:null,priceNote:'素材・脚部の仕様により見積り',url:'https://www.cassina-ixc.jp/shop/g/g527-mexique-shop/',image:'assets/v2/products/luxury-table.webp',role:'coffee',credit:'画像出典：Cassina ixc. 公式（シリーズ写真・右手前）'},
 kchair:{id:'kchair',brand:'カリモク60',name:'Kチェア 2シーター',variant:'スタンダードブラック / 2台配置',sku:'W36143BW',w:1.33,d:.7,h:.7,price:96250,priceNote:'税込・1台の価格',url:'https://karimoku60.jp/SHOP/W36143BW.html',image:'assets/v2/products/japandi-sofa.webp',role:'sofa',credit:'画像出典：カリモク60オフィシャルショップ'},
 ktable:{id:'ktable',brand:'カリモク60',name:'リビングテーブル（大）',variant:'ウォールナット色・メラミン化粧板',sku:'T36400SW',w:1.19,d:.567,h:.48,price:79310,priceNote:'税込・確認時点',url:'https://www.karimoku60.com/product/livingtable-large/walnut',image:'assets/v2/products/japandi-table.webp',role:'coffee',credit:'画像出典：カリモク60 ブランド公式'},
 dining:{id:'dining',brand:'IKEA',name:'MÖRBYLÅNGA ダイニングテーブル',variant:'オーク材突き板 ブラウンステイン',sku:'803.658.02',w:2.2,d:1,h:.74,price:99990,priceNote:'税込・確認時点',url:'https://www.ikea.com/jp/ja/p/moerbylanga-table-oak-veneer-brown-stained-80365802/',image:'assets/v2/products/dining.webp',role:'dining',credit:'© Inter IKEA Systems B.V.'}
};
export const concepts={
 modern:{n:'01',en:'PANORAMA MODERN',name:'横につながる、モダン。',headline:'洋室を取り込み、LDKをひとつに。',copy:'洋室7帖と収納を取り払い、LDとキッチンへつなぐ。バルコニー側に視線が抜ける、大きな家族の居場所。',ids:['stockholmSofa','stockholmTable','dining'],wood:'#bf9d75',wall:'#e6e1d5',fabric:'#ded8c9',accent:'#526552',rug:'#d8d2bd',details:['LD約12.5帖・洋室約7帖・K約3.3帖を一体化する検討案。','洋室との間仕切り・収納と、キッチン前の区画を撤去検討。','IKEAの実在商品を、公式の外形寸法で2D・3Dに配置。'],tag:'3LDK → 2LDK / 大空間'},
 luxury:{n:'02',en:'GALLERY LUXURY',name:'余裕を見せる、上質。',headline:'大空間に、造作カウンターを添える。',copy:'部屋の境をほどき、深い木と名作家具で整える。独立したキッチン前には、水栓を持たない造作カウンターを置く検討案。',ids:['maralunga','mexique','dining'],wood:'#79573e',wall:'#c9bfae',fabric:'#204553',accent:'#8c7252',rug:'#d8cbbb',details:['洋室と収納をLDへつなぎ、横幅を生かしたラウンジに。','キッチンの給排水位置は維持する想定。追加カウンターは作業台。','Cassinaのソファとローテーブルを主役に、素材の質感を重ねる。'],tag:'2LDK / 大空間＋カウンター'},
 japandi:{n:'03',en:'FLEXIBLE JAPANDI',name:'開いて、仕切れる和モダン。',headline:'つながりと個室感を、両立する。',copy:'普段は大きく開き、ときには畳ラウンジを仕切る。壁を可動建具へ置き換え、静けさと使いやすさを選べる住まい。',ids:['kchair','ktable','dining'],wood:'#b9a57e',wall:'#e7e0d1',fabric:'#252c28',accent:'#6d7862',rug:'#beb992',details:['洋室と収納を取り込み、床段差のない畳ラウンジへ。','旧間仕切り位置に可動建具を検討。普段は寄せて開ける。','Kチェア2シーターを2台配置。個室として使う場合の法令条件は未判定。'],tag:'2LDK / 可変ラウンジ'}
};
export const retainedConcepts={
 modern:{name:'部屋を生かす、モダン。',headline:'3つの個室を保ち、LDを整える。',copy:'洋室・収納・独立キッチンを残し、LD約12.5帖にソファとダイニングを配置。家族それぞれの部屋を持ちながら、明るい居場所を作る。',details:['3LDKを維持。間仕切り・収納・建具は撤去しない想定。','LD約12.5帖にIKEAのソファ・テーブルを配置。洋室7帖は個室のまま。','壁を残す案も、家具の搬入・通路幅・設備工事は現地で確認。']},
 luxury:{name:'個室も保つ、上質。',headline:'間取りを保ち、家具と素材で上質に。',copy:'3LDKのまま、LDにCassinaの名作家具と落ち着いた素材を重ねる。独立キッチンと収納を保ち、個室の使いやすさとくつろぎを両立する。',details:['洋室3室とキッチンの区画を維持。壁をなくす案の造作カウンターは置かない。','MARALUNGAを窓際のLDに配置し、MEXIQUEと組み合わせる。','内装・照明は参考表現。施工範囲と家具搬入は別途確認。']},
 japandi:{name:'木と黒で整う、和モダン。',headline:'個室を保ち、木の家具でくつろぐ。',copy:'部屋の区切りを残し、LDにKチェア2台と木のテーブルを配置。畳調のラグと穏やかな素材で、3LDKのまま和モダンに整える。',details:['3LDKを維持し、洋室7帖は個室として残す。','LDにKチェア2シーターを2台配置。新しい可動建具は設けない。','畳調のラグは参考表現。家具寸法と通路幅は現地で再確認。']}
};
export const layoutTypes={before:{name:'壁を残す',plan:'3LDK',short:'RETAIN / 3LDK'},after:{name:'壁をなくす',plan:'2LDK',short:'OPEN / 2LDK'}};
export function presentation(style='modern',phase='after'){return phase==='before'?{...concepts[style],...retainedConcepts[style]}:concepts[style];}
export function imageStem(style='modern',phase='after'){return phase==='before'?`assets/v3/${style}-retain`:`assets/v2/${style}`;}
const rect=(id,x,z,w,d,h=2.5)=>({id,x,z,w,d,h});
export const columns=[rect('c1',.28,.28,.56,.56),rect('c2',7.32,.28,.56,.56),rect('c3',.28,12.72,.56,.56),rect('c4',7.32,12.72,.56,.56)];
export const windows=[{x:1.65,z:.1,w:2.3,d:.12},{x:1.7,z:12.9,w:2.35,d:.12},{x:5.45,z:12.9,w:3.45,d:.12}];
const fixed=[rect('north-left',.25,.1,.5,.2),rect('north-bed1',3.2,.1,.6,.2),rect('north-bed2',5.95,.1,2.9,.2),rect('west',.1,6.5,.2,12.6),rect('east',7.5,6.5,.2,12.6),rect('south-left',.25,12.9,.5,.2),rect('south-middle',3.33,12.9,.87,.2),rect('south-right',7.4,12.9,.2,.2),rect('bed-left-hall',3.2,1.9,.12,3.4),rect('bed-left-doorstub',3.2,4.6,.12,.2),rect('bed-right-hall',4.8,1.85,.12,3.3),rect('bed-right-doorstub',4.8,4.45,.12,.1),rect('north-left-bottom',1.7,4.7,3,.12),rect('north-right-bottom',6.2,4.5,2.6,.12),rect('bath-right-north',1.85,5.05,.12,.6),rect('bath-right-south',1.85,6.9,.12,.9),rect('wash-hall-north',3.2,5.15,.12,.9),rect('wash-hall-south',3.2,7.0,.12,.6),rect('wet-bottom',1.7,7.35,3.0,.14),rect('wc-bottom',6.15,5.35,2.6,.12),rect('wc-right',6.3,4.95,.12,.7)];
export const removal=[rect('洋室とLDの境',3.2,11.275,.12,3.05),rect('洋室入口の袖壁',3.2,8.725,.12,.25),rect('収納の前壁',1.7,8.6,3.0,.12),rect('収納の側壁',3.2,8.05,.12,1.1),rect('収納区画',2.5,8.0,.1,1.2),rect('キッチン側壁',4.8,6.975,.12,1.45),rect('キッチン前区画',6.15,7.7,2.6,.12,1.05)];
export function wallsFor(phase='after'){return phase==='before'?[...fixed,...removal]:fixed;}
export function itemPlacements(style='modern',phase='after'){
 const c=concepts[style],s=products[c.ids[0]],t=products[c.ids[1]],d=products.dining;
 if(phase==='before'){
  const a=[{number:1,product:s,x:style==='japandi'?6.92:6.82,z:11.35,angle:Math.PI/2},{number:2,product:t,x:5.55,z:11.35,angle:style==='japandi'?0:Math.PI/2},{number:3,product:d,x:5.4,z:8.85,angle:0}];
  if(style==='japandi')a.push({number:1,product:s,x:5.1,z:12.2,angle:0});return a;
 }
 const result=[{number:1,product:s,x:style==='japandi'?.92:1.05,z:style==='japandi'?10.15:10.75,angle:-Math.PI/2},{number:2,product:t,x:2.6,z:10.75,angle:style==='japandi'?0:Math.PI/2},{number:3,product:d,x:5.4,z:10.7,angle:0}];
 if(style==='japandi')result.push({number:1,product:s,x:1.95,z:12.0,angle:0});
 return result;
}
const r=(x,z,w,d,fill,rx=0,extra='')=>`<rect x="${x*1000}" y="${z*1000}" width="${w*1000}" height="${d*1000}" rx="${rx}" fill="${fill}" ${extra}/>`;
const text=(x,z,s,size=250,color='#485444')=>`<text x="${x*1000}" y="${z*1000}" text-anchor="middle" font-family="Hiragino Kaku Gothic ProN,Yu Gothic,sans-serif" font-size="${size}" fill="${color}">${s}</text>`;
export function planSVG(style='modern',phase='after',selected=0){
 const c=concepts[style],a=[`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-350 -450 8300 14500" role="img" aria-label="${phase==='before'?'壁を残す3LDKの家具配置':'壁をなくす2LDKの家具配置'}"><rect x="-350" y="-450" width="8300" height="14500" fill="#fffefb"/>`,r(.2,.2,7.2,12.6,'#f4f0e5'),r(.2,4.8,3,2.5,'#dbe3dc'),r(4.86,4.6,2.5,.7,'#dbe3dc')];
 a.push(r(.2,.2,2.94,4.44,'#eae3cf'),r(4.86,.2,2.54,4.24,'#eae3cf'));
 if(phase==='after')a.push(r(.2,7.45,7.2,5.35,style==='luxury'?'#d9c9b5':'#ece3d0'));else a.push(r(.2,8.66,2.94,4.14,'#eae3cf'),r(3.26,7.8,4.14,5,'#e4e9de'));
 for(const w of wallsFor(phase))a.push(r(w.x-w.w/2,w.z-w.d/2,w.w,w.d,'#5c6456'));
 for(const col of columns)a.push(r(col.x-col.w/2,col.z-col.d/2,col.w,col.d,'#303d33'));
 for(const w of windows){a.push(r(w.x-w.w/2,w.z-w.d/2,w.w,w.d,'#e1edeb',0,'stroke="#669195" stroke-width="25"'));}
 a.push(r(.25,13.0,7.1,.72,'#e5e6e0'),text(3.8,13.52,'バルコニー',230));
 // Kitchen and sanitary fixtures stay in their source zones.
 a.push(r(4.95,7.0,2.35,.62,c.wood,35),r(5.12,7.1,.6,.4,'#b7c9c4',45),r(6.55,7.09,.6,.43,'#5f6f65',40),r(.38,5.25,1.25,1.65,'#fdfbf4',150),r(2.05,6.7,.95,.42,'#fbfaf2',55),r(5.0,4.7,.52,.45,'#fbfaf2',140));
 // Retained northern bedrooms.
 for(const [x,z] of [[.65,1.1],[5.15,1.1]]){a.push(r(x,z,1.6,2.05,c.wood,60),r(x+.06,z+.06,1.48,1.93,'#faf5e8',90),r(x+.12,z+.16,.6,.35,'#e6decd',50),r(x+.86,z+.16,.6,.35,'#e6decd',50));}
 a.push(text(1.6,4.15,'洋室 約7帖',235),text(6.1,4.05,'洋室 約5帖',235),text(2.5,6.1,'洗面',220),text(.95,6.15,'浴室',220),text(5.65,5.14,'WC',210),text(4.0,3.0,'廊下',220));
 if(phase==='before'){
  a.push(r(.75,9.6,1.6,2.05,c.wood,60),r(.81,9.66,1.48,1.93,'#faf5e8',60),text(1.6,12.3,'洋室 約7帖',250),r(.28,7.55,2.75,.9,'#b7ac8e'),text(1.6,8.12,'収納',220),text(5.2,10.22,'LD 約12.5帖',230),text(6.1,6.3,'K 約3.3帖',240));
 }else{
  if(style==='japandi'){a.push(r(.35,9.0,2.6,3.4,'#c3bd94'));for(let z=9.0;z<12.4;z+=.56)a.push(`<path d="M350 ${z*1000}H2950" stroke="#a8a57f" stroke-width="14"/>`);a.push(r(3.2,8.9,.12,.55,c.wood),r(3.34,8.9,.12,.55,c.wood));}
  if(style==='luxury')a.push(r(4.3,8.2,2.2,.8,'#b6aa96',45));
  for(const w of removal)a.push(r(w.x-w.w/2,w.z-w.d/2,w.w,w.d,'none',0,'stroke="#b2765e" stroke-width="40" stroke-dasharray="115 80"'));
 }
  for(const p of itemPlacements(style,phase)){
   const {w,d,role}=p.product,angle=p.angle*180/Math.PI;
   let fill=role==='sofa'?c.fabric:c.wood;
   const triangle=`<svg x="${-w*500}" y="${-d*500}" width="${w*1000}" height="${d*1000}" viewBox="-650 -450 1300 900"><path d="M-550 -250 C-650 -420 270 -460 520 -180 C680 180 140 420 -200 350 C-400 250 -520 50 -550 -250" fill="#313732"/></svg>`;
   const shape=role==='coffee'&&style==='luxury'?triangle:role==='coffee'&&style==='modern'?`<ellipse cx="0" cy="0" rx="${w*500}" ry="${d*500}" fill="${fill}"/>`:r(-w/2,-d/2,w,d,fill,role==='sofa'?110:55);
   a.push(`<g transform="translate(${p.x*1000} ${p.z*1000}) rotate(${angle})">${shape}</g>`);
  }
  for(const x of [4.8,6.0])for(const z of phase==='before'?[8.05,9.65]:[9.9,11.5])a.push(r(x-.23,z-.23,.46,.46,'#a8a68c',100));
  if(phase==='after')a.push(text(4.4,12.45,'一体LDK 約22.8帖相当',250));
  for(const [n,x,z] of phase==='before'?[[1,7.0,10.0],[2,4.8,11.35],[3,6.95,8.7]]:[[1,1.75,9.1],[2,3.05,10.8],[3,6.95,10.5]])a.push(`<g role="button" tabindex="0" data-product-index="${n}" aria-label="家具${n}の商品を見る"><circle cx="${x*1000}" cy="${z*1000}" r="${selected===n?245:205}" fill="${selected===n?'#ae673f':'#314f3d'}" stroke="#fffefb" stroke-width="30"/>${text(x,z+.08,'0'+n,220,'#fff')}</g>`);
 a.push(text(3.8,-.12,phase==='before'?'壁を残す｜3LDK':'壁をなくす｜2LDK＋大空間LDK',250),text(3.8,14.0,'寸法は作図上の仮定・撤去可否は未判定',190,'#7a7e70'),'</svg>');return a.join('');
}
