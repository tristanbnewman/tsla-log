import './NavBar.css';
import React, {Component} from 'react';
import Sorter from '../Sorter/Sorter'

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            links: [
                'all',
                'last month',
                'last 2 weeks',
                'last week'
            ]
        }
    }
    render(){
        const navLinks = this.state.links.map((link, index)=>{
            return <Sorter
                key={index}
                title={link}
                link={link}
                filterDate={this.props.filterDate}
                getTrades={this.props.getTrades}
                />
                //this.props.filterDate(link)}
                // onClick={()=>console.log(234)}
        })
        return(
            <nav>
                {navLinks}
            </nav>
        );
    }
}

export default NavBar;