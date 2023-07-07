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
            shareIconBox.style.opacity='1'
            show=true
      }else if (show===true){
            shareIconBox.style.opacity='0'
            show =false
         }
    }else{
      if (bgShow===false) {
         shareIconPopUpImg.style.opacity='1'
         shareIconPopUpTxt.style.opacity='1'
         shareIconPopUpIcons.style.opacity='1'
         bgShow=true
         }else if (bgShow===true){
         shareIconPopUpImg.style.opacity='0'
         shareIconPopUpTxt.style.opacity='0'
         shareIconPopUpIcons.style.opacity='0'
         bgShow=false
         }
        }
    });





