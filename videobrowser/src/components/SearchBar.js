import React,{useState} from 'react'
import { Input,Button } from 'semantic-ui-react'



const SearchBar =({searchVideos}) =>{
    const [word,setWord] =useState("");
    const search =(e)=>{
        
        setWord(e.target.value)
        console.log("s",e.target.value)
     }

    const handleKeyPress = (e) => {
        
        console.log("SDS")
        if(e.key === 'Enter'){
            
          searchVideos(e,word);
        }
      }

    return (
  <form onKeyPress={handleKeyPress} onSubmit={(e)=>searchVideos(e,word)}>
     <Input  placeholder='Search...' onChange={search} />
     <Button content='Search' type="submit"  />
    
   

  </form>
)}
//onClick={()=>searchVideos(word)} 
export default SearchBar