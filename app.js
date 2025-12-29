const l=document.getElementById("l");
f.onsubmit=e=>{e.preventDefault();const li=document.createElement("li");li.textContent=c.value+" - "+a.value;l.appendChild(li);}