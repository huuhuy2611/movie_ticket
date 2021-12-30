import { getHistoryBuyTicket } from '@/services/movie.service';
import React, { useEffect, useState } from 'react';

function History() {

  const [dataHistory, setDataHistory] = useState([]);

  const getListReservations = async () => {
    const res = await getHistoryBuyTicket();
    if (res?.success) {
      setDataHistory(res?.foundItems);
    }
  };

  useEffect(() => {
    getListReservations();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#0b0b0b',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${'/images/movie-details-bg.jpg'})`,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 0,
        }}
      />
      <div className="history">
        <div className="title">Lịch sử đặt vé</div>
      </div>
      <style jsx>{`
        .history {
          position: relative;
          margin-top: 20vh;
          padding: 0 8%;
          .title {
            color: #fff;
          }
        }
      `}</style>
    </div>
  );
}

export default History;
