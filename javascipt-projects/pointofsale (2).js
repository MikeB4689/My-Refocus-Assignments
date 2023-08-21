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
  
 
function update(item_obj){
    store_inventory[item_obj.inventory_index].quantity += item_obj.quantity;
    store_inventory[item_obj.inventory_index].price_$ = item_obj.price_$;
}
function delivery (item_obj){
    const id =  item_obj.item.slice(0,3).toLowerCase();
    let remark = "good";
    if(item_obj.quantity<10){
        remark = "item stock is low";
    }
   let msg = `item id: ${id}|| ${item_obj.item} || stocks left ${item_obj.quantity} || Remarks: ${remark}`;
     return msg;
}


new_delivery.forEach(update);
 const reportSummary =  store_inventory.map(delivery);
 console.log(reportSummary);