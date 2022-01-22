 import './ExpenseItem.css';
 
 function ExpenseItem(){
     return (
         <div className='expense-item'>
            <div>2022 01 14 Fri</div>
            <div className='expense-item__description'>
                <h2>Car insurance</h2>
                <div className='expense-item__price'>$100.00</div>
            </div>
         </div> 
     )
 }

 export default ExpenseItem;