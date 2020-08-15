const hint = Array.from(document.getElementsByClassName("has-tooltip"));


for (let i = 0; i < hint.length; i++) {
    let count = 0;
    hint[i].addEventListener("click", (event) =>{
        event.preventDefault();
        count++;
        let element = document.createElement("div");
        element.classList.add("tooltip");
        element.innerHTML = `${hint[i].title}`;
        let left = hint[i].getBoundingClientRect().left;
        if (count === 1){
            element.classList.add("tooltip_active");
            hint[i].insertAdjacentElement("afterend", element);
            hint[i].nextElementSibling.style.left = `${left}px`;
        } else if(count % 2 !== 1) {
            hint[i].nextElementSibling.classList.remove("tooltip_active");
        } else {
            hint[i].nextElementSibling.classList.add("tooltip_active");
        }        
    })
}