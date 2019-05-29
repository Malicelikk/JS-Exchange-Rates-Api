// Elementleri seçme
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect); // ilk selectle ikinci select i gönderdik

eventListeners();

function eventListeners(){

    amountElement.addEventListener("input",exchangeCurrency); // input değiştiği zaman ec fonksiyonu calıscak

    firstSelect.onchange = function(){ // dropbox değistiginde
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst(); // span içeriği değiştirme
        exchangeCurrency();
    };

    secondSelect.onchange = function(){ // dropbox değistiginde
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond(); // span içeriği değiştirme
        exchangeCurrency();
    };

}

function exchangeCurrency() {  // miktar girildiği zaman

    currency.changeAmount(amountElement.value);  // yeni değeri gönderdik  

    currency.exchange() // fetch fonksiyonu çalıstı
    .then(result => {
        ui.displayResult(result);   // aldıgımız sonucu gonderdık
    })
    .catch(err => console.log(err));
}

