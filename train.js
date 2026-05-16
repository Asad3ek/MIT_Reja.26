//============M=====================I========================T================TASK=========I====
function majorityElement(arr) {
    let maxElement = 0;
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxElement) {
            maxElement = count;
            result = arr[i];
        }
    }

    return result;
}

const arr1 = [3, 5, 7, 1, 3, 9, 9, 7, 4, 7, 7]
console.log(majorityElement(arr1));


//M=====================I========================T================TASK=========H ====
/*
function getPositive(num = [1,52,-56,8,2]) {
  let array = [];
  
  for(let i = 0; i < num.length; i++) {
    let integ = num[i];
    if(integ >= 0) {
      array.push(integ)
      
    }
    
  }
  return array.join("")
}

result = getPositive();
console.log(result)


//===================================================

function getPositive2(nums = [1,52,-56,8,2]) { 
return nums.filter(num => num > 0).join("")
}


const result2 = getPositive();
console.log(result2)

*/


//============M=====================I========================T================TASK=========G====

/*
 function getHighestIndex(numbers = [20,45,22,11,101,4,9]) {
    let max = numbers[0];
    for( let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        if(current > max) {
            max = current
            maxIndex = i;
        } 
        
    }
    return maxIndex;
}



result3 = getHighestIndex()
console.log("Highes Number Index is:", result3);
*/
/* 
TASK G

Yagona parametrga ega function tuzing. Array tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

Masalan: getHighestIndex([5, 21, 12, 21, 8]) return 1
*/


//============M=====================I========================T================TASK=========E====
/*
function findDoublers(a) {
    let obj = {};
    for (let i = 0; i < a.length; i++) {
       let word = a[i];
        if (obj[word]) {
            return true
        }
        obj[word] = true;
    } 
        return false
}

result1 = findDoublers("Success_Story"); 
console.log("NATIJA1",result1);

result2 = findDoublers("abcdefghjklmnopuv"); 
console.log("NATIJA2:", result2);

*/




// TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing. Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa true yokida false natija qaytarsin.

// Masalan: findDoublers("hello") return true


//============M=====================I========================T================TASK=========E====
/*
function wordReverse(word) {
    console.log("Original Text:", word);
    console.log("=======================================")
    const reversedWord = word.split("").reverse().join("");
        return reversedWord;
    }

//Test 1
const result1 =  wordReverse ("Massachusset_Institute_of_Technology");
console.log("RESULT_1:", result1);
console.log("=======================================")

//test 2
const result2 =  wordReverse ("Mehanizatsiyalashtirilmaganligidandir");
console.log("RESULT_2:", result2);
*/
/*
TASK E

Shunday function tuzing, u bitta string argumentini qabul qilib, qabul qilingan stringni teskari ko'rinishda return qilsin.

Masalan: getReverse("hello") return "olleh"
*/


//============M=====================I========================T================TASK=========D====
/*
function contentChecker(a, b) {
    const parametr1  = a.toLowerCase().split("").sort().join("")
    const parametr2  = b.toLowerCase().split("").sort().join("")

    if(parametr1 === parametr2) {
        console.log("Harflar miqdori va turi teng")
        return true;
    }

    if(parametr1.length !== parametr2.length && parametr1 !== parametr2) {
        console.log("Ikkita paramaetr harflar miqdori teng emas")
        return false;
    }

}

const result1 = contentChecker("mitgroup", "gmtiprou");
console.log("NATIJA:", result1);

const result2 = contentChecker("porschetycane", "porscheTycane");
console.log("NATIJ2:", result2);


// TASK D

// Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi
// parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.

// Masalan: checkContent("mitgroup", "gmtiprou") return true

*/



