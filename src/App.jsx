import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timetable from "./Timetable.json"
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import DataDisplay from './Components/DataDisplay'

function App() {
  console.log(Timetable);
  const [SearchData, setSearchData] = useState("");
  const [Query, setQuery] = useState("");

  return (
    <>
    <Navbar data={Timetable}/>
    <SearchBar SearchData={SearchData}  setSearchData={setSearchData} Query={Query} setQuery={setQuery}/>
    <DataDisplay Query={Query}  Data={Timetable}/>
      
    </>
  )
}

export default App
