
import VideoItem from "./VideItem";
import { Item } from 'semantic-ui-react'
const list=[1,2,3,4,5];
const VideoList =()=>{

    return (
        
   <Item.Group>
     { list.map(element => {
         return(<VideoItem key={element} />)   
       })
      } 
   </Item.Group  >
      
    )
   
   }
   
   export default VideoList;