const celciousE=document.getElementById("celcious");
const farenE=document.getElementById("fahrenheight");

const kelvinE=document.getElementById("kelvin");


function convertT(event){
   const currentValue= +event.target.value;
   switch (event.target.name) {
    case "celcious":
        kelvinE.value=(currentValue+273.16)
        farenE.value=(currentValue/5*9+32)
        break;
        case "fahrenheight":
            celciousE.value=(currentValue-32)/9*5
            kelvinE.value=(currentValue-32)/9*5+273.16
        break;
        case "kelvin":
            celciousE.value=(currentValue-273.16)
            farenE.value=(currentValue-273.16)/5*9+32

   
    default:
        break;
   }
   
}

convertT();