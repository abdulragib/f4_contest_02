
import "./search.css"
import React,{useState,useEffect} from 'react'

const Search = ({data,setData}) => {

    const [search, setSearch] = useState('');
    
     useEffect(()=>{
      const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });

        setData(filteredData);

     },[search]);

  return (
    <div className="search">
        <input placeholder="Search" onChange={(e)=>setSearch(e.target.value)}></input>
    </div>
  )
}

export default Search;


