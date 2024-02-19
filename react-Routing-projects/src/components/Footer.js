import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faSlack, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    You can subscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email"
                            name='email'
                            placeholder='Your Email'
                            className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>
            <div className='footer-links'>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'> How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponserships</Link>
                    </div>

                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>Socail Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            TRVL <FontAwesomeIcon icon={faSlack}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL  &copy;  2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>

                        </Link>
                        <Link className="social-icon-link Instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>

                        </Link>
                        <Link className="social-icon-link youtube"
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>

                        </Link>
                        <Link className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>

                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
