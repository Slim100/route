import React from 'react';
import {Navbar, Nav, FormControl, Form,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({filterRate,setFilterRate ,search}) => {
    const onStarClick = (nextValue) => {
        setFilterRate(nextValue);
      }
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                        src="https://1.bp.blogspot.com/-4s8t0OXkc80/W6uqTV0uR1I/AAAAAAAABpE/rQQcwTTMG9UmAPHFRxorztte0f8bg70JACK4BGAYYCw/s1600/e82b2e42-6761-4d4b-bcc0-29b23b11ccbf.png"
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    </Navbar.Brand> 
                    <Nav className="mr-auto" >
                    <Link style={{color:'#FFB400'}} to="/" >Home&nbsp;|</Link>
                    <Link style={{color:'#FFB400'}} to="/"> &nbsp;TV Show</Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" className="form-control rounded"
                    placeholder ="search for a movie..."
                    onChange={(e) =>search(e.target.value)} 
                    />
                    <div className ="stars">
                    <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={filterRate}
                    onStarClick={onStarClick}
                    emptyStarColor={"white"}
                    />
                </div>
                    </Form>
                </Navbar>
                
            </div>
        )}
export default Filter;
