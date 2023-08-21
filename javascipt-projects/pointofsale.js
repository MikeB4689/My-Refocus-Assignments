const store_inventory = [

    {
        item: "shampoo", 
        quantity: 1, 
        price_$: 3, 

    }, 
    {
        item: "soap", 
        quantity: 0, 
        price_$: 2, 

    }, 
    
    {
        item: "toothpaste", 
        quantity: 2, 
        price_$: 3, 

    }, 
    
];

const new_delivery = [
    {
        item: "shampoo", 
        quantity: 5, 
        price_$: 4, 
        inventory_index: 0,

    }, 
    {
        item: "soap", 
        quantity: 10, 
        price_$: 2, 
        inventory_index: 1,

    }, 
    
    {
        item:"toothpaste", 
        quantity: 10, 
        price_$: 3, 
        inventory_index: 2,

    },

]; 
  



function deliver(item_obj){
 
        store_inventory[item_obj.inventory_index].quantity += item_obj.quantity;
        store_inventory[item_obj.inventory_index].price_$ = item_obj.price_$;
        
}

 
new_delivery.forEach(deliver)
console.log("Delivered item have been added in the inventory");
console.log("new inventory summary");
console.log(store_inventory);  