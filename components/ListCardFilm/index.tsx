import React from 'react';
import CardFilm from '../CardFilm';

const mockDataListFilms = [
  {
    id: 1,
    name: 'Godzilla vs. Kong',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 2,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 3,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 4,
    name: 'Godzilla vs. Kong',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 5,
    name: 'Godzilla vs. Kong',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 6,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 7,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 8,
    name: 'Godzilla vs. Kong',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 9,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 10,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 11,
    name: 'Godzilla vs. Kong',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 12,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 13,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 14,
    name: 'Godzilla vs. Kong',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 15,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 16,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 17,
    name: 'Dune',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 18,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 19,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 20,
    name: 'One Piece: Hòn Đảo Vàng',
    img: '/images/test-2.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
  {
    id: 21,
    name: 'Baby Boss 2: Gia đình kinh doanh',
    img: '/images/test.jpg',
    link: 'https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&showinfo=0',
  },
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
          .map(
            (item: { name: string; img: string; link: string; id: number }) => (
              <div className="list-card-content_item">
                <CardFilm content={item} />
              </div>
            )
          )}
      </div>

      {/* <Image
        alt="Show more"
        src="/images/arrow_show_more.png"
        width={50}
        height={50}
        color="white"
        // className="color-fff"
      /> */}
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
