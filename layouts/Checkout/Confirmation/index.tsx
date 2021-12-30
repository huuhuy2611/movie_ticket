import { Button, Row, Table } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { InfoTicket } from '..';

interface IProps {
  infoTicket: InfoTicket;
  vipPrice: number;
}

function Confirmation(props: IProps) {
  const router = useRouter();

  const { infoTicket, vipPrice } = props;

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
    <div className="confirmation">
      <h1 className="content title">Thanh toán thành công!!!</h1>
      <p className="content">
        Hệ thống đã gửi vé xem phim qua email của bạn, vui lòng xuất trình cho
        nhân viên quầy vé tại rạp phim.
      </p>
      <div className="payment-right">
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
      <Row justify="center">
        <Button type="primary" onClick={() => router.push('/')}>
          Quay lại trang chủ
        </Button>
      </Row>

      <style jsx>{`
        .confirmation {
          padding: 20px;
          .content {
            position: relative;
            color: #fff;
            font-size: 16px;
          }
          .title {
            font-size: 30px;
          }
          .payment-right {
            width: 50%;
          }
          .payment-title {
            font-size: 20px;
            z-index: 10;
            position: relative;
            margin-bottom: 8px;
            font-weight: bold;
            color: #fff;
          }
          .total-price {
            font-weight: 400;
          }
        }
      `}</style>
    </div>
  );
}

export default Confirmation;
