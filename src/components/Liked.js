import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { LikedSideVideos } from './LikedSideVideos';
import '../Stylesheets/liked.css';

export const Liked = ({thumbnail_main_liked, total_liked, views_liked, updates_liked, accImage_liked, accname_liked}) => {
    return (
        <div className="liked_videos_main" style={{ display:'flex', flexDirection:'row' }}>
            <div className="main_video_liked_div" style={{ width:'50%' }}>
                <img  className="main_video_liked" src={thumbnail_main_liked}></img>
                <div style={{ display:'flex', flexDirection:'row', textAlign:'center', alignItems:'center', width:'65%',paddingLeft:'35%', backgroundColor:'black', opacity:0.8, marginTop:'-7%', height:'1.5%' }}>
                    <PlayArrowIcon />
                    <div>PLAY ALL</div>
                </div>
                <div style={{ fontSize:25, marginTop:'2%' }}>Liked videos</div>
                <div style={{ display:'flex', flexDirection:'row', fontWeight:600, color:'gray', fontSize:15, marginTop:'2%', marginBottom:'2%' }}>
                    <div>{total_liked} videos</div><sup style={{ fontWeight:600, marginLeft:'1%', marginRight:'1%' }}><b>.</b></sup>
                    <div>{views_liked} views</div><sup style={{ fontWeight:600, marginLeft:'1%', marginRight:'1%' }}><b>.</b></sup>
                    <div>Updated {updates_liked}</div>
                </div>
                <div style={{ alignItems:'center', display:'flex', flexDirection:'row', backgroundColor:'rgb(71,71,70)', width:'max-content', padding:'1%', borderRadius:2, marginTop:'3%' }}>
                    <LockIcon style={{ color:'lightgray', fontSize:10 }} />
                    <div style={{ fontWeight:500, fontSize:10, color:'lightgray',marginLeft:'2%' }}>Private</div>
                </div>
                <div style={{ marginTop:'3%', alignItems:'center', color:'lightgray'}}>
                    <ShuffleIcon />
                </div>
                <div style={{ height:0.3, backgroundColor:'rgb(79,77,79)', marginTop:'2%', marginBottom:'4%' }}></div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <Avatar src={accImage_liked}/>
                    <div style={{ marginLeft:'3%' }}>{accname_liked}</div>
                </div>
            </div>
            <div className="liked_side_videos_main">
                <LikedSideVideos
                    number="1"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="2"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="3"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="4"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="5"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="6"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="7"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="8"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="9"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="10"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="11"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="12"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="13"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="14"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="15"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="16"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="17"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="18"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="19"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="20"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <LikedSideVideos
                    number="21"
                    thumbnail_liked="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    title_liked="Latest trending songs out!!"
                    channel_liked="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
            </div>
        </div>
    )
}
