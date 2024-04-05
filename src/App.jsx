import './App.css'
//import Counter from "./Counter.jsx";
//import LikeButton from "./LikeButoon.jsx";
import Lottery from './Lottery.jsx';
//import TicketNum from './TicketNum.jsx';
//import Ticket from './Ticket.jsx';
//import { sum } from './helper.js';
//import Form from './Form.jsx';

function App() {
  let winCondition= (ticket)=>{
     return ticket.every((num)=> num==ticket[0])
  }
  
  return(
  <>
  <Lottery n={3} winCondition={winCondition} />
  </>
  );
}

export default App;
