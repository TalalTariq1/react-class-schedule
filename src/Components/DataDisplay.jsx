import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card';

const DataDisplay = ({Query,Data}) => {
    const [Matched, setMatched] = useState([]);


    useEffect(() => {
      let temp=[];
  let schedule=Data.schedule;
  for(let day in schedule){
    const day_arr=schedule[day];
    for(let i=0;i<day_arr.length;i++){
        const day_obj=day_arr[i];
        if(day_obj.section.toLowerCase()==Query.toLowerCase()){
            temp.push({...day_obj,day});

        }
    }
  }

  setMatched(temp);
    }, [Query,Data])
    

  

  return (
    <Style>
    <div className='content'>
        {Matched.length===0? (<h1>Search Your Section</h1>):(
        Matched.map((element,idx)=>(
            <Card key={idx} data={element} rooms={Data.rooms} periods={Data.periods}/>
        )))}
        
        
      
    </div>
    </Style>
  )
}

const Style=styled.div`


.content{
    width: 98%;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    padding: 10px;
}
    
`

export default DataDisplay
