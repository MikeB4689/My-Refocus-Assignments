let sum =  0;
let customer ={
    cust_name:"John Manggo",
    points:12300,
    cart: [
    
        {
        items:"Shampoo",
        quantity: 2,
        price_$: 3,
    },
    {
        items:"Soap",
        quantity: 2,
        price_$: 2,
    },
       
    {
        items:"Toothpaste",
        quantity: 1,
        price_$: 3,
    },
       

    ],
   
 
}



 
 
 
 
 function total(){
    console.log(`Hi ${customer.cust_name} We are happy to see you `);
        console.log(`Youre current points: ${customer.points} `);

    for(let i=0;i<customer.cart.length;i++){
        sum +=   customer.cart[i].price_$ * customer.cart[i].quantity; 
        
        console.log(`You purchase: ${customer.cart[i].quantity}x ${customer.cart[i].items}--------------$${customer.cart[i].price_$}.00`);
    }
    console.log(`Total Bill:  $${sum}.00 `);
     
 
}

function total_point(){
     
    for(let i=0; i<customer.cart.length;i++){
     customer.points += 1 * customer.cart[i].quantity;
    

    }
    console.log(`You got new  points: ${customer.points}`);
}
  
 
total();
total_point();