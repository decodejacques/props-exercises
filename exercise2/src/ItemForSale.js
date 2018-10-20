import React, { Component } from 'react';
import './ItemForSale.css'
class ItemForSale extends Component {
  render() {
    return (
      <div className="item-container">
        <div>
          <div> {this.props.seller} the seller </div>
          <div>{this.props.price}$</div>
          <div> location: {this.props.location} </div>
          <div> {this.props.description} </div>
          <div> condition: {this.props.condition} </div>
          <button onClick={this.props.purchaseHandler}>purchase</button>
          <button onClick={this.props.contactHandler}>contact the seller</button>
          <img src={this.props.pic}></img>
        </div>
      </div>
    );
  }
}

export default ItemForSale;
