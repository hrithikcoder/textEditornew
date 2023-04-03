const boldBtn=document.querySelector('#bold-btn')
const underlineBtn=document.querySelector('#underline-btn')
const italicBtn=document.querySelector('#italic-btn')
const colorBtn=document.querySelector('#color-btn')
const newBtn=document.querySelector('#new-btn')
const txtBtn=document.querySelector('#txt-btn')
const pdfBtn=document.querySelector('#pdf-btn')
const content=document.querySelector('#content')




boldBtn.addEventListener('click',() => {
    document.execCommand('bold')
})
underlineBtn.addEventListener('click',()=>{
    document.execCommand("underline")

})
italicBtn.addEventListener('click',()=>{
    document.execCommand("italic")
    
})
colorBtn.addEventListener('click',()=>{
    document.execCommand("forecolor",false,colorBtn.value)
    
})
newBtn.addEventListener('click',()=>{
    content.innerHTML=""
    
})
txtBtn.addEventListener('click',()=>{
    const a = document.createElement('a')
    const blob = new Blob ([content.innerHTML])
    const dataurl = URL.createObjectURL(blob)
    a.href = dataurl
    a.download = filename.value + "document.txt"
    a.click()
})
pdfBtn.addEventListener('click',()=>{
    html2pdf().form(content).save(filename.value)
    
})


function myFunction() {
  let text = document.getElementById("content").innerHTML;
  document.getElementById("content").innerHTML =
  text.toUpperCase();
}
function myFunction1() {
    let text = document.getElementById("content").innerHTML;
    document.getElementById("content").innerHTML =
    text.toLowerCase();
}3
function myFunction2() {
    let text = document.getElementById("content").innerHTML;
    let length = text.length;
    
    
    if(text==" "){
        length= 0;
        document.getElementById("demo").innerHTML =length;
        
    }
    else{
        document.getElementById("demo").innerHTML =length;
    }
    document.getElementById("demo").style.color= "blue";
}

