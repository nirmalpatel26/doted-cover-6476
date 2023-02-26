let bag_data4=JSON.parse(localStorage.getItem("bag_boys"))||[];
appenddata(bag_data4);
function appenddata(data){
    
    let container=document.querySelector("#container");
     container.innerHTML="";
   data.forEach((product,index) => {
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=(product.image_url)
    let div1=document.createElement("div");
    div1.setAttribute("id","div1");
    let price=document.createElement("h5");
    price.innerText=`₹${product.price}`;
    let offer=document.createElement("h5");
    offer.innerText=`${product.offer}`;
    let strikedoffprice=document.createElement("h5");
    strikedoffprice.innerText=product.strikedprice;
    let title=document.createElement("p");
    title.innerText=product.name;
    let div2=document.createElement("div");
    let btn=document.createElement("button")
    div2.setAttribute("id","button1");
    btn.innerText="delet";
    btn.addEventListener("click",()=>{
        data.splice(index,1)
        localStorage.setItem("bag_boys",JSON.stringify(data));
        appenddata(data);
    })
    div2.append(btn);
    div1.append(strikedoffprice,offer,price);
    div.append(img,title,div1,div2);
    container.append(div);
   });
}

let bag_data3=JSON.parse(localStorage.getItem("bag_mens"))||[];
appenddataM(bag_data3)

function appenddataM(data){
    let container1=document.querySelector("#container1");
   
    container1.innerHTML="";
   data.forEach((product,index) => {
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=(product.image_url)
    let div1=document.createElement("div");
    div1.setAttribute("id","div1");
    let price=document.createElement("h5");
    price.innerText=`₹${product.price}`;
    let offer=document.createElement("h5");
    offer.innerText=`off(${product.offer})`;
    let strikedoffprice=document.createElement("h5");
    strikedoffprice.innerText=product.strikedoffprice;
    let title=document.createElement("p");
    title.innerText=product.name;
    let div2=document.createElement("div");
    let btn=document.createElement("button")
    div2.setAttribute("id","button1");
    btn.innerText="delet";
    btn.addEventListener("click",()=>{
        data.splice(index,1)
        localStorage.setItem("bag_mens",JSON.stringify(data));
        appenddataM(data);
    })
    div2.append(btn);
    div1.append(strikedoffprice,offer,price);
    div.append(img,title,div1,div2);
    container1.append(div);
   });
}

let bag_data2=JSON.parse(localStorage.getItem("bag_new"))||[];
appenddataNew(bag_data2)

function appenddataNew(data){
    let container2=document.querySelector("#container2");
    container2.innerHTML="";
   data.forEach((product,index) => {
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
    btn.innerText="delet";
   
    btn.addEventListener("click",()=>{
        data.splice(index,1)
        localStorage.setItem("bag_mens",JSON.stringify(data));
        appenddataNew(data);
    })
    div2.append(btn);
    div1.append(rating,price);
    div.append(img,title,div1,div2);
    container2.append(div);
   });
}

let bag_data1=JSON.parse(localStorage.getItem("bag_women"))||[];

appenddatawomen(bag_data1)
function appenddatawomen(data){
    let container3=document.querySelector("#container3");
       container3.innerHTML="";
     data.forEach((product,index) => {
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=(product.image_url)
      let div1=document.createElement("div");
      div1.setAttribute("id","div1");
      let price=document.createElement("h5");
      price.innerText=`₹${product.price}`;
      let offer=document.createElement("h5");
      offer.innerText=`(${product.offprice})`;
      let strikedoffprice=document.createElement("h5");
      strikedoffprice.innerText=product.strikedoffprice;
      let title=document.createElement("p");
      title.innerText=product.name;
      let div2=document.createElement("div");
      let btn=document.createElement("button")
      div2.setAttribute("id","button1");
      btn.innerText="delet";
      btn.addEventListener("click",()=>{
        data.splice(index,1)
        localStorage.setItem("bag_mens",JSON.stringify(data));
        appenddatawomen(data);
    })
      div2.append(btn);
      div1.append(strikedoffprice,offer,price);
      div.append(img,title,div1,div2);
      container3.append(div);
     });
  }
  