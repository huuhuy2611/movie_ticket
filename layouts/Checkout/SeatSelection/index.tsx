import React, { useState } from 'react';
import { Select } from 'antd';
import LayoutSeat from '@/components/LayoutSeat';
import { InfoTicket } from '..';

const { Option } = Select;

interface IProps {
  infoTicket: InfoTicket;
  setInfoTicket: React.Dispatch<React.SetStateAction<InfoTicket>>;
}

function SeatSelection(props: IProps) {
  const { infoTicket, setInfoTicket } = props;

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

  const [optionsCinema, setOptionsCinema] = useState([
    {
      label: 'Cinema 1',
      value: 'Cinema 1',
    },
    {
      label: 'Cinema 2',
      value: 'Cinema 2',
    },
    {
      label: 'Cinema 3',
      value: 'Cinema 3',
    },
  ]);

  const [optionsDate, setOptionsDate] = useState([
    {
      label: '2020-11-11',
      value: '2020-11-11',
    },
    {
      label: '2020-12-12',
      value: '2020-12-12',
    },
    {
      label: '2020-10-10',
      value: '2020-10-10',
    },
  ]);
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

  const handleSelectCinema = (cinema: string) => {
    const tempInfo = { ...infoTicket, cinema };
    setInfoTicket(tempInfo);
  };

  const handleSelectDate = (date: string) => {
    const tempInfo = { ...infoTicket, date };
    setInfoTicket(tempInfo);
  };
  const handleSelectTime = (time: string) => {
    const tempInfo = { ...infoTicket, time };
    setInfoTicket(tempInfo);
  };

  return (
    <div className="seat-selection">
      <div className="seat-selection-select-fields mb-64">
        <Select
          value={infoTicket?.cinema || undefined}
          style={{ width: '30%' }}
          placeholder="Select Cinema..."
          onChange={(cinema: string) => handleSelectCinema(cinema)}
        >
          {optionsCinema.map((cinema: { label: string; value: string }) => (
            <Option value={cinema?.value}>{cinema?.label}</Option>
          ))}
        </Select>
        <Select
          value={infoTicket?.date || undefined}
          style={{ width: '30%' }}
          onChange={(date: string) => handleSelectDate(date)}
          placeholder="Select Date..."
        >
          {optionsDate.map((date: { label: string; value: string }) => (
            <Option value={date?.value}>{date?.label}</Option>
          ))}
        </Select>
        <Select
          value={infoTicket?.time || undefined}
          style={{ width: '30%' }}
          placeholder="Select Time..."
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
          <h1 className="mb-16 seat-selection-name-cinema">SCREEN</h1>
        </div>
      </div>
      <div className="seat-selection-layout-seat">
        <LayoutSeat
          listReserved={listReserved}
          listSelected={listSelected}
          setListSelected={setListSelected}
        />
      </div>
      <style jsx>{`
        .seat-selection {
          &-name-cinema {
            font-size: 2rem;
            font-weight: 300;
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
