//Callback function — bu boshqa function ichiga argument sifatida beriladigan va keyinroq chaqiriladigan function

//console.log("aadi family clothing shop");
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

//============M=====================I========================T================TASK=========A====
// MITASK-A 
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

//============M=====================I========================T================TASK=========B====
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






