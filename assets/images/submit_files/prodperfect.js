!function(name,path,ctx){
    var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
   }('ProdPerfectKeen','https://trilogy.trackinglibrary.prodperfect.com/keen-tracking.min.js',this);

   ProdPerfectKeen.ready(function(){
    var client = new ProdPerfectKeen({
      projectId: "S8qOVRqEAHAWu8nzHNjh69lq",
      writeKey: "BNU6FZBR3HZVCUS4RGD0LKULXD673IVHDD7WRFR93SVIM30Z412NQHQPYUM0Q1Y41FDRJX9V7HUUVO26EMDX8LLF117OC3E1AXUNQ2Y1FMTQDPN5G8NV4OWXS5TD7ZMQ1IP77WXVHDPC8V17KQD9GYXMEOL7KEV49NSU4MUUFS9FBQS5ABNFJAVWPANOIURV",
      requestType: "beacon",
      host: "trilogy.datapipe.prodperfect.com/v1"
    });

    client.extendEvents({
      visitor: {
        user_id: null
      }
    });

    var options = {
      ignoreDisabledFormFields: false,
      recordClicks: true,
      recordFormSubmits: true,
      recordInputChanges: true,
      recordPageViews: true,
      recordPageUnloads: true,
      recordScrollState: true
    };
    client.initAutoTracking(options);
   });
