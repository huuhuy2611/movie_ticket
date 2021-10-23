import React from 'react';
import Image from 'next/image';
import CardFilm from '../CardFilm';

const mockDataListFilms = [
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
  { name: 'Dune', img: '/images/test.jpg' },
];

function ListCardFilm() {
  // const [numberShow, setNumberShow] = useState(8);

  // useEffect(() => {
  //   // call api get list film
  //   if (mockDataListFilms.length > 8) {

  //   }
  // }, []);

  return (
    <div className="list-card">
      <div className="list-card-content">
        {mockDataListFilms
          .slice(1, Math.random() * 7 + 3)
          .map((item: { name: string; img: string }) => (
            <div className="list-card-content_item">
              <CardFilm content={item} />
            </div>
          ))}
      </div>

      <Image
        alt="Show more"
        src="/images/arrow_show_more.png"
        width={50}
        height={50}
        color="white"
        // className="color-fff"
      />
      <style jsx>{`
        .list-card {
          text-align: center;
        }
        .list-card-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .list-card-content_item {
          width: 16.66%;
          padding: 15px;
        }
      `}</style>
    </div>
  );
}

export default ListCardFilm;
