((xh)=>{class CIYA{
    a(){switch(true){case!!Array.isArray(arguments[0]):return arguments[0];case(typeof arguments[0]==='string'):return(arguments[0][1]==='{')?[JSON.parse(arguments[0])]:[arguments[0]];default:return[arguments[0]]}}
    async ask(){
        console.log('ASKY');
        let[q,r]=arguments;if(q){q=q.replace(/[ ?!{}\[\]%^*\(\).,=]+/g,'').toLowerCase();if(!!this[q])return this[q];r=await fetch('/ask',{headers:{'Content-Type':'application/json',ii:this.loc.iiio},body:JSON.stringify({query:q}),method:'POST'}).then(x=>x&&x?.json()).catch(x=>x);this._pace=r?.d?.pc||this?.pace||60;this.speak=r?.m;if(!isNaN(r?.x))this.iiio.setAttribute('s',r.x);else this.iiio.removeAttribute('s');return Promise.resolve(!!r?.d?await this.create(r?.d,document.body):r)};}
    async create() {
        let[d,p,el]=arguments;
        if(!d)return Promise.reject(this.speak='*hiccup*');
        switch(true){
            case Array.isArray(d):
                return!p?Promise.reject():await this.create(d,p);
            case typeof d=='string':
            case typeof d=='number':
                p.innerHTML+=`${d}`;
                return Promise.resolve(p);
            default:
                el=await this.do(d?.before,el,p);
                console.log(d.looks)
                this.look=d?.looks;
                el=await this.do('attr',document.createElement(d?.is||'div'),d?.params);
                el=await this.action(d?.actions,el);
                if(d?.elems){
                    d.elems=Array.isArray(d.elems)?d.elems:[d.elems];
                    for(let e in d.elems){
                        if(typeof d.elems[e]!=='object'){
                            el.innerHTML+=d.elems[e]
                        }else{
                            el.appendChild(await this.create(d?.elems[e],el))
                        }
                    }
                };
                return Promise.resolve(el.tagName==='APP'?document.body.insertBefore(el,this.f('ciya')):el)
        }
    }
    async action(){let[ta,tg,k]=arguments;if(!!ta&&!!tg){k=Object.keys(ta);for(let i in k){tg.addEventListener(k[i],async ev=>{ta[k[i]]=this.a(ta[k[i]]);for(let a in ta[k[i]]){a=ta[k[i]][a].split('.');switch(a[1]){case'PARENT':a[1]=ev.target.parentElement;break;case'TARGET':a[1]=ev.target;break;default: a[1]=this.f(a[1])||a[1];break;}a[1]=await this.do(a[0],a[1],a.slice(1))}})}}return Promise.resolve(tg)}
    async do(){let[ta,t,d,ks]=arguments;if(ta){;ta=Array.isArray(ta)?ta:ta?.split('.');if(!!this[ta[0]]){if(typeof this[ta[0]]==='function')t=this[ta[0]](d,t);else this[ta[0]]}else switch(ta[0]){case'active':t?.toggleAttribute('active');break;case'attr':t=ta[1]?this.f(ta[1]):t;d={...d,...!!ta[2]&&{[ta[2]]:ta[3]||''}};ks=Object.keys(d);for(let k in ks){t.setAttribute(ks[k],[null,undefined,'',' ','_'].includes(d[ks[k]])?'':d[ks[k]])};break;case'audio':ta=new Audio(t.indexOf('http')==0?t:`https://iiio.app/audio${t}.mp3`);ta.addEventListener("error",e=>{this.speak=`That didn't work.`;ta.remove()});ta.addEventListener("ended",e=>ta.remove());ta.play();t=ta;break;case'remove':t?.remove();break;case'scroll':ta=[ta[0],ta[1],parseInt(ta[2]),parseInt(ta[3]),0];t=this.f(ta[1]);if(ta[2]>t.scrollLeft)this._interval=setInterval(()=>{t.scrollLeft+=10;if(t.scrollLeft>=ta[2])this.stop;},1);else this._interval=setInterval(()=>{t.scrollLeft-=10; if(t.scrollLeft<=ta[2])this.stop;},1);break;case'store':if(ta[1]==='touches'){this.store.touches=1;break;};if(ev?.length===1)this.store[ta[2]]=ev[0][ta[1]];break;case'toggle':t=this.f(ta[1])||t;tet?.toggleAttribute(ta[2]||'hide');break;case'video':this.f('video')?.remove();document.body.appendChild(document.createElement('video'));t=this.f('video');break;default:t=t?.tagName?t:elem;if(!ta[2])t.toggleAttribute(ta[0]);else{if(ta[2]>0)t.setAttribute(ta[0],'');if(ta[2]<1)t.removeAttribute(ta[0]);};break;}}return Promise.resolve(t)}
    async start(){
        console.log('ASKY');
        let[a,x,n,d,t,s,ss,ks,b]=[...arguments];n=navigator;
        if(!this.loc?.iiio)this.loc.iiio=this.str(20);
        x=await fetch(this._.gg).then(x=>x.json()).catch(x=>x);
        d={c:[!!await n.bluetooth?1:0,!!navigator.connection?1:0,n?.deviceMemory||'X',!!n.geoLocation?1:0,n?.hardwareConcurrency||'X',!!await n?.keyboard?.getLayoutMap()?1:0,!!n?.virtualKeyboard?1:0,!!n?.maxTouchPoints?1:0,!!n.onLine?1:0,!!n?.pdfViewerEnabled?1:0,!!n?.usb?1:0,!!n?.webdriver?1:0,!!n?.wakeLock?1:0].join(''),a:n.userAgent,i:x?.ip||null,l:n.language};
        if(a?.ask){

            t=await fetch('/ask',{headers:{'Content-Type':'application/json',ii:this.loc.iiio},body:JSON.stringify({query:a.ask[0]+a.ask[1]}),method:'POST'}).then(x=>x).catch(x=>x);
            if(t?.json)t=await t?.json()
                console.log('tttt',a,'tttt')
                if(t?.d){
                    t.d.url=t.d.url.replace('D:rec',a.ask[2])
                    s=await fetch(t?.d?.url,{headers:{'Content-Type':'application/json',ii:this.loc.iiio}}).then(x=>x).catch(x=>x);
                    if(s?.json) s=await s?.json()
                    if(s?.no=='match'){
                      window.location='/'
                    }
                    if(!s?.break){
                        t.p.none='_';
                    }
            }
            delete s.ref
            ks=Object.keys(s)
            ss=JSON.stringify(t)
            if(s?.break){
                b=s.break.split('')    
                b.map(k=>{
                    ss=ss.replace('D:break',k)
                })
            }
            for(let k in ks){
                if(ss.includes(`D:${ks[k]}`)){
                    ss=ss.replaceAll(`D:${ks[k]}`,s[ks[k]]);
                }
            }
            await this.create(JSON.parse(ss),document.body)
            if(!!b)this.f('graph').setAttribute('active','')
        }
        d=null;
     
    }
    f(x,y){switch(true){case!x:return null;case!!x?.tagName:return x;case y==='class':return document.getElementsByClassName(x);case y==='tag':return document.getElementsByTagName(!!x?.toUpperCase())[0];default:x=typeof x==='string'?x:x[0];return document.getElementById(x)||document.getElementsByTagName(x?.toUpperCase()||'body')[0]}}
    constructor(c,p,dp){
        this._dat=c.data.comm;
        this.conn=c.conn;this._=c;
        this.brain=0;
        for(let x in c.parts){this[c.parts[x].split('.')[1]]=this.f(c.parts[x].split('.')[0])};
        this.dialog.addEventListener('click',e=>e.target.setAttribute('active',''));
        this.face.addEventListener('click',e=>{this.iiio.setAttribute('a','');
            this.face.setAttribute('a','');
            return this.f('qq').focus();
        });
        this.ear.addEventListener('keydown',e=>{
            if(this.iiio.hasAttribute('s'))this.iiio.removeAttribute('s');
            if(e.key=='Enter'){
                e.target.blur();
                e.ask=e.target?.value.toLowerCase();
                e.ask=e.ask.replaceAll(' ','');
                let q=e.ask.replace(/[ ?!{}\[\]%^*\(\).,=]+/g,'').toLowerCase();
                if(!!this[q])return this[q];
                let res=null
                for (let cmd in this._dat){
                    if(this._dat[cmd].match.includes(q)){
                        this._pace=this._dat[cmd].pace||60;
                        if(this._dat[cmd].is==='app'){
                            console.log(this._dat[cmd])
                            return this.create({
                                is:this._dat[cmd]?.is||'app',
                                params:this._dat[cmd]?.params||{},
                                looks:this._dat[cmd]?.looks||{},
                                elems:this._dat[cmd]?.elems||[]
                            })
                        }
                        res=this._dat[cmd].responseType==='random'
                            ?this._dat[cmd].response[Math.floor(Math.random() * this._dat[cmd].response.length)]
                            :this._dat[cmd].response;
                        this.speak=res;
                        res=null
                        return res
                    }
                }
                this.ear.value='';
                this.ear.focus()
            }
        });
        setTimeout(async(x,y,a,t)=>{
            this.start(p)
        },100);
    }
    get conn(){return !!this._conn}
    get install(){return new Promise((a,b)=>{if('serviceWorker'in navigator)navigator.serviceWorker.register('worker.js').then(x=>setTimeout(()=>{this.reload},100)).catch(x=>b(x))})}
    get isd(){return !!navigator.maxTouchPoints>0}
    get loc(){return localStorage}
    get pace(){return this._pace||60}
    get reload(){return window.location.reload();}
    get ses(){return sessionStorage}
    get stop(){if(!!this?._interval){clearInterval(this._interval);delete this._interval;}if(!!this?._timeout){clearTimeout(this._timeout);delete this._timeout;}}
    get trig(){return this._.trig}
    str(){let[x,y='']=arguments;x=isNaN(x)?x:20;while(y.length<x){y+='0aAbB1cCdD2eEfF3gGhH4iIjJ5kKlL6mMnNo7OpPqqqQ8rRsS9tTuU0vVwWxXyY'.charAt(Math.floor(Math.random() * 63))};return y;}
    set brain(x){if(x){let b=new BroadcastChannel('brain');b.postMessage(x);b.close;}}
    set conn(x){if(x){this._conn=!!x?1:0}}
    set look(x){if(x){['ll','ld','lm'].map(y=>{this.f(y).innerHTML='';switch(x){case'ld':this.f(y).innerHTML=x?.d||'';break;case'lm':this.f(y).innerHTML=x?.m||'';break;default:this.f(y).innerHTML=x?.s||'';break;}})}}
    set pace(x){if(x)this._pace=!isNaN(x)?x:60}
    get rand(){returnMath.floor(Math.random() * 63)}
    get s(){return function*(){for(let i in this._say){yield this._say[i]};return null}}
    set say(x){if(x){this._say=(Array.isArray(x)?x.join('\n'):x).split('');}}
    set speak(x){if(x){let i=0,a=0;this.stop;this.say=x;this.mouth.innerHTML='';x=this.s();this._interval=setInterval(()=>{let n=x.next();if(!!n?.done)return this.stop;n=n.value;switch(n){case'|':n='<br>';break;case'_':this.mouth.innerHTML='';n='';break;case'^':n='';if(this.trig[a]){this.do(this.trig[a]);a++;};break;default:break;};this.vocal.setAttribute('v',`${n}`.toLowerCase());this.mouth.innerHTML+=n;},this.pace)};}
    set store(x){if(!x)this._store={touches:0};else this._store[Object.keys(x)[0]]=Object.values(x)[0]}
    set trig(x){if(x){this._.trig=x}}
    async temp(){
        let[]=arguments
    }
};
    xh.open('GET','/manifest.json',true);
    xh.onload=function(e,x,y){
        x=window.location.pathname.slice(1).split('/').filter(x=>{return!!x||x!==''});
        if(x.length>0)x={ask:x}
        let res=JSON.parse(xh.response);
        return xh.status===200?new CIYA(res.ciya,x):1
    };
return xh.send()

    
})(new XMLHttpRequest())