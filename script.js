const read=document.querySelector(".read");
const del=document.querySelector(".delete-book");
const addbutton=document.querySelector(".addButton");
const newbook=document.querySelector(".newBook");
const submitBtn = document.getElementById('submitBtn');



const formField=[];
const dataArray=[];

addbutton.addEventListener('click',()=>{
    newbook.innerHTML='';


  function addfield(labelText,inputType,placeholdertext){
    const label=document.createElement('label');
    label.textContent=labelText;

    const input =document.createElement('input');
    input.type=inputType;
    input.placeholder=placeholdertext;


  newbook.appendChild(label);
    newbook.appendChild(input);

    formField.push(input);

  }
  addfield('Enter book name:','text','enter the book name');
  addfield('Enter the writer name:','text','writer name');
  addfield('Total page number:','number','total page number');

  




})







read.addEventListener('click',()=>{
  if(read.innerHTML=="Read"){
  read.innerHTML="Not Read";
  read.style.backgroundColor="red";
  }
  else{
    read.innerHTML="Read";
  read.style.backgroundColor="green";

  }

})
del.addEventListener('click',()=>{
  

})


