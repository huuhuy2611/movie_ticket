import { IFoundItem } from '@/common/interface/movie.interface';
import { Col, Row } from 'antd';
import React from 'react';
import CardFilm from '../CardFilm';

interface IProps {
  data: IFoundItem[];
}

function ListCardFilm(props: IProps): JSX.Element {
  const { data } = props;

  return (
    <div className="list-card">
      <Row className="list-card-content">
        {data?.length > 0 &&
          data.map((item: IFoundItem) => (
            <Col
              className="list-card-content_item"
              span={6}
              style={{
                padding: '20px',
                marginBottom: ' 25px',
                textAlign: 'center',
              }}
            >
              <CardFilm content={item} />
            </Col>
          ))}
      </Row>

      <style jsx>{`
        .list-card {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default ListCardFilm;
