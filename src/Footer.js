import React from 'react';
import './footer.css';

class Footer extends React.Component {

    render() {
        return (
                <div className="footer">
                    <div className="footer__facebook">
                        Find us on <a className="footer__link" href="https://www.facebook.com/qsoearth/" target="_blank">Facebook</a>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:1ZCYsLDNK5G2MLQVj5mzEh&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style={{ border:"none", overflow:"hidden" }} allowtransparency="true"></iframe>
                    </div>
                </div>
        );
    }
}

export default Footer;
