import React from 'react';
import './Sorter.css'

const Sorter = (props) =>{
    return(
        <div className="sorter" onClick={()=>{props.filterDate(props.link,()=>props.getTrades())}}>
            {props.title}
        </div>
    )
}

export default Sorter