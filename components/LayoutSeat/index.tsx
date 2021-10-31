import { Col, Row } from 'antd';
import React from 'react';
import styles from './layoutSeat.module.scss';

interface IProps {
  listReserved: string[];
  listSelected: string[];
  setListSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

function LayoutSeat(props: IProps) {
  const { listReserved, listSelected, setListSelected } = props;

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

  return (
    <div className="layout-seat">
      <Row className="mb-32">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item: string) => (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((subItem: number) => (
              <>
                {item === 'H' ? (
                  <>
                    {[3, 4, 9, 10].includes(subItem) ? (
                      <>
                        <Col span={2}>
                          <div
                            className={`
                            ${styles.item} 
                            ${
                              listReserved.find(
                                (reserved: string) =>
                                  reserved === `${item}${subItem}`
                              ) && styles.itemReserved
                            }
                            ${
                              listSelected.find(
                                (reserved: string) =>
                                  reserved === `${item}${subItem}`
                              ) && styles.itemSelected
                            }
                            `}
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              handleSelectSeat(`${item}${subItem}`)
                            }
                            onKeyDown={() => {}}
                          >
                            {item}
                            {subItem}
                          </div>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col span={2} />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Col span={2}>
                      <div
                        className={`
                        ${styles.item}
                        ${
                          listReserved.find(
                            (reserved: string) =>
                              reserved === `${item}${subItem}`
                          ) && `${styles.itemReserved}`
                        }
                        ${
                          listSelected.find(
                            (reserved: string) =>
                              reserved === `${item}${subItem}`
                          ) && styles.itemSelected
                        }
                        `}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectSeat(`${item}${subItem}`)}
                        onKeyDown={() => {}}
                      >
                        {item}
                        {subItem}
                      </div>
                    </Col>
                  </>
                )}
              </>
            ))}
          </>
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
