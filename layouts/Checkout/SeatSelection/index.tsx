import React, { useEffect, useState } from 'react';
import { Select, Table } from 'antd';
import LayoutSeat from '@/components/LayoutSeat';
import { InfoTicket } from '..';
import {
  IDataMovie,
  IDataCinemasByMovie,
} from '@/common/interface/movie.interface';
import { useRouter } from 'next/router';
import { getDatesByMovie } from '@/services/movie.service';

const { Option } = Select;

interface IProps {
  infoTicket: InfoTicket;
  setInfoTicket: React.Dispatch<React.SetStateAction<InfoTicket>>;
  dataCinema: IDataCinemasByMovie[];
  dataMovie: IDataMovie;
  dataDate: string[];
}

function SeatSelection(props: IProps) {
  const { infoTicket, setInfoTicket, dataMovie, dataCinema, dataDate } = props;

  const router = useRouter();

  const idMovie = router.query.id;

  const [optionDates, setOptionDates] = useState<string[]>([]);

  const dataSource = [
    {
      key: '1',
      location: 'A1, A3',
      price: '50000VNĐ',
      drink: 'Có',
      total: '150000VNĐ',
    },
  ];

  const columns = [
    {
      title: 'Vị trí',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Giá vé',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Thêm bỏng + nước',
      dataIndex: 'drink',
      key: 'drink',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  const listReserved = [
    'A1',
    'A2',
    'A3',
    'A4',
    'B4',
    'B5',
    'B6',
    'C8',
    'C9',
    'C10',
    'C11',
  ];

  const [listSelected, setListSelected] = useState<string[]>([]);

  const [optionsTime, setOptionsTime] = useState([
    {
      label: '17:00',
      value: '17:00',
    },
    {
      label: '19:00',
      value: '19:00',
    },
    {
      label: '21:00',
      value: '21:00',
    },
  ]);

  const getDataDateByCinemaAndMovie = async (
    cinema: string,
    id_movie: string
  ) => {
    const res = (await getDatesByMovie(id_movie, { cinemaId: cinema })) as {
      success: boolean;
      data: string[];
    };
    if (res?.success) {
      setOptionDates(res?.data);
    }
  };

  const handleSelectCinema = (cinema: string) => {
    if (idMovie) {
      const tempInfo = { ...infoTicket, cinema };
      setInfoTicket(tempInfo);
      getDataDateByCinemaAndMovie(cinema, idMovie as string);
    }
  };

  const handleSelectDate = (date: string) => {
    const tempInfo = { ...infoTicket, date };
    setInfoTicket(tempInfo);
  };
  const handleSelectTime = (time: string) => {
    const tempInfo = { ...infoTicket, time };
    setInfoTicket(tempInfo);
  };

  useEffect(() => {
    if (dataDate?.length > 0) {
      setOptionDates(dataDate);
    }
  }, [dataDate]);

  return (
    <div className="seat-selection">
      <div className="seat-selection-select-fields mb-64">
        <Select
          value={infoTicket?.cinema || undefined}
          style={{ width: '30%' }}
          placeholder="Chọn rạp..."
          onChange={(cinema: string) => handleSelectCinema(cinema)}
        >
          {dataCinema?.map((cinema: IDataCinemasByMovie) => (
            <Option key={cinema?.id} value={cinema?.id}>
              {cinema?.name}
            </Option>
          ))}
        </Select>
        <Select
          value={infoTicket?.date || undefined}
          style={{ width: '30%' }}
          onChange={(date: string) => handleSelectDate(date)}
          placeholder="Chọn ngày..."
        >
          {optionDates.map((date) => (
            <Option value={date}>{date}</Option>
          ))}
        </Select>
        <Select
          disabled={!(infoTicket?.cinema && infoTicket?.date)}
          value={infoTicket?.time || undefined}
          style={{ width: '30%' }}
          placeholder="Chọn suất chiếu..."
          onChange={(time: string) => handleSelectTime(time)}
        >
          {optionsTime.map((time: { label: string; value: string }) => (
            <Option value={time?.value}>{time?.label}</Option>
          ))}
        </Select>
      </div>
      <div className="seat-selection-hr">
        <hr />
        <div className="div-center">
          <h1 className="mb-16 seat-selection-name-cinema">MÀN HÌNH</h1>
        </div>
      </div>
      <div className="seat-selection-layout-seat mb-64">
        <LayoutSeat
          listReserved={listReserved}
          listSelected={listSelected}
          setListSelected={setListSelected}
        />
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      <style jsx>{`
        .seat-selection {
          &-name-cinema {
            font-size: 2rem;
            font-weight: 300;
            z-index: 10;
          }
          &-select-fields {
            display: flex;
            width: 90%;
            justify-content: space-between;
          }
          &-hr {
            width: 85%;
            margin-left: 2.5%;
            hr {
              height: 1px;
              background: #8a8686;
            }
          }
          &-layout-seat {
            width: 90%;
          }
        }

        // select

        div :global(.ant-select-selector) {
          background-color: transparent !important;
          border-color: #d9d9d9 !important;
          height: 40px !important;
          &:hover {
            border-color: white !important;
          }
        }
        div :global(.ant-select-arrow) {
          color: white !important;
        }

        div :global(.ant-select-selection-item) {
          color: white !important;
          padding-top: 4px !important;
        }

        div :global(.ant-select-selection-placeholder) {
          padding-top: 4px !important;
        }
      `}</style>
    </div>
  );
}

export default SeatSelection;
