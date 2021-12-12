/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import {
  IDataMovie,
  IDataReview,
  IResponseMoviceDetail,
} from '@/common/interface/movie.interface';
import { getMovieDetails, getReviewByMovie } from '@/services/movie.service';
import { useRouter } from 'next/router';
import { GENRE_TYPE } from '@/common/constant/regex';
import { convertUIRunningTime } from '@/common/ultils/common';
import { useTranslation } from 'react-i18next';
import { Button, Row } from 'antd';
import ModalTrailer from '@/components/Modal/ModalTrailer';

function MovieDetail() {
  const { t } = useTranslation();
  const router = useRouter();

  const [dataMovieDetail, setDataMovieDetail] = useState<IDataMovie>();
  const [dataReviews, setDataReviews] = useState<IDataReview[]>();
  const [showModalTrailer, setShowModalTrailer] = useState(false);
  const [dataTrailer, setDatatrailer] = useState('');

  const getDataDetails = async (id: string) => {
    const res = await getMovieDetails(id);
    if (res?.success) {
      setDataMovieDetail(res);
    }
  };

  const getDataReviewsByMovie = async (id: string) => {
    const res = await getReviewByMovie(id);
    if (res?.success) {
      setDataReviews(res?.foundItems);
    }
  };

  const handleOpenTrailer = (trailer: string) => {
    setShowModalTrailer(true);
    setDatatrailer(trailer);
  };

  useEffect(() => {
    if (router.query.id) {
      getDataDetails(router.query.id as string);
      getDataReviewsByMovie(router.query.id as string);
    }
  }, [router.query.id]);

  return (
    <div className="movie-detail">
      {showModalTrailer && dataTrailer && (
        <ModalTrailer
          setShowModal={setShowModalTrailer}
          linkTrailer={dataTrailer}
        />
      )}
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
            <div className="column main" style={{ marginTop: '24px' }}>
              <h1 className="title is-2">{dataMovieDetail?.name}</h1>
              <div className="meta">
                <span>
                  Thời lượng: {dataMovieDetail?.runningTimeInMinutes as string}{' '}
                  phút
                </span>
              </div>

              <div
                className="intro has-text-grey-light mb-24"
                style={{ fontSize: '15px' }}
              >
                {dataMovieDetail?.description}
              </div>
              <div className="mb-24">
                {dataMovieDetail?.tags?.map((tag: string) => (
                  <>
                    <a
                      className="button is-link is-small is-rounded is-inverted is-outlined mr-8"
                      style={{ fontSize: '14px' }}
                    >
                      {t(tag)}
                    </a>
                  </>
                ))}
              </div>
              <div>
                <Button
                  danger
                  type="primary"
                  style={{
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() =>
                    handleOpenTrailer(dataMovieDetail?.trailerUrl as string)
                  }
                >
                  Xem Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="review">
        <div className="title">Đánh giá của người xem</div>
        <div className="content">
          {dataReviews?.map((review) => (
            <>
              <Row className="mb-16" style={{ flexWrap: 'nowrap' }}>
                <Row align="middle" justify="center">
                  <img
                    alt="user"
                    width="50"
                    height="50"
                    src="/images/user.png"
                    style={{ borderRadius: '50%' }}
                  />
                </Row>

                <div className="ml-5">
                  <div className="user-name">{review?.customer?.name}</div>
                  <div className="comment">{review?.comment}</div>
                </div>
              </Row>
            </>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .movie-detail {
            color: white;
          }
          .review {
            background: #06121e;
            padding: 2% 7%;
            .title {
              font-size: 30px;
            }
            .content {
              margin-left: 30px;
              .user-name {
                color: white;
                font-size: 20px;
                font-style: italic;
              }
              .comment {
                width: 90%;
                color: #b5b5b5;
              }
            }
          }
          .meta {
            color: white;
            font-size: 17px;
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
