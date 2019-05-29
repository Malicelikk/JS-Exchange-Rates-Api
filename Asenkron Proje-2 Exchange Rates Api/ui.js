class UI {

    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;

        this.outputFirst = document.getElementById("outputFirst");  // spanlar yazi
        this.outputSecond = document.getElementById("outputSecond"); // spanlar yazi  
        this.outputResult = document.getElementById("outputResult");    
    }

    changeFirst(){  // span içeriği değiştirme
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    changeSecond(){ // span içeriği değiştirme
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }

     displayResult(result){
         this.outputResult.value = result;
     }
}