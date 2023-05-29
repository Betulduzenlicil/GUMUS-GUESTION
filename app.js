console.log("ANSWER THESE QUESTIONS")

//*ÖRNEK:1-Sayının Pozitif veya Negatif olduğunu bulma // if else

// let num = +prompt("Enter a number please");

// if (num>0) {
//     console.log(`${num}: is pozitive`);
    
// }else if (num == 0) {
//     console.log(`${num}: zero`);
    
// }else {
//     console.log(`${num}: negative`)
// }


//*ÖRNEK:2-Sayının tek mi çift mi olduğunu bulma //if else

// let num1 = +prompt("Enter a number please")


// if (num1 % 2==0) {
//   console.log(`${num1}: Even`);
         
// }else
// {
     
//  console.log(`${num1}: Odd`)
// }


//*ÖRNEK:3-Haftanın gününü yazdırma(if else)
//
// new Date().getDay() ifadesi, JavaScript'te mevcut tarihin gününü döndüren bir işlemi ifade eder.

// new Date() ifadesi, şu anki tarihi ve saatini temsil eden bir Date nesnesi oluşturur.
// getDay() ise bu Date nesnesinin gününü döndürür. Bu yöntem 0'dan başlayarak 6'ya kadar değerler döndürür, yani Pazar'dan Cumartesi'ye kadar sırasıyla 0'dan 6'ya kadar numaralandırılmış günler.
// Bu ifadeyi kullanarak, day değişkenine şu anki tarihin gününü atayabilir ve daha sonra bu değeri kullanarak günlerle ilgili işlemler yapabilirsiniz. Örneğin, günün adını belirlemek veya belirli bir işlemi haftanın belirli günlerinde gerçekleştirmek gibi.



// let day = new Date().getDay();
// console.log(day);

// if (day==0) {
//     console.log(`${day}: Sunday`);
    
// }else if (day ==1) {
    
//     console.log(`${day}: Monday`);
// }else if (day ==2) {
    
//     console.log(`${day}: Tuesday`);
// }else if (day ==3) {
    
//     console.log(`${day}: Wednesday`);
// }else if (day ==4) {
    
//     console.log(`${day}: Thursday`);
// }else if (day ==5) {
    
//     console.log(`${day}: Friday`);
// }else if (day ==6) {
    
//     console.log(`${day}: Saturday`);
// }else{
//     console.log("Geçersiz değer")
// }



//*ÖRNEK:4-Ehliyet alabiliyor mu? // koşullar yaşın 18'den büyük olması ve araba sürmeyi bilip bilmemesi

// let age = +prompt("Enter Your Age")
// let answer = prompt('1-0')

//  if ((age>=18) && (answer == true)){
//      console.log("Ehliyet alabilirsiniz");
// }else if(age< 18 && answer ==false){
//      console.log("EHLİYET İÇİN GEREKLİ ŞARTLARI SAĞLAMIYORSUNUZ ");
// }else if(age< 18 && answer ==true){
//     console.log("EHLİYET İÇİN GEREKLİ ŞARTLARI SAĞLAMIYORSUNUZ ");
// }else{
//     console.log("wait") 
// }


//*ÖRNEK:5-Login = Kullanıcı id ve şifre kontrolü // if else

// let id = "betul"
// let pin = 2567
// let kullanıcıAdi = prompt("Enter username")
//  let sifre = +prompt("Enter pin")

// if ((kullanıcıAdi==id) && (sifre==pin)) {
//     console.log("Başarılı giriş")
// }else if ((kullanıcıAdi==id) && (sifre!=pin)) {
//     console.log("sifre yanlıs")
// }else if ((kullanıcıAdi!=id) && (sifre==pin)) {
//     console.log("kullanıcı adı yanlıs")
// }
// else{
//     console.log("Hatalı giriş");
// }


//*ÖRNEK:6-Login = Kullanıcı id ve şifre kontrolü(iç içe koşullar) // id doğru girerse passwordu istesin

// let realId = 123123;
// let realPassword = 123123;

// let id = +prompt("please enter your id")
// let password;

// if (realId==id) {
//    console.log("id is correct");
//    password = +prompt("Please enter your password");
//     if (realPassword==password) {
//         console.log("password is correct");
//         console.log("Login succesfull");
//     }else{
//         console.log("password is wrong");  } 
// }else {
//      console.log("wrong id.");
//  }



//*ÖRNEK:7-Hesap makinesi yapımı if else

// let calculate = +prompt("Press 1- to add \nPress 2- to subs \nPress 3- multi\nPress 4 to division")
// let number1 = +prompt("Please enter a number1")
// let number2 = +prompt("Please enter a number2")


// if (calculate==1) {
//     console.log(number1+number1);
// }else if (calculate==2) {
//     console.log(number1-number2);
// }else if (calculate==3) {
//     console.log(number1*number2);
// }else if (calculate==4) {
//     console.log(number1/number2);
// }else{
//     console.log("please enter your calculate correctly");
// }


//*ÖRNEK:8-Switch case ile haftanın gününü yazdırma
//?-----------------------------------------------------------------
//*ÖRNEK:9   -1'den n'ye kadar olan sayıların toplamını hesaplama

// let num = +prompt("Enter your number")
// let sum = 0;

// for (let i = 1; i<= num; i++) {
//     sum+= i;
    
//console.log(sum);
// }
// console.log(sum);

//*ÖRNEK:10    3'e tam bölünenlere fizz, 5'e tam bölünenlere buzz, yazdırma 15'e bölünene fizzbuzz


// for (let i = 1; i<=100; i++) {
//     if (i%3==0 && i%5 ==0){
//         console.log(`${i}: fizzbuzz`);
//     }else if (i%5 ==0) {
//         console.log(`${i}: buzz`)
//     }else if (i%3==0) {
//         console.log(`${i}: fizz`)
//       } else{
//         console.log(i)
//         }
// }

