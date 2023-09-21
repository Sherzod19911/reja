

// // express frime worklar orqali serverni quramiz.
// // biz odatda expresdan foydalanish uchun expresni install qilishimiz kerak


// console.log("web serverni boshlash");
// const express = require("express");
// const app = express(); // mana shu belgi expresni objectini yuboradi.app objectini 

// //express serverni qurish shartli ravishda 4 ta bosqichga bulinadi


// //-------------------1 Kirish kodi--------------------------/
// //expresga kirib kelayotgan malumotlarimiz kodlarimiz yoziladi.
// app.use((express.static("public")));


// app.use(express.json());  //bu  json kirib kelayotgan datani object holatiga ulab beradi.
// app.use(express.urlencoded({extended: true})); //forumdan biror narsani post qilsak bizni serverimizqabul qilib oladi.
// // agar bu kodni yozmasak html dan keladigan malumotlarni ignore qiladi.




// //--------------------2 sessions code ---------//




// //----------------------3 views code--------------------------//
// // expres uchun biz BSSR( BACKEND SERVER SIDE RANDOM) tanladik biz backenda view yani front end yasaymiz.
// //bu aslida traditional usul qhisoblanadi yani biz backenda html yasab clientga yuboramiz. 
// // biz bu yerda ejs dan foydalanamiz shuni uchun uni install qilamiz npm install ejs.


// app.set("views","views");
// app.set("view engine","ejs");



// //-------------------------4 routing code-----------------------//

// app.get ("/", function(req,res) {
//     res.end("<h1>Hello world</h1");

// const server = http.createServer(app);
// let PORT = 3000;
// server.Listen(port,function(){
//     console.log('The server is running successfully on port: ${PORT}');
// });
// // server muvofaqiyatli bulsa server ishga tushadi.

// // eng muhimi biz backend serverni qurdik biz bunda  node jsda expressdan foydalandik.
//  //bunday frameworklae judaym kup masalan node jsda  express bulsa, yoki metior yoki boshqalar eng mashhuri express bn nest
//  // phytonda jango , java script

//   // bularni hammasi bizga  backend qurishga yordam beradi.
//    // web server ichida front end applicationni  mantigini quurishni rejalashtirdik.
//    // bizga  malumki front end ni qurishda ikki xil usulda amalga oshiriladi.



//    //traditional usulida  bizni holatomozda ejs frame workdan yoydalanib backendni ichida front endni qurdik boshqacha nomi (BSSR)
//    //  BUGUN BIZ  EBG QIZIGI GID BN ISHLADIK  
//    //masalan git branch desak biz master branchini hosil qildik
//    //biz nima ni commit qildik ("BRR : build express web server")
//    // bu faqat  uzimizni device da mavjud 
//    // bu merin full stackni birinchi loyihasi

//    // ummuman loyihada master va dvelop branch buladi
//    //master branchda tugridan tugri ishlanmayi balki develop branchida 
//    //develop jarayoni uchun maxsus ajratilgan maxsus branch hisoblanadi.

//    // birinchi develop branchi amalga oshsa keyin master branchi murch qiinai 
//    //bizni loyihamiz pirmitive loyihada ishlash bulganligi uchun  bi masterdan foydalanamiz

//    // keyingilarda developda ishlaymiz
