import React, { useState } from 'react';
import Image from 'next/image';
import { Steps } from 'antd';
import SeatSelection from './SeatSelection';

const { Step } = Steps;

export interface InfoTicket {
  cinema: string;
  date: string;
  time: string;
}

function CheckoutLayout() {
  const [infoTicket, setInfoTicket] = useState<InfoTicket>({
    cinema: '',
    date: '',
    time: '',
  });
  const [step, setStep] = useState(0);

  return (
    <div className="checkout-layout">
      <div className="checkout-layout-left">
        <Image
          alt="example"
          src="/images/test-2.jpg"
          width={298}
          height={440}
        />
      </div>
      <div className="checkout-layout-right">
        <div className="mb-64">
          <Steps current={step}>
            <Step title="Chọn chỗ ngồi" />
            <Step title="Thanh toán" />
            <Step title="Xác nhận" />
          </Steps>
        </div>
        <SeatSelection infoTicket={infoTicket} setInfoTicket={setInfoTicket} />
      </div>

      <style jsx>{`
        .checkout-layout {
          background-color: #0b0b0b;
          padding: 20vh 8vw;
          display: flex;
          &-left {
            width: 30%;
          }
          &-right {
            width: 70%;
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
