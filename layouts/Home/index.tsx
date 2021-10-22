import React from 'react';
import Image from 'next/image';
import ListCardFilm from '@/components/ListCardFilm';
import Banner from './Components/Banner';
import ComingSoon from './Components/ComingSoon';

function HomeLayout() {
  return (
    <div className="home">
      <div>
        <Banner />
      </div>
      <div className="home-main">
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <Image
                alt="Now showing"
                src="/images/now_showing_2.png"
                width="20"
                height="20"
              />
            </span>
            Now Showing
          </h1>
          <ListCardFilm />
        </div>
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <Image
                alt="Now showing"
                src="/images/advance_sale.png"
                width="20"
                height="20"
              />
            </span>
            Advance sale
          </h1>
          <ListCardFilm />
        </div>
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <Image
                alt="Now showing"
                src="/images/coming_soon.png"
                width="20"
                height="20"
              />
            </span>
            Coming soon
          </h1>
          <ListCardFilm />
        </div>
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <Image
                alt="Now showing"
                src="/images/tag.png"
                width="20"
                height="20"
              />
            </span>
            Coming soon
          </h1>
          <ComingSoon />
        </div>
      </div>

      <style jsx>{`
        .home {
          .home-main {
            padding: 5%;
            .now-showing {
              margin-bottom: 5%;
            }
            .img-now-showing {
              padding-right: 10px;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default HomeLayout;
