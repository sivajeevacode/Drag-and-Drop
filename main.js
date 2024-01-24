//select the lists,leftbox,rightbox
var lists=document.querySelectorAll(".list") 
var leftbox=document.querySelector(".leftbox")
var rightbox=document.querySelector(".rightbox")

for(drag of lists)//variable of iterate
{
    drag.addEventListener('dragstart',function(event){
        var selected=event.target;

        rightbox.addEventListener('dragover',function(event){
            event.preventDefault();
        })
        rightbox.addEventListener('drop',function(){
            rightbox.appendChild(selected);
            selected=null;
        })
        leftbox.addEventListener('dragover',function(event){
            event.preventDefault();
        })
        leftbox.addEventListener('drop',function(){
            leftbox.appendChild(selected);
            selected=null;
        })
    })
}

   

