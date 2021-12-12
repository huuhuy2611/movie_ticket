import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Row, Steps } from 'antd';
import SeatSelection from './SeatSelection';
import { useRouter } from 'next/router';
import { IDataMovie, ISeat } from '@/common/interface/movie.interface';
import {
  getCinemasByMovie,
  getDatesByMovie,
  getMovieDetails,
} from '@/services/movie.service';
import Payment from './Payment';

const { Step } = Steps;

export interface InfoTicket {
  cinema: string;
  date: string;
  roomId: string;
  selectedSeats: ISeat[];
}

function CheckoutLayout() {
  const router = useRouter();

  const [infoTicket, setInfoTicket] = useState<InfoTicket>({
    cinema: '',
    date: '',
    roomId: '',
    selectedSeats: [],
  });
  const [step, setStep] = useState(1);
  const [dataMovie, setDataMovie] = useState<IDataMovie>();

  const getDataMovie = async (id: string) => {
    const res = await getMovieDetails(id);

    if (res?.success) {
      setDataMovie(res);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      getDataMovie(router.query.id as string);
    }
  }, [router.query]);

  return (
    <>
      <div className="checkout-layout">
        <div className="checkout-layout-left">
          <img
            alt="example"
            src={dataMovie?.posterUrl}
            width={298}
            height={440}
            className="mb-16"
          />
          <h1
            className="mb-16 checkout-layout-right-name-cinema"
            style={{ paddingLeft: '16px' }}
          >
            {dataMovie?.name}
          </h1>
          <div className="note">
            <Row align="middle">
              <div className="note-reserved" /> <span> : Đã đặt</span>
            </Row>
            <Row align="middle">
              <div className="note-available" />
              <span> : Có sẵn</span>
            </Row>

            <Row align="middle">
              <div className="note-selected" />
              <span> : Đã chọn</span>
            </Row>

            <Row align="middle">
              <div className="note-vip" />
              <span> : Ghê VIP</span>
            </Row>
          </div>
        </div>
        <div className="checkout-layout-right">
          <div className="mb-32">
            <Steps current={step}>
              <Step title="Chọn chỗ ngồi" />
              <Step title="Thanh toán" />
              <Step title="Xác nhận" />
            </Steps>
          </div>
          <div className="prev-next-btn mb-32">
            {step > 0 && (
              <Button
                className="mr-16"
                style={{ borderRadius: '8px' }}
                onClick={() => setStep(step - 1)}
              >
                Quay lại
              </Button>
            )}

            <Button
              style={{ borderRadius: '8px' }}
              onClick={() => setStep(step + 1)}
            >
              Tiếp theo
            </Button>
          </div>
          {step === 0 && (
            <SeatSelection
              infoTicket={infoTicket}
              setInfoTicket={setInfoTicket}
            />
          )}
        </div>
        <style jsx>{`
          .checkout-layout {
            background-color: #0b0b0b;
            padding: 20vh 8vw;
            display: flex;
            &-left {
              width: 30%;
              z-index: 1;
              .note {
                margin: auto;
                width: 100%;
                span {
                  color: white;
                }
                div {
                  width: 30px;
                  height: 30px;
                  border-radius: 10%;
                  margin: 5px;
                }
                &-reserved {
                  background-color: grey;
                }
                &-selected {
                  background-color: white;
                }
                &-available {
                  background-color: #dd2c1c;
                }
                &-vip {
                  background-color: #751d1d;
                }
              }
            }
            &-right {
              width: 70%;
              &-name-cinema {
                font-size: 2rem;
                font-weight: 300;
              }
            }
            .prev-next-btn {
              z-index: 1;
              width: 95%;
              display: flex;
              justify-content: center;
            }
          }

          // steps

          div :global(.ant-steps-item-title) {
            color: white !important;
            height: 40px;
            display: flex;
            align-items: center;
            &:after {
              background-color: white !important;
              top: 19px;
              height: 2px;
            }
          }

          div :global(.ant-steps-item-icon) {
            width: 40px;
            height: 40px;
          }

          div :global(.ant-steps-item-icon .ant-steps-icon) {
            top: 1.5px !important;
            color: white;
          }

          div :global(.ant-steps-item-finish .ant-steps-item-icon) {
            background-color: #dd2c1c;
            border-color: #dd2c1c;
          }

          div :global(.ant-steps-item-process .ant-steps-item-icon) {
            background-color: #dd2c1c;
            border-color: #dd2c1c;
          }

          div :global(.ant-steps-item-wait .ant-steps-item-icon) {
            border: 2px solid white !important;
            background: transparent;
          }
        `}</style>
      </div>
    </>
  );
}

export default CheckoutLayout;
