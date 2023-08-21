
//need to other solution thank you :))

const year = 2023; 
const current_month = 10;
let b_year = null;
let b_month = null; 
b_year = 1995;
b_month = 3;
age = year - b_year;

if(b_month >= current_month){
 
    console.log(`Patient Age: ${age}`);
    console.log(`Patient Accurate Age: ${age-1}`);

}else if(b_month <= current_month) { 
    console.log(`Patient Age: ${age}`);
    console.log(`Patient's Accurate Age: ${age}`);
 }
 else{
    console.log(`N/A`);
 }