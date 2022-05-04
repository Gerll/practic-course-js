const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//Closure stucture
const moneyBoxClosure = () => {
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`)
    }
    return countCoins;
};
let myMoneyBox = moneyBoxClosure();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
