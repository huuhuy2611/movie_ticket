import React from 'react';
import { Tabs } from 'antd';
import Image from 'next/image';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

const { TabPane } = Tabs;

function Auth() {
  return (
    <div className="auth">
      <div
        style={{
          backgroundImage: `url(${'/images/img-auth-2.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
          filter: 'blur(3px)',
        }}
      />
      <div style={{ width: '25%', minWidth: '380px', position: 'absolute' }}>
        <div className="auth-logo mb-16">
          <Image
            src="/images/teatro_logo.png"
            width={200}
            height={54.53}
            alt="Logo"
          />
        </div>

        <div className="auth-tabs">
          <Tabs defaultActiveKey="1" onChange={() => {}}>
            <TabPane tab="Đăng nhập" key="1">
              <SignIn />
            </TabPane>
            <TabPane tab="Đăng ký" key="2">
              <SignUp />
            </TabPane>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        .auth {
          background-color: #0b0b0b;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          height: 100vh;
          &-logo {
            text-align: center;
          }
          &-tabs {
            background: #fff;
            border-radius: 6px;
          }
          div :global(.ant-tabs > .ant-tabs-nav .ant-tabs-nav-list) {
            width: 100% !important;
          }
          div :global(.ant-tabs-tab) {
            width: 50%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Auth;
