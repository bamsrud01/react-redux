//  Import libraries
import React from 'react';

//  Create VideoList component
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

//  Export component
export default VideoList;
