import {useEffect, useState} from 'react'
import SideBar from "./SideBar.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
function App() {
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);
const [showModal,setShowModal]=useState(false);
  useEffect(()=>{
    async function FetchAPIData() {
      const NASA_API_KEY=import.meta.env.VITE_NASA_API_KEY;
      const url=`https://api.nasa.gov/planetary/apod?api_key=`+`${NASA_API_KEY}`;
      const today=(new Date()).toDateString();
      const localKey=`NASA-${today}`;
      if(localStorage.getItem(localKey))
      {
        const apiData=JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('fetched from local storage');
        return
      }
      localStorage.clear();
      try{
        const res=await fetch(url);
        const apiData=await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched from api');
      }
      catch(err)
      {
        console.log(err);
      }
    }
    FetchAPIData();
   

  },[])

function handleToggleModal(){
  setShowModal(!showModal);
}
  return (
    <>
    {data?(<Content data={data}/>):(<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
    {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal}/>)}
    {data && (<Footer data={data} handleToggleModal={handleToggleModal}/> )}
    </>
  );
}

export default App
