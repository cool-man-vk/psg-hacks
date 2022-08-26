import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
          <div className="top-foot">
            <div>
                <h5 style={{"color": "white"}}>Quick links</h5>
              <ul className="foot-lists">
                  <li><a href="/">Home</a></li> 
                  <li><a href="/">Story Generator</a></li> 
                  <li><a href="/">Paint to Image</a></li>
                  <li><a href="/">EMnist classify</a></li>
              </ul>
            </div>
            <div style={{'justify-content': 'center','display':'block','padding':'8px'}}>
                    <h5 style={{ 'color': 'white' }}>Get to us on</h5>
                    <ul class="social" style={{ 'list-style': 'none', 'display': 'flex', 'padding': '20px' }}>
                    <a href="/">
                        <li><i class="fa fa-instagram"></i></li>
                    </a>
                    <a href="/">
                        <li><i class="fa fa-snapchat"></i></li>
                    </a>
                    <a href="/">
                        <li><i class="fa fa-twitter"></i></li>
                    </a>
                </ul>
            </div>
          </div>
            <h6 style={{ 'color': 'white', 'text-align': 'center' }}>Copyrights©2021.All Rights Reserved</h6>
      </div>   
    );

}

export default Footer;