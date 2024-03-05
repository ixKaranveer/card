function color_change(){
    const select = document.getElementById("theme").value;
    let buttonList=Array.from(document.getElementsByTagName("button"));
    console.log(buttonList,select);

switch (select) {
    case "yellow":
        buttonList.forEach(button => {
            console.log(button)
            button.style.backgroundColor = "yellow"; 
        });
        break;

   case "blue":
        buttonList.forEach(button => {
            console.log(button)
            button.style.backgroundColor = "blue"; 
        });
        break;
        case "purple":
            buttonList.forEach(button => {
                console.log(button)
                button.style.backgroundColor = "purple"; 
            });
            break;
    }
}