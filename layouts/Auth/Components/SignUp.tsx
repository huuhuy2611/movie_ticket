import React, { useState } from 'react';
import { Button, Input } from 'antd';
import router from 'next/router';
import {
  IParamsSignUp,
  IResponseAuth,
} from '@/common/interface/auth.interface';
import { register } from '@/services/auth.service';
import { ToastContainer } from 'react-toastify';
import { ToastSuccess } from '@/components/Toast/toast';
import { regexEmail } from '@/common/constant/regex';

function SignUp() {
  const [dataSignUp, setDatasignUp] = useState<IParamsSignUp>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [checkPass, setCheckPass] = useState(false);
  const [textErrors, setTextErrors] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setTextErrors((prev) => ({ ...prev, password: '' }));
    }
    if (name === 'email') {
      setTextErrors((prev) => ({ ...prev, email: '' }));
    }
    setDatasignUp((prev) => ({ ...prev, [name]: value }));
  };

  const checkEmail = () => {
    if (!regexEmail.test(dataSignUp.email)) {
      setTextErrors((prev) => ({
        ...prev,
        email: 'Định dạng email không đúng, vui lòng nhập lại!',
      }));
    }
  };

  const handleCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === dataSignUp?.password) {
      setCheckPass(true);
    } else setCheckPass(false);
  };

  const handleSignUp = async () => {
    if (!checkPass) {
      setTextErrors((prev) => ({
        ...prev,
        password: 'Vui lòng nhập đúng mật khẩu',
      }));
      return;
    }
    const res = (await register(dataSignUp)) as IResponseAuth;

    if (res?.authenticationToken) {
      ToastSuccess('Đăng ký thành công!');
      router.push('/');
      return;
    }
  };

  return (
    <div className="sign-up">
      <ToastContainer />
      <div className="sign-up-form">
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Tên</span>
          </div>
          <div>
            <Input name="name" placeholder="Tên" onChange={handleChangeInput} />
          </div>
        </div>
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Email</span>
          </div>
          <div>
            <Input
              style={{ borderColor: `${textErrors?.email ? 'red' : ''}` }}
              name="email"
              placeholder="Email"
              onChange={handleChangeInput}
              onBlur={checkEmail}
            />
            {textErrors?.email && (
              <div className="text-error">{textErrors?.email}</div>
            )}
          </div>
        </div>
        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Số điện thoại</span>
          </div>
          <div>
            <Input
              placeholder="Số điện thoại"
              name="phoneNumber"
              onChange={handleChangeInput}
              type="number"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="sign-up-form-title mb-8">
            <span>Mật khẩu</span>
          </div>
          <div>
            <Input
              placeholder="Mật khẩu"
              name="password"
              onChange={handleChangeInput}
              type="password"
            />
          </div>
        </div>
        <div className="mb-24">
          <div className="sign-up-form-title mb-8">
            <span>Nhập lại mật khẩu</span>
          </div>
          <div>
            <Input
              style={{ borderColor: `${textErrors?.password ? 'red' : ''}` }}
              placeholder="Nhập lại mật khẩu"
              name="re-password"
              onChange={handleCheckInput}
              type="password"
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter') {
                  handleSignUp();
                }
              }}
            />
            {textErrors?.password && (
              <div className="text-error">{textErrors?.password}</div>
            )}
          </div>
        </div>
        <div className="mb-8">
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => handleSignUp()}
          >
            Đăng ký
          </Button>
        </div>
      </div>
      <style jsx>{`
        .sign-up {
          .text-error {
            color: red;
            padding-top: 6px;
            font-size: 13px;
          }
          .border-error {
            border: 1px solid red !important;
          }
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
          div :global(.ant-input) {
            &:focus {
              box-shadow: unset;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default SignUp;
