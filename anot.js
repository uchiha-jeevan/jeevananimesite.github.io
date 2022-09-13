function selec(){
    console.log('done');
    let elements=document.getElementsByName('hello');
    for(let i=0;i<elements.length;i++){
            let hello=elements[i].getAttribute('id');
            let cssvalue=elements[i].value;
            let div=document.getElementById('change');
            div.style[hello]=cssvalue
    }
}








document.getElementById('selec').addEventListener('click',selec)
