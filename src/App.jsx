import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Stage, Layer, Text,Rect } from 'react-konva';

function App() {
  let [drag,setDrag] = useState({
    isDragging: false,
    x: 50,
    y: 50,
    clicked : false
  })
  let [pointX,setPointX] = useState(0)
  let [pointY,setPointY] = useState(0)
  let [clicked,setClicked] = useState('false')

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  return (
    <div className="App flex flex-col">
      <div className='flex flex-col h-16'>
      <span>Konva.js works!</span>
       <span>Shape Clicked : {clicked}</span>
       <span>Shape Dragged : {drag.isDragging?'true':'false'} </span>
       <span>x-axis : {pointX}</span>
       <span>y-axis : {pointY} </span>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Rect
         x={drag.x}
         y={drag.y}
         draggable
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
          onDragStart={() => {
            setDrag({
              isDragging: true,
            })
          }}
          onDragEnd={(e) => {
            setDrag({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            })
          }}
          onDragMove={(e)=>{
            setPointX(e.target.x())
            setPointY(e.target.y())
          }}
          onMouseDown={(e)=>setClicked('true')}
          onTransform={()=>console.log(555)}
        />
        </Layer>
      </Stage>
    </div>
  )
}

export default App
