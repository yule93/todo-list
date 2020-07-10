import React from 'react';
import './colorPalette.css';

const Color = ({color, active, onClick}) => {
  return (
      <div className = {`color $ {active && 'active'}`} style = {{background: color}} onClick = {onClick}>

      </div>
  );
};

const colorPalette = ({colors, selected, onSelect}) => {

}
