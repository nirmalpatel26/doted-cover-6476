let user_data=JSON.parse(localStorage.getItem("user_id"))||[];
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let formdata= document.querySelector("form");


    formdata.addEventListener("submit",function (el){
       
        el.preventDefault();
        let obj={
          email:email.value,
          password:password.value,
        } 
      
      //  console.log(arr);
      let count=0;
       for(let i=0; i<user_data.length; i++){
      console.log(obj.email,obj.password);
      console.log(user_data[i].email,user_data[i].password);
      if(user_data[i].email===obj.email&&user_data[i].password===obj.password){
       alert("Sign in Successful");
       count++;
       break;
      }
    }
    if(count==0){
        
            alert("Wrong Credentials");
    }
});
