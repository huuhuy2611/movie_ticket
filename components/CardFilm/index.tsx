import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { PlayCircleFilled } from '@ant-design/icons';
import router from 'next/router';
import { IFoundItem } from '@/common/interface/movie.interface';
import ModalTrailer from '../Modal/ModalTrailer';

interface IProps {
  content: IFoundItem;
}

function CardFilm(props: IProps) {
  const { content } = props;

  const [imageURL, setImageURL] = useState({
    src: content.posterUrl,
    errored: false,
  });

  const [showModalTrailer, setShowModalTrailer] = useState(false);
  const [urlTrailer, setUrlTrailer] = useState('');

  const handleTrailer = () => {
    setShowModalTrailer(true);
    setUrlTrailer(content?.trailerUrl);
  };

  const handleMovieDetail = (id: string) => {
    router.push(`/movie/${id}`);
  };

  const onError = (state: any) => {
    //1st error
    if (!state.errored) {
      setImageURL({
        src: '/images/test.jpg',
        errored: true,
      });
    } else if (state.errored && state.src) {
      //2nd error
      //when error on fallbacksrc - remove src
      setImageURL({
        src: '',
        errored: true,
      });
    }
  };

  //update(next img) state onMount
  useEffect(() => {
    setImageURL({
      src: content.posterUrl,
      errored: false,
    });
  }, [content.posterUrl]);

  return (
    <div className="card-film">
      {showModalTrailer && urlTrailer && (
        <ModalTrailer
          setShowModal={setShowModalTrailer}
          linkTrailer={urlTrailer}
        />
      )}
      <Card
        cover={
          <div className="card-film-img">
            {imageURL?.src && (
              <img
                alt="example"
                src={imageURL.src}
                onClick={() => handleMovieDetail(content?.id)}
                onError={onError}
              />
            )}

            <span className="card-film-img-play">
              <PlayCircleFilled onClick={handleTrailer} />
            </span>
          </div>
        }
      >
        <div>
          <div className="card-film-name content-item mb-8">
            <span>{content?.name}</span>
          </div>
          <div className="mb-8 content-item">
            <span>Thể loại: {content.tags?.join(', ')}</span>
          </div>
          <div className="mb-16 content-item">
            <span>Thời lượng: {content.runningTimeInMinutes} phút</span>
          </div>
        </div>

        <Button
          type="primary"
          danger
          onClick={() => router.push(`/checkout/${content?.id}`)}
        >
          MUA VÉ NGAY
        </Button>
      </Card>
      <style jsx>{`
        .card-film {
          width: 100%;
          text-align: center;
          color: white !important;
          .trailer {
            position: fixed;
            top: 20vh;
            left: 15vw;
            width: 70vw;
            height: 70vh;
            z-index: 10;
          }
          &-img {
            position: relative;
            width: 100%;
            height: 350px;
            overflow: hidden;
            &:hover {
              .card-film-img-play {
                color: rgb(255 255 255 / 62%);
              }
            }
            &-play {
              font-size: 40px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: transparent;
              &:hover {
                color: rgb(255 255 255 / 80%) !important;
              }
            }
          }
          &-name {
            color: #fff;
            font-size: 17px;
            font-weight: bold;
          }
          .content-item {
            color: #fff;
            text-align: left;
          }
        }
        :global(.ant-card) {
          background-color: unset;
        }

        :global(.ant-card-bordered) {
          border: unset;
        }
        :global(.ant-card-cover, .ant-card-body) {
          background-color: unset;
        }
        :global(.ant-card-body) {
          padding: 24px;
        }

        :global(.ant-btn-dangerous) {
          &:hover {
            color: #fff;
            border-color: #ff4d4f;
            background: #ff4d4f;
          }
        }

        .card-name {
          color: #fff;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default CardFilm;