//============M=====================I========================T================TASK=========C====
// 1- usul 
/*
const moment = require("moment");

class Market {
    constructor(name, stock) {
        this.stock = stock;
        this.name = name;
    }
//method qoldiq
    currentStock1() {
        console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
        console.log(`Current ${this.name} Stock:`);
        console.log(`Bread: ${this.stock['Bread']} pieces`);
        console.log(`CocaCola: ${this.stock['CocaCola']} units`);
        console.log(`Lagman: ${this.stock['Lagman']} Kg`);
        console.log("=======================================================");
    }
//method sotish
    sellProduct1(user, amount) {
        if(this.stock['Bread'] >= amount){
            this.stock['Bread'] -= amount;
            console.log(`${user} : Hello, Can I take ${amount} Bread please.`);
            setTimeout(() => {
                console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
                console.log(`Sold ${amount} pieces Bread`);
            }, 2000)
        } else {
            console.log(err, `Sorry! We do not have enought amount product! Current Stock: ${this.stock['Bread']} Bread`)

        }
    }
//method qabul qilish
    receiveProduct1(amount) {
        if(this.stock['CocaCola'] + amount) {
            this.stock['CocaCola'] += amount;
            setTimeout(() => {
                console.log("=======================================================");
                console.log(`Ordered CocaCola => Delivered to the Walmart stock`)
                console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
                console.log(`Recieved CocaCola: ${amount} units`);

            }, 3000)

        }

        setTimeout(() => {
        console.log("=======================================================");
        console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
        console.log(`Current ${this.name} Stock:`);
        console.log(`Bread: ${this.stock['Bread']} pieces`);
        console.log(`CocaCola: ${this.stock['CocaCola']} units`);
        console.log(`Lagman: ${this.stock['Lagman']} Kg`);

        }, 4000)
    }
}

const myMarket = new Market("Walmart", {
    Bread: 6,
    CocaCola: 5,
    Lagman: 2
});

myMarket.currentStock1();
myMarket.sellProduct1('Zubayr', 4)
myMarket.receiveProduct1(4);

*/

//2 - usul 
/*
class Shop {
    constructor(name, Bread, CocaCola, Meat){
        this.name = name;
        this.Bread = Bread;
        this.CocaCola = CocaCola;
        this.Meat = Meat;
    }

    //methodes
    currentStock() {
        console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
        console.log(`Current ${this.name} Stock:`);
        console.log(`Bread: ${this.Bread} pieces`);
        console.log(`CocaCola: ${this.CocaCola} units`);
        console.log(`Meat: ${this.Meat} Kg`);
console.log("=======================================================");

    }

    sellProduct( user, product ) {
        if(this.Bread >= product) {
            this.Bread -= product;
            console.log(`${user} : Hello, Can I take ${product} Bread please.`);
            setTimeout(() => {
                console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
                console.log(`Sold ${product} pieces Bread`);
            }, 2000)
        } else {
            console.log(err, `Sorry! We do not have enought amount product! Current Stock: ${this.Bread} Bread`)
        }

            setTimeout(() => {
                console.log("=======================================================");
            }, 2000)

    }

    receiveProduct(product) {
        if(this.CocaCola += product) {
            this.CocaCola = this.CocaCola += product;
            setTimeout(() => {
                console.log(`Ordered CocaCola => Delivered to the Walmart stock`)
                console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
                console.log(`Recieved CocaCola: ${product} units`);

            }, 3000)

        }
        setTimeout(() => {
            console.log("=======================================================");
            console.log('TIME:', moment().format('HH:mm:ss DD.MM.YYYY'));
            console.log(`Current ${this.name} Stock:`);
            console.log(`Bread: ${this.Bread} pieces`);
            console.log(`CocaCola: ${this.CocaCola} units`);
            console.log(`Meat: ${this.Meat} Kg`);

        }, 4000)

    }

}
const myShop = new Shop('Walmart', 7, 11, 9);




//call
myShop.currentStock();
myShop.sellProduct('Sunaya', 3);
myShop.receiveProduct(6);

 */



/*
TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

*/









//============M=====================I========================T================TASK=========B====
/*

function digitCounter(a) {
    let count = 0;

    for(let i = 0; i < a.length; i++) {
        if(!isNaN(a[i])){
            count++;
        }
    }
    return count;
}

 const result4 = digitCounter('23r214r7ang548s2vh7nru8rg24a5hu6d7er6b4ek');
 console.log('RESULT 4:', result4);

//TASK B - 2
function dividerNum(a) {
    let result = "";

    for(char of a) {
        if(char >= "" && char <= "9"){
            result += char;
        }
    }
    return result;
}

 const result5 = digitCounter('23r214r7ang548s2vh7nru8rg24a5hu6d7er6b4ek');
 console.log('RESULT 5:', result5);

*/

