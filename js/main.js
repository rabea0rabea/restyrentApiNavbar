
var data=[];

getdata("pizza")




function getdata(meal){
    var httpRequest=new XMLHttpRequest() 

httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
httpRequest.send() 
httpRequest.addEventListener("readystatechange",function(){


    if(httpRequest.readyState==4)

    {
         
        data=JSON.parse( httpRequest.response ).recipes

        console.log(data)
        display()
    } 
  
})
}



function display(){
    var cartona="";
    for(var i=0;i<data.length;i++)
    {
        cartona+=`
        <div class="col-md-4"> 
        <div class="item">
        <img src="${data[i].image_url}" alt="" class="picture">   
        <h6 class="mt-4 text-center">${data[i].title}</h6>
        <a href="${data[i].source_url}" target="_blank" class="btn btn-outline-info my-2 form-control">more</a>
  
               </div>
                </div>
        
        
        `
    } 
    document.getElementById("requestData").innerHTML=cartona
} 










var links=document.querySelectorAll(".nav-item .nav-link") 

for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        var curentmeal=e.target.text 
        getdata(curentmeal)
    })
}