import React, { useState } from 'react';


const Boxes = (props) => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        boxes.push(color);
        setBoxes([...boxes])
        e.target.reset();
    }

    const boxStyling = (bgcolor) => {
        let styledBox = {
            width: "150px",
            height: "150px",
            backgroundColor: bgcolor
        }
        return styledBox;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter a Color </label>
                    <input type="text" onChange={handleColor} />
                </div>
                <button>Add Color</button>
            </form>
            <div id="allBoxes">
                {
                    boxes.map((item, i) => 
                        <div key={i} style={boxStyling(item)}></div>)
                }
            </div>
        </div>
    )
}
export default Boxes;