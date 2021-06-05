import React from 'react'
const EventComponent:React.FC = () => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }
  return (
    <div>
      <input onChange={handleOnChange} />
      <div draggable onDragStart={handleDrag}>Drag me </div>
    </div>
  )
}
export default EventComponent
