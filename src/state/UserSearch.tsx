import React from 'react'
import {useState} from 'react'

const users = [
  { name: 'Shabeeb', age:25},
  { name: 'Raani', age:21},
  { name: 'Safiya', age:49},
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState<{name:string, age:number}| undefined>()

  const findUser = () => {
    const foundUser = users.find(user =>  user.name === name)
    setResult(foundUser)
  }
  return (
    <div>
    User Search
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={findUser} >Find</button>
    <div>
    {result && result.name}
    {result && result.age}
    </div>
    </div>
  )
}
export default UserSearch
