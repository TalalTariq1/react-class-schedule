import React from 'react'
import styled from 'styled-components'

const Navbar = ({data}) => {
  return (
    <Style>
    <div className='nav'>
        <h1>{data.metadata.title}</h1>
        <h2>{data.metadata.year}</h2>

      
    </div>
    </Style>
  )
}

const Style=styled.div`
 
 .nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    gap: 10px;
    background: #1E3A8A;
    color: white;
    
 }

 .nav h1,h2{
  font-size: 30px;

 }
    
`

export default Navbar
