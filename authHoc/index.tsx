import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const authHoc = (WrappedComponent: any) => {
  const FuncComponent = ({ children, ...props }: { children: any }) => {
    const router = useRouter();
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/auth');
      } else {
        setisLoading(false);
      }
    }, []);

    return (
      <>
        {!isLoading && (
          <WrappedComponent {...props}>{children}</WrappedComponent>
        )}
      </>
    );
  };
  return FuncComponent;
};

export default authHoc;
