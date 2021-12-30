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
import { createReserve } from '@/services/payment.service';
import Confirmation from './Confirmation';

const { Step } = Steps;

export interface InfoTicket {
  cinema: any;
  date: string;
  scheduleId: string;
  selectedSeats: ISeat[];
}

function CheckoutLayout() {
  const router = useRouter();

  const [infoTicket, setInfoTicket] = useState<InfoTicket>({
    cinema: null,
    date: '',
    scheduleId: '',
    selectedSeats: [],
  });
  const [step, setStep] = useState(0);
  const [dataMovie, setDataMovie] = useState<IDataMovie>();
  const [reservationId, setReservationId] = useState('');
  const [vipPrice, setVipPrice] = useState(0);

  const getDataMovie = async (id: string) => {
    const res = await getMovieDetails(id);

    if (res?.success) {
      setDataMovie(res);
    }
  };

  const handleCreateReservation = async () => {
    const dataCreateReservation = {
      scheduleId: infoTicket?.scheduleId,
      seats: infoTicket?.selectedSeats?.map((seat) => seat?.code),
    };
    const res = (await createReserve(dataCreateReservation)) as any;
    if (res?.success) {
      setStep(step + 1);
      setReservationId(res?.created?.id);
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
          {step === 0 &&
            infoTicket?.cinema &&
            infoTicket?.date &&
            infoTicket?.scheduleId && (
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
                  <span> : Ghế VIP</span>
                </Row>
              </div>
            )}
        </div>
        <div className="checkout-layout-right">
          <div className="mb-32">
            <Steps current={step}>
              <Step title="Chọn chỗ ngồi" />
              <Step title="Thanh toán" />
              <Step title="Xác nhận" />
            </Steps>
          </div>

          {step === 0 && (
            <>
              <div className="prev-next-btn mb-32">
                <Button
                  style={{ borderRadius: '8px' }}
                  onClick={() => {
                    handleCreateReservation();
                  }}
                >
                  Tiếp theo
                </Button>
              </div>{' '}
              <SeatSelection
                infoTicket={infoTicket}
                setInfoTicket={setInfoTicket}
                vipPrice={vipPrice}
                setVipPrice={setVipPrice}
              />
            </>
          )}
          {step === 1 && (
            <Payment
              infoTicket={infoTicket}
              step={step}
              setStep={setStep}
              reservationId={reservationId}
              vipPrice={vipPrice}
            />
          )}
          {step === 2 && (
            <Confirmation vipPrice={vipPrice} infoTicket={infoTicket} />
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
