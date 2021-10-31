import React from 'react';
import { Button, Input } from 'antd';
import router from 'next/router';

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-form">
        <div className="mb-16">
          <div className="sign-in-form-email-title mb-8">
            <span>Email</span>
          </div>
          <div>
            <Input placeholder="Điền email..." />
          </div>
        </div>
        <div className="mb-24">
          <div className="sign-in-form-password-title mb-8">
            <span>Mật khẩu</span>
          </div>
          <div>
            <Input placeholder="Điền mật khẩu..." />
          </div>
        </div>
        <div className="mb-8">
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => router.push('/')}
          >
            Đăng nhập
          </Button>
        </div>

        <div className="sign-in-forgot">
          <a href="#">Quên mật khẩu</a>
        </div>
      </div>
      <style jsx>{`
        .sign-in {
          &-form {
            padding: 0 30px 20px;
            background-color: #fff;
            border-radius: 10px;
            &-email-title {
            }
          }
          &-forgot {
            text-align: center;
            // text-decoration: underline;
          }
          div :global(.ant-btn-primary) {
            background-color: #dd2c1c;
            border-color: #dd2c1c;
          }
        }
      `}</style>
    </div>
  );
}

export default SignIn;
