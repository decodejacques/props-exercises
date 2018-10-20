import React, { Component } from 'react';
import Post from './Post'
class App extends Component {
  render() {
    return (
      <div>
        <Post
          name={"jack"}
          pic={"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d7b1bd980752bb3ea0a259f528eae78&w=1000&q=80"}
          clickHandler={function () { alert("meow") }}
          description={"A wonderful cat"}>
        </Post>
        <Post
          name={"bob"}
          pic={"https://images.unsplash.com/photo-1534804442465-9689d85be37b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3daf4f6e24340579b83889ef21f03d80&w=1000&q=80"}
          clickHandler={function () { alert("moooooose") }}
          description={"A moose"}>
        </Post>
        <Post
          name={"tom"}
          pic={"https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70a3feb757063c582d2576868f952360&w=1000&q=80"}
          clickHandler={function () { alert("woof") }}
          description={"A dog"}>
        </Post>
      </div>
    );
  }
}

export default App;
