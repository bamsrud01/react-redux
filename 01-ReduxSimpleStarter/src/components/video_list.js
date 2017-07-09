//  Import libraries
import React from 'react';

//  Import components
import VideoListItem from './video_list_item';

//  Create VideoList component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

//  Export component
export default VideoList;
