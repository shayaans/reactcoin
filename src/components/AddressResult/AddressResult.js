import React, { Component }  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

class AddressResult extends Component {
    render() {
        return (
            <div className="AddressResult">
                <h1>Hello I exist!</h1>
            </div>
        );
    }
}

export default AddressResult;