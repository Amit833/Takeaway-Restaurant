import React from 'react';
import { Link } from 'react-router-dom';
import sushi from '../assets/sushi.jpg';
import sushi2 from '../assets/sushi2.jpg';
import sushi3 from '../assets/sushi3.jpg';
import tempura from '../assets/tempura.jpg';
import sukiyaki from '../assets/sukiyaki.jpg';
import satsuki from '../assets/satsuki.jpg';
import zashiki from '../assets/zashiki.jpg';
export const Home = () => {
  return (
    <article>
      <section class='heroImage' style={{ backgroundImage: `url(${zashiki})` }}>
        <div class='heroContents'>
          <h1>SATSUKI</h1>
          <p>Japanese Restaurant in Chamonix,serving Sushi and Japanese food</p>
        </div>
      </section>
      <section className='restaurant_info'>
        <div className='restaurant_info_text'>
          <h2>Satsuki de Chamonix</h2>
          <p>
            Authentique et unique dans la région, voici votre Restaurant
            japonais ! Dans son cadre épuré et climatisé, où règne le calme
            ambiant, vous apprécierez les grands classiques que sont les Sushi,
            Sashimi, Tempura, Tonkatsu, Sukiyaki... proposés par le chef
            japonais Tatsuya Ishizaki, servis avec gentillesse et disponibilité
            ; si vous le souhaitez, tous nos plats peuvent être emportés.
          </p>
        </div>
      </section>
      <section
        className='take_away'
        style={{ backgroundImage: `url(${sushi2})` }}
      >
        <div className='content_wrap'>
          <h1>TAKE AWAY</h1>
          <p>You can order food online and pick up at Restaurant</p>
          <Link to='/takeawaymenu'>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </section>
      <section className='menu'>
        <div className='menu_card_container'>
          <div className='menu_card'>
            <div className='content_wrap'>
              <div className='image_wrap'>
                <img src={sushi} alt='sushi' />
              </div>
              <div className='text_container'>
                <p>
                  <strong>SUSHI</strong>
                </p>

                <p>
                  Cras mattis consectetur purus sit amet fermentum. Sed posuere
                  consectetur est at lobortis. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Sed posuere consectetur est
                  at lobortis. Maecenas faucibus mollis interdum. Nulla vitae
                  elit libero a pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className='menu_card'>
            <div className='content_wrap'>
              <div className='image_wrap'>
                <img src={sukiyaki} alt='sukiyaki' />
              </div>
              <div className='text_container'>
                <p>
                  <strong>SUKIYAKI</strong>
                </p>

                <p>
                  Cras mattis consectetur purus sit amet fermentum. Sed posuere
                  consectetur est at lobortis. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Sed posuere consectetur est
                  at lobortis. Maecenas faucibus mollis interdum. Nulla vitae
                  elit libero a pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className='menu_card'>
            <div className='content_wrap'>
              <div className='image_wrap'>
                <img src={tempura} alt='tempura' />
              </div>
              <div className='text_container'>
                <p>
                  <strong>TEMPURA</strong>
                </p>

                <p>
                  Cras mattis consectetur purus sit amet fermentum. Sed posuere
                  consectetur est at lobortis. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Sed posuere consectetur est
                  at lobortis. Maecenas faucibus mollis interdum. Nulla vitae
                  elit libero a pharetra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to='/menu'>
          <button>View Menu</button>
        </Link>
      </section>
      <section className='location'>
        <div
          className='location_img'
          style={{ backgroundImage: `url(${satsuki})` }}
        >
          <div className='content_wrap'>
            <h1>LOCATIONS</h1>
          </div>
        </div>
        <div className='location_card_container'>
          <div className='loaction_card'>
            <div className='content_wrap'>
              <h3>CHAMONIX</h3>
              <div>
                <p>Heures d'ouverture : 12:00-14:30 / 18:30-22:00</p>
                <p>Téléphone : +33 (0)4 50 53 21 99 </p>
                <p>Adresse : 288 RUE JOSEPH VALLOT, CHAMONIX</p>
              </div>
            </div>
          </div>

          <div className='loaction_card'>
            <div className='content_wrap'>
              <h3>MEGEVE</h3>
              <div>
                <p>Heures d'ouverture : 12:00-14:30 / 17:30-21:30</p>
                <p>Téléphone : +33 (0)4 50 90 50 19</p>
                <p>Addresse : ROND POINT DE LA POSTE, 74120 MEGEVE </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='image_gallery'>
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </section>
    </article>
  );
};
