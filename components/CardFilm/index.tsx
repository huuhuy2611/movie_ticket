import { Button, Card } from 'antd';
import React from 'react';
import Image from 'next/image';
import { PlayCircleFilled } from '@ant-design/icons';
import router from 'next/router';

interface IProps {
  content: {
    name: string;
    img: string;
    link: string;
    id: number;
  };
}

function CardFilm(props: IProps) {
  const { content } = props;

  const handleTrailer = () => {
    console.log(content?.link);
  };

  const handleMovieDetail = (id: number) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className="card-film">
      <Card
        hoverable
        cover={
          <div className="card-film-img">
            <Image
              alt="example"
              src={content?.img}
              width={298}
              height={440}
              onClick={() => handleMovieDetail(content?.id)}
            />
            <span className="card-film-img-play">
              <PlayCircleFilled onClick={handleTrailer} />
            </span>
          </div>
        }
      >
        <div className="mb-16 card-film-name">
          <span>{content?.name}</span>
        </div>
        <Button type="primary" danger>
          MUA VÉ NGAY
        </Button>
      </Card>
      <style jsx>{`
        .card-film {
          width: 100%;
          text-align: center;
          &-img {
            position: relative;
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
            min-height: 43px;
            color: #fff;
          }
        }
        :global(.ant-card-bordered) {
          border: unset;
        }
        :global(.ant-card-cover, .ant-card-body) {
          background-color: #0b0b0b;
        }
        :global(.ant-card-body) {
          padding: 24px 12px;
        }
        :global(.ant-btn) {
          width: 85%;
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
