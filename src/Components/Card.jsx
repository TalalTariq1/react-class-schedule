import React from 'react'
import styled from 'styled-components'

const Card = ({data,rooms,periods}) => {
  return (
    <Style>
    <div>
      <div className="card" style={{width: "18rem"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{data.day}</li>
    <li className="list-group-item">Course Code: {data.courseCode}</li>
    <li className="list-group-item"> Course Name: {data.courseName}</li>
    <li className="list-group-item">Course Instructor: {data.instructor}</li>
    <li className="list-group-item">Section: {data.section}</li>
    <li className="list-group-item">Room: {data.roomId}</li>
    <li className="list-group-item">{rooms[data.roomId].name}</li>
    <li className="list-group-item">Capacity: {rooms[data.roomId].capacity}</li>
    <li className="list-group-item">Type:{rooms[data.roomId].type}</li>
    <li className="list-group-item">Time: {periods[data.period]}</li>
  </ul>
   </div>
    </div>
    </Style>
  )
}


const Style=styled.div`

.card{
  background-color: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 8px;
color: #0F172A;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

transition: transform 0.2s ease, box-shadow 0.2s ease;

:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

}
  
`

export default Card
