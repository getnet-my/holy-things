//const product=['1','2','3','4',];

   
   let addall= `<div class="myk">
   <img src="all/images (1).jpeg" alt="no-picture-found">
   <p>Eotc-Holy-picture</p>
   </div>` ;
   let bt;
   let all;

   
for(let i=2;i<88;i++){
    all="jpeg";

    if(i===14 || i===15){
        continue;
    }else if(i===16 || i===17){
        continue;
    }else if(i===18 || i===21){
        continue;

    }else if(i===58 || i===59){
           continue;
    }else if(i>63){
        all="jpg";
            
    }


           

           
    addall+=
           `<div class="myk">
            <img controls src="all/images (${i}).${all}" alt="no-picture-found">
            <p>Eotc-Holy-picture</p>
            </div>`          
            ;
           
};



document.querySelector('.myk2').innerHTML=addall;

    


