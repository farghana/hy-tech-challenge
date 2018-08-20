import React from 'react'

const About = () => {

    return (
      <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Product 1</h4>
          </div>
          <div className="card-body">
            <p>
              <img src="https://beaus.ca/wp-content/uploads/2018/07/kissmeyer-carousel-960x1080.jpg" className="img-fluid" />
              </p>
            <button type="button" className="btn btn-lg btn-block btn-primary">Show Details</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
        <div className="card-header">
            <h4 className="my-0 font-weight-normal">Product 2</h4>
          </div>
          <div className="card-body">
            <p>
              <img src="https://beaus.ca/wp-content/uploads/2018/07/kissmeyer-carousel-960x1080.jpg" className="img-fluid" />
              </p>
            <button type="button" className="btn btn-lg btn-block btn-primary">Show Details</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
        <div className="card-header">
            <h4 className="my-0 font-weight-normal">Product 3</h4>
          </div>
          <div className="card-body">
            <p>
              <img src="https://beaus.ca/wp-content/uploads/2018/07/kissmeyer-carousel-960x1080.jpg" className="img-fluid" />
              </p>
            <button type="button" className="btn btn-lg btn-block btn-primary">Show Details</button>
          </div>
        </div>
      </div>
      </div>
    )
  }

export default About