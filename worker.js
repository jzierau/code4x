let ext={c:null,d:0,db:0,destroy:0,l:0,s:0,t:null,fav:[],hide:[],coll:[]}
class IIIO{
    a(){switch(true){case!!Array.isArray(arguments[0]):return arguments[0];case(typeof arguments[0]==='string'):return(arguments[0][1]==='{')?[JSON.parse(arguments[0])]:[arguments[0]];default:return[arguments[0]]}}
    d(){
        let[x,n,m,d,y]=arguments
        if(!x)return '????'
        else {
            n=new Date(x)
            m=n.getMonth();
            d=n.getDate();
            y=n.getFullYear();
            return `${m}/${d}/${y}`
        }
    }
    o(){return JSON.parse(JSON.stringify(arguments[0]))}
    q(){
        let[x,y,z,d,r,res,rw,m={msg:'*coughs*'}]=arguments;
        return new Promise(async(p)=>{
            d=self.indexedDB.open('iiio',1);
            d.onerror=p;
            d.onsuccess=async e=>{
                d=e.target.result;
                x={
                    ...x?.count&&{c:x.count},
                    f:x?.from||'sys',
                    m:x?.method||'get',
                    q:x?.query,then:x?.then
                };
                try{
                    r=d.transaction(x?.f,'readonly').objectStore(x?.f);
                    r.onerror=error=>p({msg:'*coughs*',code:802,error});
                    rw=d.transaction(x?.f,'readwrite').objectStore(x?.f);
                    rw.onerror=error=>p({msg:'*coughs*',code:803,error});
                    switch(x?.m){
                        case'add':
                            res=rw.add({
                                ...x.q,
                                c:new Date().getTime(),
                                e:new Date().getTime()
                            });
                            break;
                        case'all':res=r.getAll(x.q);break;
                        case'clear':res=r.clear();break;
                        case'count':res=r.count();break;
                        case'del':res=rw.delete(x.q);break;
                        case'get':
                            res=r.get(x.q?.id||x?.q);
                            break;
                        case'keys':
                            res=r.getAllKeys(x.q,x?.c||null);
                            break;
                        case'put':
                            x.curr=await r.get(x?.q?.id);
                            res=rw.put({...x.q,e:new Date().getTime()});
                            break;
                        default:break;
                    };
                    res.onsuccess=x=>p(x.target.result);
                    res.onerror=p;
                }catch(e){
                    return p(e)
                }
            }
        }
    )}
    st(){let[x,y='']=arguments;x=isNaN(x)?x:20;while(y.length<x){y+='0aAbB1cCdD2eEfF3gGhH4iIjJ5kKlL6mMnNo7OpPqqqQ8rRsS9tTuU0vVwWxXyY'.charAt(Math.floor(Math.random()*63))};return y;}
    t(...x){let s=x[0],d=new Date(s*1000),h=d.getUTCHours(),m=d.getUTCMinutes(),ss=d.getSeconds();if(h<10){h="0"+h;}if(m<10){m="0"+m;}if(ss<10){ss="0"+ss;}return h+":"+m+":"+ss;}
    w(){let[x,y,z]=arguments;z=this.chan[x];if(!z){this.chan=x;z=this.chan[x];};return z.postMessage(y);}
	constructor(){this._channels={};this._data={};this._mem={db:0};this._last=null;}
    async d3o(){let[x,y,acc,aa=acc?.aa?.entries(),a=acc?.aa?.size||0,u,d,dt,to,br,ks,te,p,q]=arguments;if(!x)return Promise.resolve();while(a>0){let v=aa.next();if(v.value[0].includes('a3o')){to=v.value[1];break;};a--;};dt=await this.q({from:'data',query:to});u=await this.q({from:'user',query:to});switch(x){
        case'add':if(!u?.play)u.play={...y?.v||{},target:'play'};else u.queue.add({...y?.v||{},target:'queue'});d={a:'add',x:y.v};to=u;break;
        case'del':console.log('DELETING',y);break;
        case'fav':y={...y.v,pa:'favorite'};u.favorite.add(y);d={a:'favorite',x:y};to=u;break;
        case'fill':br=new Set();dt.ff.forEach(k=>{for(let i in k){br.add(JSON.stringify(k[i]))}});br=Array.from(br).map(b=>JSON.parse(b)).sort((a,b)=>a?.p?.trk>b?.p?.trk?1:-1);d={a:'fill',x:{browse:[...br||[]],collect:[...u?.collect||[]],play:u?.play&&[...u?.play]||[],favorite:[...u?.favorite||[]],hidden:[...u?.hidden||[]],playlist:[...u?.playlist||[]],previous:[...u?.previous||[]],queue:[...u?.queue||[]],reccomend:[...u?.reccomend||[]]}};break;
        case'find':d=await this.find(y.p);for(let i in d){this.create=d[i]};return Promise.resolve(d);
        case'list':d={a:'list',x};break;
        case'loop':d={a:'loop'};break;
        case'mute':d={a:'mute'};break;
        case'play':if(y?.v?.is==='amm'){d=[...u?.queue||[]];d={a:'play',...(d.length>0)?{x:[d.shift()]}:{}};break};if(u?.play.size>0){u.previous.add(...u.play.values());u.play.clear()};u.play.add({...y?.v,target:'play'});d={a:'play',x:[...u.play][0]};to=u;break;
        case'previous':if(u.previous.size>0){p=[...u.previous];if(u.play.size>0)u.queue=new Set([...u.play,...u.queue]);u.play=new Set([p.shift()]);u.previous=new Set(p);to=u;};d={a:'prev'};break
        case'queue':if(u.queue.size>0){q=[...u.queue];if(u.play.size>0)u.previous=new Set([...u.play,...u.previous]);u.play=new Set([q.shift()]);u.queue=new Set(q);to=u;d={a:'queue'};}break
        case'toggle':d={a:'toggle'};break;
        default:break;
    }dt=await this.q({from:'data',method:'put',query:x});u=await this.q({from:'user',method:'put',query:to});IIIO.channel('d3o',d)}
    async ask(){let[x,y,a,k,aa,i=0,idb,app]=arguments;if(x){
        a=await this.acc;
        aa=a?.aa?.entries();
        if(!!aa){while(i<a.aa.size){app=aa.next()?.value;if(app)app=app[0].includes(x)?app[1]:null;i++};}
        app=app&&this.q({from:'app',query:app});
        app=await app;
        if(!app){
            app=await this.fetch('/ask',{method:'post',body:{query:x}});
            if(!app)return Promise.resolve();
            if(app?.is==='app'){
                app={...app,m:app.m};
                app.id=this.st(10);
                a.aa.set([x,app.n],app.id);
                delete app.n;
                await this.q({from:'app',method:'put',query:app});
                await this.q({from:'sys',method:'put',query:a});
                if(app?.idb){
                    k=Object.keys(app?.idb);
                    for(let i in k){
                        idb=this.a(app?.idb[k[i]]);
                        for(let d in idb){
                            idb[d].id=app.id;
                            let ps=Object.keys(idb[d]);
                            for(let p in ps){if(idb[d][ps[p]]==='M')idb[d][ps[p]]=new Map();if(idb[d][ps[p]]==='S')idb[d][ps[p]]=new Set();}
                            await this.q({from:k[i],method:'put',query:idb[d]});
                        }
                    }
                }
            }
        };
        this.active=app?.id;if(!!app?.m)this.speak={msg:app?.m,...app.x&&{pace:app?.x},t:app?.d?.tr};['e','idb','m'].map(x=>{delete app[x]});this.create=app;
    };return Promise.resolve();}
    async db(){let[{d,n,t},i,k]=arguments;i=self.indexedDB.open(n,1);i.onsuccess=async x=>{x=x.target.result;for(let i in d){k=Object.keys(d[i]);k.map(x=>{if(d[i][x]==='M')d[i][x]=new Map();if(d[i][x]==='S')d[i][x]=new Set();});await this.q({from:'sys',method:'add',query:d[i]})};this.mem={db:1}};i.onupgradeneeded=x=>{x=x.target.result;for(let i in t){x.createObjectStore(t[i],{keyPath:'id'})}}}
    async fill(){let[x,d,r={}]=arguments;d=await this.fetch(x?.d.split('D:')[0]);IIIO.channel('fill',r);}
    async discern(){let[x,acc=await this.acc,apps,k=acc?.aa?.entries(),i=acc?.aa?.size||0,t,v,q,d,m,b]=arguments;while(i>0){v=k.next();if(v.value[0].includes(x.ask))t=v.value[1];i--};switch(true){
        case!!x?.app:console.log('APP',x.app);break;
        case!!x?.ask:return await this.ask(x.ask);
        case!!x?.a3o:return await this.d3o(x.a3o.a,{p:x.a3o?.p,v:x.a3o?.v},await this.acc);
        case!!x?.buy:console.log('BUY',x.buy);break;
        case!!x?.cred:m=await this.q({from:'sys',method:'put',query:{...await this.q({from:'sys',method:'get',query:'acc'}),...await this.fetch('/login',{method:'POST',body:x.cred}),id:'acc'}});return Promise.resolve(IIIO.channel('cred',m?.token));
        case!!x?.data:console.log('DATA');break;
        case!!x?.fill:return this.fill(x.fill);
        case!!x?.find:d=await this.find(x.find);for(let dd in d){d[dd]={is:d[dd]?.is,...(!!d[dd]?.ac||!!d[dd]?.actions)&&{ac:d[dd]?.ac||d[dd]?.actions},p:d[dd]?.p||d[dd]?.params,pa:d[dd]?.pa||d[dd]?.parent,el:d[dd]?.el||d[dd]?.elems};for(let e in d[dd].el){if(d[dd].el[e]?.is=='tracks'){d[dd].el[e].el=d[dd].el[e].el.sort((a,b)=>a?.p?.track>b?.p?.track?1:-1)}};this.create=d[dd]};break;
        case!!x?.loc:console.log('LOCATE',x.loc);break;
        case!!x?.rec:switch(x.rec[0]){
            case'gcx':d=await this.fetch(`/record/${x.rec[1]}`);m=d?.model;delete d?.model;b=d?.break.split('');m=JSON.stringify(m);if(!!b&&b.length>0)while(m?.includes('D:brk')){m=m.replace('D:brk',b?.shift())};b=Object.keys(d);b.map(a=>{switch(a){case'date':d[a]=this.d(parseInt(d[a]));break;case'variant':d[a]=!!d[a]?'Yes':'Basic';break;default:break};m=m.replaceAll(`D:${a}`,d[a])});m=JSON.parse(m);IIIO.channel('pre',m);break;
            default:throw new Error(`${x.rec[0]} is unaccounted for`)
        }break;
        case!!x?.short:console.log('SHORT',x.short);break;
        case!!x?.sys:q=await this.q({from:'sys',method:'get',query:x.sys?.id})||{};this.mem.db=1;return await this.q({from:'sys',method:'put',query:{...q,...x.sys}})
        case!!x?.tell:x=x?.tell||x;d=Object.keys(x)[0];if(!x[d]?.a){x[d].a=x[d]};this[d](x[d]?.a,x[d]?.x);break;
        case!!x?.temp:console.log('TEMPY',x);break;
        case!!x?.user:console.log('USER',x?.user);break;
        case!!t:t=await this.q({from:'app',query:t});if(t?.m){this.speak=t.m}this.create={ac:t?.ac,bf:t?.bf,el:t?.el,is:t?.is,l:t?.l,p:t.p,pa:t?.pa,tr:t?.tr};break;
        default:this.speak='*hiccup*';break;
    }}
    async fetch(){let[x,y,z]=arguments,acc=await this.acc,data=await fetch(x||'/ask',{headers:{'Content-Type':'application/json',ii:acc?.token},method:(y?.method||'get').toUpperCase(),...y?.method!=='get'&&{body:y?.body&&JSON.stringify(y.body)}}).catch(console.error);return Promise.resolve(data?.json()||data)}
    async find(){let[x,y,a,k,l=[],idb,c,acc=await this.acc,ap=await this.active,d]=arguments;if(!x)return Promise.resolve();c=ap?.id;d=await this.q({from:'data',query:c});if(d){x=x.split('/');c=d.ff?.get(x.join(''));if(c)l=c;else{c=(await this.fetch(`/find${x.join('/')}`))?.data||{};if(!!c){d.ff?.set(x.join(''),c);d.keep=new Date().getTime();await this.q({from:'data',method:'put',query:{id:x.join(''),...d}});l=c.sort((a,b)=>a?.id>b?.id?1:-1)}}};return Promise.resolve(l)} 
    async locate(){et[x,y,z,d,k,res=[]]=arguments;x=x?.data||x;x=x?.loc||{};d=await this.fetch(x?.data);for(let a in d){k=Object.keys(d[a]);y=Object.copyObj();for(let i in k){x.model=x.model.replaceAll(`D:${k[i]}`,`${d[a][k[i]]}`.split('::')[1])}}}
    async payment(){throw new Error(self.ApplePaySession)}
    async start(){let[x=(await this.fetch('/manifest.json',{method:'get'}))?.iiio,ch=IIIO.channel('ciya'),db=await this.db(x.db),c=await (await caches.open(x.ch)).addAll(x.files),loc=IIIO.channel('loc')]=arguments;ch.onmessage=async e=>{e=e?.data;if(e?.ask==='destroy')e=e.ask;switch(e){
        case 0:break;
        case 'destroy':caches.delete('iiio');self.indexedDB.deleteDatabase('iiio');ch=new BroadcastChannel('close');ch.postMessage(0);return ch.close();
        case 1:this.status=1;return await this.talk(e);
        default:return await this.discern(e)
    }};ch.onerror=ev=>{this.ciya='*cough*'};loc.onmessage=async e=>{await this.locate(e)}}
    async talk(){return Promise.resolve(true);}
    get acc(){return this.mem.db?this.q({from:'sys',method:'get',query:'acc'}):{token:':::'}}
	get active(){return this.q({from:'app',query:this._a})}
    get app(){return this.mem.db&&this.q({from:'app',method:'all'})}
    get mem(){return this._mem}
	set active(x){if(x)this._a=x}
    set create(x){if(x){let s=IIIO.channel('create');s.postMessage(x);s.close()}}
    set cred(x){if(x){let s=IIIO.channel('cred');s.postMessage(x);s.close()}}
    set mem(x){if(x){this._mem={...this._mem,...x}}}
    set speak(x){if(x){let b=IIIO.channel('speak');b.postMessage(x);b.close();}}
    set sys(x){if(x){this.q({from:'sys',method:'put',query:x})}}
    static channel(){let[x,y]=arguments;if(y){let s=new BroadcastChannel(x);s.postMessage(y);return s.close();}else return new BroadcastChannel(x)}
    static error(){throw new Error(arguments[0])}
}
let sys=new IIIO()
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('fetch',x=>{switch(true){
    case(x.request.url.includes('manifest.json')):return caches.match(x.request);
    case(x.request.mode==='navigate'):return x.respondWith(caches.open('iiio').then((cache)=>cache.match('app.html').then(r=>r).catch((r)=>cache.match('/').then(r=>r))));
    case(x.request.mode==='cors'):return caches.match(x.request)||{msg:'offline'};
    case(x.request.mode==='no-cors'):return x.request.url.includes('/data/')?sys.fetch(x.request):caches.match(x.request);
    default:return sys?.fetch(x.request);
}})
sys.start();