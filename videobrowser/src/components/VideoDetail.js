
import { Embed,Item } from 'semantic-ui-react'
const VideoDetail =({SelectedVideo})=>{
{console.log(SelectedVideo)}
    return (
        <div>
        <Embed
        id={SelectedVideo?SelectedVideo.id.videoId:""}
   placeholder={SelectedVideo?SelectedVideo.snippet.thumbnails.default.url:""}
        source='youtube'
        className='videodetail'
      />
      <Item>
      

      <Item.Content>
        <Item.Header as='a'>{SelectedVideo?SelectedVideo.snippet.title:""}</Item.Header>
        <Item.Description>{SelectedVideo?SelectedVideo.snippet.description:""}</Item.Description>
       
      </Item.Content>
    </Item>
</div>



    )
   
   }
   
   export default VideoDetail;