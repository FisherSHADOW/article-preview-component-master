// variable declaration 
let shareBtn= document.getElementById('shareBtnBox')
let shareIconBox=document.getElementById('shareIconBox')
let shareIconPopUpImg=document.getElementById('popUpImg')
let shareIconPopUpTxt=document.getElementById('popUpText')
let shareIconPopUpIcons=document.getElementById('popUpIcons')
let article=document.getElementById('article')
let show =false   //popUp is not visible below 1000 px 
let bgShow = false //popUp is not visible at large screen


shareBtn.addEventListener('click', function(){
     if (window.innerWidth<=1000){
      if (show===false ) {
            shareIconBox.style.visibility='visible'
            show=true
      }else if (show===true){
            shareIconBox.style.visibility='hidden'
            show =false
         }
    }else{
      if (bgShow===false) {
         shareIconPopUpImg.style.visibility='visible'
         shareIconPopUpTxt.style.visibility='visible'
         shareIconPopUpIcons.style.visibility='visible'
         bgShow=true
         }else if (bgShow===true){
         shareIconPopUpImg.style.visibility='hidden'
         shareIconPopUpTxt.style.visibility='hidden'
         shareIconPopUpIcons.style.visibility='hidden'
         bgShow=false
         }
        }
    });





