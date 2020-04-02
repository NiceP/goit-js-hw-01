"use strict"

const credits = 23580;

let droidPrice = 3000;

let droidCount = prompt("количество дроидов которые пользователь хочет купить");

let totalPrice;

if (droidCount !== null) {
    totalPrice = droidPrice * droidCount;
  
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${droidCount} дроидов, на счету осталось ${credits - totalPrice} кредитов.'`,
      );
    }
  } else {
    console.log('Отменено пользователем!');
  }
