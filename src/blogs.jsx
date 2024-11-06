import React from 'react';
import Cards from './cards.jsx';
import Italy from './images/Italy.jpg';
import Louvre from './images/Louvre.jpg';
import TajMahal from './images/TajMahal.jpg';
import BigBenLondon from './images/BigBenLondon.jpg';
import BurjKhalifa from './images/BurjKhalifaDubai.jpg';
import ChristRedeemerBrazil from './images/ChristRedeemerBrazil.jpg';
import EiffelTower from './images/EiffelTower.jpg';
import PyramidsGiza from './images/PyramidsGiza.jpg';
import Stonehenge from './images/Stonehenge.jpg';
import SydneyOperaHouseNight from './images/SydneyOperaHouseNight.jpg';
export default function Blogs(){
    return(
        <div className="containerDiv bookings"> {/*or use class blogs */}
        <h1 className="heading">Explore the world</h1>
        <h4 className="subHeading">Some famous tourist spots : </h4>
        <div className="cardsGallery">
        <a href="www.google.https://en.wikipedia.org/wiki/Rome" target='_blank'><Cards img={Italy} description="Rome, Italy"/></a>
        <Cards img={Louvre} description="Le Louvre, France"/>
        <Cards img={TajMahal} description="Agra, India"/>
        <Cards img={BigBenLondon} description="Westminster, London"/>
        <Cards img={BurjKhalifa} description="Dubai, UAE"/>
        <Cards img={ChristRedeemerBrazil} description="Rio de Janeiro, Brazil"/>
        <Cards img={EiffelTower} description="Paris, France"/>
        <Cards img={PyramidsGiza} description="Giza Necropolis, Egypt"/>
        <Cards img={Stonehenge} description="Wiltshire, England"/>
        <Cards img={SydneyOperaHouseNight} description="Sydney, Australia"/>
        </div>
        </div>
    );
}