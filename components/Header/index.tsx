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
            onClick={() => router.push('/movie')}
          />
        </Col>
      </Row>
      <div className="header-tabs">
        <div className="header-tabs-container">
          <div className="tab-detail">
            <span
              onClick={() => router.push('/movie')}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Phim
              {router.pathname.includes('/movie') && <div className="line" />}
            </span>
          </div>
          <div className="tab-detail">
            <span
              onClick={() => router.push('/cinemas')}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Rạp chiếu
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
              Ưu đãi
              {router.pathname === '/promotions' && <div className="line" />}
            </span>
          </div>
        </div>

        <div className="header-login">
          <div>
            <img
              src="/images/shopping-cart.png"
              width={25}
              height={25}
              alt="Cart"
              className="mr-16"
            />
          </div>

          <Button ghost onClick={() => router.push('/login')}>
            ĐĂNG KÝ/ĐĂNG NHẬP
          </Button>
        </div>
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
          &-tabs {
            width: 50%;
            display: flex;
            justify-content: space-between;
            &-container {
              display: -webkit-box;
              align-items: center;
              .tab-detail {
                color: #fff;
                font-size: 18px;
                padding: 0 15%;
                cursor: pointer;
                &:hover {
                  color: #cdcdcd;
                }
                span {
                  position: relative;
                  .line {
                    position: absolute;
                    width: 50%;
                    border-bottom: 3px solid #7f170e;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  }
                }
              }
            }
          }
          &-login {
            display: flex;
            align-items: center;
          }
        }
        :global(.ant-btn-background-ghost) {
          &:hover {
            background-color: #fff !important;
            color: #0b0b0b;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
