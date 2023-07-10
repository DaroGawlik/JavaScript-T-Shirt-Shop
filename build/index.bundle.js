(()=>{"use strict";const e={picture:{placement:"",id:"",filter:""},userData:{name:"",surname:"",phoneNumber:"",email:""},userAddress:{city:"",street:"",house:"",zip:""},userShipping:{city:"",street:"",house:"",zip:""}},t=document.querySelectorAll("#shippingSelect input"),r=document.querySelector(".nav__button--next");let c=!1,n=!1,l=!1,o=!1,s=!1,u=!1,a=!1,i=!1,d=!1,m=!1,p=!1,y=!1;document.querySelectorAll(".blurAction").forEach((t=>t.addEventListener("blur",(t=>{switch(t.target.id){case"name":(()=>{const t=document.getElementById("name"),r=t.value.length>=2&&/^[A-Za-z]+$/.test(t.value);c=r,t.style.borderColor=r?"":"red",b(),e.userData.name=t.value})();break;case"surname":(()=>{const t=document.getElementById("surname"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);n=r,t.style.borderColor=r?"":"red",b(),e.userData.surname=t.value})();break;case"phoneNumber":(()=>{const t=document.getElementById("phoneNumber"),r=""===t.value||/^\d{9,}$/.test(t.value);l=r,t.style.borderColor=r?"":"red",b(),e.userData.phoneNumber=t.value})();break;case"email":(()=>{const t=document.getElementById("email"),r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value);o=r,t.style.borderColor=r?"":"red",b(),e.userData.email=t.value})()}}))));const h=()=>{const t=document.getElementById("city"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);if(s=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("cityShipping"),r=t.value.length>=3&&/^[A-Za-z]+$/.test(t.value);u=r,t.style.borderColor=r?"":"red",e.userShipping.city=t.value}b(),e.userAddress.city=t.value},S=()=>{const t=document.getElementById("street"),r=t.value.length>=3&&/^[A-Za-z0-9\-\/]+$/.test(t.value);if(a=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("streetShipping"),r=t.value.length>=3&&/^[A-Za-z0-9\-\/]+$/.test(t.value);i=r,t.style.borderColor=r?"":"red",e.userShipping.street=t.value}b(),e.userAddress.street=t.value},v=()=>{const t=document.getElementById("house"),r=t.value.length>0&&/^[A-Za-z0-9\-\/]+$/.test(t.value);if(d=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("houseShipping"),r=t.value.length>0&&/^[A-Za-z0-9\-\/]+$/.test(t.value);m=r,t.style.borderColor=r?"":"red",e.userShipping.house=t.value}b(),e.userAddress.house=t.value},_=()=>{const t=document.getElementById("zip"),r=t.value.length>4&&/^[0-9\-]+$/.test(t.value);if(p=r,t.style.borderColor=r?"":"red","block"==document.querySelector(".addresses__userAddressesShipping").style.display){const t=document.getElementById("zipShipping"),r=t.value.length>4&&/^[0-9\-]+$/.test(t.value);y=r,t.style.borderColor=r?"":"red",e.userShipping.zip=t.value}b(),e.userAddress.zip=t.value};document.querySelectorAll(".blurAction").forEach((e=>e.addEventListener("blur",(e=>{switch(e.target.id){case"city":case"cityShipping":h();break;case"street":case"streetShipping":S();break;case"house":case"houseShipping":v();break;case"zip":case"zipShipping":_()}})))),t.forEach((e=>{e.addEventListener("change",(function(){const e=document.querySelector(".addresses__userAddressesShipping"),t=document.querySelector("#sameAddress"),r=document.querySelector("#sameAddress input"),c=document.querySelectorAll(".source-input"),n=document.querySelectorAll(".target-input"),l=this.value;"pickup"==l&&(r.checked=!1,e.style.display="none",t.style.display="none",n.forEach((e=>{e.value="",e.removeAttribute("style")})),g()),"curier"==l&&(e.style.display="block",t.style.display="block"),"sameAddress"==l&&r.checked&&c.forEach(((e,t)=>{n[t].value=e.value,h(),S(),v(),_()})),b(),_e(l)}))}));const g=()=>{[u,i,m,y]=[!1,!1,!1,!1],e.userShipping={city:"",street:"",house:"",zip:""}},b=()=>{const e="block"===document.querySelector(".addresses__userAddressesShipping").style.display,t=c&&n&&l&&o&&s&&a&&d&&p,h=e&&u&&i&&m&&y;r.disabled=!(t&&(!e||h))},q=document.querySelector(".nav__button--prev"),f=document.querySelector(".nav__button--next"),A=document.querySelector(".slides").querySelectorAll("article");let k=0;q.addEventListener("click",(()=>{k>0&&(k--,E())})),f.addEventListener("click",(()=>{k<A.length-1&&(k++,E())}));const E=()=>{A.forEach(((e,t)=>{t===k?e.setAttribute("article-active",""):e.removeAttribute("article-active")})),C(),B(),L(k),3===k&&W()},L=t=>{k=t;const r=["Next","Go to shipping","Place the order","Confirm the order"],c=Math.min(t,r.length-1);f.innerHTML=r[c],2==c&&b(),3==c&&(Y(),te()),4==k&&console.log(e),Ae(k)},C=()=>{q.disabled=0===k},B=()=>{const e=document.querySelectorAll('input[type="checkbox"]:checked').length<1;f.disabled=e,f.style.display=k===A.length-1?"none":"block"};window.addEventListener("load",(e=>{E()}));const x=document.querySelector(".slides").querySelectorAll("article"),I=document.querySelector(".summary__placement--placement"),w=document.querySelector(".summary__placement--button"),z=document.querySelector(".summary__picture--picture"),M=document.querySelector(".summary__picture--filter"),H=document.querySelectorAll(".summary__picture--button, .summary__filter--button"),T=document.querySelectorAll(".userData-source-input"),D=document.querySelectorAll(".summary__userData-target-input"),P=document.querySelectorAll(".source-input"),$=document.querySelectorAll(".summary__addresses-target-input"),N=document.querySelectorAll(".target-input"),Z=document.querySelectorAll(".summary__shipping-target-input"),F=document.querySelectorAll(".summary__userData--button, .summary__userAddress--button, .summary__userShipping--button"),G=document.querySelectorAll('.main__wrapper--summary input[type="checkbox"]'),R=document.querySelector(".nav__button--next");let U,j,J,K=!1,O=!1,Q=!1;const V=t=>{const r=document.getElementById("blurRange"),c="blur"===t?t.charAt(0).toUpperCase()+t.slice(1)+" "+r.value:t.charAt(0).toUpperCase()+t.slice(1);J!==c&&(document.querySelector(".main__wrapper--summary input[value=filterConfirmed]").checked=!1),J=c,M.innerHTML=c,e.picture.filter=c},W=()=>{T.forEach(((e,t)=>{e.value!==D[t].innerHTML&&(K=!0,D[t].innerHTML=e.value)})),K&&(T.forEach(((e,t)=>{D[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userDataConfirmed]").checked=!1,K=!1),X()},X=()=>{P.forEach(((e,t)=>{e.value!==$[t].innerHTML&&(O=!0,$[t].innerHTML=e.value)})),O&&(P.forEach(((e,t)=>{$[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userAddressConfirmed]").checked=!1,O=!1)},Y=()=>{const e=document.querySelector(".userData__userAddressShipping");document.querySelector("#shippingSelect input[value=curier]").checked?(e.style.display="block",N.forEach(((t,r)=>{t.value!==Z[r].innerHTML&&(Q=!0,Z[r].innerHTML=t.value),Q&&(e.style.display="block",N.forEach(((e,t)=>{Z[t].innerHTML=e.value})),document.querySelector(".summary__userData input[value=userAddressShipping]").checked=!1,Q=!1)}))):e.style.display="none"};w.addEventListener("click",(()=>{ee(0)})),H.forEach((e=>{e.addEventListener("click",(()=>{ee(1)}))})),F.forEach((e=>{e.addEventListener("click",(()=>{ee(2)}))}));const ee=e=>{x.forEach(((t,r)=>{r===e?t.setAttribute("article-active",""):t.removeAttribute("article-active")})),L(e),C(),B()},te=()=>{let e;e=document.querySelector("#shippingSelect input[value=curier]").checked?Array.from(G).every((e=>e.checked)):Array.from(G).slice(0,5).every((e=>e.checked)),R.disabled=!e};G.forEach((e=>{e.addEventListener("change",te)}));const re=document.querySelector("footer"),ce=document.querySelector(".footer__wrapper--tShirtFront"),ne=document.querySelector(".footer__wrapper--tShirtBack"),le=document.querySelector(".footer__wrapper--resumePanel"),oe=document.querySelector(".footer__wrapper--tShirtLoremPiscumFront"),se=document.querySelector(".footer__wrapper--tShirtLoremPiscumBack"),ue=document.querySelector(".tShirtFront__Graphic"),ae=document.querySelector(".tShirtBack__Graphic");let ie,de,me,pe,ye,he=0,Se=0;const ve=(e,t)=>{me=e,pe=t,re.style.display=me||pe?"flex":"none",ge(me),be(pe),fe()},_e=e=>{Se="curier"===e?5:0,"sameAddress"!==e&&fe()},ge=e=>{ce.style.display=e?"flex":"none",ue.style.display=e?"flex":"none"},be=e=>{ne.style.display=e?"flex":"none",ae.style.display=e?"flex":"none"},qe=t=>{ie=t.cloneNode(!0),de=t.cloneNode(!0),oe.src=se.src=ie.src,(t=>{j!==t.src&&(document.querySelector(".main__wrapper--summary input[value=pictureConfirmed]").checked=!1),j=t.src;const r=j.match(/\/id\/(\d+)\//)[1];z.innerHTML="ID "+r,e.picture.id=r})(t)},fe=()=>{ye=10*(me+pe)+he+Se,le.querySelector("span").textContent=ye},Ae=e=>{4===e?re.style.display="none":ve(me,pe)},ke=[],Ee=()=>{fetch("https://picsum.photos/500/300").then((e=>{const t=e.url,r=document.createElement("img");r.src=t,r.alt="Lorem Picsum",Ke(r),qe(r),He(r),Le(r)})).catch((e=>{console.error("Error:",e)}))},Le=e=>{ke.push(e),ke.length>2&&ke.shift()},Ce=document.querySelector(".tShirtFront__Graphic"),Be=document.querySelector(".tShirtBack__Graphic"),xe=document.querySelector(".changePhoto__button--left"),Ie=document.querySelector(".changePhoto__button--right"),we=document.querySelectorAll('#effectSelect input[type="radio"]');let ze,Me;const He=e=>{Ce.contains(ze)?ze.src=e.src:ze=e.cloneNode(!0),Be.contains(Me)?Me.src=e.src:Me=e.cloneNode(!0),ke[0]==e&&(xe.style.display="none")};xe.addEventListener("click",(()=>{Ke(ke[0]),qe(ke[0]),He(ke[0])})),Ie.addEventListener("click",(()=>{ke.length<2||Me.src==ke[1].src?Ee():(Ke(ke[1]),qe(ke[1]),He(ke[1])),ke.length>0&&(xe.style.display="flex")})),we.forEach((e=>{e.addEventListener("change",(()=>{Te(e.value)}))}));const Te=e=>{const t=e,r=document.querySelectorAll('img[alt="Lorem Picsum"]'),c=document.querySelector(".graphicPanel__effect--blurRange"),n=document.getElementById("blurRange"),l=document.querySelector(".blurRange__current");"normal"==t&&r.forEach((e=>{e.classList.remove("grayscale"),e.classList.remove("blur")})),"grayscale"==t&&r.forEach((e=>{e.classList.add(t)})),"blur"==t?(r.forEach((e=>{e.classList.remove("grayscale")})),c.style.display="flex",n.addEventListener("input",(function(){let e=n.value;l.innerHTML=e,r.forEach((t=>{t.style.filter=`blur(${e}px)`})),V("blur")}))):(c.style.display="none",l.innerHTML=1,n.value=1,r.forEach((e=>{e.removeAttribute("style")}))),(e=>{he={normal:0,grayscale:2,blur:3}[e]||0,fe(),V(e)})(t)},De=document.querySelector("#checkFront"),Pe=document.querySelector("#checkBack"),$e=document.querySelector("#checkBoth"),Ne=document.querySelector(".tShirtFront__Imprint"),Ze=document.querySelector(".tShirtBack__Imprint"),Fe=document.querySelector(".nav__button--next");let Ge,Re,Ue=!1,je=!1;const Je=()=>{Oe(),Qe(),$e.checked=Ue&&je,ve(Ue,je),((t,r)=>{const c=t&&r?"Both":t?"Front":r?"Back":"";U!==c&&(document.querySelector(".main__wrapper--summary input[value=placementConfirmed]").checked=!1),U=c,I.innerHTML=c,e.picture.placement=c})(Ue,je),Fe.disabled=document.querySelectorAll('input[type="checkbox"]:checked').length<1;const t=document.querySelector('#effectSelect input[type="radio"]:checked'),r=t?t.value:"";if("blur"!=r)Te(r);else{const e=document.getElementById("blurRange");document.querySelectorAll('img[alt="Lorem Picsum"]').forEach((t=>{t.style.filter=`blur(${e.value}px)`}))}},Ke=e=>{Ne.contains(Ge)?Ge.src=e.src:Ge=e.cloneNode(!0),Ze.contains(Re)?Re.src=e.src:Re=e.cloneNode(!0)},Oe=()=>{Ue?Ne.contains(Ge)||(Ne.appendChild(Ge),Ge.classList.add("main__wrapper--tShirtLoremPiscum")):Ne.contains(Ge)&&Ne.removeChild(Ge),(e=>{e?Ce.contains(ze)||(Ce.appendChild(ze),ze.classList.add("main__wrapper--tShirtLoremPiscum")):Ce.contains(ze)&&Ce.removeChild(ze)})(Ue)},Qe=()=>{je?Ze.contains(Re)||(Ze.appendChild(Re),Re.classList.add("main__wrapper--tShirtLoremPiscum")):Ze.contains(Re)&&Ze.removeChild(Re),(e=>{e?Be.contains(Me)||(Be.appendChild(Me),Me.classList.add("main__wrapper--tShirtLoremPiscum")):Be.contains(Me)&&Be.removeChild(Me)})(je)};De.addEventListener("click",(()=>{Ue=!Ue,Je()})),Pe.addEventListener("click",(()=>{je=!je,Je()})),$e.addEventListener("click",(()=>{Ue=!Ue||!je,je=Ue,De.checked=Ue,Pe.checked=je,Je()})),Ee()})();
//# sourceMappingURL=index.bundle.js.map