//*ÖRNEK:11    1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma VE KAÇ TANE YAZDIRDIĞINI HESAPLAMA
// let count =0;
// for (let i = 1000; i<= 2000; i++) {
//     if (i % 13 ==3) {
//         console.log(i); 
//         count++
//     }
    
// }
// console.log(`${count} is count`)
//?--------------------------------------------------------------
// 12-benzin istasyonu uygulaması
// 13-atm uygulaması




//*ÖRNEK:14   -Beden kitle endeksini hesaplama

// let height =+prompt("Enter your height")
// let weight =+prompt("Enter your weight")
// let index = weight/(height**2)


// if (index<=18) {
//     console.log("zayıf");
    
// }else if (index >18 && index<=26) {
//     console.log("normal");
    
// }else if(index>=26 && index <35){
//     console.log("kilolu");
// }else{
//     console.log("obez");
// }
// console.log(index);
//?-------------------------------------------------------------------------
//*ÖRNEK:15 -Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)

// let sum =0;
// let number = +prompt("Enter number")

// while(number>=0){
//     sum = sum + number;
//     number = +prompt("Enter number");
// }
// console.log(sum)


// 16-Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)
// 17-Fibonacci Dizisi oluşturma


//*örnek:18 aşağıdaki şeklin kodunu yazdırınız

//* * * * * 
//* * * * * 
//* * * * * 
//* * * * * 
//* * * * * 

//?   1.yol
// let x =""
// for (let i = 1; i < 6; i++) {
//     if (i!=1) {
//         x+="\n"
//     }
//    for (let j = 0; j < 6; j++) {
//     x += '* ';
    
//    }
    
// }
// console.log(x);

//?   2. yol
// for (let i = 1; i <= 5; i++) {// satır için

//     for (let j = 1; j <= 5; j++) {// sütun için
//        console.log("* ");
//     }

//    console.log("\n");
// }


//*örnek:19 aşağıdaki şeklin kodunu yazdırınız

//0
//00
//000
//0000 
//00000
//000000


// for (let i = 1; i <= 10; i++) {
    //     for (let j = 1; j <= i; j++) {
    //                     document.getElementById("ilk").innerHTML += (" 0 " + " 0 ");
    //     }
    //         document.getElementById("ilk").innerHTML += "<br>";
    // }
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 10; j++) {
    //                     document.getElementById("ilk").innerHTML += "0 ";
    //     }
    //         document.getElementById("ilk").innerHTML += "<br>";
    // }
    // for (let i = 1; i <= 2; i++) {
    //     for (let j = 1; j <= 30; j++) {
    //                     document.getElementById("ilk").innerHTML += "0 ";
    //     }
    //         document.getElementById("ilk").innerHTML += "<br>";
    // }

    
    //* ÖRNEK: 15 çARPIM TABLOSU OLUŞTURUNUZ
   //  for (let i = 1; i <=10; i++) {
   //    for (let j = 1; j<=10; j++) {
   //       console.log(`${i} *{j} = ${i*j}`);
         
   //    }
   //    console.log("********");
   //  }



    //*ÖRNEK: 16 Kullanıcının girdiği sayının Armstrong Sayısı olup olmadığını bulunuz
    //? 153 => 1**3 + 5**3 + 3**3 =153 bu armstrong sayısıdır
    //* 1. YOL

   //  let number = prompt("Please enter a number")
   //  let total = 0;
   //  for (let i = 0; i < number.length; i++) {
   //    total+= number[i]**3
      
   //  }
   //  if (total==number) {
   //    console.log("This is armstrong number")
      
   //  }else{
   //    console.log("This is not a armstrong number");
   //  }


   //* 2. yol


   // let number=prompt("Lütfen bir sayı giriniz");
   // let numberArray=[...number]
   // console.log(numberArray)
   // const newNumber=numberArray.reduce((sum,val)=>sum+(val**3),0)
   // if(number==newNumber){
   //  alert("Bu bir Amstrong rakamıdır")
   // }else{
   //  alert("Bu bir Amstrong rakamı değildir")
   // }

   //*ÖRNEK: 17 Verilen bir sayının birler, onlar ve yüzler basamağını yazdıran kodu yazınız

   // let number =1111153

   // let birlerBasamağı = number %10
   // console.log(birlerBasamağı)

   // let onlarBasamağı = Math.floor((number%100)/10);
   // console.log(onlarBasamağı);

   // let yüzlerBasamağı = Math.floor((number%1000)/100)
   // console.log(yüzlerBasamağı)


   // let bınlerBasamağı = Math.floor((number%10000)/1000);
   // console.log(bınlerBasamağı);

//?---------------------------------------?//
         //! ÖNEMLİ ÖNEMLİ ÖNEMLİ //!
//?----------------------------------------?//

//* ÖRNEK: 18 VERİLEN SAYININ HERBİR BASAMAĞINI YAZDIRMA

   // let num = 912375;
   // for (let i = 0; i < num.toString().length; i++) {
   //    console.log(Math.floor((num%10**(i +1))/10**i));
      
   // }


//* ÖRNEK:19 Kullanıcıdan 0- ile 100 arasında bir not isteyen ve girilen not 0- 100 den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayınız while döngüsü

//? 1. yol WHILE ile
// let number = +prompt(" Enter your note")
// while (number <0 || number>100) {
//    number = +prompt(" Enter your note")
   
// }
// console.log(number)

//? 2. yol  DO WHILE ile
// let number;
// do{
//    number = +prompt(" Enter your note") 
// }while (number <0 || number>100) {
//    console.log(number)
   
// }





  