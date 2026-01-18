function changeContent(){
            const p=document.getElementById('p1');
            p.innerHTML="This is a new Content";
            p.style.color="red";
            const f1=document.getElementById('f1');
            f1.value="This is test value";
        }
     const icon=document.getElementById('icon01');
     icon.addEventListener('mouseover',changeContent);