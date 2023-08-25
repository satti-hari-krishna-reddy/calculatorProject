function buttonClicked(value) {
    const result = document.getElementById("result");
    const currentValue = result.textContent;

    switch (value) {
         case 'AC':
             result.textContent = "0";
             break;
         case 'DEL':
               if (currentValue.length > 0 && currentValue!=0) {
               result.textContent = currentValue.slice(0, -1);}
               break;
         case '=':
                try {
                   result.textContent = eval(result.textContent);
                } catch (error) {
                    result.textContent = "Error";}
                break;
         default:
               if (currentValue ==="0"||currentValue ==="Error"||currentValue ==="Infinity") {
                   result.textContent = value;}
              else{
                   result.textContent = currentValue + value;}
     }
}