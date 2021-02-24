import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <h6>&copy; All rights reserved. </h6>
                <Link to='/'style={{color:'red'}} >Go Home</Link>
            </div>
        )
    }
}
export default Footer
