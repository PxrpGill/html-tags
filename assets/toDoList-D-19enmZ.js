import"./header-CbCZJYUN.js";const v=document.getElementById("myForm"),E=document.getElementById("list");window.addEventListener("load",function(){const n=JSON.parse(localStorage.getItem("todoList"));n&&n.forEach(e=>{const t=h(e.text,e.deadLine,e.isCompleted);E.appendChild(t)})});v.addEventListener("submit",function(n){n.preventDefault();let e=document.getElementById("deadLine").value;e===""&&(e="Не указано");const t=document.getElementById("textInput").value;if(document.getElementById("textInput").value="",t==="")alert("Нельзя вводить пустое поле!");else{const c=h(t,e);E.appendChild(c),C()}});function h(n,e){const t=document.createElement("li");t.classList.add("listElement"),t.appendChild(document.createElement("hr"));const c=document.createElement("h3");c.textContent="Дед лайн: "+e,t.appendChild(c);const o=document.createElement("p");o.classList.add("textSpot"),o.textContent=n,t.appendChild(o);const d=document.createElement("div");t.appendChild(d);const u=document.createElement("button");u.textContent="Удалить",u.classList.add("deleteButton");const l=document.createElement("button");l.textContent="Редактировать",l.classList.add("editButton");const s=document.createElement("button");return s.textContent="Выполнено",s.classList.add("successPointButton"),d.appendChild(u),d.appendChild(l),d.appendChild(s),u.addEventListener("click",function(){E.removeChild(t),C()}),l.addEventListener("click",function(){const m=document.createElement("div"),a=document.createElement("form"),p=document.createElement("input"),i=document.createElement("button");i.type="button";const r=document.createElement("button");r.type="button",p.value=o.textContent,i.textContent="Применить",i.classList.add("successPointButton"),r.textContent="Отменить",r.classList.add("deleteButton"),a.appendChild(p),a.appendChild(i),a.appendChild(r),m.appendChild(a),t.appendChild(m),r.addEventListener("click",function(){m.removeChild(a)}),i.addEventListener("click",function(){p.value!==""?(o.textContent=p.value,t.appendChild(d),t.removeChild(m),C()):alert("Вы оставили поле пустым!")})}),s.addEventListener("click",function(){o.style.color="green",d.removeChild(l),d.removeChild(s),C()}),t}function C(){const n=Array.from(E.children).map(e=>{const t=e.querySelector("p").textContent,c=e.querySelector("h3").textContent.replace("Дед лайн: ",""),o=e.querySelector("p").style.color==="green";return{text:t,deadLine:c,isCompleted:o}});localStorage.setItem("todoList",JSON.stringify(n))}
