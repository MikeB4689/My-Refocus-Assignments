const OnlineStore = {
    company: "Zara",
    address: "Manhattan Avenue, New York",
    code: "NY656",
    account: [
        {
            first_name: "Michael Dean",
            surname: "Belen",
            age: "34",
            b_date: "04.06.1989",
            user_id: "Mike1245",
            password: "miko1245",
            Address : "015 lot 10 San Pablo Tarlac City"
        },
        {
            first_name: "Tere",
            surname: "Belen",
            age: "34",
            b_date: "04.06.1989",
            user_id: "ter1141",
            password: "tere1234",
            Address : "015 lot 10 San Pablo Tarlac City"
        }
    
    ],
}

const stocks = [
    {
        item_id: "BJ2455",
        item: "Blue Jeans",
        category: "Trouser",
        Price: 50,
        inventory_stocks: 9,

    },
    {
        item_id: "SK5532",
        item: "Skinny Jeans",
        category: "Trouser",
        Price: 20,
        inventory_stocks: 8,

    },
    {
        item_id: "PL335511",
        item: "Polo Ralph",
        category: "Polo",
        Price: 50,
        inventory_stocks: 5,

    }

];

const new_stocks = [
    {
        item: "Blue Jeans",
        category: "Trouser",
        Price: 30,
        inventory_stocks: 50,
        index_id: 0,

    },
    {
        item: "Skinny Jeans",
        category: "Trouser",
        Price: 50,
        inventory_stocks: 50,
        index_id: 1,
    },
    {
        item: "Polo",
        category: "Trouser",
        Price: 25,
        inventory_stocks: 50,
        index_id: 2,
    },



];


var islogin =false; 
var userID = null;
 
function AccountUser(){
     
    const additem = [];
const loginUser = (username , password) =>{
   OnlineStore.account.forEach((element,index)=>{
    if(element.user_id == username && element.password == password){
        islogin = true; 
        userID = index; 
        console.log(`${element.first_name}, ${element.surname} You logged in!`)
        stocks.forEach(ItemtoChoose)
    }

   });
   if(!islogin){
    console.log(`Need to login`)
   }
}

const  ItemtoChoose =(item)=>{

    if(!islogin){

        console.log(`Please log In!`)
    }else{
        console.log(`==============Welcome======================`);
          console.log(` Category ${item.category}`);
         console.log(`========================================`)
         console.log(`Item_ID: ${item.item_id}`)
         console.log(`Item : ${item.item}`)
         console.log(`Price:$${item.Price}`)
         console.log(`Stocks Left: ${item.inventory_stocks}`);
         console.log(`========================================`)
}  

}



const addToCart = (id, qty) =>{ 
  if(!islogin){
    console.log(`Need to login`);
 }
 
    stocks.forEach(element=>{
       if(element.item_id == id){
        if(element.inventory_stocks < qty){
            console.log(`Not enough stocks! for ${element.item} Stock: ${element.inventory_stocks}`);
            
        }else{
            const idx = additem.findIndex((value) =>  value.Item === element.item);
            if(idx <= -1){
                console.log(`${element.item} ${qty}x has been added to your cart`);
                 element.inventory_stocks -= qty;
            return additem.push({
                Item : element.item,
                Price: element.Price,
                Quantity: qty
            }); 
            }else{
            element.inventory_stocks -= qty;
            additem[idx].Quantity += qty;
            console.log (`${additem[idx].Item} ${qty}x has been added to your cart`);
            }
            
        }   

    }
 
    });   
}

 
const checkOut = () =>{
    if(!islogin){
        console.log(`Please Login`);
    }
    let total = 0; 
   console.log(`You have ${additem.length} items to your cart`)
   
   additem.forEach(element=>{
        let qty_price =  element.Quantity*element.Price;
        total += qty_price;
         console.log(`${element.Item.slice(0, 3).toUpperCase()} ====== QTY ${element.Quantity}X======== Price: $${qty_price}`); 

   })
 
  console.log(`Grand Total : ================== $${total}`)
  
} 

const paymentCheckout = (payment)=>{
    if (!islogin){
        console.log(`You need to loggin`);
    }else{
            if(!payment){
                console.log(`thank you for shopping ${OnlineStore.account[userID].first_name}`);
                 additem.forEach(element => {
                    let id = stocks.findIndex(value=> value.item === element.Item);
                     stocks[id].inventory_stocks += element.Quantity;
                 })
                stocks.forEach(ItemtoChoose)
                    
            }else{
                console.log(`======================${OnlineStore.company}=====================`)
                console.log(``)
                console.log(`Thank you for Shopping @ ${OnlineStore.company} ${OnlineStore.address}, ${OnlineStore.code}`); 
                console.log(``)
                console.log(`Name:              ${OnlineStore.account[userID].first_name.toLocaleUpperCase()} ,${OnlineStore.account[userID].surname.toLocaleUpperCase()}`)
                console.log(`Delivery Address : ${OnlineStore.account[userID].Address.toLocaleUpperCase()}`)
                console.log(``)
                checkOut();
                console.log(``)
                console.log(`======================${OnlineStore.company}=====================`)
            }
    }

}
return{
    loginUser,
    addToCart,
    checkOut,
    paymentCheckout
}
 
}

    function admin(callback, data){
        callback(data)
    }

const check_status = () => {
    stocks.forEach(element => {
        let remarks;
        if (element.inventory_stocks < 10) {
            remarks = `Low Inventory`;

        } else {
            remarks = `Good Invetory`;
        }
        console.log(`Items: ${element.item} || Stocks ${element.inventory_stocks}|| Price ${element.Price}|| Remarks: ${remarks} `);


    });
    console.log(`=================================================`);
}

const Add_inventory =()=>{
    new_stocks.forEach(udpate_inventory)
    console.log(`Inventory has been updated`)
    check_status();
}

const udpate_inventory = (item_obj) =>{
 
   if(stocks[item_obj.index_id].inventory_stocks < 10){ 
stocks[item_obj.index_id].inventory_stocks += item_obj.inventory_stocks;
stocks[item_obj.index_id].Price = item_obj.Price;
 
}

}
const add_user =(info)=>{
  OnlineStore.account.push(info);
  console.log(`${info.first_name}, ${info.surname} has been added!`)
}
 
const  remove_user =(id)=>{
    islogin = false;
    userID = null
    console.log(`${OnlineStore.account[id].first_name} Has been remove`)
}
 
 
 const check = AccountUser();
 check.loginUser("Mike1245","miko1245");
 check.addToCart("BJ2455",5)
 check.addToCart("SK5532",8)
 check.addToCart("PL335511",5)
 check.checkOut();
 check.paymentCheckout(true)

 admin(check_status);
 admin(Add_inventory)
 admin(add_user,({
    first_name: "Elija Dean",
    surname: "Belen",
    age: "3",
    b_date: "04.22.2022",
    user_id: "elkkka",
    password: "mikoeega1245",
    Address : "015 lot 10 San Pablo Tarlac City"
 }))

 admin(remove_user,(2))
 