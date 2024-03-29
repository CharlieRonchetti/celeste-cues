import React from 'react'
import { Link } from 'react-router-dom'
import city from '../img/city.png'

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="content">Click to view our content page</Link>
      <div className='grid grid-cols-3 gap4 place-items-center'>
        <div><img className="max-w-md lg:rounded-md" src={city} alt="Forsaken City"/></div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  )
}

export default Home