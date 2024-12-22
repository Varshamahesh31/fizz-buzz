let r=document.getElementById('rec');
let b=document.getElementById('Submit');//submit
let f=document.getElementById('fizz');
let buzz=document.getElementById('buzz');
let fizzbuzz=document.getElementById('fizzbuzz');
let select;
let body = document.getElementById('body');

let countf=0;
f.addEventListener("click",()=>{
    countf=1;
})
let countb=0;
buzz.addEventListener("click",()=>{
    countb=1;
})
let countc=0;
fizzbuzz.addEventListener("click",()=>{
    countc=1;
})
    b.addEventListener("click" , ()=>{

      let  i=document.getElementById('input').value;
        if( i %3 ===0 && i % 5 ===0)
            {

                if(countc==1){
                    body.style.backgroundColor="lightgreen";
                    console.log("Fizzbuzz");
                }
                else{
                    body.style.backgroundColor="red";
                }
                countc=0;
                return;
           
            }
            else if( i % 3 ===0)
                {

                    if(countf==1){
                        body.style.backgroundColor="lightgreen";
                        console.log("fizz");
                    }
                    else{
                        body.style.backgroundColor="red";
                    }
                    countf=0; 
               
                }

            else if( i % 5 ===0)
                    {
    
                        if(countb==1){
                            body.style.backgroundColor="lightgreen";
                            console.log("buzz");
                        }
                        else{
                            body.style.backgroundColor="red";
                        }
                        countb=0;
                   
                    }
            return 0;
      });