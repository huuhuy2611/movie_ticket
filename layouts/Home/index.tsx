import React, { useEffect, useState } from 'react';
import ListCardFilm from '@/components/ListCardFilm';
import Banner from './Components/Banner';
import ComingSoon from './Components/ComingSoon';
import {
  getListMoviesAvailable,
  getListMoviesUpComing,
} from '@/services/movie.service';
import { IFoundItem } from '@/common/interface/movie.interface';

function HomeLayout() {
  const [dataMoviesAvailable, setDataMoviesAvailable] = useState<IFoundItem[]>(
    []
  );

  const [dataMoviesupComing, setDataMoviesupComing] = useState<IFoundItem[]>(
    []
  );

  const getDataMovies = async () => {
    const resAvailable = await getListMoviesAvailable();
    const resUpComing = await getListMoviesUpComing();
    if (resAvailable?.foundItems) {
      setDataMoviesAvailable(resAvailable?.foundItems);
    }
    if (resUpComing?.foundItems) {
      setDataMoviesupComing(resUpComing?.foundItems);
    }
  };

  useEffect(() => {
    getDataMovies();
  }, []);

  return (
    <div className="home">
      <div>
        <Banner />
      </div>
      <div className="home-main">
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <img
                alt="Now showing"
                src="/images/now_showing_2.png"
                width="20"
                height="20"
              />
            </span>
            Đang chiếu
          </h1>
          <ListCardFilm data={dataMoviesAvailable} />
        </div>
        <div className="now-showing">
          <h1>
            <span className="img-now-showing">
              <img
                alt="Now showing"
                src="/images/coming_soon.png"
                width="20"
                height="20"
              />
            </span>
            Sắp chiếu
          </h1>
          <ListCardFilm data={dataMoviesupComing} />
        </div>
      </div>

      <style jsx>{`
        .home {
          .home-main {
            padding: 5% 12%;
            .now-showing {
              margin-bottom: 5%;
              z-index: 10;
            }
            .img-now-showing {
              padding-right: 10px;
            }
            img {
              margin-bottom: 8px;
            }
          }
          h1 {
            font-size: 25px;
          }
        }
      `}</style>
    </div>
  );
}

export default HomeLayout;
