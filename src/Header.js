import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from './images/card-coven.png'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>


                <div className="logo-div">
                    <img src={logo} alt='logo'></img>
                </div>
                {/*                                     */}
                <div className='search-bar'>
                    <input placeholder='Search'></input>
                </div>
                {/*                                     */}
                <div className='header-links'>
                    <span><Link to='/userDeck'><button className="link-button">My Deck</button></Link></span>
                    <span><Link to='/list'><button className="link-button">All Cards</button></Link></span>
                </div>
                {/*                                     */}
                <div className="logout">
                    <button className="logout-button">Logout</button>
                </div>
            </div>
        )
    }
}
