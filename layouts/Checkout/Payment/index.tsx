import { createPayment } from '@/services/payment.service';
import { Button, DatePicker, Input, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoTicket } from '..';

interface IProps {
  infoTicket: InfoTicket;
  step: number;
  setStep: (step: number) => void;
  reservationId: string;
  vipPrice: number;
}

function Payment(props: IProps) {
  const { infoTicket, step, setStep, reservationId, vipPrice } = props;

  const [dataUser, setDataUser] = useState<any>();
  const [dataCard, setDataCard] = useState<any>({
    cardNumber: '',
    cardholderName: '',
    cvv: '',
    expiredMonth: 12,
    expiredYear: 2022,
  });
  const [loadingPay, setLoadingPay] = useState<any>(false);
  const [dataTicket, setDataTicket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const columns = [
    {
      title: 'Vị trí',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Loại vé',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Giá vé',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataCard((prev: any) => ({ ...prev, [name]: value }));
  };

  const createPaymentReservation = async () => {
    const res = await createPayment(reservationId, dataCard);
    if (res?.success) {
      setStep(step + 1);
      setLoadingPay(false);
    }
  };

  const handlePayment = async () => {
    setLoadingPay(true);
    setTimeout(() => {
      createPaymentReservation();
    }, 4000);
  };

  useEffect(() => {
    const dataUserStorage = localStorage.getItem('dataUser');
    if (dataUserStorage) {
      setDataUser(JSON.parse(dataUserStorage));
    }
  }, []);

  useEffect(() => {
    if (infoTicket) {
      const tempSeats = [] as any;
      let tempTotalPrice = 0;
      infoTicket?.selectedSeats?.forEach((seat) => {
        const tempSeatItem = {
          location: seat?.code,
          type: seat?.ticketPrice === vipPrice ? 'VIP' : 'Thường',
          cost: `${seat?.ticketPrice} VNĐ`,
        };
        tempTotalPrice += seat?.ticketPrice;
        tempSeats.push(tempSeatItem);
      });
      setDataTicket(tempSeats);
      setTotalPrice(tempTotalPrice);
    }
  }, [infoTicket]);

  return (
    <div className="payment">
      <div className="payment-left">
        <div className="mb-8">
          <p className="payment-title">THÔNG TIN NGƯỜI DÙNG</p>
          <div className="payment-info-user">
            <div>
              <strong>User</strong>: {dataUser?.name}
            </div>
            <div>
              <strong>Email</strong>: {dataUser?.email}
            </div>
            <div>
              <strong>SĐT</strong>: {dataUser?.phoneNumber}
            </div>
          </div>
        </div>
        <div className="mb-16">
          <p className="payment-title">THÔNG TIN THẺ</p>
          <Input
            style={{ margin: '5px' }}
            title="Số thẻ"
            placeholder="Điền số thẻ"
            name="cardNumber"
            onChange={handleChangeCard}
          ></Input>
          <Input
            style={{ margin: '5px' }}
            title="Tên chủ thẻ"
            placeholder="Điền tên chủ thẻ"
            name="cardholderName"
            onChange={handleChangeCard}
          ></Input>

          <Input
            style={{ margin: '5px' }}
            title="CVV"
            placeholder="Điền CVV"
            name="cvv"
            onChange={handleChangeCard}
          ></Input>
        </div>
        <Button type="primary" loading={loadingPay} onClick={handlePayment}>
          {loadingPay ? 'Đang thực hiện thanh toán...' : 'Xác nhận thanh toán'}
        </Button>
      </div>

      <div className="payment-right">
        <p className="payment-title">THÔNG TIN VÉ</p>
        <Table
          bordered
          dataSource={dataTicket}
          columns={columns}
          pagination={false}
        />
        <p className="payment-title mt-4">
          Tổng tiền: <span className="total-price">{totalPrice} VNĐ</span>
        </p>
      </div>

      <style jsx>{`
        .payment {
          z-index: 10;
          background: white;
          position: relative;
          padding: 20px;
          border-radius: 20px;
          display: flex;
          .payment-title {
            font-size: 20px;
            z-index: 10;
            position: relative;
            margin-bottom: 8px;
            font-weight: bold;
          }
          .total-price {
            font-weight: 400;
          }
          .payment-left {
            width: 60%;
            .payment-info-user {
              padding: 0 10px;
            }
            :global(.ant-input) {
              width: 60%;
              background: unset;
              &:focus {
              }
            }
            :global(.ant-btn) {
              &:hover,
              &:focus {
                color: #fff;
                border-color: #0078e7;
                background: #0078e7;
              }
            }
          }
          .payment-right {
            width: 40%;
          }
        }
      `}</style>
    </div>
  );
}

export default Payment;
