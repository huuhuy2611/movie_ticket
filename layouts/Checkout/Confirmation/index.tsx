import { Button, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

function Confirmation() {
  const router = useRouter();

  return (
    <div className="confirmation">
      <h1 className="content title">Thanh toán thành công!!!</h1>
      <p className="content">
        Hệ thống đã gửi vé xem phim qua email của bạn, vui lòng xuất trình cho
        nhân viên quầy vé tại rạp phim.
      </p>
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
        }
      `}</style>
    </div>
  );
}

export default Confirmation;
