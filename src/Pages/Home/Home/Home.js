import React from 'react';
import useBooks from '../../../Hooks/useBooks';
import Books from '../Books/Books';
import HeroSection from '../HeroSection/HeroSection';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const [books, setBooks] = useBooks()
    return (
        <div>
           <HeroSection/>
           <Books></Books>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;