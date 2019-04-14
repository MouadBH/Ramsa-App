import React from "react";

const Footer = () => {
    return(
        <footer className="clearfix">
            <div className="pull-right">
                        Crafted with <i className="fa fa-heart text-danger"></i> by <a href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
            </div>
            <div className="pull-left">
                <span id="year-copy"></span> &copy; <a href="http://goo.gl/TDOSuC" target="_blank">ProUI</a>
            </div>
        </footer>
    );
}
export default Footer;