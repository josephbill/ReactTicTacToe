import { useState } from "react"
import Square from "../squares/Square"

//pass in props by giving the info as html attributes 
// the attribute name should match the prop name used in the component the prop has been passed to. 
export default function Board ({title, color}) { 

    // create a state which will tag the 9 squares as array items thus giving index positions 
    // empty squares will be tagged as null 
    // clicked squares will either be x or o

    const [squares, setSquares] = useState(Array(9).fill(null))
    // when you need your child to communicate back to the parent we can pass down a function as a prop to the child 
    // use the return of the function to update our state 

    // define a state to keep track of the player 
    const [isNext, setIsNext] = useState(true)

    


    // 1. this function should create a copy of our squares arrays. 
    // how do we create copies of arrays - reassignment , in build methods. 
    //2. this method then utilizes the copy to add the first value i.e. x to the first square 
    // 3. if the value is added we then need to inform react that our component has an update , do this by updating the state value 
    function handleClick (i) {

        // returning early to stop overwriting 
        // this checks for if a click event has happened.
        if (squares[i] || calculateWinner(squares)){
            alert("We have winner!")
             return;
        }
        // copy 
        const nextSquare = squares.slice();

        // switching players 
        if(isNext) {
            //set value according to player
            nextSquare[i] = "X"
        } else {
            nextSquare[i] = "O"
        }
        //update our component by updating the state. 
        setSquares(nextSquare)
        setIsNext(!isNext)  //switching the value 

    }


    // function to calculate the winner 

    function calculateWinner(squares) {
        // winner list 
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];

          // pseudocode for getting  a winner 
        //   1. Function to receive array , then using that array we need to match to the array elements which 
        //   have possible winners
        for(let i = 0; i < lines.length; i++) {
            //destructing in JS , 
            const [a,b,c] = lines[i]
            // matching the value in the square with the index position 
            if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
                alert("The winner is")
                alert(squares[a])
                return squares[a]
            }
            return null;
            
        }
    }

    

  
    return (
        <>
        <h4 style={{
            color : color
        }}>{title}</h4>

        <div className="board-row">
           <Square value={squares[0]}  onSquareClick={() => handleClick(0) } />
           <Square value={squares[1]} onSquareClick={() => handleClick(1) } />
           <Square value={squares[2]} onSquareClick={() => handleClick(2) } />
        </div>

       <div className="board-row">
       <Square value={squares[3]} onSquareClick={() => handleClick(3) } />
       <Square value={squares[4]} onSquareClick={() => handleClick(4) } />
       <Square value={squares[5]} onSquareClick={() => handleClick(5) }/>
       </div>

       <div className="board-row">
       <Square value={squares[6]} onSquareClick={() => handleClick(6) } />
       <Square value={squares[7]} onSquareClick={() => handleClick(7) } />
       <Square value={squares[8]} onSquareClick={() => handleClick(8) } />

        </div>
        </>
   
    )
}