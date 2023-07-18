import './styles.css'
import '../../App.css'

export default function Square({value}){

    // function without info
    // function handleClick() {
    //     alert("I am clicked ")
    // }

    //function with info
    function handleClick(value){
        alert(value)
    }

    return (
        <>
          {/* <button className='square' onClick={handleClick}> {value} </button> */}
          <button className='square' onClick={() => {
            handleClick(value)
          }}> {value} </button>
        </>
         
    )
}