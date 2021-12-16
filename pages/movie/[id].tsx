/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { IDataMovie, IDataReview } from '@/common/interface/movie.interface';
import {
  getListMoviesSimilar,
  getMovieDetails,
  getReviewByMovie,
  postReviewByMovie,
} from '@/services/movie.service';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Button, Input, Row } from 'antd';
import ModalTrailer from '@/components/Modal/ModalTrailer';
import { StarOutlined } from '@ant-design/icons';

function MovieDetail() {
  const { t } = useTranslation();
  const router = useRouter();

  const [dataMovieSimilar, setDataMovieSimilar] = useState<IDataMovie[]>([]);
  const [dataMovieDetail, setDataMovieDetail] = useState<IDataMovie>();
  const [dataReviews, setDataReviews] = useState<IDataReview[]>([]);
  const [showModalTrailer, setShowModalTrailer] = useState(false);
  const [dataTrailer, setDatatrailer] = useState('');
  const [dataUser, setDataUser] = useState();
  const [dataComment, setDataComment] = useState('');
  const [star, setStar] = useState(0);

  const getDataSimilarMovies = async (id: string) => {
    const res = (await getListMoviesSimilar(id)) as any;
    if (res?.success) {
      setDataMovieSimilar(res?.data.filter((item: any) => item?.posterUrl));
    }
  };

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

  const handleChangeComment = (e: any) => {
    setDataComment(e.target.value);
  };

  const handleCreateReview = async () => {
    const postDataReview = {
      comment: dataComment,
      stars: star,
    };
    const res = await postReviewByMovie(
      router.query.id as string,
      postDataReview
    );
    if (res?.success) {
      getDataReviewsByMovie(router.query.id as string);
      setDataComment('');
      setStar(0);
    }
  };

  useEffect(() => {
    const tempDataUser = localStorage.getItem('dataUser');
    if (tempDataUser) {
      setDataUser(JSON.parse(tempDataUser));
    }
  }, []);

  useEffect(() => {
    if (router.query.id) {
      getDataSimilarMovies(router.query.id as string);
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
              {dataMovieSimilar?.length > 0 && (
                <div className="imgs-similar">
                  <p>Phim tương tự</p>
                  <div className="content">
                    {dataMovieSimilar.slice(0, 4)?.map((movie) => (
                      <>
                        <img
                          alt="movie"
                          width="200"
                          className="img-item"
                          src={movie?.posterUrl}
                          onClick={() => {
                            setDataMovieSimilar([]);
                            router.push(`/movie/${movie?.id}`);
                          }}
                        />
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {dataReviews?.length > 0 && (
        <div className="review">
          <div className="title">Đánh giá của người xem</div>
          {dataUser && (
            <>
              <Input
                placeholder="Viết bình luận"
                onChange={handleChangeComment}
                value={dataComment}
              ></Input>
              <Row>
                <Button
                  onClick={handleCreateReview}
                  type="primary"
                  style={{ margin: '16px 0 32px' }}
                >
                  Bình luận
                </Button>
                <div style={{ margin: '15px 30px' }}>
                  <StarOutlined
                    style={{
                      color: `${star >= 1 ? 'yellow' : 'unset'}`,
                      fontSize: '30px',
                    }}
                    onClick={() => setStar(1)}
                  />
                  <StarOutlined
                    style={{
                      color: `${star >= 2 ? 'yellow' : 'unset'}`,
                      fontSize: '30px',
                    }}
                    onClick={() => setStar(2)}
                  />
                  <StarOutlined
                    style={{
                      color: `${star >= 3 ? 'yellow' : 'unset'}`,
                      fontSize: '30px',
                    }}
                    onClick={() => setStar(3)}
                  />
                  <StarOutlined
                    style={{
                      color: `${star >= 4 ? 'yellow' : 'unset'}`,
                      fontSize: '30px',
                    }}
                    onClick={() => setStar(4)}
                  />
                  <StarOutlined
                    style={{
                      color: `${star >= 5 ? 'yellow' : 'unset'}`,
                      fontSize: '30px',
                    }}
                    onClick={() => setStar(5)}
                  />
                </div>
              </Row>
            </>
          )}
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
                    <div className="user-name">
                      {review?.customer?.name}
                      <span style={{ position: 'relative', marginLeft: '8px' }}>
                        {Array.from('x'.repeat(review?.stars)).map(() => (
                          <StarOutlined
                            style={{
                              color: `yellow`,
                              fontSize: '15px',
                            }}
                          />
                        ))}
                      </span>
                    </div>
                    <div className="comment">{review?.comment}</div>
                  </div>
                </Row>
              </>
            ))}
          </div>
        </div>
      )}

      <style jsx>
        {`
          .imgs-similar {
            padding: 20px 0;
            width: 100%;
            p {
              font-size: 20px;
            }
            .content {
              display: flex;
              justify-content: space-between;
            }
          }
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
                width: 100%;
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
