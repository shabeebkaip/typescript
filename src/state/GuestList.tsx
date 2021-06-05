import React from 'react'
import {useState } from 'react' ;
const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])
  const addGuest = () => {
    setGuests([...guests, name])
    setName('')
  }
  return (
    <div>
      <h1>Guest List</h1>
      <input value={name} onChange={(e) => setName(e.target.value) }  />
      <button onClick={addGuest}>Add</button>
      {guests.map((guest, index) => <h3 key={index}>{guest}</h3>)}
    </div>
  )
}

export default GuestList
