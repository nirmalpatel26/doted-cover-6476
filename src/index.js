
let image=[
    "https://cdn.dynamicyield.com/api/8772794/images/de74b440a30a__fnl_hp_slider_desktop_1213x600_toptrend_2imgs_1.png",
    "https://cdn.dynamicyield.com/api/8772794/images/1dadecd9490bd__jd_fnl_021523_globalaccess_slider_desktop_1213x600.jpg",
    "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
]

let sliddata=document.querySelector("#slidshow");

function slidshow(elem){
  sliddata.innerHTML="";
  let img=document.createElement("img");
  img.src=elem;
  console.log(elem);
  sliddata.append(img);
 
}

window.addEventListener("load",()=>{
let i=0;
console.log(i);
  setInterval(()=>{
    slidshow(image[i]);
    if(i==image.length-1){
      i=0;
      
    }else{
      i++;
    }
  },5000);
});