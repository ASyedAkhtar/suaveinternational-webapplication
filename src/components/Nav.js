import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <nav id='navigation' className='floatbar box popout'>
        <div>
          <ul>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Home</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Gallery</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Rules</Link></li>
            <li><Link to={process.env.REACT_APP_APPLICATIONSTATUS_URL}>Application Status</Link></li>
            <li><Link to={process.env.REACT_APP_HOWTOAPPLY_URL}>How To Apply</Link></li>
            <li><Link to={process.env.REACT_APP_ABOUTUS_URL}>About Us</Link></li>
          </ul>
        </div>
      </nav>
      <nav id='social' className='floatbar box popout'>
        <div>
          <ul>
            {/* <li><a href={{pathname: `https://www.youtube.com/channel${process.env.REACT_APP_YOUTUBE_URL}`}} target='_blank'>YouTube</a></li> */}
            <li><a href={`https://www.youtube.com/channel${process.env.REACT_APP_YOUTUBE_URL}`} target='_blank' rel='noreferrer'>YouTube</a></li>
            <li><a href={`https://www.instagram.com${process.env.REACT_APP_INSTAGRAM_URL}`} target='_blank' rel='noreferrer'>Instagram</a></li>
            <li><a href={`https://www.twitter.com${process.env.REACT_APP_TWITTER_URL}`} target='_blank' rel='noreferrer'>Twitter</a></li>
            <li><a href={`https://www.tiktok.com${process.env.REACT_APP_TIKTOK_URL}`} target='_blank' rel='noreferrer'>TikTok</a></li>
            <li><a href={`https://www.facebook.com${process.env.REACT_APP_FACEBOOK_URL}`} target='_blank' rel='noreferrer'>Facebook</a></li>
            <li><a href={`https://www.snapchat.com/add${process.env.REACT_APP_SNAPCHAT_URL}`} target='_blank' rel='noreferrer'>Snapchat</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
