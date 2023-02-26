let user_data=JSON.parse(localStorage.getItem("user_id"))||[];
let name1 =document.querySelector("#name");
let Last_name =document.querySelector("#last_name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let formdata= document.querySelector("form");

formdata.addEventListener("submit",(el)=>{
    el.preventDefault();
    let obj={
        name:name1.value,
        Last_name:Last_name.value,
        email:email.value,
        password:password.value,
    }
    console.log(obj);
  if(duplicat(obj)){
    alert("User already exist")
  }else{
     user_data.push(obj)
    localStorage.setItem("user_id",JSON.stringify(user_data))
    alert("Account Created")
  }
})

 function duplicat(element){
    for(let i=0; i<user_data.length; i++){
        console.log(user_data[i])
      if(user_data[i].name==element.name){
        return true;
      }else  if(user_data[i].email==element.email){
        return true;
      }
      
    }
    return false;
  }