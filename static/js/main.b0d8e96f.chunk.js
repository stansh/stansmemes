(this.webpackJsonpstansmemes=this.webpackJsonpstansmemes||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(6),m=a.n(o),r=(a(24),a(25),a(9)),c=a(7),i=a(15),l=a(16),g=a(18),p=a(17),u=a(42),d=a(38),h=a(39),f=a(40),x=a(41),b=[{src:"stansmemes/images/cat.jpg"},{src:"stansmemes/images/confused-guy.jpg"},{src:"stansmemes/images/laugh.jpg"},{src:"stansmemes/images/littleGirl.png"},{src:"stansmemes/images/max.jpg"},{src:"stansmemes/images/Michael.jpg"},{src:"stansmemes/images/RickDalton.jpg "},{src:"stansmemes/images/Toddler.jpg"},{src:"stansmemes/images/trump.jpg"},{src:"stansmemes/images/face.jpg"},{src:"stansmemes/images/pg.jpg"},{src:"stansmemes/images/dc5.png"},{src:"stansmemes/images/kh.jpg"},{src:"stansmemes/images/professional.jpg"},{src:"stansmemes/images/simpsons.jpg"},{src:"stansmemes/images/85.jpg"},{src:"stansmemes/images/images.jpg"}],v=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).openImage=function(t){var a=b[t],n=new Image;n.src=a.src;var s=e.getBase64Image(n);e.setState((function(e){return{currentImage:t,modalIsOpen:!e.modalIsOpen,currentImagebase64:s,toptext:"",bottomtext:"",topY:"10%",topX:"50%",bottomX:"50%",bottomY:"90%"}}))},e.toggle=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen}}))},e.changeText=function(t){e.setState(Object(c.a)({},t.currentTarget.name,t.currentTarget.value))},e.svgToPng=function(){var t=e.svgRef,a=t.getBoundingClientRect().width,n=t.getBoundingClientRect().height,s=document.createElement("canvas");s.width=a,s.height=n;var o=(new XMLSerializer).serializeToString(t),m=s.getContext("2d"),r=new Image;r.setAttribute("src","data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(o)))),r.onload=function(){m.drawImage(r,0,0,t.getBoundingClientRect().width,t.getBoundingClientRect().height);var e=document.createElement("a");e.download="meme.png",e.href=s.toDataURL("image/png"),document.body.appendChild(e),e.click()}},e.state={currentImage:0,modalIsOpen:!1,currentImagebase64:null,toptext:"",bottomtext:"",topY:"10%",topX:"50%",bottomX:"50%",bottomY:"90%"},e}return Object(l.a)(a,[{key:"getBase64Image",value:function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/png")}},{key:"render",value:function(){var e=this,t=b[this.state.currentImage],a=new Image;a.src=t.src;var n=400/(a.width/a.height),o={fontFamily:"Impact",fontSize:"50px",textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"};return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron jumbotron-fluid sticky-top"},s.a.createElement("p",null,"Stan's Meme Factory")),s.a.createElement("div",{className:"row"},b.map((function(t,a){return s.a.createElement("div",{className:"col-md-3",key:t.src},s.a.createElement("span",{className:"topText"},"Top text"),s.a.createElement("img",{style:{width:"100%",cursor:"pointer"},alt:a,src:t.src,onClick:function(){return e.openImage(a)},role:"presentation"}),s.a.createElement("span",{className:"bottomText"},"Bottom text"))})))),s.a.createElement(u.a,{isOpen:this.state.modalIsOpen},s.a.createElement(d.a,{toggle:this.toggle},"Make-a-Meme"),s.a.createElement(h.a,null,s.a.createElement("svg",{width:400,id:"svg_ref",height:n,ref:function(t){e.svgRef=t}},s.a.createElement("image",{ref:function(t){e.imageRef=t},xlinkHref:this.state.currentImagebase64,height:n,width:400}),s.a.createElement("text",{style:Object(r.a)(Object(r.a)({},o),{},{zIndex:this.state.isTopDragging?4:1}),x:this.state.topX,y:this.state.topY,dominantBaseline:"middle",textAnchor:"middle"},this.state.toptext),s.a.createElement("text",{style:o,dominantBaseline:"middle",textAnchor:"middle",x:this.state.bottomX,y:this.state.bottomY},this.state.bottomtext)),s.a.createElement("div",{className:"meme-form"},s.a.createElement(f.a,null,s.a.createElement(x.a,{for:"toptext"},"Top Text"),s.a.createElement("input",{className:"form-control",type:"text",name:"toptext",id:"toptext",placeholder:"Add text to the top",onChange:this.changeText})),s.a.createElement(f.a,null,s.a.createElement(x.a,{for:"bottomtext"},"Bottom Text"),s.a.createElement("input",{className:"form-control",type:"text",name:"bottomtext",id:"bottomtext",placeholder:"Add text to the bottom",onChange:this.changeText})),s.a.createElement("button",{onClick:function(){return e.svgToPng()},className:"btn btn-primary"},"Download Meme!")))))}}]),a}(s.a.Component);var E=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b0d8e96f.chunk.js.map