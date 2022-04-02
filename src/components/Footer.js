import React from 'react';

const Footer = props => {

  // Get current year for footer copyright date
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
      <div className="wrap">
        <div className="copyright">&copy; {currentYear} 0degreesK.com</div>
      </div>
    </div>
  );

}

export default Footer;
