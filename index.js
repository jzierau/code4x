const express=require('express'),
      app=express(),
      url='http://localhost:8087',
      v2='http://localhost:8083/2',
      v1='http://localhost:8083/1';
app.use('/audio',(x,y)=>y.redirect(307,`${url}${x.originalUrl}`));
app.use('/auth',(x,y)=>y.redirect(307,`${v2}/auth`));
app.use('/find',(x,y)=>y.redirect(307,`${v2}/find`));
app.use('/user',(x,y)=>y.redirect(307,`${v2}/ask`));
app.use('/browse',(x,y)=>y.redirect(307,`${v2}/browse`));
app.use('/search',(x,y)=>y.redirect(307,`${v2}${x.originalUrl}`));
app.use('/x',(x,y)=>y.redirect(307,`${v2}/x`));
app.use('/data',express.static('./lib/js/data.json',{fallthrough:false}))
app.use('/',express.static('./',{fallthrough:false}));
app.listen(8087)


// app.use('/a',(x,y)=>y.redirect(307,`${url}/ask`))
