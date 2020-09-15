function countDice(dice) {
    let values = [];
    let amount = 0;
    let resultat = 0;
 

    //for (let i = 0; i <= 6; i++) {
        
        //values[i] = 0;
    //}
    
    for(let current_dice of dice) {
        values[current_dice]++;
        console.log(current_dice);
        amount += current_dice;
    }

 
    
    

    let n = values.includes(3);
    let a = values.includes(2);
    let kak = (n == true && a == true);

    if (kak == true)
    { 
        resultat = amount;

    }
    
    console.log(values);
    console.log(kak);
    console.log(amount);
    console.log(resultat);   
}
 
countDice()
{
    for (let i = 0; i <= 5; i ++);
    {
    dice[i] = [Math.floor(Math.random() * 6)+1]
    }  
    
}  
//countDice([1, 1, 5, 5, 5]);