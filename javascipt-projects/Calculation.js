let obj = {

    num1: 100,
    num2:50, 
    sum:150,
    difference: 500,
    product: 500,
    quotient:20
}

 function showdata(){
    console.log("=============================")
    console.log(`First   Number:  ${obj.num1}`);
     console.log(`Second Number: ${obj.num2}`);
     console.log(`The  sum:       ${obj.sum}`);
     console.log(`The difference: ${obj.difference}`);
     console.log(`The  product:  ${obj.product}`);
     console.log(`The  quotient:  ${obj.quotient}`);
     return showdata;
 }

function add (num1 , num2){
 let sum = num1 + num2;
 return sum;
 
}
function subtract (num1 , num2){
    let sub =num1 - num2;
    return sub;
    
   }
     
   function multiply (num1 , num2){
    let prod =num1 *num2;
 
    return prod;
    
   }

   function devide (num1 , num2){
    let dev =num1/num2;
    return dev;
    
   }
   
function newSetOfNumbers(num1, num2 ){
    obj.num1 =  num1
    obj.num2 =   num2
    console.log("=============================")
    console.log(`First   Number:  ${obj.num1}`)
    console.log(`First   second:  ${obj.num2}`)
    console.log(`The  Sum:        ${add(obj.num1 ,obj.num2)}`);
    console.log(`The  Difference: ${subtract(obj.num1 ,obj.num2)}`);
    console.log(`The  Product:    ${multiply(obj.num1 ,obj.num2)}`);
    console.log(`The  Quotient:   ${devide(obj.num1 ,obj.num2)}`);
   
 
}


    showdata();
  newSetOfNumbers(200, 10);
  newSetOfNumbers(500, 20);
 
 
 
 