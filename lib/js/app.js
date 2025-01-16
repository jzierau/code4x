(()=>{
    class CIYA{
        a(){switch(true){case !!Array.isArray(arguments[0]):return arguments[0];case(typeof arguments[0]==='string'):return(arguments[0][1]==='{')?[JSON.parse(arguments[0])]:[arguments[0]];default:return [arguments[0]]}}
        async action(){let[targ,ta,k,t,ks]=arguments;if(!targ||!ta)return Promise.resolve(targ);k=Object.keys(ta);for(let i in k){targ.addEventListener(k[i],async e=>{
            if(['submit','search'].includes(k[i])){e.stopPropagation();e.preventDefault();}
            ta[k[i]]=this.a(ta[k[i]]);
            for(let a in ta[k[i]]){
                if(typeof ta[k[i]][a]==='string'){a=ta[k[i]][a]?.split('.');
                if(typeof a[1]==='string'&&a[1].includes('!'))a=[a[0],a[1].slice(0,a[1].indexOf('!')),'!'];
                switch(a[1]){
                    case'I'||'IIIO':a[1]=this.f('iiio');break;
                    case'P'||'PARENT':a[1]=e.target.parentElement;break;
                    case'T'||'TARGET':a[1]=e.target;break;
                    default:a[1]=this.f(a[1])||a[1];break;
                };
                if(k[i].includes('touch')){t=e?.touches[0];this.store={[a[1]?.tagName?'targ':a[2]]:t?t[a[1]]:a[1]}};
                a[1]=await this.do(a[0],a[1],a.slice(1),e);
            }else{ks=Object.keys(ta[k[i]][a]);for(let kk in ks){this.do(ks[kk],e,ta[k[i]][a][ks[kk]],a)}}
        }})}return Promise.resolve(targ)}
        async build(){let[d,p,el,ar]=arguments;if(!d||d?.length<1)return Promise.resolve(this.speak='*hiccup*');p=d?.pa||p||this.f('body');switch (true){
            case Array.isArray(d):for(let dd in d){await this.build(d[dd],p);};break;
            case typeof d=='string':case typeof d=='number':p.innerHTML+=`${d}`;return Promise.resolve(p);
            default:if(d?.bf){d.bf=this.a(d.bf)||[];for(let b in d.bf){await this.do(d?.bf[b]);}};this.look=d?.l;el=document.createElement(d?.is||'div');el=await this.do('attr',el,d?.p);el.sk=d;el=await this.action(el,d?.ac);if(d?.el){d.el=Array.isArray(d.el)?d.el:[d.el];for(let e in d.el){if(typeof d.el[e]!=='object')el.innerHTML+=d.el[e];else await this.build(d?.el[e],el)}};p=this.f(p);if(d?.af){d.af=this.a(d.af)||[];for(let b in d.af){await this.do(d?.af[b],el);}};Promise.resolve(el.tagName==='APP'?p.insertBefore(el,this.f('ciya')):!!p?p.appendChild(el):el)
        }Promise.resolve(d)}
        async cred(ev){if(navigator?.credentials){
            navigator.credentials
                .get({
                    password:true,
                    federated:[
                        "https://facebook.com"
                    ]
                })
                .then(c=>{
                    new BroadcastChannel('cred').onmessage=x=>{
                        console.log(x)
                        this.loc.iiio=x?.data
                    }
                    this.brain={cred:{icon:c?.icon,name:c?.name,pass:c?.password,token:this.loc?.iiio||'::',user:c?.id,}}
                })
            // const credInit = {
            //     id: "1234",
            //     name: "Serpentina",
            //     origin: "https://example.org",
            //     password: "the last visible dog",
            //   };
            // let c=await navigator.credentials.create({password:credInit})
            // console.log(c)

        }}
        async pre(){
            let[x,y,ch=new BroadcastChannel('pre')]=arguments;
            if(x?.search){
                y=x.search.slice(1).split('=');
                if(y.length>1){
                    ch.postMessage({pre:y[0]})
                    this.record=y
                    ch.onmessage=e=>{this.build(e?.data||e);};
                }
            }
            return Promise.resolve();
            // window.location=x?.href.split('?')[0]
            // await this.locate({loc:{[y[0]]:y[1]},mod:x?.mo,url:window.location.href})
            // ch.onmessage=ev=>console.log(ev)
            // switch(y[0]){
            //     default:
            //         throw new Error(`${y[0]} is unaccounted for`)
            // }
        }
        canDrag(x,y,t,ti){this.self.isDragging=0;ti=this.f(x.config.actions.drag?.to);x.ontouchstart=ev=>{};x.ontouchmove=ev=>{t=ev.touches[0];ev.target.style.top=t.clientY+"px";ev.target.style.left=t.clientX+'px';};x.ontouchend=ev=>{this.self.isDragging=0;t=ev.touches[0];if(ti&&ev.target.getBoundingClientRect().x>ti.getBoundingClientRect().x&&ev.target.getBoundingClientRect().y>ti.getBoundingClientRect().y){if(y?.actions?.drop){this.array(y.actions.drop,1).map(x=>{if(typeof x==='string'){x=x.split('+');return this[x[0]]?this[x[0]](x[1],x):x}else{Object.keys(x).map(k=>{if(this[k])this[k](x[k],x)})}});return 1;}this.effect(y?.actions?.drag?.pass)}return false}}
        async fill(){
            let[x,ch=new BroadcastChannel('fill')]=arguments;
            ch.onmessage=c=>{
                console.log('DATAY',x)
                ch.close()
            }
            this.brain={fill:x}
            return Promise.resolve()
        }
        async d3o(){let[x,y,pl=this.f('player'),t,tg,p,n,q]=arguments;if(!x)return Promise.resolve();if(this.loc.audio)pl.currentTime=this.loc.audio;switch(x){
            case'add':await this.build(y,this.f(!!pl?.children[0]?'queue':'play'));await this.build(y,pl);return 1
            case'favorite':return 1;
            case'fill':t=Object.keys(y);for(let i in t){tg=this.f(t[i]);if(tg){tg.innerHTML='';for(let b in y[t[i]]){await this.build(y[t[i]][b],tg);if(t[i]==='play'){await this.build(y[t[i]][b],this.f('player'))};}this.f(`${t[i]}snone`)?.remove();}}return 1
            case'load':if(pl?.childNodes){pl.currentTime=0;this.f('tl').removeAttribute('active');this.f('tl').value=0;return this.f('lt').setAttribute('style','max-width:0;');}return 1;
            case'mute':pl.muted=!pl.muted;return 1;
            case'loop':if(pl?.hasAttribute('loop'))pl.removeAttribute('loop');else pl.setAttribute('loop','');return 1;
            case'play':t=this.f('play').firstChild;if(!!t)this.f('previous').prepend(t);tg=[this.f('play'),pl];pl.innerHTML='';for(let i in tg){await this.build(y,tg[i])};pl.load();return 1
            case'prev':n=Array.from(this.f('previous').childNodes).shift();this.f('timeline').setAttribute('change','');if(n){pl.pause();p=this.f('play').firstChild;this.f('play').innerHTML='';pl.innerHTML='';this.f('play').appendChild(n);pl.appendChild(n.cloneNode(1));this.f('queue').prepend(p);}return pl.load();
            case'queue':n=Array.from(this.f('queue').childNodes).shift();if(n){pl.pause();this.f('timeline').setAttribute('change','');p=this.f('play').firstChild;this.f('play').innerHTML='';this.f('play').appendChild(n);pl.innerHTML='';pl.appendChild(n.cloneNode(1));this.f('previous').prepend(p);pl.load();}return 1
            case'stop':return await pl.stop();
            case'toggle':if(pl.firstChild)return!pl?.paused?pl.pause():await pl.play();return Promise.resolve()
            default:throw new Error(`${x} is unaccounted for.`)
        }}
        async do(){let[x,y,data,keys,list,targ,curr,ch,ev,f,t,k,dd,sk,m]=arguments;data=data||{};ev=keys;keys=null;targ=y?.tagName?y:null;if(x){if(typeof x==='object'){data=x;x=Object.keys(data)[0];data=data[x]}x=Array.isArray(x)?x:typeof x==='string'?x?.split('.'):[];if(!!this[x[0]]){if(typeof this[x[0]]==='function'){this[x[0]](x[1]||y,1,Array.isArray(data)?this.f(data[1]):1?1:data)}else if(!!this[x[0]])this[x[0]]}else switch(x[0]){
            case'active':
                // console.log(y,data);
                if(data[1]===('!')){
                    data=Array.from(y.parentElement.children);
                    for(let s in data){
                        if(data[s]!==y){
                            data[s].removeAttribute(x[0])
                        }
                    }
                };
                f=x;
                y=x[1]?this.f(x[1]):y;
                y=this.k(y);
                //  need to make miab minimize button work properly
                //  and style it to fit in the bank
                console.log('acty',y)
                y?.toggleAttribute('active');
                break;
            case'add':if(data?.pa)setTimeout(()=>{targ=data?.pa?this.f(data.pa):y;this.build(data,targ)},0);else{if(data.length>0)x.push(...data);if(x[1])this.f(x[2]).appendChild(x[1]);}break;

            case'attr':
                y=x[1]?this.f(x[1]):y;
                data={...data,...!!x[2]&&{[x[2]]:x[3]||''}};
                keys=Object.keys(data);
                for(let k in keys){
                    if(y?.hasAttribute(keys[k]))y?.removeAttribute(keys[k]);
                    else y?.setAttribute(keys[k],[null,undefined,'',' ','_'].includes(data[keys[k]])?'':data[keys[k]])
                }
                break;
            case'a3o':if(!Array.isArray(data)){data=[x[1],x[2]||y]};data[0]=data[0]?.tagName?data[0].id:data[0];sk=this.f(data[1])||null;sk=!!sk?sk.sk:sk;return this.brain={a3o:{...!!['fill','previous','queue'].includes(y)&&{a:y}||{a:data[0],...!!sk&&{...data[0]==='find'?{p:`${sk?.p.k}/${sk?.p.r}/${this.f(data[1]).value}/${sk?.p.l}`.replaceAll(' ','_')}:{v:this.f(data[1]).sk}}}}}
            case'audio':x=new Audio(y.indexOf('http')==0?y:`https://iiio.app/audio${y}.mp3`);x.addEventListener("error",e=>x.remove());x.addEventListener("ended",e=>x.remove());x.play();y=x;break;
            case'buy':
                m=this.pay(data)
                    .then(e=>{
                        console.log(e);
                        // console.log(e)
                        // const processPaymentWithServer = paymentResponse => {
                        //     return new Promise((resolve, reject) => {
                        //       setTimeout(() => {
                        //         resolve({ status:true })
                        //       }, 1500)
                        //     })
                        //   }
                        
                        // processPaymentWithServer(e).then(data => {
                        //     if (data.status) {
                        //       paymentResponse.complete('success')
                        //     } else {
                        //       paymentResponse.complete('fail')
                        //     }
                    })
                break
            case'clear':switch(x[1]||y){case'store':this.store=x[0];break;default:break;}break;
            case'click':return this.f(x[1]||y).click();
            case'compare':list=this.a(data.values);curr=[];for(let l in list){switch(true){case !isNaN(list[l]):curr.push(list[l]);break;case(typeof list[l]==='string'):t=list[l]?.split('S:')[1]||list[l];t=this.store[t];curr.push(t);break;default:break;}};switch(true){case(curr[0]>curr[1]):if(data['<']){for(let d in data['<']){dd=data['<'][d].split('.');await this.do(dd[0],...dd.slice(1)||[]);}};break;case(curr[0]<curr[1]):if(data['>']){for(let d in data['>']){dd=data['>'][d].split('.');await this.do(dd[0],...dd.slice(1)||[]);}};break;case(curr[0]==curr[1]):if(data['==']){for(let d in data['==']){dd=data['=='][d].split('.');await this.do(dd[0],...dd.slice(1)||[]);}}break;default:break;};curr=[];break;
            case'cred':return await this.cred(x,y,data)
            case'destroy':this.destroy;break;
            case'focus':return this.f(x[1]||y).focus();
            case'go':return window.location=x[1];
            case'hide':return this.f(x[1]||y).removeAttribute('active');
            case'home':return window.location='/';
            case'observe':if(!!x[2]&&!!x[3]){setTimeout((o,ic)=>{o=new IntersectionObserver(en=>{en.forEach(e=>{switch(x[4]){case'ir':if(e.isIntersecting){if(e.intersectionRatio>parseFloat(`0.${x[5]}`))this.f(x[6]).setAttribute(x[7],'')}else this.f(x[6]).removeAttribute(x[7]);break;default:break;}})},{root:this.f(x[2]),rootMargin:`${x[8]||0}px ${x[9]||0}px ${x[10]||0}px ${x[11]||0}px`,threshold:0.5});o.observe(this.f(x[3]))},parseInt(x[1])||100)};break;
            case'ran':this.run='!';break;
            case'reload':this.reload;break;
            case'remove':y=this.f(x[1])||y;if(y?.tagName)y?.remove();break;
            case'replace':
                m=await this.build(data)
                console.log(this.f('menu'),data)
                // this.f('menu').replaceChild(this.f(data?.t),m)
                // this.f(data?.t).replaceChild(await this.build(data))
                break;
            case'scroll':x=[x[0],x[1],parseInt(x[2]),parseInt(x[3]),0];y=this.f(x[1]);if(x[2]>y.scrollLeft)this._.interval=setInterval(()=>{y.scrollLeft+=10;if(y.scrollLeft>=x[2])this.stop;},1);else this._.interval=setInterval(()=>{y.scrollLeft-=10;if(y.scrollLeft<=x[2])this.stop;},1);break;
            case'sys':y=this.f(x[1])||y;this.brain={sys:{[y?.name||y?.id]:x[3]||data[0]?.value||y?.value||1,id:data[1]}};break;
            case'tell':this.brain={tell:x[1]};break;
            case'take':console.log('TAKE',x,y,data);break;
            case'toggle':x=[x[0],...data||x.slice(1)||[]];y=this.f(x[1])||y;y?.toggleAttribute(x[2]||'hide');break;
            case'unload':window.addEventListener('beforeunload',ev=>{x[2]=x[2].split(':');switch(x[1]){case'loc':let l=this.f(x[2][0]);this.loc[x[2][0]]=l[x[2][1]];break;default:break;}})
            case'video':this.f('video')?.remove();document.body.appendChild(document.createElement('video'));y=this.f('video');break;
            default:if(!y)break;data=document.getElementsByTagName(y?.tagName);if(!!x[2]||data.length<1){y=y?.tagName?y:this.f(y);if(!x[2])y.toggleAttribute(x[0]);else{if(x[2]>0)y.setAttribute(x[0],'');if(x[2]<1)y.removeAttribute(x[0]);}}else{data=Array.from(data);for(let d in data){data[d].setAttribute(x[0],'')}}break;
        }return Promise.resolve(y)}}
        async wait(){let[x,y]=arguments;if(![undefined,null,false].includes(x))return x;else setTimeout(async ()=>{await this.wait(this.f(x||'audio'))},250);}
        constructor(p,au){
            this._={d3o:CIYA.channel('d3o'),behaviors:new Map(),create:CIYA.channel('create'),cred:CIYA.channel('cred'),data:{},interval:null,last:null,list:[],listen:null,model:{},pace:60,player:null,say:[],speak:this.speak,store:{touches:0},temp:null,timeout:null,trig:[]};p=CIYA.part();for(let x in p){this[p[x].split('.')[1]]=this.f(p[x].split('.')[0])};this._.d3o.onmessage=async e=>{e=e.data;au=this.f('player');if(au){let[tl,dur,cur,lt,play,queue,prev,time,fav,tc,tt,tg]=[this.f('tl'),this.f('dur'),this.f('cur'),this.f('lt'),this.f('play'),this.f('queue'),this.f('previous'),this.f('timeline'),this.f('fav'),x=>Math.floor(x/60)+':'+('0'+Math.floor(x%60)).slice(-2),0,0];this._fl=0;
            tl.oninput=e=>{this._fl=1;au.seek=au.unit*parseInt(e.target.value);au.pause();};
            tl.onchange=e=>{this._fl=0;au.seek=au.unit*parseInt(e.target.value);au.currentTime=au.unit*parseInt(e.target.value);tl.value=`${((100*au.currentTime)/au.duration).toFixed(0)}`;return au.play();};
            au.onended=e=>{tg=e.target.firstChild;prev.prepend(tg);[e.target,play].map(x=>{x.innerHTML=''});tl.value=0;[cur,dur].map(x=>x.innerHTML='0:00');lt.removeAttribute('style');time.removeAttribute('active');this.brain={a3o:{a:'queue'}};};
            // au.oncanplay=e=>{}
            au.onloadeddata=e=>{e.target.unit=e.target.duration/100;dur.innerHTML=tc(e.target.duration);time.setAttribute('active','');fav.removeAttribute('off');};
            // au.onloadstart=e=>{}
            au.onsuspend=e=>{lt.setAttribute('style',`max-width:${tl.value||0}%;`);dur.innerHTML=tc(tt);if(e.target.currentTime>0){tl.value=`${((100*e.target.currentTime)/e.target.duration).toFixed(0)}`;this.f('cur').innerHTML=tc(e.target.currentTime);}this._fl=0}
            au.ontimeupdate=e=>{if(!this._fl){tl.value=`${((100*tt)/e.target.duration).toFixed(0)}`;cur.innerHTML=tc(tt);let ct=e.target.currentTime||null;if(!!ct&&ct>0){tl.value=`${((100*ct)/e.target.duration).toFixed(0)}`;lt.setAttribute('style',`width:${tl.value||0}%;`);if(this.f('cur'))this.f('cur').innerHTML=tc(ct);time.removeAttribute('change')};this._fl=0}};
        }return await this.d3o(e.a,e.x)};this.dialog.addEventListener('click',e=>e.target.toggleAttribute('a'));this.f('ttm').addEventListener('click',e=>{for(let a of this.dialog.attributes){this.dialog.removeAttribute(a.name)};Array.from(this.f('ttm').children).map(x=>{x.removeAttribute('a')});this.dialog.setAttribute(e.target.getAttributeNames()[0],'');this.f('qq').setAttribute('k',e.target.getAttribute('k'));this.f('qq').setAttribute('t',e.target.getAttribute('t'));this.f('ttc').setAttribute('v',e.target.id.slice(1));this.f('ttc').innerHTML=e.target.innerHTML;this.dialog.removeAttribute('a');
        });this.ear.addEventListener('keydown',e=>{if(e.key=='Enter'){let v=e.target.value;e.target.blur();v=v.replace(/[?!{}\[\]%^*\(\).,=]+/g,'').toLowerCase();if(this[v]){return(typeof this[v]==='function')?this[v]():this[v];}else this.brain={[e.target.getAttribute('k')||'ask']:`${e.target.hasAttribute('t')?`/${e.target.getAttribute('t')}/`:''}${v}`};this.ear.value='';this.ear.focus()}});this.create;this.run;this.speak;this.brain=1;this.ear.focus();
    }
        f(){let[x,y]=arguments;switch(true){case!x:return null;case!!x?.tagName:return x;case y==='class':return document.getElementsByClassName(x);case y==='tag':return typeof x==='string'&&document.getElementsByTagName(!!x?.toUpperCase())[0];default:x=typeof x==='string'?x:x[0];return document.getElementById(x)||typeof x==='string'&&document.getElementsByTagName(x?.toUpperCase()||'body')[0]}}
        get pace(){return this._.pace}
        get create(){let ch=CIYA.channel('create');ch.onerror=e=>{CIYA.error(e);};this.list=[];ch.onmessage=async e=>{await this.build(e?.data,this.f(e?.data?.pa||'body'));}}
        // get cred(){return this._.cred}
        get data(){return this._.data}
        get destroy(){this.brain=0;let ch=CIYA.channel('close');ch.onerror=e=>{;CIYA.error(e);};ch.onmessage=e=>{this.loc.clear();this.ses.clear();return navigator.serviceWorker.getRegistrations().then(rs=>{for(let r of rs){r.unregister();};return Promise.resolve(window.location.reload()&&1);})};}
        get isd(){return !!navigator.maxTouchPoints>0}
        get list(){return this._.list}
        get loc(){return localStorage}
        get model(){return this._.model}
        get pace(){return this._.pace}
        get player(){return x=>{switch(x){case'a':x=this.f('audio');break;case'ac':x=new AudioContext(this.f('audio'));break;case'v':x=this.f('video');break;case'vc':x=new VideoContext(this.f('video'));break;default:CIYA.error(`${x} is not a player`);break;}this._.player=x};}
        get reload(){return window.location.reload()}
        get s(){return function*(){while(this._.say.length>0){yield this._.say.shift()}return null}}
        get ses(){return sessionStorage}
        get speak(){let ch=CIYA.channel('speak');ch.onerror=e=>{CIYA.error(e);};ch.onmessage=(x,o,y,i,t)=>{x=x.data;this.trig=x?.t||this._.trig;this.pace=x?.pace||60;o=x?.o||0;x=x.msg;if(x){this.say=Array.isArray(x)?x.join(''):x;if(!o)this.mouth.innerHTML='';y=this.s();i=0;this.stop;this._.interval=setInterval(()=>{let n=y.next(),p,q;if(!!n?.done)return this.stop;n=n.value;switch(n){
            case'|':n='<br>';break;
            case'/':p=Array.isArray(x)?x.join(''):x;p=p.split(n)[1];if(!isNaN(p)){this.stop;p=parseInt(p);this._.say=((this._.say.join('')).replace(`${p}/`,'')).split('');return setTimeout(()=>{this.speak={msg:this._.say,o:1}},p)}break;
            case'_':this.mouth.innerHTML='';n='';break;
            case'^':t=this.t().next();if(this._.say[0]===';'){this.stop;this.do(t.value);this._.say.shift();let ch=new BroadcastChannel('run');ch.onmessage=c=>{this.speak={msg:this._.say,o:1};ch.close()}}else this.do(t.value);n='';break;
            case':':switch(true){case(this._.say[0]===':'):n='';this.stop;this._.say.shift();this._.say=this._.say.join('');let d=this._.say.split('::')[0],v=this.f(d.toLowerCase())?.value;if(d[0].toUpperCase()===d[0])v=[' ',v[0].toUpperCase(),...v.slice(1)].join('');this._.say=this._.say.replace(`${d}::`,v);this.speak={msg:this._.say,o:1};break;default:n=':';break;}
            default:break;}this.vocal.setAttribute('v',`${n}`.toLowerCase());this.mouth.innerHTML+=n;
        },this.pace)}}}
        get stop(){if(!!this?._.interval){clearInterval(this._.interval);this._.interval=null;}if(!!this?._.timeout){clearTimeout(this._.timeout);this._.timeout=null;}}
        get store(){return this._.store}
        get t(){return function*(){while(this._.trig.length>0){yield this._.trig.shift()};return null}}
        k(){let[x,y]=arguments;switch(true){case'IIIO'.includes(x):x=this.f('iiio');break;case'TARGET'.includes(x):x=y.target;break;case'PARENT'.includes(x):x=y.target.parentElement;break;default:x=this.f(x)||x;break;}return x}
        p(){let[x,y,z,a]=arguments;return(typeof this[x]==='function')?this[x](y,z):this[x]||x||0}
        pay(){
            let[x,y,z]=arguments;
            console.log(x,y,z)
            if(!!window?.PaymentRequest){return(new PaymentRequest(
                [
                    {
                        supportedMethods:'https://google.com/pay',
                        data:{
                            environment:'TEST',
                            apiVersion:2,
                            apiVersionMinor:0,
                            merchantInfo:{
                            // A merchant ID is available after approval by Google.
                            // 'merchantId':'12345678901234567890',
                                merchantName:'Example Merchant'
                            },
                            allowedPaymentMethods:[{
                                type:'CARD',
                                parameters:{
                                    allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
                                    allowedCardNetworks:['AMEX','DISCOVER','INTERAC','JCB','MASTERCARD','VISA']
                                },
                                tokenizationSpecification:{
                                    type:'PAYMENT_GATEWAY',
                                    // Check with your payment gateway on the parameters to pass.
                                    // @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway}
                                    parameters:{
                                    'gateway':'example',
                                    'gatewayMerchantId':'exampleGatewayMerchantId'
                                    }
                                }
                            }]
                        }
                    }
                ],
                x,
                {requestPayerName:true,requestPayerPhone:true,requestPayerEmail:true}
            )).show()
        }
        }
        set brain(x){if(x){if(!!x?.a?.tagName)x.a=x.a.sk;this._.temp=new BroadcastChannel('ciya');this._.temp.postMessage(x);this._.temp.close();this._.temp=null}}
        set create(x){if(x){this._.temp=new BroadcastChannel('create');this._.temp.postMessage(x);this._.temp.close();this._.temp=null}}        
        // set cred(x){if(x)this.brain={cred:x}}
        set list(x){if(x)this._.list=x===0?[]:[...this._.list,...x]}
        set look(x){if(x?.s)this.f('ll').innerHTML=x.s;if(x?.d)this.f('ld').innerHTML=x.d;if(x?.m)this.f('lm').innerHTML=x.m;}
        set pace(x){if(x)this._pace=!isNaN(x)?x:this._pace}
        set record(x){if(x){this.brain={rec:x}}}
        set run(x){if(x){this._.temp=new BroadcastChannel('run');this._.temp.postMessage(x);this._.temp.close();this._.temp=null}}
        set say(x){if(x){this._.say=((Array.isArray(x)&&!this._.say)?x.join('\n'):x).split('');}}
        set speak(x){if(x){this._.temp=new BroadcastChannel('speak');this._.temp.postMessage(x);this._.temp.close();this._.temp=null}}
        set store(x){if(x==='clear')this._.store={touches:0};else this._.store={...this?._?.store||{},...x||{}}}
        set tell(x){if(x)this.brain={tell:x}}
        set temp(x){if(x)this.brain={temp:x}}
        set trig(x){if(x){this._.trig=x}}
        st(){let[x,y='']=arguments;x=isNaN(x)?x:20;while(y.length<x){y+='0aAbB1cCdD2eEfF3gGhH4iIjJ5kKlL6mMnNo7OpPqqqQ8rRsS9tTuU0vVwWxXyY'.charAt(Math.floor(Math.random()*63))};return y;}
        static channel(){let[x,y]=arguments;if(y){let s=new BroadcastChannel(x);s.postMessage(y);return s.close();}else return new BroadcastChannel(x)}
        static error(){throw new Error(arguments[0])}
        static part(){return["qq.ear","tt.dialog","aa.panel","ff.face","vv.vocal","ll.look","mm.mouth","iiio.iiio"]}
        tc(){return Math.floor(arguments[0]/60)+':'+('0'+ Math.floor(arguments[0]%60)).slice(-2);}
    }
    let ciya=new CIYA()
    window.onload=ev=>{
        ciya.pre(ev.target.location);
    }
    // setTimeout(()=>ciya.do('observe.view'),1000);
})()

