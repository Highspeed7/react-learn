import React from 'react';

const cockpit = (props) => {
    let style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    if(props.showPersons) {
        style.backgroundColor = 'red';
    }

    return (
        <div>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
      );
}

export default cockpit;