let tags = document.getElementsByTagName("*");
for(let tag of tags){
    let text = tag.innerText;
    if(tag.children.length === 0 && typeof text !== "undefined"){
        let replacedText = text.replace(/Trump/gi, "DickHead");
        tag.innerText = replacedText;
    }
}