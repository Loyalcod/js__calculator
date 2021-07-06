
var view_result = document.querySelector('.viewbox');
var calcbutton = document.querySelectorAll('.calcbutton');
view_result.innerHTML="";
// // view_result.innerHTML.style.margin-top="20px";

for(x=0; x<calcbutton.length; x++){
    calcbutton[x].addEventListener('click', function(){
        switch(this.innerHTML){
            case "=":
                view_result.innerHTML = eval(view_result.innerHTML);
                break;
                
        
            case "C":
                view_result.innerHTML="";
                break;
               
     
            case "Del.":
                view_result.innerHTML= view_result.innerHTML.slice(0, view_result.innerHTML.length-1);
            break;

            case "M+":
                sessionStorage.setItem('lastcalculation',  view_result.innerHTML);
                break;
            
            case "M":
                view_result.innerHTML=sessionStorage.getItem('lastcalculation');
                
                break;

            default:
                    view_result.innerHTML += this.innerHTML;
    
            }
        // switch(this.innerHTML){
        //     case "Del.":
        //         // view_result.innerHTML = str.slice(0, str.length-1)
        // }
        
        // view_result.innerHTML += this.innerHTML;
        // alert(this.innerHTML)
    })
}
