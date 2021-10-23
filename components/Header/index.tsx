import React from 'react';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className="header">
      <Row className="header-logo">
        <Col>
          <Image
            src="/images/teatro_logo.png"
            width={120}
            height={32.72}
            alt="Logo"
          />
        </Col>
      </Row>
      <div className="header-tabs">
        <div className="header-tabs-container">
          <div className="tab-detail">
            <span
              onClick={() => router.push('/')}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Movies
              {router.pathname === '/' && <div className="line" />}
            </span>
          </div>
          <div className="tab-detail">
            <span
              onClick={() => router.push('/cinemas')}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Cinemas
              {router.pathname === '/cinemas' && <div className="line" />}
            </span>
          </div>
          <div className="tab-detail">
            <span
              onClick={() => router.push('/promotions')}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Promotions
              {router.pathname === '/promotions' && <div className="line" />}
            </span>
          </div>
        </div>

        <Row align="middle">
          <img
            src="/images/shopping-cart.png"
            width={25}
            height={25}
            alt="Cart"
            className="mr-16"
          />
          <Button ghost>SIGN UP/LOGIN</Button>
        </Row>
      </div>
      <style jsx>{`
        .header {
          position: absolute;
          height: 20vh;
          width: 100%;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.918),
            rgba(8, 8, 8, 0)
          );
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10%;
          .header-tabs {
            width: 60%;
            display: flex;
            justify-content: space-between;
            .header-tabs-container {
              display: flex;
              align-items: center;
              .tab-detail {
                color: #fff;
                font-size: 18px;
                padding: 0 10%;
                position: relative;
                cursor: pointer;
                &:hover {
                  color: #cdcdcd;
                }
                .line {
                  position: absolute;
                  width: 33%;
                  border-bottom: 3px solid #7f170e;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
