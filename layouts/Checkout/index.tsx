import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Steps } from 'antd';
import SeatSelection from './SeatSelection';
import { useRouter } from 'next/router';
import { IDataMovie } from '@/common/interface/movie.interface';
import {
  getCinemasByMovie,
  getDatesByMovie,
  getMovieDetails,
} from '@/services/movie.service';

const { Step } = Steps;

export interface InfoTicket {
  cinema: string;
  date: string;
  time: string;
}

function CheckoutLayout() {
  const router = useRouter();

  const [infoTicket, setInfoTicket] = useState<InfoTicket>({
    cinema: '',
    date: '',
    time: '',
  });
  const [step, setStep] = useState(0);
  const [dataMovie, setDataMovie] = useState<IDataMovie>();
  const [dataCinemas, setDataCinemas] = useState([]);
  const [dataDate, setDataDate] = useState<string[]>([]);
  const [dataTime, setDataTime] = useState([]);

  const getDataMovie = async (id: string) => {
    const res = await getMovieDetails(id);

    if (res?.success) {
      setDataMovie(res);
    }
  };

  const getDataCinemaByMovie = async (id: string) => {
    const res = await getCinemasByMovie(id);
    if (res?.foundItems) {
      setDataCinemas(res?.foundItems);
    }
  };

  const getDataDateByMovie = async (id: string) => {
    const res = (await getDatesByMovie(id)) as {
      success: boolean;
      data: string[];
    };
    if (res?.success) {
      setDataDate(res?.data);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      getDataMovie(router.query.id as string);
      getDataCinemaByMovie(router.query.id as string);
      getDataDateByMovie(router.query.id as string);
    }
  }, [router.query]);

  return (
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
      </div>
      <div className="checkout-layout-right">
        <div className="mb-64">
          <Steps current={step}>
            <Step title="Chọn chỗ ngồi" />
            <Step title="Thanh toán" />
            <Step title="Xác nhận" />
          </Steps>
        </div>

        <SeatSelection
          infoTicket={infoTicket}
          setInfoTicket={setInfoTicket}
          dataCinema={dataCinemas}
          dataMovie={dataMovie as IDataMovie}
          dataDate={dataDate}
        />
        <div className="prev-next-btn">
          {step > 0 && <Button>Prev</Button>}
          <Button>Next</Button>
        </div>
      </div>

      <style jsx>{`
        .checkout-layout {
          background-color: #0b0b0b;
          padding: 20vh 8vw;
          display: flex;
          &-left {
            width: 30%;
            z-index: 1;
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
  );
}

export default CheckoutLayout;
