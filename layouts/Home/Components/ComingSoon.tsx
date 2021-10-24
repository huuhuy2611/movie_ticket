import React, { useState } from 'react';
import Image from 'next/image';

function ComingSoon() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="promotion_content">
      <div className="promotion_content-img">
        <Image
          alt="Promotion"
          src="/images/promotion.png"
          width="392"
          height="259"
          layout="responsive"
        />
      </div>
      <div className="promotion_content-text color-fff">
        <div
          className={`div-center promotion_content-text-detail ${
            selected === 0 && 'promotion_content-text-detail-selected'
          }`}
          onClick={() => setSelected(0)}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <span>MEMBERS EXCLUSIVE</span>
        </div>
        <div
          className={`div-center promotion_content-text-detail ${
            selected === 1 && 'promotion_content-text-detail-selected'
          }`}
          onClick={() => setSelected(1)}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <span>LADIES NIGHTS ON WEDNESDAYS!</span>
        </div>
        <div
          className={`div-center promotion_content-text-detail ${
            selected === 2 && 'promotion_content-text-detail-selected'
          }`}
          onClick={() => setSelected(2)}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <span>MEN&apos;S NIGHTS ON WEDNESDAYS!</span>
        </div>
      </div>
      <style jsx>{`
        .promotion_content {
          display: flex;
        }
        .promotion_content-img,
        .promotion_content-text {
          width: 50%;
        }
        .promotion_content-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 1rem;
          .promotion_content-text-detail {
            height: 33%;
            padding-left: 10%;
            justify-content: flex-start;
            :nth-child(2) {
              border-top: 1px solid rgb(74, 74, 74);
              border-bottom: 1px solid rgb(74, 74, 74);
            }
          }
          .promotion_content-text-detail-selected {
            background-color: #7f170e;
            border-top: 50px solid transparent;
            border-bottom: 50px solid transparent;
            :before {
              border-right: 50px solid blue;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default ComingSoon;
