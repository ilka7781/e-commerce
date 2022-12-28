import React from 'react';
import c from './aboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={c.container}>
            <h1>Our company</h1>
            <div>
                <p>Welcome to the About Us page of our ecommerce shop, a division of Apple Inc. We are a globally recognized technology company known for our innovative products and services, including the iPhone, iPad, Mac, and Apple Watch.</p>
                <br/>
                <p>
                    At our ecommerce shop, we strive to provide our customers with the best shopping experience possible. We offer a wide range of Apple products and accessories, as well as personalized recommendations and support. Our team is dedicated to delivering exceptional customer service and helping you find the perfect product to meet your needs.
                </p>
                <br/>
                <p>
                    We are committed to sustainability and making a positive impact on the world. From the materials we use to the way we run our business, we are constantly looking for ways to reduce our environmental footprint and give back to the communities we serve.
                </p>
                <br/>
                <p>
                    Thank you for choosing our ecommerce shop and we hope you have a great shopping experience with us.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;