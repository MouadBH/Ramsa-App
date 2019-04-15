import React from "react";

const MiniCard = (props) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <a href="page_ready_article.html" className="widget widget-hover-effect1">
                <div className="widget-simple">
                    <div className="widget-icon pull-left themed-background-fire animation-fadeIn">
                        <i className={"fa " + props.icon}></i>
                    </div>
                    <h3 className="widget-content text-right animation-pullDown">
                        <strong>{props.name}</strong><br />
                    </h3>
                </div>
            </a>
        </div>
    );
}
export default MiniCard;