import React, { useState,useEffect } from 'react';
import './App.css';
import Post from "./components/Posts/Post.js"
import Search from "./components/Search/Search.js"

function App() {

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);


    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${1}&_limit=${limit}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data)});
    }, [limit]);

    
function changeLimit()
{
  setLimit(limit+4);
}

  return (
    <div className="App">
      
        <Search data={data} setData={setData}/>
        <Post apiData={data} limit={changeLimit}/>
        
    </div>
  );
}

export default App;
