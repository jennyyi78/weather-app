(()=>{"use strict";const t=function(t,e,n){const i=document.createElement(t);if(""!==e){const t=document.createTextNode(e);i.appendChild(t)}return void 0!==n&&i.classList.toggle(n),i};(()=>{const e=document.querySelector(".weather-panel"),n=n=>{(async t=>{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=4eab9c5e984dcd0a2d0ceaad08901dda`,{mode:"cors"});return await e.json()})(n).then((n=>{if(200!==n.cod)(()=>{const n=t("div","","error-container"),i=t("p","Location was not Found!","title-text");n.appendChild(i),e.appendChild(n)})();else{const u=(d=(i=n).name,a=i.sys.country,o=i.weather[0].main,c=i.weather[0].description,p=i.main.temp,s=i.main.humidity,r=i.wind.speed,{city:d,country:a,status:o,description:c,temp:(l=p,(1.8*(l-273.15)+32).toFixed(2)),humidity:s,wind:r}),h=t("div","","location-container"),m=t("p",u.city,"title-text"),C=t("p",u.country,"sub-text");h.appendChild(m),h.appendChild(C),e.appendChild(h);const y=t("div","","status-container"),w=t("p",u.status,"title-text"),x=t("p",u.description,"sub-text");y.appendChild(w),y.appendChild(x),e.appendChild(y);const v=t("div","","temp-container"),b=t("p",`${u.temp}°F`,"temp-text");v.appendChild(b),e.appendChild(v);const f=t("div","","misc-container"),g=t("p",`Humidity: ${u.humidity}%`,"sub-text"),L=t("p",`Wind: ${u.wind} m/s`,"sub-text");f.appendChild(g),f.appendChild(L),e.appendChild(f)}var i,d,a,o,c,p,s,r,l}))};!function(){const t=document.querySelector(".submit-button"),i=document.querySelector(".location-input");t.addEventListener("click",(t=>{t.preventDefault(),e.classList.contains("hide-panel")&&e.classList.toggle("hide-panel"),e.textContent="",n(i.value)}))}()})()})();