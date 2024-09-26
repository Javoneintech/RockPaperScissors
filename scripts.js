
function submit(){
    const choices = [`rock`, `paper`, `scissors`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    const userChoice = document.querySelector(`input[name="options"]:checked`);
    const userChoiceValue = userChoice.value;
    let re
    if (userChoice){
        const userChoiceValue = userChoice.value;
        alert(`Computer chose ${computerChoice}, did you win?`)
        
    }

};


























