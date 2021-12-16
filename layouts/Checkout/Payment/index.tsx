import { createPayment } from '@/services/payment.service';
import { Button, DatePicker, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoTicket } from '..';

interface IProps {
  infoTicket: InfoTicket;
  step: number;
  setStep: (step: number) => void;
  reservationId: string;
}

function Payment(props: IProps) {
  const { infoTicket, step, setStep, reservationId } = props;

  const [dataUser, setDataUser] = useState<any>();
  const [dataCard, setDataCard] = useState<any>({
    cardNumber: '',
    cardholderName: '',
    cvv: '',
    expiredMonth: 12,
    expiredYear: 2022,
  });
  const [loadingPay, setLoadingPay] = useState<any>(false);

  const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataCard((prev: any) => ({ ...prev, [name]: value }));
  };

  const createPaymentReservation = async () => {
    const res = await createPayment(reservationId, dataCard);
    if (res?.success) {
      setStep(step + 1);
    }
  };

  const handlePayment = async () => {
    setLoadingPay(true);
    setTimeout(() => {
      createPaymentReservation();
      setLoadingPay(false);
    }, 4000);
  };

  useEffect(() => {
    const dataUserStorage = localStorage.getItem('dataUser');
    if (dataUserStorage) {
      setDataUser(JSON.parse(dataUserStorage));
    }
  }, []);

  return (
    <div className="payment">
      <div className="mb-8">
        <p className="payment-title">THÔNG TIN NGƯỜI DÙNG</p>
        <Input
          value={dataUser?.name || null}
          style={{ margin: '5px' }}
          title="Tên người dùng"
          placeholder="Điền tên người dùng"
        ></Input>

        <Input
          value={dataUser?.email || null}
          style={{ margin: '5px' }}
          title="Email"
          placeholder="Điền email"
        ></Input>

        <Input
          value={dataUser?.phoneNumber || null}
          style={{ margin: '5px' }}
          title="Số điện thoại"
          placeholder="Điền số điện thoại"
        ></Input>
      </div>
      <div className="mb-32">
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
      <Button loading={loadingPay} onClick={handlePayment}>
        {loadingPay ? 'Đang thực hiện thanh toán...' : 'Xác nhận thanh toán'}
      </Button>
      <style jsx>{`
        .payment {
          z-index: 10;
          .payment-title {
            color: #fff;
            font-size: 20px;
            z-index: 10;
            position: relative;
          }
          :global(.ant-input) {
            width: 70%;
            background: unset;
            color: white !important;
            &:hover,
            &:focus {
              border-color: #c98787;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Payment;
