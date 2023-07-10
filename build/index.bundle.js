(()=>{"use strict";const e={picture:{placement:"",id:"",filter:""},userData:{name:"",surname:"",phoneNumber:"",email:""},userAddress:{city:"",street:"",house:"",zip:""},userShipping:{city:"",street:"",house:"",zip:""}},t=document.querySelectorAll("#shippingSelect input"),r=document.querySelector(".nav__button--next");let n=!1,c=!1,o=!1,l=!1,u=!1,s=!1,a=!1,i=!1,d=!1,m=!1,p=!1,y=!1;function h(){const t=document.getElementById("city"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);if(u=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("cityShipping"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);s=r,t.style.borderColor=r?"":"red",e.userShipping.city=t.value}f(),e.userAddress.city=t.value}function S(){const t=document.getElementById("street"),r=t.value.length>=3&&/^[A-Za-z0-9\-\/]+$/.test(t.value);if(a=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("streetShipping"),r=t.value.length>=3&&/^[A-Za-z0-9\-\/]+$/.test(t.value);i=r,t.style.borderColor=r?"":"red",e.userShipping.street=t.value}f(),e.userAddress.street=t.value}function v(){const t=document.getElementById("house"),r=t.value.length>0&&/^[A-Za-z0-9\-\/]+$/.test(t.value);if(d=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("houseShipping"),r=t.value.length>0&&/^[A-Za-z0-9\-\/]+$/.test(t.value);m=r,t.style.borderColor=r?"":"red",e.userShipping.house=t.value}f(),e.userAddress.house=t.value}function _(){const t=document.getElementById("zip"),r=t.value.length>4&&/^[0-9\-]+$/.test(t.value);if(p=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("zipShipping"),r=t.value.length>4&&/^[0-9\-]+$/.test(t.value);y=r,t.style.borderColor=r?"":"red",e.userShipping.zip=t.value}f(),e.userAddress.zip=t.value}function f(){const e="block"===document.querySelector(".addresses__userAddressesShipping").style.display,t=n&&c&&o&&l&&u&&a&&d&&p,h=e&&s&&i&&m&&y;r.disabled=!(t&&(!e||h))}document.querySelectorAll(".blurAction").forEach((t=>t.addEventListener("blur",(t=>{switch(t.target.id){case"name":!function(){const t=document.getElementById("name"),r=t.value.length>=2&&/^[A-Za-z]+$/.test(t.value);n=r,t.style.borderColor=r?"":"red",f(),e.userData.name=t.value}();break;case"surname":!function(){const t=document.getElementById("surname"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);c=r,t.style.borderColor=r?"":"red",f(),e.userData.surname=t.value}();break;case"phoneNumber":!function(){const t=document.getElementById("phoneNumber"),r=""===t.value||/^\d{9,}$/.test(t.value);o=r,t.style.borderColor=r?"":"red",f(),e.userData.phoneNumber=t.value}();break;case"email":!function(){const t=document.getElementById("email"),r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value);l=r,t.style.borderColor=r?"":"red",f(),e.userData.email=t.value}()}})))),document.querySelectorAll(".blurAction").forEach((e=>e.addEventListener("blur",(e=>{switch(e.target.id){case"city":case"cityShipping":h();break;case"street":case"streetShipping":S();break;case"house":case"houseShipping":v();break;case"zip":case"zipShipping":_()}})))),t.forEach((t=>{t.addEventListener("change",(function(){const t=document.querySelector(".addresses__userAddressesShipping"),r=document.querySelector("#sameAddress"),n=document.querySelector("#sameAddress input"),c=document.querySelectorAll(".source-input"),o=document.querySelectorAll(".target-input"),l=this.value;"pickup"==l&&(n.checked=!1,t.style.display="none",r.style.display="none",o.forEach((e=>{e.value="",e.removeAttribute("style")})),[s,i,m,y]=[!1,!1,!1,!1],e.userShipping={city:"",street:"",house:"",zip:""}),"curier"==l&&(t.style.display="block",r.style.display="block"),"sameAddress"==l&&n.checked&&c.forEach(((e,t)=>{o[t].value=e.value,h(),S(),v(),_()})),f(),function(e){me="curier"===e?5:0,"sameAddress"!==e&&ve()}(l)}))}));const g=document.querySelector(".nav__button--prev"),b=document.querySelector(".nav__button--next"),q=document.querySelector(".slides").querySelectorAll("article");let A=0;function k(){q.forEach(((e,t)=>{t===A?e.setAttribute("article-active",""):e.removeAttribute("article-active")})),L(),C(),E(A),3===A&&(H.forEach(((e,t)=>{e.value!==T[t].innerHTML&&(J=!0,T[t].innerHTML=e.value)})),J&&(H.forEach(((e,t)=>{T[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userDataConfirmed]").checked=!1,J=!1),D.forEach(((e,t)=>{e.value!==P[t].innerHTML&&(K=!0,P[t].innerHTML=e.value)})),K&&(D.forEach(((e,t)=>{P[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userAddressConfirmed]").checked=!1,K=!1))}function E(t){A=t;const r=["Next","Go to shipping","Place the order","Confirm the order"],n=Math.min(t,r.length-1);b.innerHTML=r[n],2==n&&f(),3==n&&(function(){const e=document.querySelector(".userData__userAddressShipping");document.querySelector("#shippingSelect input[value=curier]").checked?(e.style.display="block",$.forEach(((t,r)=>{t.value!==N[r].innerHTML&&(O=!0,N[r].innerHTML=t.value),O&&(e.style.display="block",$.forEach(((e,t)=>{N[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userAddressShipping]").checked=!1,O=!1)}))):e.style.display="none"}(),W()),4==A&&console.log(e),function(e){4===e?X.style.display="none":pe(se,ae)}(A)}function L(){g.disabled=0===A}function C(){const e=document.querySelectorAll('input[type="checkbox"]:checked').length<1;b.disabled=e,b.style.display=A===q.length-1?"none":"block"}g.addEventListener("click",(()=>{A>0&&(A--,k())})),b.addEventListener("click",(()=>{A<q.length-1&&(A++,k())})),window.addEventListener("load",(e=>{k()}));const B=document.querySelector(".slides").querySelectorAll("article"),x=document.querySelector(".summary__placement--placement"),I=document.querySelector(".summary__placement--button"),w=document.querySelector(".summary__picture--picture"),z=document.querySelector(".summary__picture--filter"),M=document.querySelectorAll(".summary__picture--button, .summary__filter--button"),H=document.querySelectorAll(".userData-source-input"),T=document.querySelectorAll(".summary__userData-target-input"),D=document.querySelectorAll(".source-input"),P=document.querySelectorAll(".summary__addresses-target-input"),$=document.querySelectorAll(".target-input"),N=document.querySelectorAll(".summary__shipping-target-input"),Z=document.querySelectorAll(".summary__userData--button, .summary__userAddress--button, .summary__userShipping--button"),F=document.querySelectorAll('.main__wrapper--summary input[type="checkbox"]'),G=document.querySelector(".nav__button--next");let R,U,j,J=!1,K=!1,O=!1;function Q(t){const r=document.getElementById("blurRange"),n="blur"===t?t.charAt(0).toUpperCase()+t.slice(1)+" "+r.value:t.charAt(0).toUpperCase()+t.slice(1);j!==n&&(document.querySelector(".main__wrapper--summary input[value=filterConfirmed]").checked=!1),j=n,z.innerHTML=n,e.picture.filter=n}function V(e){B.forEach(((t,r)=>{r===e?t.setAttribute("article-active",""):t.removeAttribute("article-active")})),E(e),L(),C()}function W(){let e;e=document.querySelector("#shippingSelect input[value=curier]").checked?Array.from(F).every((e=>e.checked)):Array.from(F).slice(0,5).every((e=>e.checked)),G.disabled=!e}I.addEventListener("click",(()=>{V(0)})),M.forEach((e=>{e.addEventListener("click",(()=>{V(1)}))})),Z.forEach((e=>{e.addEventListener("click",(()=>{V(2)}))})),F.forEach((e=>{e.addEventListener("change",W)}));const X=document.querySelector("footer"),Y=document.querySelector(".footer__wrapper--tShirtFront"),ee=document.querySelector(".footer__wrapper--tShirtBack"),te=document.querySelector(".footer__wrapper--resumePanel"),re=document.querySelector(".footer__wrapper--tShirtLoremPiscumFront"),ne=document.querySelector(".footer__wrapper--tShirtLoremPiscumBack"),ce=document.querySelector(".tShirtFront__Graphic"),oe=document.querySelector(".tShirtBack__Graphic");let le,ue,se,ae,ie,de=0,me=0;function pe(e,t){se=e,ae=t,X.style.display=se||ae?"flex":"none",ye(se),he(ae),ve()}const ye=e=>{Y.style.display=e?"flex":"none",ce.style.display=e?"flex":"none"},he=e=>{ee.style.display=e?"flex":"none",oe.style.display=e?"flex":"none"},Se=t=>{le=t.cloneNode(!0),ue=t.cloneNode(!0),re.src=ne.src=le.src,function(t){U!==t.src&&(document.querySelector(".main__wrapper--summary input[value=pictureConfirmed]").checked=!1),U=t.src;const r=U.match(/\/id\/(\d+)\//)[1];w.innerHTML="ID "+r,e.picture.id=r}(t)};function ve(){ie=10*(se+ae)+de+me,te.querySelector("span").textContent=ie}const _e=[];function fe(){fetch("https://picsum.photos/500/300").then((e=>{const t=e.url,r=document.createElement("img");r.src=t,r.alt="Lorem Picsum",Ze(r),Se(r),Ce(r),function(e){_e.push(e),_e.length>2&&_e.shift()}(r)})).catch((e=>{console.error("Error:",e)}))}const ge=document.querySelector(".tShirtFront__Graphic"),be=document.querySelector(".tShirtBack__Graphic"),qe=document.querySelector(".changePhoto__button--left"),Ae=document.querySelector(".changePhoto__button--right"),ke=document.querySelectorAll('#effectSelect input[type="radio"]');let Ee,Le;const Ce=e=>{ge.contains(Ee)?Ee.src=e.src:Ee=e.cloneNode(!0),be.contains(Le)?Le.src=e.src:Le=e.cloneNode(!0),_e[0]==e&&(qe.style.display="none")};function Be(e){const t=e,r=document.querySelectorAll('img[alt="Lorem Picsum"]'),n=document.querySelector(".graphicPanel__effect--blurRange"),c=document.getElementById("blurRange"),o=document.querySelector(".blurRange__current");"normal"==t&&r.forEach((e=>{e.classList.remove("grayscale"),e.classList.remove("blur")})),"grayscale"==t&&r.forEach((e=>{e.classList.add(t)})),"blur"==t?(r.forEach((e=>{e.classList.remove("grayscale")})),n.style.display="flex",c.addEventListener("input",(function(){let e=c.value;o.innerHTML=e,r.forEach((t=>{t.style.filter=`blur(${e}px)`})),Q("blur")}))):(n.style.display="none",o.innerHTML=1,c.value=1,r.forEach((e=>{e.removeAttribute("style")}))),function(e){de={normal:0,grayscale:2,blur:3}[e]||0,ve(),Q(e)}(t)}qe.addEventListener("click",(()=>{Ze(_e[0]),Se(_e[0]),Ce(_e[0])})),Ae.addEventListener("click",(()=>{_e.length<2||Le.src==_e[1].src?fe():(Ze(_e[1]),Se(_e[1]),Ce(_e[1])),_e.length>0&&(qe.style.display="flex")})),ke.forEach((e=>{e.addEventListener("change",(()=>{Be(e.value)}))}));const xe=document.querySelector("#checkFront"),Ie=document.querySelector("#checkBack"),we=document.querySelector("#checkBoth"),ze=document.querySelector(".tShirtFront__Imprint"),Me=document.querySelector(".tShirtBack__Imprint"),He=document.querySelector(".nav__button--next");let Te,De,Pe=!1,$e=!1;function Ne(){Pe?ze.contains(Te)||(ze.appendChild(Te),Te.classList.add("main__wrapper--tShirtLoremPiscum")):ze.contains(Te)&&ze.removeChild(Te),(e=>{e?ge.contains(Ee)||(ge.appendChild(Ee),Ee.classList.add("main__wrapper--tShirtLoremPiscum")):ge.contains(Ee)&&ge.removeChild(Ee)})(Pe),$e?Me.contains(De)||(Me.appendChild(De),De.classList.add("main__wrapper--tShirtLoremPiscum")):Me.contains(De)&&Me.removeChild(De),(e=>{e?be.contains(Le)||(be.appendChild(Le),Le.classList.add("main__wrapper--tShirtLoremPiscum")):be.contains(Le)&&be.removeChild(Le)})($e),we.checked=Pe&&$e,pe(Pe,$e),function(t,r){const n=t&&r?"Both":t?"Front":r?"Back":"";R!==n&&(document.querySelector(".main__wrapper--summary input[value=placementConfirmed]").checked=!1),R=n,x.innerHTML=n,e.picture.placement=n}(Pe,$e),He.disabled=document.querySelectorAll('input[type="checkbox"]:checked').length<1;const t=document.querySelector('#effectSelect input[type="radio"]:checked'),r=t?t.value:"";if("blur"!=r)Be(r);else{const e=document.getElementById("blurRange");document.querySelectorAll('img[alt="Lorem Picsum"]').forEach((t=>{t.style.filter=`blur(${e.value}px)`}))}}const Ze=e=>{ze.contains(Te)?Te.src=e.src:Te=e.cloneNode(!0),Me.contains(De)?De.src=e.src:De=e.cloneNode(!0)};xe.addEventListener("click",(function(){Pe=!Pe,Ne()})),Ie.addEventListener("click",(function(){$e=!$e,Ne()})),we.addEventListener("click",(function(){Pe=!Pe||!$e,$e=Pe,xe.checked=Pe,Ie.checked=$e,Ne()})),fe()})();
//# sourceMappingURL=index.bundle.js.map