const display=document.getElementById('display')

function appendToDisplay(input){
    display.value+=input;

};

function  clearDisplay(){
    display.value="";

};

function deleteNum(){
    const currentValue=display.value;
    display.value=currentValue.substring(0,currentValue.length -1);
};
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }

}

