import React, { useState } from 'react'
function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value);
    }
    return (
        <>
            <div className='color-picker-container'>
                <h1>Color Picker</h1>
                <div className='color-display' style={{ backgroundColor: color }}>
                    <h2>Selected Color: {color}</h2>
                </div>
                <label>Choose a color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </>
    )
}

export default ColorPicker