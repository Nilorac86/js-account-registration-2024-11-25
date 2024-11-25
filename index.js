const labels = document.querySelectorAll("label");


//##### function click one label or inputfield ######

labels.forEach ((label) => {
    const input = label.querySelector("input");

    label.addEventListener("click", () =>{
        input.focus();
    });

}); 



