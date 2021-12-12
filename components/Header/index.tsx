import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Col, Dropdown, Menu, Row } from 'antd';
import { useRouter } from 'next/router';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { IUser } from '@/common/interface/auth.interface';

function Header() {
  const router = useRouter();

  const [dataUser, setDataUser] = useState<IUser>({
    name: '',
    email: '',
    phoneNumber: '',
    id: '',
  });

  const menu = (
    <Menu>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Thông tin cá nhân
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} style={{ color: 'red' }}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const tempDataUser = localStorage.getItem('dataUser');
    if (tempDataUser) {
      setDataUser(JSON.parse(tempDataUser));
    }
  }, []);

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
          {dataUser?.name ? (
            <div className="existed-user">
              <Dropdown overlay={menu}>
                <Button>
                  Welcome, {dataUser?.name} <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          ) : (
            <Button ghost onClick={() => router.push('/auth')}>
              ĐĂNG KÝ/ĐĂNG NHẬP
            </Button>
          )}
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
        :global(.ant-btn) {
          &:hover,
          &:focus {
            background-color: #fff !important;
            color: #0b0b0b;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
