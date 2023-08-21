 
const customers = {
 
    customer1:[
        8,
        12,
        11,
        11,
        18,
        24,
        5,
        10
    ],
 
    customer2:[
        10,
        11,
        11,
        13,
        19,
        14,
        
    ],
 
    customer3:[
       12,
       12,
       14,
        
    ],
 
 
};

function discount_function(percentage, amount){
    return discount_amount = amount - amount*(percentage/100);
    
}

function age_checker(age){
    if(age >= 10){
        return true; 
    }else{
        return false;
    }
}
 

function calculate(customer_group=[], discount_func={}){
    const  group_count = customer_group.length;
    var sub_total = group_count* 299;
    const all_age_10_above = customer_group.every(age_checker);

    if(group_count < 6){
     return (`Sorry, No Discount. Bill: ${sub_total.toFixed(2)}`);
    }
   
    var discount = 0;
    var grand_total = 0;
 

   
    if(all_age_10_above == true){
        discount =15;
       grand_total = discount_func(discount, sub_total.toFixed(2));
    return(`${discount}% Discount: Bill is ${grand_total.toFixed(2)}`);
        
    }else{
        discount =10;
        grand_total = discount_func(discount, sub_total.toFixed(2));
       return(`${discount}% Discount: Bill is ${grand_total.toFixed(2)}`);
         
    }
   
 
}
 

 console.log(calculate(customers.customer1,  discount_function));
 console.log(calculate(customers.customer2,  discount_function));
 console.log(calculate(customers.customer3,  discount_function));