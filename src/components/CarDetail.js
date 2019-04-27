import React, { Component } from 'react'
import PropTypes from 'prop-types';
import bgImage from '../images/car.jpg';



export class CarDetail extends Component {
     
  render() {

    const{ id, Make, Year, Model } = this.props.car;

    const elem = this.props.car;

    return (
           
    <div id = {Make + id} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundImage: 'url(' +  bgImage + ')'}}>
              <h5 className="modal-title">
              <span className='year'> {Year} </span>
              <span className='car'>{Make} {Model}</span></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <i className="fas fa-times"></i>
              </button>
            </div>
              <div className="modal-body">
              <div className='row align-items-center'>
                 {Object.keys(elem).map((v, i) => <div className="col-6" key={i}><div className="car-detail"><span className="label">{v} </span><span className="detail">{this.props.car[v]}</span></div></div> )}
               </div>
              </div>
            </div>
        </div>
    </div>
   
    )
    
  }

}

CarDetail.propTypes ={
    car: PropTypes.object.isRequired,
}

export default CarDetail
