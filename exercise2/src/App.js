import React, { Component } from 'react';
import ItemForSale from './ItemForSale'
class App extends Component {
  render() {
    return (
      <div className="items-for-sale">
        <ItemForSale
          seller={"jack"}
          price={"20 dollars"}
          location={"montreal"}
          description={"a hat"}
          condition={"like new"}
          pic={"https://images.unsplash.com/photo-1523480773376-9d46ea986a7d?ixlib=rb-0.3.5&s=42e394d42bddac01a82843b96e828e96&w=1000&q=80"}
          contactHandler={function () { alert("contact jack@hotmail.com for more details") } }
          purchaseHandler={function () { alert("Thank you for purchasing this hat") } }>
          
        </ItemForSale>
        <ItemForSale
          seller={"tom"}
          price={"2000 dollars"}
          location={"new york"}
          description={"a nice boat"}
          condition={"used"}
          pic={"https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c07f70f044a8f2aa0816b650b78caf79&w=1000&q=80"}
          contactHandler={function () { alert("contact tom@hotmail.com for more details") } }
          purchaseHandler={function () { alert("Thank you for purchasing this nice boat") } }>

          >
        </ItemForSale>
        
      </div>
    );
  }
}

export default App;
