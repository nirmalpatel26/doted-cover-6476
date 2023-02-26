


async function fetchdata(){
    const APIURL="https://63f4aea13f99f5855db5058d.mockapi.io/fashion/mans";
    try{
        let responce= await fetch(APIURL);
        responce= await responce.json();
        console.log(responce);
        filterby(responce)
    }
    catch(error){
        console.log("error");
    }
}
fetchdata()

let sort=document.querySelector("#sort");

sort.addEventListener("change",()=>{
    fetchdata() 

})

function filterby(data){
    if(sort.value==""){
       appenddata(data)
       total(data)
    }else{
        data=data.filter((elem)=>{
            if(sort.value=="Handcrafted"){
                return elem.rating==sort.value;
               
            }else if(sort.value=="Modern"){
                
                return elem.rating==sort.value;
            }else if(sort.value=="Practical"){
               return ( elem.rating)>=(sort.value)
              
            }
            else if(sort.value=="Rustic"){
                
                return  ( elem.rating)<=(sort.value);
             }
        })
        
        appenddata(data)
        total(data)
       
    }
}
let bag_data2=JSON.parse(localStorage.getItem("bag_new"))||[];
let container=document.querySelector("#container");
function appenddata(data){
    container.innerHTML="";
   data.forEach(product => {
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=(product.avatar)
    let div1=document.createElement("div");
    div1.setAttribute("id","div1");
    let price=document.createElement("h5");
    price.innerText=`₹${product.price}`;
    let rating=document.createElement("h5");
    rating.innerText=product.rating;
    let title=document.createElement("p");
    title.innerText=product.title;
    let div2=document.createElement("div");
    let btn=document.createElement("button")
    div2.setAttribute("id","button1");
    btn.innerText="Add to Bag";
   
    btn.addEventListener("click",()=>{
        bag_data2.push(product);
        localStorage.setItem("bag_new",JSON.stringify(bag_data2));
    })
    div2.append(btn);
    div1.append(rating,price);
    div.append(img,title,div1,div2);
    container.append(div);
   });
}

function total(data){
    let totaldata=document.querySelector("#total");
    totaldata.innerText=`(${data.length})`;
  }