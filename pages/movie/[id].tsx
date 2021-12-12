/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import {
  IDataMovie,
  IResponseMoviceDetail,
} from '@/common/interface/movie.interface';
import { getMovieDetails } from '@/services/movie.service';
import { useRouter } from 'next/router';
import { GENRE_TYPE } from '@/common/constant/regex';
import { convertUIRunningTime } from '@/common/ultils/common';

function MovieDetail() {
  const router = useRouter();

  const [dataMovieDetail, setDataMovieDetail] = useState<IDataMovie>();

  const getDataDetails = async (id: string) => {
    const res = await getMovieDetails(id);
    if (res?.success) {
      setDataMovieDetail(res);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      getDataDetails(router.query.id as string);
    }
  }, [router.query.id]);

  return (
    <div className="movie-detail">
      <div className="backdrop" />
      <section className="section">
        <div className="container shiftup">
          <div className="tt-details columns is-variable is-8">
            <div className="column is-one-quarter-tablet">
              <p className="cover has-text-centered">
                <img alt="img" src={dataMovieDetail?.posterUrl} />
              </p>
              <a
                className="watch button is-danger is-medium is-fullwidth"
                href={`/checkout/${dataMovieDetail?.id}`}
              >
                Mua vé ngay
              </a>
            </div>
            <div className="column main">
              <h1 className="title is-2">{dataMovieDetail?.name}</h1>
              <div className="meta">
                <span>
                  Thời lượng:{' '}
                  {convertUIRunningTime(dataMovieDetail?.runningTime as string)}
                </span>
              </div>

              <div className="intro has-text-grey-light mb-24">
                {dataMovieDetail?.description}
              </div>
              <div className="">
                <div className="">
                  {dataMovieDetail?.tags?.map((tag: string) => (
                    <>
                      <a
                        className="button is-link is-small is-rounded is-inverted is-outlined"
                        href="/genre/vien-tuong"
                      >
                        {GENRE_TYPE[`${tag}`]}
                      </a>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .meta {
            color: white;
          }
          .backdrop {
            color: white !important;
            background-image: url(/images/img-auth-2.png);
            height: 600px;
            background-size: cover;
            background-position: 50% 0;
            background-repeat: no-repeat;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              width: 100%;
              top: 0;
              bottom: 0;
              background-color: rgba(2, 13, 24, 0.75);
            }
          }
          .section {
            padding: 3rem 0.8rem;
            background-color: #06121e;
          }
        `}
      </style>
    </div>
  );
}

export default MovieDetail;
