'use strict';

 function showAd(message = 'Ad')  { //仮引数
   console.log('----------');
   console.log(`---- ${message} ----`);
   console.log('----------');
 }

 showAd('Header Ad');  //実引数
 console.log('Tom is great!');
 console.log('Bob is great!');
//  showAd('Ad');
 showAd();
 console.log('Steab is great!');
 console.log('Richard is great!');
 showAd('Footer Ad');
 
