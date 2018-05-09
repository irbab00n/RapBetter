import React from 'react';
import YouTube from 'react-youtube';

const Home = (props) => {

  return (

    <div id="videos-page" className="page">

      <div className="videos-content-wrapper">

        <div className="video-player-wrapper">

          <div className="video-player-current">
            <YouTube videoId="ge0KWuwf1gA" opts={{height: '100%', width: '100%'}}/>
          </div>

          <div className="video-player-current-description">
            Description
          </div>

        </div>

        <div className="videos-list-wrapper">

          <div className="videos-list-entry">
            Entry 1
          </div>
          <div className="videos-list-entry">
            Entry 2
          </div>
          <div className="videos-list-entry">
            Entry 3
          </div>
          <div className="videos-list-entry">
            Entry 4
          </div>
          <div className="videos-list-entry">
            Entry 5
          </div>
          <div className="videos-list-entry">
            Entry 6
          </div>
          <div className="videos-list-entry">
            Entry 7
          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;