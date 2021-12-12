import React, { useEffect, useState } from 'react';
import ListCardFilm from '@/components/ListCardFilm';
import {
  getListMovies,
  getListMoviesAvailable,
  getListMoviesUpComing,
} from '@/services/movie.service';
import { IFoundItem } from '@/common/interface/movie.interface';
import { Button, Input } from 'antd';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { GENRE_TYPE_ARRAY } from '@/common/constant/regex';

const { Option } = Select;

function HomeLayout() {
  const { t } = useTranslation();

  const [dataMoviesSearch, setDataMoviesSearch] = useState<IFoundItem[]>([]);
  const [dataMoviesAvailable, setDataMoviesAvailable] = useState<IFoundItem[]>(
    []
  );
  const [dataMoviesupComing, setDataMoviesupComing] = useState<IFoundItem[]>(
    []
  );
  const [dataSearch, setDataSearch] = useState({
    name: '',
    tags: [],
  });

  const getDataMovies = async () => {
    const resAvailable = await getListMoviesAvailable();
    const resUpComing = await getListMoviesUpComing();
    if (resAvailable?.foundItems) {
      setDataMoviesAvailable(resAvailable?.foundItems);
    }
    if (resUpComing?.foundItems) {
      setDataMoviesupComing(resUpComing?.foundItems);
    }
  };

  const handleChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectTag = (tag: any) => {
    setDataSearch((prev: any) => ({
      ...prev,
      tags: tag,
    }));
  };

  const handleSearch = async () => {
    const dataGet = {
      Keywords: dataSearch?.name,
      Tag: [...dataSearch?.tags],
      Limit: 8,
    };
    const res = await getListMovies(dataGet);
    if (res?.foundItems) {
      setDataMoviesSearch(res.foundItems);
    }
  };

  useEffect(() => {
    getDataMovies();
  }, []);

  return (
    <div className="home">
      <div className="filter">
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          onChange={handleSelectTag}
          style={{ width: '47%', marginRight: '16px' }}
        >
          {GENRE_TYPE_ARRAY.map((tag) => (
            <Option key={tag} value={tag}>
              {t(tag)}
            </Option>
          ))}
        </Select>
        <Input
          style={{ width: '30%', marginRight: '16px' }}
          name="name"
          placeholder="One Piece"
          onChange={handleChangeSearchName}
        ></Input>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="home-main">
        {dataMoviesSearch?.length > 0 && (
          <div className="now-showing">
            <h1 style={{ position: 'relative' }}>
              <span className="img-now-showing">
                <img
                  alt="Now showing"
                  src="/images/now_showing_2.png"
                  width="20"
                  height="20"
                />
              </span>
              Kết quả tìm kiếm
            </h1>
            <ListCardFilm data={dataMoviesSearch} />
          </div>
        )}
        <div className="now-showing">
          <h1 style={{ position: 'relative' }}>
            <span className="img-now-showing">
              <img
                alt="Now showing"
                src="/images/now_showing_2.png"
                width="20"
                height="20"
              />
            </span>
            Đang chiếu
          </h1>
          <ListCardFilm data={dataMoviesAvailable} />
        </div>
        <div className="now-showing">
          <h1 style={{ position: 'relative' }}>
            <span className="img-now-showing">
              <img
                alt="Now showing"
                src="/images/coming_soon.png"
                width="20"
                height="20"
              />
            </span>
            Sắp chiếu
          </h1>
          <ListCardFilm data={dataMoviesupComing} />
        </div>
      </div>

      <style jsx>{`
        .filter {
          margin-top: 20vh;
          display: flex;
          padding-left: 12%;
        }
        .home {
          .home-main {
            padding: 3% 12%;
            .now-showing {
              margin-bottom: 5%;
              z-index: 10;
            }
            .img-now-showing {
              padding-right: 10px;
            }
            img {
              margin-bottom: 8px;
            }
          }
          h1 {
            font-size: 25px;
          }
        }
      `}</style>
    </div>
  );
}

export default HomeLayout;
