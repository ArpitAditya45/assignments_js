/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans=[];
  for(let i=0;i<transactions.length;i++){//Find all the products name
    let {category} = transactions[i]
      if(!ans.some((element)=>element===category)){
        ans.push(category);
      }
  }
  let final_ans=[];
  for(let prod of ans){//iterating over it
    let sum=0;
    for(let i=0;i<transactions.length;i++){
      
      let {category,price}=transactions[i];
      if(category===prod){//if the product matches price is increased
        sum=sum+price;
      }

    }
    final_ans.push({category:prod,totalSpent:sum});//final_ans.push() 

  }
  return final_ans;
}

module.exports = calculateTotalSpentByCategory;
