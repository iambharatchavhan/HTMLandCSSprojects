//^ first dom project on event listner

const bulb = document.querySelector("#bulbImg");
const btnBulbLeft = document.querySelector("#btnBulbLeft");
const btnBulbCenter = document.querySelector("#btnBulbCenter");
const btnBulbRight = document.querySelector("#btnBulbRight");

// btnBulbCenter.innerHTML= "BOTH OFF";          checked ok

btnBulbLeft.addEventListener('click', function(){
//   console.log(bulb.src);
    if(bulb.src.match('off')){

     bulb.src = "./imges/three-on.png" ;
     btnBulbLeft.innerHTML="OFF"
     btnBulbLeft.style.backgroundColor= "red";
     btnBulbRight.innerHTML="ON";
     btnBulbRight.style.backgroundColor= "green";
    }else{
     bulb.src ="./imges/one-off.png" ;
     btnBulbLeft.innerHTML="ON";
     btnBulbLeft.style.backgroundColor= "green";
     btnBulbCenter.innerHTML="BOTH ON";
     btnBulbCenter.style.backgroundColor= "green";
     btnBulbRight.innerHTML="ON";
     btnBulbRight.style.backgroundColor= "green";

    }
})

btnBulbCenter.addEventListener('click', function(){
    //   console.log(bulb.src);
        if(bulb.src.match('off')){
    
         bulb.src = "./imges/two-on.png" ;
         btnBulbCenter.innerHTML="BOTH OFF"
         btnBulbCenter.style.backgroundColor= "red";
         btnBulbRight.innerHTML="OFF"
         btnBulbRight.style.backgroundColor= "red";
         btnBulbLeft.innerHTML="OFF"
         btnBulbLeft.style.backgroundColor= "red";
        }else{
         bulb.src ="./imges/one-off.png" ;
         btnBulbCenter.innerHTML="BOTH ON";
         btnBulbCenter.style.backgroundColor= "green";
         btnBulbLeft.innerHTML="ON";
         btnBulbLeft.style.backgroundColor= "green";
         btnBulbRight.innerHTML="ON"
         btnBulbRight.style.backgroundColor= "green";
        }
    })
    
    btnBulbRight.addEventListener('click', function(){
        //   console.log(bulb.src);
            if(bulb.src.match('off')){
             bulb.src = "./imges/four-on.png" ;
             
             btnBulbRight.innerHTML="OFF"
             btnBulbRight.style.backgroundColor= "red";
             btnBulbLeft.innerHTML="ON";
             btnBulbLeft.style.backgroundColor= "green";
            }else{
             bulb.src ="./imges/one-off.png" ;

             btnBulbRight.innerHTML="ON";
             btnBulbRight.style.backgroundColor= "green";
             btnBulbCenter.innerHTML="BOTH ON";
             btnBulbCenter.style.backgroundColor= "green";
             btnBulbLeft.innerHTML="ON";
             btnBulbLeft.style.backgroundColor= "green";
            }
        })