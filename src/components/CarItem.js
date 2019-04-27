import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class CarItem extends Component {
     
  render() {
    
    const{ Year , Make,  Model, id  } = this.props.car;

    return (
    
        <div className="card-header" id={Model + id} data-toggle="modal" data-target={'#' + Make + id} >
           <span className="year"> { Year } </span> { Make } { Model } 
        </div>   

    )
    
  }

}


CarItem.propTypes ={
    car: PropTypes.object.isRequired,
   
  
}


export default CarItem
