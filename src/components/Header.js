import React, { Component } from 'react';

class Header extends Component {
 render() {
   var hdStyle = {
     backgroundColor: '#ff0'
   }
   return (
     <header style={hdStyle}>
       This is a header!
     </header>
   )
 }
}

export default Header;