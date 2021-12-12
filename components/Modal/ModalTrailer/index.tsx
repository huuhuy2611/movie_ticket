import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';

interface IProps {
  setShowModal: (arg0: boolean) => void;
  linkTrailer: string;
}

function ModalTrailer(props: IProps) {
  const { setShowModal, linkTrailer } = props;

  return (
    <div>
      <Modal
        centered
        visible
        width={1000}
        footer={null}
        onCancel={() => setShowModal(false)}
        closeIcon={
          <CloseOutlined
            style={{
              color: 'white',
              fontSize: '20px',
              position: 'absolute',
              right: '0',
              top: '0',
            }}
          />
        }
      >
        <iframe
          className="iframe-trailer"
          title="trailer"
          src={linkTrailer}
          allowFullScreen
          frameBorder="0"
        />
      </Modal>
      <style jsx>{`
        .iframe-trailer {
          height: 80vh;
          width: 100%;
          border: 0;
          .ytp-chrome-top-buttons {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default ModalTrailer;
