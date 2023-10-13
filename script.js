var fullscreen = document.querySelector("#fullscreen")
var sectionfull = document.querySelector("#sectionfull")
var close = document.querySelector("#close")
var ptop = document.querySelector("#ptop")
var cards = document.querySelector("#cards")
var messages = document.querySelector("#messages")
var sectionmenu = document.querySelector(".sectionmenu")
var Cancel = document.querySelector(".Cancel")
var video = document.querySelector("video");
var palyicon = document.querySelector("#palyicon i");
var pause = document.querySelector("#pause i");
var vidicocl = document.querySelector("#vidicocl");
var videoicon1 = document.querySelector("#videoicon1");
var videoicon2 = document.querySelector("#videoicon2");
var homeiconreel = document.querySelector("#homeiconreel");
var homeiconmessage = document.querySelector("#homeiconmessage");
var pright = document.querySelector("#pright");
var pright2 = document.querySelector("#pright2");
var searchbox = document.querySelector("#searchbox");
var homeiconsearch = document.querySelector("#homeiconsearch");



var videocluter = 0
var cluter = "";
var cluter2 = "";
var cluter3 = "";
var cluter4 = 0
var cluter6 = 0
var like2val = 0;
var Followval = 0


var arr = [
    {dp:"myimg.jpg", stores:"myimg3.jpg",
stname: "Nandlal"},

    {dp:"https://images.unsplash.com/photo-1693087654826-f663e7cba602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1564779341696-f8d69a82cd9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Gabriella"},

    {dp:"https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1694024259321-8822933a2366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Jameson"},

    {dp:"https://images.unsplash.com/photo-1687360441221-ff5143d5cd5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://plus.unsplash.com/premium_photo-1669223469455-b7b734c838f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Nicholas"},

    {dp:"https://images.unsplash.com/photo-1694288224576-6e5bb077de6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1597451394785-b8f7bbb650b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
stname: "Brooklyn"},

    {dp:"https://images.unsplash.com/photo-1694231270668-29aed6da9a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1549998398-8a66b36b47ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
stname: "Layla jack"},

    {dp:"https://images.unsplash.com/photo-1687360440741-f5df549b352d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1693875653673-b482ffb943f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Everleigh"},

    {dp:"https://images.unsplash.com/photo-1687360441470-6c9b3807749d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1693307418199-4af8f979e50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Kayden"},

    {dp:"https://images.unsplash.com/photo-1693820995094-c194e15fa205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1693820926058-1694839a20f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Gabriella"},

    {dp:"https://images.unsplash.com/photo-1693336429270-094637e16d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1693336429001-d0c5a162f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: " Valentina"},
    {dp:"https://images.unsplash.com/photo-1694034453937-4f877a3fd67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", stores:"https://images.unsplash.com/photo-1685369639164-19f19a821413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
stname: "Madeline"},
]



arr.forEach(function(val,idx){
   cluter += ` <div class="stores"><img id="${idx}" src="${val.dp}" alt="">
   <div class="storesname" >${val.stname}</div>
   </div> 
       `
   ptop.innerHTML = cluter;
   
   ptop.addEventListener("click", function(dets){
    fullscreen.style.backgroundImage =  `url(${arr[dets.target.id].stores})`
    sectionfull.style.display = "block"

    setTimeout(() => {
        sectionfull.style.display = "none"
    }, 3000);
   })

   close.addEventListener("click", function(){
    sectionfull.style.display = "none"
   })

})



var arr2 = [
    {dp2: "krishna.jpg",
    cardimg:"krishna.jpg", names: "Lord Krishna"},

    {dp2: "https://images.unsplash.com/photo-1620111898433-019a1918855c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1694106192312-08d813b3d2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", names: "Alia bhansl",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1687360441042-a3eb360f3db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",names: "Urmila",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",names: "Harsh",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1694191864312-ab0171f598c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1694288224576-6e5bb077de6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",names: "Vicky the doglover",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1687360440101-739008e55576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1694231270668-29aed6da9a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",names: "Layla and jack",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://plus.unsplash.com/premium_photo-1679079456068-2ddd4423aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1694512779470-c62f0bf76501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",names: "Hudson",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1693937719030-3a7dff2bdab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1687360441470-6c9b3807749d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",names: "Miles",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1694199372711-c67a3b3ccc4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1693820995094-c194e15fa205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",names: "Kinsley",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1693605518296-c867f91f4e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1693336429270-094637e16d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",names: "Anna san",likee:`<i class="imglike fa-solid fa-heart"></i>`},

    {dp2: "https://images.unsplash.com/photo-1673648955266-ba7deb5fa258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    cardimg:"https://images.unsplash.com/photo-1616707694728-599b59672d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxoVFZwQW40cEo1MHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",names: "Jameson",likee:`<i class="imglike fa-solid fa-heart"></i>`},


]


arr2.forEach(function(val2,idx){
      cluter2 += `            <div class="card">
      <div class="cardptop">
          <div class="id"><img src="${val2.dp2}" alt=""></div>
          <div class="idname">${val2.names}</div>
          <button class="Follow">Follow</button>
          <button class="cardmenu"><i class=" ptopi fa-solid fa-ellipsis"></i></button>
          

       </div>

       <div class="cardimg">
           <img ondblclick="togal()" id="${idx}"  src="${val2.cardimg}" alt="">
       </div>

    <div class="cardpbtm">
       <i  class="iconsize like2 fa-solid fa-heart"></i>
       <i  class="iconsize fa-solid fa-comment"></i>
       <i  class="iconsize fa-solid fa-share"></i>
    </div>
    <div class="like"><i class="imglike fa-solid fa-heart"></i></div>
    
  </div>`
 cards.innerHTML = cluter2;

// var likmg = document.querySelector(".imglike").style.opacity = 1;
//  cards.addEventListener("click", function(aaa){
//     console.log(arr2[aaa.target.id].cardimg);
//     arr2[aaa.target.id].cardimg.likmg.style.opacity = 1
//     // likmg.style.opacity = 1
//  })
 

})



function togal(){
    
    document.querySelector(".imglike").style.color = "red";
    document.querySelector(".like2").style.color = "red";
    document.querySelector(".imglike").style.transform = 'translate(-50%,-50%) scale(1)';
    document.querySelector(".imglike").style.opacity = 1;

    setTimeout(() => {
        document.querySelector(".imglike").style.transform = 'translate(-50%,-50%) scale(0)';
        document.querySelector(".imglike").style.opacity = 0;
    }, 1000);
}

document.querySelector(".like2").addEventListener("click",function(){
    
    if (like2val ==0) {
        document.querySelector(".like2").style.color = "red";
        like2val = 1
    } else {
        document.querySelector(".like2").style.color = "white";
        like2val = 0
    }
    

})

document.querySelector(".Follow").addEventListener("click",function(){
    if(Followval == 0){
        document.querySelector(".Follow").innerHTML = "Following"
        Followval = 1
    }
    else{
        document.querySelector(".Follow").innerHTML = "Follow"
        Followval = 0
    }
    
})



var arr3 = [
    {msdp: "https://images.unsplash.com/photo-1620111898433-019a1918855c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", msidname: "Alia bhansl"},

    {msdp: "https://images.unsplash.com/photo-1682687982141-0143020ed57a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Theodore"},

    {msdp: "https://images.unsplash.com/photo-1682695795931-a546abdb6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Evelyn"},

    {msdp: "https://images.unsplash.com/photo-1694114183217-5eadf97f55fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Matthew"},

    {msdp: "https://images.unsplash.com/photo-1694472655847-2211d724c48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Christopher"},

    {msdp: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Kinsley veya"},

    {msdp: "https://images.unsplash.com/photo-1689044739553-f799a3b4ff53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Savannah"},

    {msdp: "https://plus.unsplash.com/premium_photo-1691030256187-daa05531e0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", msidname: "Mohan swami"},

    {msdp: "https://images.unsplash.com/photo-1476018247111-83b9cd666ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60", msidname: "Bishan dayal"},

    {msdp: "https://images.unsplash.com/photo-1694046078505-7486ffcf88f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", msidname: "Anna felmin"},

]


arr3.forEach(function(val3){
   cluter3 += `
   <div class="elem">
   <img id="" src="${val3.msdp}" alt="">
   <h2>${val3.msidname}</h2>
   <div class="lastacctive">4 m ago</div>
   <button class="cardmenu"><i class=" ptopi fa-solid fa-ellipsis"></i></button>
</div>`

messages.innerHTML = cluter3;
})


document.querySelector(".cardmenu").addEventListener("click",function(){
    sectionmenu.style.display = "block"
    console.log("hello");
})

sectionmenu.addEventListener("click",function(){
    sectionmenu.style.display = "none"
})
Cancel.addEventListener("click",function(){
    sectionmenu.style.display = "none"
})



function vid (){
    video.addEventListener("click", function(deee){
        if(videocluter == 0){
            video.play();
            videocluter = 1
            palyicon.style.display = "none"
            pause.style.display = "none"
        }
        else{
            video.pause();
            videocluter = 0
            pause.style.display = "block"
        }
        console.log(deee);
    })
    
}

vid();


var icbr = document.querySelector(".icbr")
icbr.addEventListener("click", function(){
    vid();
})


vidicocl.addEventListener("click", function(){
    if (cluter4 == 0) {
        videoicon1.style.display = "none"
        videoicon2.style.display = "block"
        cluter4 = 1
    }

    else{
        videoicon2.style.display = "none"
        videoicon1.style.display = "block"
        cluter4 = 0
    }

    console.log("hiii");
})


homeiconreel.addEventListener("click", function(){
        pright.style.display = "none"
        pright2.style.display = "block"
        searchbox.style.top = "150%";

})

homeiconmessage.addEventListener("click", function(){
        pright.style.display = "block"
        pright2.style.display = "none"
        searchbox.style.top = "150%";
        
})




homeiconsearch.addEventListener("click", function(){
    if (cluter6 == 0) {
        searchbox.style.top = "50%";
        searchbox.style.opacity = 1;
        cluter6 = 1;
    }
    else{
        searchbox.style.top = "150%";
        searchbox.style.opacity = 0;
        cluter6 = 0;
    }
    
});


var cursr = document.querySelector("#cursr")

window.addEventListener("mousemove", function(mouse){
    cursr.style.top = mouse.y + "px"
    cursr.style.left = mouse.x + "px"
})


var homeiconreel1 = document.querySelector("#homeiconreel1")
var homeiconmessage1 = document.querySelector("#homeiconmessage1")
var homeiconsearch1 = document.querySelector("#homeiconsearch1")
var cluter8 = 0;

homeiconreel1.addEventListener("click", function(){
    pright2.style.display = "block"
    pright.style.display = "none"
    pleft.style.display = "none"
    searchbox.style.top = "150%";
    //  console.log("hiii")
})

homeiconmessage1.addEventListener("click", function(){
    pright.style.display = "block"
    pright2.style.display = "none"
    pleft.style.display = "none"
    searchbox.style.top = "150%";
    //  console.log("hiii")
})

homeiconsearch1.addEventListener("click", function(){
    if (cluter8 == 0) {
        searchbox.style.top = "50%";
        searchbox.style.opacity = 1;
        cluter8 = 1;
    }
    else{
        searchbox.style.top = "150%";
        searchbox.style.opacity = 0;
        cluter8 = 0;
    }
    
});