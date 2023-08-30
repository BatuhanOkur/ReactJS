import React from 'react'



function Books ({image, title, description}) { 
  return ( 
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
        <p className="subtitle">
          {title}
        </p>
          <div className="content">
            {description}
            <br/>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
   );
}

export default Books;