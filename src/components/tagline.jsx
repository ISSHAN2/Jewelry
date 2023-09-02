import React from 'react';

const TaglineComponent = () => {
  return (
    <div className="tagline-container">
    <div className="tagline-section">
      <p className='tagline'>"  Guided by a Legacy of Excellence, We Invite You to Indulge in the Pinnacle of Opulence,
         Where Every Detail is a Work of Art. "</p>  
      <h2 className='lol'>Discover Our Collection</h2>
      <div className="image-grid">
      <div className="row">
      <div className="box box1">
        <h3> RINGS </h3>
        <i className="fa-solid fa-circle-chevron-right"></i>
        <img src="images/ringcol.jpg" />
      </div>
      
      <div className="box box2">
        <h3> NECKLACE </h3>
        <i className="fa-solid fa-circle-chevron-right"></i>
        <img src="images/necklacecol.jpg" />
      </div>
      
      <div className="box box3">
        <h3> EARRINGS </h3>
        <i className="fa-solid fa-circle-chevron-right"></i>
        <img src="images/earrings.jpg" />
      </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default TaglineComponent;