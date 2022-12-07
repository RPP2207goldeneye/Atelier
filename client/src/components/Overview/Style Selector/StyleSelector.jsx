import React, { useState, useEffect } from 'react';
import Style from './Style.jsx'

const StyleSelector = (props) => {
  let currentStyles = props.styles
  let mapStyles;

  if (currentStyles !== undefined || currentStyles.length === 0) {
    mapStyles = currentStyles.map(style => <Style key={style.style_id} style={style} />)
  }

  return (
    <div className="styles">
      <h4>Overview - Style Selector</h4>
      {mapStyles}
    </div>
  )
}

export default StyleSelector;