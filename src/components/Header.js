import React, { Component } from 'react';

class Header extends Component {
 render() {
   var hdStyle = {
     bg: {
      width: '100%',
      height: '40px',
      backgroundColor: '#748fab',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: '0'
     },
     logo: {
       margin: '0',
       color: '#fff',
       fontSize: '20px'
     }
   }
   return (
     <header style={hdStyle.bg}>
       <h1 style={hdStyle.logo}>早餐新闻</h1>
     </header>
   )
 }
}

export default Header;