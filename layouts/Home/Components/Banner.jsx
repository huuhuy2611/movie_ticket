/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CloseOutlined,
  PlayCircleFilled,
} from '@ant-design/icons';
import { Modal } from 'antd';
import ModalTrailer from '@/components/Modal/ModalTrailer';

const mockDataBanner = [
  {
    img: '/images/banner_example-1.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    img: '/images/banner_example-2.jpg',
    link: 'https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1&showinfo=0',
  },
  {
    img: '/images/banner_example-3.jpg',
    link: 'https://www.youtube.com/embed/WDkg3h8PCVU?autoplay=1&showinfo=0',
  },
  {
    img: '/images/banner_example-4.jpg',
    link: 'https://www.youtube.com/embed/JuDLepNa7hw?autoplay=1&showinfo=0',
  },
];

function Banner() {
  const ref = useRef(null);

  // const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLink, setCurrentLink] = useState();
  const [showTrailer, setShowTrailer] = useState(false);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // afterChange: (current: number) => setCurrentIndex(current),
  };

  const handlePrev = () => {
    ref?.current?.slickPrev();
  };

  const handleNext = () => {
    ref?.current?.slickNext();
  };

  const handlePlayTrailer = (link) => {
    setShowTrailer(true);
    setCurrentLink(link);
  };

  return (
    <div className="custom-carousel">
      <Slider {...settings} ref={ref}>
        {mockDataBanner.map((item) => (
          <div className="banner-item" style={{ width: '100%', height: '20%' }}>
            <Image
              alt="banner"
              src={item?.img}
              width="1920"
              height="900"
              layout="responsive"
            />
            <div className="play">
              <PlayCircleFilled onClick={() => handlePlayTrailer(item?.link)} />
            </div>
          </div>
        ))}
      </Slider>
      <div className="arrow-prev">
        <CaretLeftOutlined onClick={handlePrev} />
      </div>
      <div className="arrow-next">
        <CaretRightOutlined onClick={handleNext} />
      </div>
      {showTrailer && currentLink && (
        <ModalTrailer setShowModal={setShowTrailer} linkTrailer={currentLink} />
      )}

      <style jsx>{`
        .custom-carousel {
          color: #fff;
          position: relative;

          .arrow-next,
          .arrow-prev {
            font-size: 90px;
            color: #605e5e85;
            position: absolute;
            top: calc(50% - 45px);
            transition: 0.5s;
            &:hover {
              color: #8b8b8b7a;
            }
          }
          .arrow-prev {
          }
          .arrow-next {
            right: 0px;
          }
          .banner-item {
            position: relative;
            .play {
              font-size: 90px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              transition: 0.7s;
              z-index: 3;
              color: #ffffff7a;
              cursor: pointer;
              &:hover {
                color: #ffffffad;
              }
            }
          }
        }
        :global(.slick-dots) {
          position: absolute;
          bottom: 10px;
        }
        :global(.slick-dots li button::before) {
          color: #fff !important;
        }
        :global(.ant-modal-body) {
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Banner;
