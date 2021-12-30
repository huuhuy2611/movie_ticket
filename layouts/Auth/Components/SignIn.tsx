import React, { useState } from 'react';
import { Button, Input } from 'antd';
import router from 'next/router';
import Form from 'antd/lib/form/Form';
import { IParamsLogin, IResponseAuth } from '@/common/interface/auth.interface';
import { login } from '@/services/auth.service';
import { ToastError, ToastSuccess } from '@/components/Toast/toast';

function SignIn() {
  const [dataLogin, setDataLogin] = useState<IParamsLogin>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: false }));
    setDataLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = (): boolean => {
    let isError = false;
    if (!dataLogin?.email) {
      setErrors((prev) => ({ ...prev, email: true }));
      isError = true;
    }
    if (!dataLogin?.password) {
      setErrors((prev) => ({ ...prev, password: true }));
      isError = true;
    }
    return isError;
  };

  const handleLogin = async () => {
    const checkValidation = handleValidation();
    if (!checkValidation) {
      const res = (await login(dataLogin)) as IResponseAuth;
      if (res?.authenticationToken) {
        ToastSuccess('Đăng nhập thành công!');
        router.push('/');
        return;
      }
      ToastError('Email hoặc password không đúng');
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in-form">
        <Form
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
        >
          <div className="mb-16">
            <div className="sign-in-form-email-title mb-8">
              <span>Email</span>
            </div>
            <div>
              <Input
                name="email"
                onChange={handleChangeInput}
                placeholder="Điền email..."
                style={{ borderColor: `${errors?.email ? 'red' : ''}` }}
              />
            </div>
          </div>
          <div className="mb-24">
            <div className="sign-in-form-password-title mb-8">
              <span>Mật khẩu</span>
            </div>
            <div>
              <Input
                name="password"
                onChange={handleChangeInput}
                placeholder="Điền mật khẩu..."
                type="password"
                style={{ borderColor: `${errors?.password ? 'red' : ''}` }}
              />
            </div>
          </div>
          <div className="mb-8">
            <Button
              style={{ width: '100%' }}
              type="primary"
              onClick={() => handleLogin()}
            >
              Đăng nhập
            </Button>
          </div>
        </Form>

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

export default SignIn;
