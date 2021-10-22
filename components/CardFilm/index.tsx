import { Button, Card } from 'antd';
import React from 'react';
import Image from 'next/image';

interface IProps {
  content: {
    name: string;
    img: string;
  };
}

function CardFilm(props: IProps) {
  const { name, img } = props;
  return (
    <div className="card-film">
      <Card
        hoverable
        cover={
          // <img
          //   alt="example"
          //   src="https://i.pinimg.com/564x/e6/ba/0a/e6ba0a0e1a76e2fad592076f37bc50a3.jpg"
          //   height={150}
          // />
          <Image
            alt="example"
            src="/images/test-2.jpg"
            width={298}
            height={440}
          />
        }
      >
        <p className="mb-16 card-name">
          Shang-Chi and The Legend of The Ten Rings
        </p>
        <Button type="primary" danger>
          BUY TICKETS
        </Button>
      </Card>
      <style jsx>{`
        .card-film {
          width: 100%;
          text-align: center;
        }
        :global(.ant-card-bordered) {
          border: unset;
        }
        :global(.ant-card-cover, .ant-card-body) {
          background-color: #0b0b0b;
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
