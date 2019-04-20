import React from "react";
import {Link} from 'react-router';

const MiniCard = (props) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <Link to={'/' + props.name.toLowerCase()} className="widget widget-hover-effect1">
                <div className="widget-simple">
                    <div className="widget-icon pull-left themed-background-fire animation-fadeIn">
                        <i className={"fa " + props.icon}></i>
                    </div>
                    <h3 className="widget-content text-right animation-pullDown">
                        <strong>{props.name}</strong><br />
                    </h3>
                </div>
            </Link>
        </div>
    );
}
export default MiniCard;