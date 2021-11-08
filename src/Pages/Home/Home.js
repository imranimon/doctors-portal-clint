import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import ClintReview from './ClintReview/ClintReview';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactUs from './ContactUs/ContactUs';
import './Home.css'
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ContactInfo></ContactInfo>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
            <ClintReview></ClintReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;