import React, { Component } from 'react';
import './Post.css'
class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div onClick={this.props.clickHandler}>
          <div>From {this.props.name}</div>
          <div>{this.props.description}</div>
          <img src={this.props.pic}></img>
        </div>
      </div>
    );
  }
}

export default Post;
