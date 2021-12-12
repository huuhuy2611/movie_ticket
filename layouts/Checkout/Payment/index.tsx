import { DatePicker, Input } from 'antd';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function Payment(props: any) {
  const [expirationTime, setExprirationTime] = useState<any>(new Date());

  return (
    <div>
      <Input title="Số thẻ" placeholder="4606030092039582"></Input>
      <Input title="Tên chủ thẻ" placeholder="Vũ Tố Uyên"></Input>
      <Input title="CVV" placeholder="113"></Input>
      <DatePicker onChange={(value) => setExprirationTime(value)}></DatePicker>
    </div>
  );
}

export default Payment;
