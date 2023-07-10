import './ExpenseItem.css';
//ExpenseDate and ExpenseDetails in ExpenseItem function
function ExpenseItem(props) {
    const month=props.date.toLocaleString('en-US',{ month : 'long'});
    const day=props.date.toLocaleString('en-US',{ day : '2-digit'});
    const year=props.date.getFullYear();
    const title=props.title;
    const amount=props.amount;
    const loc=props.loc;
    return (
    <div className="expense-item">
    <div>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>
    </div>
    
    <div  className="expense-item__description">
    <h2>{title}</h2>
    <h2>{loc}</h2>
    <div className="expense-item__price">{amount}</div>
    </div>
    </div>);


}
export default ExpenseItem;