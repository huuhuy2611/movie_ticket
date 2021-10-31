import React from 'react';
import { Button, Input, DatePicker, Radio } from 'antd';
import router from 'next/router';

function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-up-form">
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Tên</span>
          </div>
          <div>
            <Input placeholder="Tên" />
          </div>
        </div>
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Ngày sinh</span>
          </div>
          <div>
            <DatePicker format="DD-MM-YYYY" onChange={() => {}} />
          </div>
        </div>
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Số điện thoại</span>
          </div>
          <div>
            <Input placeholder="Số điện thoại" />
          </div>
        </div>

        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Giới tính</span>
          </div>
          <div>
            <Radio.Group onChange={() => {}} value={1}>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Mật khẩu</span>
          </div>
          <div>
            <Input placeholder="Mật khẩu" />
          </div>
        </div>
        <div className="mb-24">
          <div className="sign-up-form-title mb-8">
            <span>Nhập lại mật khẩu</span>
          </div>
          <div>
            <Input placeholder="Nhập lại mật khẩu" />
          </div>
        </div>
        <div className="mb-8">
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => router.push('/')}
          >
            Đăng ký
          </Button>
        </div>
      </div>
      <style jsx>{`
        .sign-up {
          &-form {
            padding: 0 30px 20px;
            background-color: #fff;
            border-radius: 10px;
            &-title {
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
          div :global(.ant-picker) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default SignUp;
