import React from "react";

const Preloader = () => {
    return(
        <div className="preloader themed-background">
                <h1 className="push-top-bottom text-light text-center"><strong>Pro</strong>UI</h1>
                <div className="inner">
                    <h3 className="text-light visible-lt-ie9 visible-lt-ie10"><strong>Loading..</strong></h3>
                    <div className="preloader-spinner hidden-lt-ie9 hidden-lt-ie10"></div>
                </div>
            </div>
    );
}
export default Preloader;