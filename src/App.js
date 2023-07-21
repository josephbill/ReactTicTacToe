import logo from './logo.svg';
import './App.css';
import Board from './../src/components/board/Board';
// main component / entry component 
function App() {


  // this is where you write your js functionality or components 
  // fetching data , manipulating data 

 

  return (
     // what the component should show 
     // react fragment -> container that hosts the elements rendered ou t by a component 
     <>
     <div className='App'>
         <Board title='Play My Tic Tac Toe Game' color='green'/>
     </div>
     </>
  );

}

export default App;
