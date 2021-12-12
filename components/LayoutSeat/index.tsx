import { ISeat } from '@/common/interface/movie.interface';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './layoutSeat.module.scss';

interface IProps {
  // listReserved: string[];
  listSelected: string[];
  dataSeats: { [key: number]: ISeat[] };
  vipPrice: number;
  setListSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

function LayoutSeat(props: IProps) {
  const { dataSeats, vipPrice, setListSelected, listSelected } = props;

  const [widthItem, setWidthItem] = useState(0);

  const handleSelectSeat = (locationSeat: string) => {
    const tempListSelected = listSelected;
    if (tempListSelected.find((item: string) => item === locationSeat)) {
      const filterSelected = tempListSelected.filter(
        (item: string) => item !== locationSeat
      );
      setListSelected(filterSelected);
      return;
    }
    setListSelected([...listSelected, locationSeat]);
  };

  useEffect(() => {
    const lengthSeats = [] as number[];
    Object.keys(dataSeats).forEach((rowSeat) => {
      const tempLengthRow = dataSeats[rowSeat as unknown as number]?.length;
      lengthSeats.push(tempLengthRow);
    });
    setWidthItem(100 / (Math.max(...lengthSeats) + 1));
  }, []);

  return (
    <div className="layout-seat">
      <Row
        className="mb-32"
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        {Object.keys(dataSeats)?.map((rowSeat) => (
          <Row style={{ width: '100%' }}>
            {dataSeats[rowSeat as unknown as number]?.map((seat) => {
              return (
                <>
                  <Col
                    style={{
                      width: `${widthItem}%`,
                    }}
                  >
                    <div
                      className={`${styles.item} ${
                        seat?.isReserved ? styles.itemReserved : ''
                      } ${
                        seat?.ticketPrice === vipPrice ? styles.itemVip : ''
                      } ${
                        listSelected.includes(seat?.code)
                          ? styles.itemSelected
                          : ''
                      }`}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectSeat(seat?.code)}
                      onKeyDown={() => {}}
                    >
                      {seat?.code}
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        ))}
      </Row>
      <div className="layout-seat-note">
        <div className="layout-seat-note-item mr-40">
          <div className="layout-seat-note-item-color" />
          <div className="layout-seat-note-item-text">Có sẵn</div>
        </div>
        <div className="layout-seat-note-item mr-40">
          <div className="layout-seat-note-item-color color-reserved" />
          <div className="layout-seat-note-item-text">Đã đặt</div>
        </div>
        <div className="layout-seat-note-item mr-40">
          <div className="layout-seat-note-item-color color-selected" />
          <div className="layout-seat-note-item-text">Đã chọn</div>
        </div>
      </div>
      <style jsx>{`
        .layout-seat {
          &-note {
            display: flex;
            justify-content: center;
            &-item {
              display: flex;
              align-items: center;
              &-color {
                width: 40px;
                height: 40px;
                background: #dd2c1c;
                margin-right: 10px;
              }
              &-text {
                color: #fff;
              }
              .color-reserved {
                background-color: #7f170e;
              }
              .color-selected {
                background-color: #fefffa;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export default LayoutSeat;
