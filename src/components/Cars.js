import React, { Component } from 'react';
import CarInfo from './CarItem';
import PropTypes from 'prop-types';
import CarDetail from './CarDetail';



class Cars extends Component {


  render() {

    return this.props.cars.map((car)=>(
      <div className="card">
        <CarInfo key={'info' + car.id} car={car} />
        <CarDetail key={'detail' + car.id} car={car} />
      </div>
    ));
    
  }

}


// PropTypes
Cars.propTypes ={
    cars: PropTypes.array.isRequired,

}

export default Cars;
