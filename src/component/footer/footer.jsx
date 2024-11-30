import React from 'react';
import './footer.css';

function Footer() {
    const footerLinks = [
        'FAQ',
        'Help Centre',
        'Account',
        'Media Centre',
        'Investor Relations',
        'Jobs',
        'Ways to Watch',
        'Terms of Use',
        'Privacy',
        'Cookie Preferences',
        'Corporate Information',
        'Contact Us',
        'Speed Test',
        'Legal Notices',
        'Only on Netflix',
    ];

    return (
        <footer className="footer-container">
            <div className="footer-center">
                {footerLinks.map((link, index) => (
                    <a href="#" key={index} className="footer-link">
                        {link}
                    </a>
                ))}
            </div>
            <div className="footer-left">
                <select className="language-selector">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
                <div className="footer-region">Netflix India</div>
            </div>
        </footer>
    );
}

export default Footer;
