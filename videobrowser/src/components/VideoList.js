
import VideoItem from "./VideItem";
import { Item } from 'semantic-ui-react'
const list=[1,2,3,4,5];
const VideoList =({ytList})=>{

    return (
        
   <Item.Group>
     { ytList.map(element => {
         return(<VideoItem key={element.id} ytItem={element} />)   
       })
      } 
   </Item.Group  >
      
    )
   
   }
   
   export default VideoList;