import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <>
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name"></input>
            <button type="submit">Visit Store</button>
            </>
        )
    }
}

export default StorePicker;