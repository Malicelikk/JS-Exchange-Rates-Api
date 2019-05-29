
class Currency {

    constructor(firstCurrency, secondCurreny) {
        this.firstCurrency = firstCurrency;
        this.secondCurreny = secondCurreny;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange() {  // veri cekimi

        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)  // get request yaptık 
                .then(response => response.json())
                .then(data => {
                    const parity = data["rates"][this.secondCurrency];
                    const amount2 = Number(this.amount);

                    let total = parity * amount2;

                    resolve(total);
                })
                .catch(err => reject(err));
        });

    }

    changeAmount(amount) {  // null olarak yazdıgım amount u guncelle
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;  // currenc i select secimine göre güncellicek
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}