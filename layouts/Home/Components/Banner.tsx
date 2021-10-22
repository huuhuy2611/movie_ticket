/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { PlayCircleOutlined } from '@ant-design/icons';

function Banner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="custom-carousel">
      <Slider {...settings}>
        <div className="test" style={{ width: '100%', height: '20%' }}>
          <Image
            alt="banner"
            src="/images/banner_example.jpg"
            width="1920"
            height="650"
            layout="responsive"
          />
          <div className="play">
            <PlayCircleOutlined style={{ fontSize: '70px' }} />
          </div>
        </div>
        <div style={{ width: '100%', height: '20%' }}>
          <Image
            alt="banner"
            src="/images/banner_example.jpg"
            width="1920"
            height="650"
            layout="responsive"
          />
          <div className="play">
            <PlayCircleOutlined style={{ fontSize: '70px' }} />
          </div>
        </div>
        <div style={{ width: '100%', height: '20%' }}>
          <Image
            alt="banner"
            src="/images/banner_example.jpg"
            width="1920"
            height="650"
            layout="responsive"
          />
          <div className="play">
            <PlayCircleOutlined style={{ fontSize: '70px' }} />
          </div>
        </div>
        <div style={{ width: '100%', height: '20%' }}>
          <Image
            alt="banner"
            src="/images/banner_example.jpg"
            width="1920"
            height="650"
            layout="responsive"
          />
          <div className="play">
            <PlayCircleOutlined style={{ fontSize: '70px' }} />
          </div>
        </div>
      </Slider>
      <style jsx>{`
        .custom-carousel {
          color: #fff;
          .play {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 10;
            .play-icon {
              width: 200px;
            }
          }
        }
        :global(.slick-dots li button::before) {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
}

export default Banner;
