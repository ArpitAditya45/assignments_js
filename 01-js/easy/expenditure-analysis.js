/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