//============M=====================I========================T================TASK=========A====
// MITASK-A 
/*
function countDigit(digit, number) {
    let count = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] === digit){
            count++
        }
    }
    return count;
}
const result1 = (countDigit("7", "25327954674590459085978636983598457869426879"))
console.log("Result 1:", result1);

//function 2
function countLetter(letter, word) {
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            count++
        }
    }
    return count;
}
 const result = countLetter("a","Mehanizatsiyalashtirilmaganligidanda");
 console.log("Result 2:", result);

 function evenOrOdd(number){
    if(number % 2 === 0){
        console.log(`you inserted ${number} and it is even`);
    } else {
        console.log(`you inserted ${number} and it is odd`)
        }

    }
 evenOrOdd(7);

 const bigReturn = (number1, number2) => {
    if(number1 > number2) {
        return number1;
    } else {
        return number2;
    }
 }

 const result3 = bigReturn(2345, 2445);
 console.log("Result3:", result3);
*/

//Callback function — bu boshqa function ichiga argument sifatida beriladigan va keyinroq chaqiriladigan function

//console.log("aadi family clothing shop");
/*
const check = [
    "Good shoes improve your whole look. To make more quality your look with aadi Please go Men's clothes page >>", //men
    "Use neutral colors for a clean look. To feel more confident PLease visit aadi woman's page >>", //woman
    "Choose basic colors like black, white, and blue. Please visit Boy's page >>", // Boys
    "Wear bright and fun colors. Please visit Girl's page >>"  //Girls
]
//define
function choosingType(a, callback){
    if (typeof a !== 'string') callback("Please, insert your gender type", null)
        else if(a === "Men") setTimeout(function() {
            callback(null, check[0]);
    }, 3000)
        else if(a === "Woman") callback(null, check[1]);
        else if(a === "Boy") callback(null, check[2]);
        else if(a === "Girl") callback(null, check[3]);

}
*/

//call 
// console.log("first come first service")
// choosingType("Men", (err, data) =>{
//     if(err) console.log('ERROR:', err);
//    else {
//        console.log('aadi:',data);
//    }
// })
// console.log("first come first service 222222")

//Asncr functionlar 
//console.log("Jack ma maslahatlari")

/*
const list = [
    "Yaxshi talaba bo'ling", //0-20
    "O'zingizga investitsiya qiling", //20-30
    "To'g'ri boshliq tanlang va xato qilishdan qo'rqmang", //30-40
    "Yoshlarga Investitsiya qiling",//40-50
    "Yoshlar bilan ko'proq suhbat qiling, maslahat ulalshing",//50-60
    "Endi dam oling" //60-
]

async function maslahatBering(a) {
    if(typeof a !== "number") throw new Error("Please insert number")
        else if(a <= 20) return(list[0])
        else if(a >= 20 && a <= 30) return(list[1])
        else if(a > 30 && a <= 40) return (list[2])
        else if(a > 40 && a <= 50) return (list[3])
        else if(a > 50 && a <= 60) return (list[4])
        else {
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve(list[5]);
                }, 4000);
            })
        } 
    }

//call
// console.log("1. first colum");

// maslahatBering(55).then((data) => {
//     console.log("Jac Ma:", data);

// }).catch((err) => {
//     console.log("ERORR:", err);
// })

// console.log("3. third colum");
//async functionlar sync functionlarga ishga tushib bo'lgach ishlaydi. Va shu yo'l bn thred ni band qilmaydi.

//call => asncr & await
async function run() {
    let advice = await maslahatBering(65);
    console.log(advice);
    advice = await maslahatBering(34);
    console.log(advice);
    advice = await maslahatBering(44);
    console.log(advice);
}
//run();


//callback test
const parcha = ["Otabek Marg‘ilonning fayzli bir bog‘ida turgan Kumushning qarshisida hayajonlanib qoldi.",
                "Bu go'zallik qarshisida til kalimaga kelmas edi. Kumushning oydek yuzi, qop-qora ko'zlari va kiygan atlas ko'ylagi uni butunlay sehrlab qo'ydi.", 
                "Shu damda ikki qalb o'rtasida tushunib bo'lmas, ammo juda kuchli bir bog'liqlik paydo bo'ldi..."
]

async function asardanParcha(a) {
    return new Promise((resolve, reject) => {
    if(a < 0 && a!== 'string') { reject("ERROR: Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring!", null);
    } else if(a === 0) { 
        resolve(parcha[0]);
    } else if(a === 1) {
        resolve(parcha[1]);
    }else if(a === 2) {
        setTimeout(() => {
            resolve(parcha[2]);
        }, 4000);
        
    }
    });
}

let natija = await asardanParcha(2);
console.log("natija2:", natija);

let natija1 = await asardanParcha(0)
console.log("natija0:", natija1);

let natija2 = await asardanParcha(1)
console.log("natija1:", natija2)*/


