
import { Embed,Item } from 'semantic-ui-react'
const VideoDetail =({SelectedVideo})=>{

    return (
        <div>
        <Embed
        id={SelectedVideo?SelectedVideo.id.videoId:""}
   placeholder={SelectedVideo?SelectedVideo.snippet.thumbnails.high.url:""}
        source='youtube'
        className='videodetail'
      />
      <Item>
      

      <Item.Content className="mg">
        <Item.Header className="header" as='a'>{SelectedVideo?SelectedVideo.snippet.title:""}</Item.Header>
        <Item.Description  className="mg">{SelectedVideo?SelectedVideo.snippet.description:""}</Item.Description>
       
      </Item.Content>
    </Item>
</div>



    )
   
   }
   
   export default VideoDetail;