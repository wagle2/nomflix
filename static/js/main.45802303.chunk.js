(window.webpackJsonpnomflix=window.webpackJsonpnomflix||[]).push([[0],{43:function(e,n,t){e.exports=t(72)},71:function(e,n,t){e.exports=t.p+"static/media/noPoster.c7ad09df.png"},72:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(29),o=t.n(i),u=t(30),c=t(31),l=t(39),s=t(32),p=t(40),d=t(13),m=t(11),g=t(7),f=t(4),v=t.n(f),b=t(10),h=t(33),x=t.n(h).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),E=function(e){return x.get("movie/".concat(e),{params:{append_to_response:"videos"}})},w=function(){return x.get("movie/popular")},y=function(){return x.get("movie/upcoming")},j=function(){return x.get("movie/now_playing")},O=function(e){return x.get("search/movie",{params:{query:encodeURIComponent(e)}})},_=function(e){return x.get("tv/".concat(e),{params:{append_to_response:"videos"}})},k=function(){return x.get("tv/popular")},z=function(){return x.get("tv/top_rated")},S=function(){return x.get("tv/airing_today")},R=function(e){return x.get("search/tv",{params:{query:encodeURIComponent(e)}})},T=t(2),F=t(1);function U(){var e=Object(T.a)(["\n  height: 80vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  margin-top: 50px;\n  font-size: 30px;\n"]);return U=function(){return e},e}var I=F.default.div(U()),C=function(){return r.a.createElement(I,null,r.a.createElement("span",{role:"img","aria-label":"loading"},"\u23f0"))};function M(){var e=Object(T.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return M=function(){return e},e}function P(){var e=Object(T.a)(["\n  color: rgba(255, 255, 255, 0.8);\n  display: block;\n  margin-bottom: 7px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  font-size: 12px;\n"]);return P=function(){return e},e}function B(){var e=Object(T.a)(["\n  position: relative;\n  z-index: 2;\n  height: 180px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 5px;\n  "," {\n    opacity: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n    "," {\n      opacity: 0.3;\n    }\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(T.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);\n  transition: opacity 0.3s ease-in-out;\n  z-index: 1;\n"]);return L=function(){return e},e}function N(){var e=Object(T.a)(["\n  font-size: 12px;\n  position: relative;\n  z-index: 9;\n  transition: opacity 0.3s ease-in-out;\n"]);return N=function(){return e},e}function V(){var e=Object(T.a)(["\n  color: white;\n  width: 125px;\n"]);return V=function(){return e},e}var q=F.default.div(V()),J=F.default.span(N()),Y=F.default.div(L(),function(e){return e.bgImage}),A=F.default.div(B(),J,J,Y),D=F.default.span(P()),G=F.default.span(M()),H=function(e){var n=e.imageUrl,a=e.rating,i=e.name,o=e.year,u=e.isTv,c=e.id;return r.a.createElement(d.b,{to:u?"/show/".concat(c):"/movie/".concat(c)},r.a.createElement(q,null,r.a.createElement(A,null,r.a.createElement(Y,{bgImage:n?"https://image.tmdb.org/t/p/w500".concat(n):t(71)}),a>0?r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"Stars"},"\u2b50\ufe0f")," ",a,"/10"):null),r.a.createElement(D,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(G,null,o)))};function K(){var e=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 30px;\n"]);return K=function(){return e},e}function Q(){var e=Object(T.a)(["\n  font-weight: 600;\n  color: white;\n  font-size: 14px;\n  margin-bottom: 20px;\n"]);return Q=function(){return e},e}function W(){var e=Object(T.a)(["\n  margin-bottom: 50px;\n"]);return W=function(){return e},e}var X=F.default.div(W()),Z=F.default.h2(Q()),$=F.default.div(K()),ee=function(e){var n=e.title,t=e.children;return r.a.createElement(X,null,r.a.createElement(Z,null,n),r.a.createElement($,null,t))};function ne(){var e=Object(T.a)(["\n  display: block;\n  color: #e74c3c;\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n  font-size: 14px;\n"]);return ne=function(){return e},e}var te=F.default.span(ne()),ae=function(e){var n=e.text;return r.a.createElement(te,null,n)};function re(){var e=Object(T.a)(["\n  padding: 10px;\n  padding-top: 30px;\n"]);return re=function(){return e},e}var ie=F.default.div(re()),oe=function(e){var n=e.loading,t=e.error,a=e.popular,i=e.upcoming,o=e.nowPlaying;return n?r.a.createElement(C,null):r.a.createElement(ie,null,a&&r.a.createElement(ee,{title:"Popular Movies"},a.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.title,year:e.release_date.substring(0,4),isTv:!1,id:e.id,key:e.id})})),i&&r.a.createElement(ee,{title:"Upcoming Movies"},i.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.title,year:e.release_date.substring(0,4),isTv:!1,id:e.id,key:e.id})})),o&&r.a.createElement(ee,{title:"Now Playing"},o.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.title,year:e.release_date.substring(0,4),isTv:!1,id:e.id,key:e.id})})),t&&r.a.createElement(ae,{text:t}))},ue=function(e){var n=e.initialLoading,t=void 0===n||n,r=e.inputFn,i=e.errorMessage,o=Object(a.useState)(t),u=Object(g.a)(o,2),c=u[0],l=u[1],s=Object(a.useState)(""),p=Object(g.a)(s,2),d=p[0],m=p[1];return{loading:c,error:d,wrappedFn:function(){var e=Object(b.a)(v.a.mark(function e(){var n=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.apply(void 0,n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),m(i);case 8:return e.prev=8,l(!1),e.finish(8);case 11:case"end":return e.stop()}},e,null,[[0,5,8,11]])}));return function(){return e.apply(this,arguments)}}(),setLoading:l}},ce=function(){var e=function(){var e=Object(b.a)(v.a.mark(function e(){var n,t,a,r,i,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return n=e.sent,t=n.data.results,e.next=6,y();case 6:return a=e.sent,r=a.data.results,e.next=10,j();case 10:i=e.sent,u=i.data.results,o({popular:t,upcoming:r,nowPlaying:u});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),n=Object(a.useState)({popular:null,upcoming:null,nowPlaying:null}),t=Object(g.a)(n,2),i=t[0],o=t[1],u=ue({inputFn:e,errorMessage:"Could not get movies"}),c=u.loading,l=u.error,s=u.wrappedFn;return Object(a.useEffect)(function(){s("dick",!0)},[]),r.a.createElement(oe,{loading:c,error:l,popular:i.popular,upcoming:i.upcoming,nowPlaying:i.nowPlaying})};function le(){var e=Object(T.a)(["\n  padding: 10px;\n  padding-top: 30px;\n"]);return le=function(){return e},e}var se=F.default.div(le()),pe=function(e){var n=e.loading,t=e.error,a=e.popular,i=e.topRated,o=e.airingToday;return n?r.a.createElement(C,null):r.a.createElement(se,null,a&&r.a.createElement(ee,{title:"Popular Shows"},a.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.original_name,year:e.first_air_date.substring(0,4),isTv:!0,id:e.id,key:e.id})})),i&&r.a.createElement(ee,{title:"Top Rated"},i.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.original_name,year:e.first_air_date.substring(0,4),isTv:!0,id:e.id,key:e.id})})),o&&r.a.createElement(ee,{title:"Airing Today"},o.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.original_name,year:e.first_air_date.substring(0,4),isTv:!0,id:e.id,key:e.id})})),t&&r.a.createElement(ae,{text:t}))},de=function(){var e=ue({inputFn:function(){var e=Object(b.a)(v.a.mark(function e(){var n,t,a,r,i,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return n=e.sent,t=n.data.results,e.next=6,z();case 6:return a=e.sent,r=a.data.results,e.next=10,S();case 10:i=e.sent,o=i.data.results,l({popular:t,topRated:r,airingToday:o});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),errorMessage:"Could not get tv shows"}),n=e.loading,t=e.error,i=e.wrappedFn,o=Object(a.useState)({popular:null,topRated:null,airingToday:null}),u=Object(g.a)(o,2),c=u[0],l=u[1];return Object(a.useEffect)(function(){i()},[]),r.a.createElement(pe,{loading:n,error:t,popular:c.popular,topRated:c.topRated,airingToday:c.airingToday})};function me(){var e=Object(T.a)(["\n  color: white;\n  border-bottom: ",";\n  transition: border-bottom 0.5s ease-in-out;\n  padding-bottom: 10px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  justify-content: center;\n"]);return me=function(){return e},e}function ge(){var e=Object(T.a)(["\n  background-color: rgba(20, 20, 20, 0.95);\n  padding-top: 15px;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 45px;\n  svg {\n    fill: white;\n    height: 15px;\n  }\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return ge=function(){return e},e}var fe=F.default.nav(ge()),ve=Object(F.default)(d.b)(me(),function(e){return e.selected?"3px solid #3498db":"3px solid transparent"}),be=Object(m.g)(function(e){var n=e.location.pathname;return r.a.createElement(fe,null,r.a.createElement(ve,{selected:"/"===n,to:"/"},"Movies"),r.a.createElement(ve,{selected:"/tv"===n,to:"/tv"},"TV"),r.a.createElement(ve,{selected:"/search"===n,to:"/search"},"Search"))});function he(){var e=Object(T.a)(["\n  all: unset;\n  font-size: 36px;\n  color: white;\n  width: 100%;\n  padding-bottom: 10px;\n  color: white;\n"]);return he=function(){return e},e}function xe(){var e=Object(T.a)(["\n  all: unset;\n  width: 100%;\n  margin-bottom: 50px;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  padding-top: 50px;\n"]);return Ee=function(){return e},e}var we=F.default.div(Ee()),ye=F.default.form(xe()),je=F.default.input(he()),Oe=function(e){var n=e.loading,t=e.movieResults,a=e.showResults,i=e.searchingBy,o=e.onSearchChange,u=e.onSearchSubmit,c=e.error;return r.a.createElement(we,null,r.a.createElement(ye,{onSubmit:u},r.a.createElement(je,{placeholder:"Search for a Movie or TV Show",autoFocus:!0,value:i,onChange:o})),n?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,t&&0!==t.length&&r.a.createElement(ee,{title:"Movie Results"},t.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.title,year:e.release_date.substring(0,4),isTv:!1,id:e.id,key:e.id})})),a&&0!==a.length&&r.a.createElement(ee,{title:"TV Show Results"},a.map(function(e){return r.a.createElement(H,{imageUrl:e.poster_path,rating:e.vote_average,name:e.original_name,year:String(e.first_air_date).substring(0,4),isTv:!0,id:e.id,key:e.id})}))),c&&r.a.createElement(ae,{text:c}),t&&0===t.length&&a&&0===a.length&&r.a.createElement(ae,{text:"Nothing was found"}))},_e=function(){var e=function(){var e=Object(b.a)(v.a.mark(function e(n){var t,a,r,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,O(n);case 3:return t=e.sent,a=t.data.results,e.next=7,R(n);case 7:r=e.sent,i=r.data.results,s({movieResults:a,showResults:i});case 10:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),n=Object(a.useState)(""),t=Object(g.a)(n,2),i=t[0],o=t[1],u=Object(a.useState)({movieResults:null,showResults:null}),c=Object(g.a)(u,2),l=c[0],s=c[1],p=ue({initialLoading:!1,inputFn:e,errorMessage:"Can't search"}),d=p.loading,m=p.error,f=p.setLoading,h=p.wrappedFn;return r.a.createElement(Oe,{loading:d,error:m,movieResults:l.movieResults,showResults:l.showResults,searchingBy:i,onSearchChange:function(e){var n=e.target.value;o(n)},onSearchSubmit:function(e){e.preventDefault(),""!==i&&h(i)}})};function ke(){var e=Object(T.a)(["\n  color: rgba(255, 255, 255, 0.7);\n  transition: color 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  &:hover {\n    color: white;\n    svg {\n      fill: white;\n    }\n  }\n  svg {\n    margin-right: 10px;\n    transition: color 0.3s ease-in-out;\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);return ke=function(){return e},e}var ze=F.default.a(ke()),Se=function(e){var n=e.id,t=e.title;return r.a.createElement(ze,{href:"https://www.youtube.com/watch?v=".concat(n),target:"_blank"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"}))," ",t)};function Re(){var e=Object(T.a)(["\n  margin: 0px 10px;\n  font-size: 16px;\n"]);return Re=function(){return e},e}function Te(){var e=Object(T.a)(["\n  display:block;\n  width: 100px;\n  height: 148px;\n  background-image: url(",");\n  background-size: contain;\n  border-radius: 7px;\n  background-position: center center;\n"]);return Te=function(){return e},e}function Fe(){var e=Object(T.a)(["\n  display:block;\n  margin: 0px 10px;\n"]);return Fe=function(){return e},e}function Ue(){var e=Object(T.a)(["\n  width: 100px;\n  height: 100px;\n  background-image: url(",");\n  background-size: contain;\n  border-radius: 7px;\n  background-position: center center;\n  display: flex;\n"]);return Ue=function(){return e},e}function Ie(){var e=Object(T.a)(["\n  display: flex;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(T.a)(["\n  margin-left: 10px;\n  font-size: 14px;\n"]);return Ce=function(){return e},e}function Me(){var e=Object(T.a)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  margin-top: 30px;\n  margin-bottom: 10px;\n"]);return Me=function(){return e},e}function Pe(){var e=Object(T.a)(["\n  margin-top: 20px;\n  margin-bottom: 25px;\n  width: 50%;\n  line-height: 2;\n"]);return Pe=function(){return e},e}function Be(){var e=Object(T.a)(["\n  margin: 0 10px;\n"]);return Be=function(){return e},e}function Le(){var e=Object(T.a)([""]);return Le=function(){return e},e}function Ne(){var e=Object(T.a)(["\n  margin-top: 20px;\n"]);return Ne=function(){return e},e}function Ve(){var e=Object(T.a)(["\n  font-size: 42px;\n  color: white;\n"]);return Ve=function(){return e},e}function qe(){var e=Object(T.a)(["\n  color: rgba(255, 255, 255, 0.9);\n  margin-left: 20px;\n  font-size: 12px;\n  width: 70%;\n"]);return qe=function(){return e},e}function Je(){var e=Object(T.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-size: cover;\n  border-radius: 7px;\n  background-position: center center;\n"]);return Je=function(){return e},e}function Ye(){var e=Object(T.a)(["\n  position: relative;\n  z-index: 9;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  overflow: scroll;\n"]);return Ye=function(){return e},e}function Ae(){var e=Object(T.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url(",");\n  background-size: 100%;\n  background-position: center center;\n  position: absolute;\n  filter: blur(5px);\n  top: 0;\n  left: 0;\n  z-index: 0;\n"]);return Ae=function(){return e},e}function De(){var e=Object(T.a)(["\n  position: relative;\n  padding: 80px;\n  height: 100%;\n  width: 100%;\n  height: calc(100vh - 45px);\n"]);return De=function(){return e},e}var Ge=F.default.div(De()),He=F.default.div(Ae(),function(e){return e.bgImage}),Ke=F.default.div(Ye()),Qe=F.default.div(Je(),function(e){return e.bgImage}),We=F.default.div(qe()),Xe=F.default.span(Ve()),Ze=F.default.div(Ne()),$e=F.default.span(Le()),en=F.default.span(Be()),nn=F.default.p(Pe()),tn=F.default.p(Me()),an=F.default.div(Ce()),rn=F.default.div(Ie()),on=F.default.div(Ue(),function(e){return e.bgImage}),un=F.default.div(Fe()),cn=F.default.div(Te(),function(e){return e.bgImage}),ln=F.default.span(Re()),sn=function(e){var n=e.loading,t=e.result,a=e.error;return n?r.a.createElement(C,null):a?r.a.createElement(ae,{text:a}):r.a.createElement(Ge,null,r.a.createElement(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ke,null,r.a.createElement(Qe,{bgImage:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}),r.a.createElement(We,null,r.a.createElement(Xe,null,t.original_name?t.original_name:t.original_title),r.a.createElement(Ze,null,r.a.createElement($e,null,t.first_air_date?t.first_air_date.substring(0,4):t.release_date.substring(0,4)),r.a.createElement(en,null,"\u2022"),r.a.createElement($e,null,t.episode_run_time?t.episode_run_time:t.runtime," ","min"),r.a.createElement(en,null,"\u2022"),r.a.createElement($e,null,t.genres&&t.genres.map(function(e,n){return n+1===t.genres.length?e.name:"".concat(e.name," / ")})),r.a.createElement(en,null,"\u2022"),t.status&&r.a.createElement($e,null,t.status),t.vote_average&&0!==t.vote_average?r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null,"\u2022"),r.a.createElement($e,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",t.vote_average," / 10")):null),t.overview&&r.a.createElement(nn,null,t.overview),r.a.createElement(tn,null,"Production Companies"),r.a.createElement(rn,null,t.production_companies&&t.production_companies.map(function(e){return e.logo_path&&r.a.createElement(on,{bgImage:"https://image.tmdb.org/t/p/w200".concat(e.logo_path)})})),t.production_countries&&r.a.createElement(tn,null,"Production Countries"),t.production_countries&&t.production_countries.map(function(e){return r.a.createElement(an,null,"\u2022 ",e.name)}),t.seasons&&r.a.createElement(tn,null,"Seasons"),r.a.createElement(rn,null,t.seasons&&t.seasons.map(function(e){return e.poster_path&&r.a.createElement(un,null,r.a.createElement(cn,{bgImage:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)}),r.a.createElement(ln,null,e.name))})),r.a.createElement(tn,null,"\ud83d\udda5YouTube"),t.videos&&t.videos.results&&t.videos.results.map(function(e){return"YouTube"===e.site&&r.a.createElement(Se,{title:e.name,id:e.key,key:e.id})}))))},pn=function(e){var n=e.location.pathname,t=e.match.params.id,i=ue({errorMessage:"Can't find what you're looking for",inputFn:function(){var e=Object(b.a)(v.a.mark(function e(){var a,r,i,o,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.includes("movie")){e.next=9;break}return e.next=4,E(t);case 4:r=e.sent,i=r.data,a=i,e.next=14;break;case 9:return e.next=11,_(t);case 11:o=e.sent,u=o.data,a=u;case 14:d(a);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}),o=i.loading,u=i.error,c=i.wrappedFn,l=Object(a.useState)(null),s=Object(g.a)(l,2),p=s[0],d=s[1];return Object(a.useEffect)(function(){c()},[]),r.a.createElement(sn,{loading:o,result:p,error:u})},dn=function(){return r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:ce}),r.a.createElement(m.b,{path:"/tv",component:de}),r.a.createElement(m.b,{path:"/search",component:_e}),r.a.createElement(m.b,{path:"/movie/:id",component:pn}),r.a.createElement(m.b,{path:"/show/:id",component:pn}),r.a.createElement(m.a,{to:"/"}))))},mn=t(38),gn=t.n(mn);function fn(){var e=Object(T.a)(["\n    ",";\n    *{\n        box-sizing:border-box;\n    }\n    a{\n        color:inherit;\n        text-decoration:none;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;\n        font-size:14px;\n        padding-top:45px;\n        background-color:rgb(20, 20, 20);\n    }\n"]);return fn=function(){return e},e}var vn=Object(F.createGlobalStyle)(fn(),gn.a),bn=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(dn,null),r.a.createElement(vn,null))}}]),n}(a.Component);o.a.render(r.a.createElement(bn,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.45802303.chunk.js.map