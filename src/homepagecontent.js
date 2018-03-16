import React from 'react';


var Homepagecontent = () => {
  return (
  <div className="homepage-grid-container">
    
  <div className="homepage-grid-container__item item-header header-titles-container">
    <div className="header-titles-container__title">Rap Better</div>
    <div className="header-titles-container__subheader-title">Here is risen the lyricism</div>
    </div>

  <div className="homepage-grid-container__item item-tool item-tool--layout">
    <div className="grid-item--spacing">
      <div className="large-button">
        <div className="large-button__text">Rhyme</div>
      </div>
    </div>
  </div>
  <div className="homepage-grid-container__item item-tool--text item-tool-text">
    Use this tool to fuel <br/>
     your rhymes <br/>
    & <br/>
    to work your rythm 
  </div>
  <div className="homepage-grid-container__item item-tool-right item-tool--layout">
    <div className="grid-item--spacing">
      <div className="large-button--counterbalance-placeholder">
        
      </div>
    </div>
  </div>
  <div className="homepage-grid-container__item item-videos">
    {/*Video
      background-image: url('./images/test2.jpg'); */}
    <div className="video__images">
    <div className="video__images--inner-boxed-div">
      <div>
        <img className="home-page-box-image video__images--specific-photo" src="./images/dono3.jpg"/>
        <img className="home-page-box-image video__images--specific-photo" src="./images/dono2.jpg"/>
        <img className="home-page-box-image video__images--specific-photo" src="./images/dono2.jpg"/>
      </div>
      <div>
        <img className="home-page-box-image video__images--specific-photo" src="./images/dono1.jpg"/>
        <img className="home-page-box-image video__images--specific-photo" src="./images/dono4.jpg"/>
        
      </div>
      
      </div>
    </div>
  </div>
  <div className="homepage-grid-container__item item-videos--text item-videos-text">
    <p>
      Helpful Videos 
      <br/>
      &
      <br/>
      <span className="item-videos-text--course-text">COURSES</span>
      <br/>
    </p>
  </div>
  <div className="homepage-grid-container__item item-videos-right"></div>
  <div className="homepage-grid-container__item item-footer">
    <div className="grid-item--spacing item-footer__text">
      &#169; 2018 Donovon Jenson
    </div>
  </div>
  

    {/*<div className="home-page-box">
    <div>
      <img className="home-page-box-image" src="http://lorempixel.com/output/abstract-q-c-300-300-7.jpg"/>
      </div>
      <div className="home-page-box-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor lacus, congue sit amet efficitur non, 
      auctor iaculis lacus. Etiam at consequat nibh. Fusce porta, lacus a fermentum dapibus, risus sem consequat sem, 
      sed sagittis libero leo scelerisque justo. In interdum vestibulum elementum. Nunc cursus vulputate magna, sed 
      viverra sem pellentesque non.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor lacus, congue sit amet efficitur non, 
      auctor iaculis lacus. Etiam at consequat nibh. Fusce porta, lacus a fermentum dapibus, risus sem consequat sem, 
      sed sagittis libero leo scelerisque justo. In interdum vestibulum elementum. Nunc cursus vulputate magna, sed 
      viverra sem pellentesque non.</p>
      </div>
    </div>
    <div className="home-page-box">
      <img className="home-page-box-image" src="http://lorempixel.com/output/abstract-q-c-300-300-5.jpg"/>
    </div>
    <div className="home-page-box">
      <img className="home-page-box-image" src="http://lorempixel.com/output/abstract-q-c-300-300-1.jpg"/>
    </div>*/}
  </div>
  )
}


export default Homepagecontent;