import './ExpenseItem.css'

function ExpenseItem() {
    //You Can Declare variables based of from jscript code here
    const expenseDate = new Date(2021,2,28);
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294.67
    
    //The return function can only contain jsx and one wrapping div
    return (
        <div className="expense-item">
           <div>{expenseDate.toISOString() }</div> 
           <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
           </div> 
        </div>
    )
}

export default ExpenseItem
