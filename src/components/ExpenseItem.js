import './ExpenseItem.css';
function ExpenseItem(props){
  // const expensedate= new Date(2021,2,21);
  // const expensetitle='Car Insurance';
  // const expenseAmount=200;
  // const LocationOfExpenditure ="downPrice";
  const LocationOfExpenditure = props.location || 'Unknown Location';
    return (
        <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>Location: {LocationOfExpenditure}</div>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      </div>


    );
}
export default ExpenseItem