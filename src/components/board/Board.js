import Square from "../squares/Square"

//pass in props by giving the info as html attributes 
// the attribute name should match the prop name used in the component the prop has been passed to. 
export default function Board ({title, color}) { 

    return (
        <>
        <h4 style={{
            color : color
        }}>{title}</h4>
        <div className="board-row">
           <Square value='1'/>
           <Square/>
           <Square/>
        </div>

       <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
       </div>

       <div className="board-row">
        <Square/>
        <Square/>
         <Square/>
        </div>
        </>
   
    )
}