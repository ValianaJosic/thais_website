import React from 'react';
import Thais from '../../../assets/images/thais.jpg';
import '../Profile/Profile.css'
import Learnbtn from './Learn-btn/learn-btn';

function Profile() {

    return (
        <div className="profile-wrapper container">
            <div className="profile">
            </div>
            <div className="about">
                <div className="contact-profile column">Thais Reyes
        <br></br>
                    Real Estate Advisor
        <br></br>
                </div>
                Thais Reyes is an experienced Real Estate advisor, a Venezuelan native, who moved to Miami in 1995, captivated by the beauty of Miami, from its pristine beaches, excellent year round weather, cultural diversity, lifestyle, and ever-growing industries. Thais is adamant about the advantages of owning property in South Florida.
            <br></br>
                Thais has a passion for the real estate profession, dedication, attention to detail, strong negotiation skills, efficient real estate transactions process and has successfully closed commercial leases as well as residential real estate transactions.<br></br>
                <br></br>
                <Learnbtn />
            </div>
            <div className="img">
                <img src={Thais} alt="thais" className="thais" />
            </div>
        </div>
    )
};


export default Profile;