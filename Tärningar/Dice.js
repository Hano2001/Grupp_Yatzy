document.addEventListener("DOMContentLoaded", function (event)
{
    function countDice() {
        let values = [];
        let amount = 0;
        //event.preventDefault()
        
    
        for (let i = 0; i <= 4; i++) 
        {   
            values[i] = (Math.floor)(Math.random() *6) +1;
            amount += values[i]


            if (document.getElementById("c1").checked)
            {
                
            }
            
            
            //return values;
        }
    event.preventDefault();
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");
    let t5 = document.getElementById("t5");
    let kasta = document.getElementById("kasta");
    let summa = document.getElementById("summa");

   

    
    
   
            
        
        t1.innerHTML = values[0];
        t2.innerHTML = values[1];
        t3.innerHTML = values[2];
        t4.innerHTML = values[3];
        t5.innerHTML = values[4];
        summa.innerHTML = "Summa: " +amount;


            //return values; 
            console.log(values);

        }

        let c1 = document.getElementById("c1");
        let c2 = document.getElementById("c2");
        let c3 = document.getElementById("c3");
        let c4 = document.getElementById("c4");
        let c5 = document.getElementById("c5");

        function saveDice1()
        {
            document.getElementById("c1").checked = true;

        }
        function saveDice2()
        {

        }
        function saveDice3()
        {

        }
        function saveDice4()
        {

        }
        function saveDice5()
        {

        }


        
        c1.addEventListener("change",saveDice1, event)
        {
            event.preventDefault();
        }

        
           
        
            
        kasta.addEventListener("click",function (event)
        {
            countDice();

         event.preventDefault();
        
        })

       



      
})