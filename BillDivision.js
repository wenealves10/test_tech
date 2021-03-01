function bonAppetit(bill, k, b) {
  const arrayBill = [...bill];
  const doestEat = k;
  const totalPaid = b;
  let total = 0;

  total = arrayBill.filter((item, index) => index !== doestEat)
            .reduce((prev, next) => prev + next);

  total = total / 2;

  if(total !==  totalPaid){
    console.log(totalPaid - total);
  }else{
    console.log('Bon Appetit');
  }

}

bonAppetit([3 ,10 ,2 ,9], 1, 12);
