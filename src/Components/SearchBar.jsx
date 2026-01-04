import React from 'react'
import styled from 'styled-components'

const SearchBar = ({ SearchData, setSearchData, Query, setQuery }) => {

    function handle_submit() {
        setQuery(SearchData);

    }
    return (
        <Style>
            <div className='container'>

                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg dropdown-toggle drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      { SearchData || "Select Your Section"}
                    </button>
                    <ul className="dropdown-menu">
                        <li >
                            <button className="btn btn-success"  onClick={()=>setSearchData("BSEE-1A")}>BSEE-1A</button>
                        </li>
                        <li  >
                           <button className="btn btn-success"  onClick={()=>setSearchData("BSCS-2A")}>BSCS-2A</button>
                            </li>
                        <li  >
                           <button className="btn btn-success"  onClick={()=>setSearchData("BSCS-2B")}>BSCS-2B</button>
                            </li>
                        <li  >
                            <button className="btn btn-success"  onClick={()=>setSearchData("BSSE-3A")}>BSSE-3A</button>
                            </li>
                        <li  >
                            <button className="btn btn-success"  onClick={()=>setSearchData("BSAI-4B")}>BSAI-4B</button>
                            </li>
                         <li  >
                            <button className="btn btn-success"  onClick={()=>setSearchData("")}>None</button>
                            </li>

                    </ul>
                </div>
                <button type="button" className="btn btn-success" onClick={handle_submit}>Select</button>
            </div>
        </Style>
    )
}

const Style = styled.div`

.container{
    width: 50%;
    margin:10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.btn{
    background-color: #1E3A8A;
color: #FFFFFF;
border: none;
}

li{
    margin:10px 0px;
}
ul{
    padding: 10px;
}

.drop{
    background: white;
    color: #0F172A;
}


    
`

export default SearchBar
