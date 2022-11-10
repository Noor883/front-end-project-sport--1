//alert( "Hello in your websit mondeal "
const team player =$(''#one');
const choose the stadium =$('#two');
const player level =$('#three');
const Add =$('#add-item');
const tbody =$('#tbody');

$(add-item).click(function (e) { 
    e.preventDefault();
     
    let team = one.value();
    let Choose = two.value();
    let player =three.value();
    
    if (choose==""||player==""||team==""){
        alert( "you need to enter the item values to proceed !");
       return ;
    
    }
    table.append(
         <tr>
               <td>team</td>
               <td>choose</td>
               <td>layer</td>
            </tr>
    );
       </tbody>
    </tr>
 
});