/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import {
  IData,
  IResponseMoviceDetail,
} from '@/common/interface/movie.interface';
import { getMovieDetails } from '@/services/movie.service';

function MovieDetail() {
  const [dataMovieDetail, setDataMovieDetail] = useState<IData>();

  useEffect(() => {
    const getMovieDetail = getMovieDetails(
      '619d1da261a9789154313d1e'
    ) as IResponseMoviceDetail;
    if (getMovieDetail?.message === 'success') {
      setDataMovieDetail(getMovieDetail?.data);
    }
  }, []);

  return (
    <div className="movie-detail">
      <div className="backdrop" />
      <section className="section">
        <div className="container shiftup">
          <div className="tt-details columns is-variable is-8">
            <div className="column is-one-quarter-tablet">
              <p className="cover has-text-centered">
                <img
                  alt="img"
                  src="https://image.tmdb.org/t/p/w342/iy3Q3QcarTjvsE5ZzPCABZLH4mJ.jpg"
                />
              </p>
              <a
                className="watch button is-danger is-medium is-fullwidth"
                href="/checkout"
              >
                Mua vé ngay
              </a>
            </div>
            <div className="column main">
              <h1 className="title is-2">Injustice</h1>
              <h2 className="subtitle is-4">
                Injustice{/* */} (<a href="/year/2021">2021</a>)
              </h2>
              <div className="meta">
                <span>1 giờ 18 phút</span>
                <span
                  className="content-rating tag is-dark has-text-weight-bold"
                  title="Có thể có cảnh bạo lực, ngôn ngữ không hay"
                >
                  R
                </span>
              </div>
              <div className="meta">
                <span className="imdb-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                      fill="#ffc107"
                    />
                    <path
                      d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                      fill="#263238"
                    />
                  </svg>
                </span>
                <span className="has-text-weight-bold" />
              </div>
              <div className="level genres">
                <div className="level-left">
                  <div className="level-item">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://xemphim.fun/movie/injustice~16876"
                      className="fb-share button is-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
                      </svg>{' '}
                      Chia sẻ
                    </a>
                  </div>
                  <div className="level-item">
                    <div className="dropdown is-hoverable">
                      <div className="dropdown-trigger">
                        <button className="collection-btn button is-success unadded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
                          </svg>{' '}
                          {/* */}Bộ sưu tập
                        </button>
                      </div>
                      <div
                        className="dropdown-menu"
                        id="dropdown-menu"
                        role="menu"
                      >
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            Thêm vào danh sách phim <strong>Đã Xem</strong>
                          </a>
                          <a href="#" className="dropdown-item">
                            Thêm vào danh sách phim <strong>Muốn xem</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item buttons">
                    <a
                      className="button is-link is-small is-rounded is-inverted is-outlined"
                      href="/genre/vien-tuong"
                    >
                      Viễn tưởng
                    </a>
                    <a
                      className="button is-link is-small is-rounded is-inverted is-outlined"
                      href="/genre/hanh-dong"
                    >
                      Hành động
                    </a>
                    <a
                      className="button is-link is-small is-rounded is-inverted is-outlined"
                      href="/genre/ky-ao"
                    >
                      Kỳ ảo
                    </a>
                    <a
                      className="button is-link is-small is-rounded is-inverted is-outlined"
                      href="/genre/hoat-hinh"
                    >
                      Hoạt hình
                    </a>
                  </div>
                </div>
              </div>
              <dl className="horizontal-dl">
                <dt>Đạo diễn</dt>
                <dd className="csv">
                  <a href="/person/matt-peters~2370">Matt Peters</a>
                </dd>
                <dt>Kịch bản</dt>
                <dd className="csv">
                  <a href="/person/ernie-altbacker~54038">Ernie Altbacker</a>
                </dd>
                <dt>Quốc gia</dt>
                <dd className="csv">
                  <a href="/country/US">Mỹ</a>
                </dd>
                <dt>Khởi chiếu</dt>
                <dd>10/9/2021</dd>
              </dl>
              <div className="intro has-text-grey-light">
                Khi Lois Lane bị giết, một Siêu nhân không mảnh vải che thân
                quyết định kiểm soát Trái đất. Quyết tâm ngăn chặn anh ta,
                Batman tạo ra một đội các anh hùng chiến đấu tự do. Nhưng khi
                các siêu anh hùng ra trận, liệu thế giới có tồn tại được không?
              </div>
              <h3 className="section-header">Diễn viên</h3>
              <div className="cast">
                <div className="slick-slider slick-initialized" dir="ltr">
                  <div
                    className="slick-arrow slick-prev slick-disabled"
                    style={{ display: 'block' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                    </svg>
                  </div>
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{ width: '300%', left: '0%' }}
                    >
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/justin-hartley~53925"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/oo7vqWz30pA1tY6quUOnS6O0AgB.jpg"
                                  alt="Justin Hartley"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/justin-hartley~53925"
                              >
                                Justin Hartley
                              </a>
                            </p>
                            <p className="character">
                              Clark Kent / Superman / Kal-El (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/anson-mount~13552"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/qU6GGvUqwFMbfK2Bk7Gg7dK1KD6.jpg"
                                  alt="Anson Mount"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/anson-mount~13552"
                              >
                                Anson Mount
                              </a>
                            </p>
                            <p className="character">
                              Bruce Wayne / Batman (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/laura-bailey~23866"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/geVQ9DnYTU66xULx4W4jmBh68w3.jpg"
                                  alt="Laura Bailey"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/laura-bailey~23866"
                              >
                                Laura Bailey
                              </a>
                            </p>
                            <p className="character">
                              Lois Lane / Rama Kushna (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/janet-varney~36515"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/3oMQf9mtVXXXKF2FhUH7kCIOOIf.jpg"
                                  alt="Janet Varney"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/janet-varney~36515"
                              >
                                Janet Varney
                              </a>
                            </p>
                            <p className="character">
                              Diana Prince / Wonder Woman (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/zach-callison~19171"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/gGvcqBYFa0WNyx72FOEMfpSFpKS.jpg"
                                  alt="Zach Callison"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/zach-callison~19171"
                              >
                                Zach Callison
                              </a>
                            </p>
                            <p className="character">
                              Damian Wayne / Robin / Jimmy Olsen (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/anika-noni-rose~4216"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/d7aLtuNXBqVtqNnZl8wXsFV4ML5.jpg"
                                  alt="Anika Noni Rose"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/anika-noni-rose~4216"
                              >
                                Anika Noni Rose
                              </a>
                            </p>
                            <p className="character">
                              Selina Kyle / Catwoman (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/brian-t-delaney~1121"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/zzkAnz4HcnUIDJKTxuL0HS7uHk2.jpg"
                                  alt="Brian T. Delaney"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/brian-t-delaney~1121"
                              >
                                Brian T. Delaney
                              </a>
                            </p>
                            <p className="character">
                              Hal Jordan / Green Lantern (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/brandon-michael-hall~144392"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/aKWiTsuHNA3JcEp9f8OvGJ5EqWQ.jpg"
                                  alt="Brandon Michael Hall"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/brandon-michael-hall~144392"
                              >
                                Brandon Michael Hall
                              </a>
                            </p>
                            <p className="character">
                              Victor Stone / Cyborg (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={8}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/andrew-morgado~670"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/rDkWTPcsFtw5MQCi1qxSXXZlXG2.jpg"
                                  alt="Andrew Morgado"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/andrew-morgado~670"
                              >
                                Andrew Morgado
                              </a>
                            </p>
                            <p className="character">
                              Mirror Master Soldier (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={9}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/edwin-hodge~4588"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/wbwevwzat2iy42QilcRRXshAkLv.jpg"
                                  alt="Edwin Hodge"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/edwin-hodge~4588"
                              >
                                Edwin Hodge
                              </a>
                            </p>
                            <p className="character">
                              Michael Holt / Mr. Terrific / Waylon Jones /
                              Killer Croc (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={10}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/oliver-hudson~18169"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/kvRmZBKs7xMZwsTu37adKPF8PKG.jpg"
                                  alt="Oliver Hudson"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/oliver-hudson~18169"
                              >
                                Oliver Hudson
                              </a>
                            </p>
                            <p className="character">
                              Patrick `&apos;`Eel`&apos;` O`&apos;`Brian /
                              Plastic Man (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={11}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/gillian-jacobs~23653"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/sbZVI3F2t5CjmRANwHk3X6iOQpt.jpg"
                                  alt="Gillian Jacobs"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/gillian-jacobs~23653"
                              >
                                Gillian Jacobs
                              </a>
                            </p>
                            <p className="character">Harley Quinn (voice)</p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={12}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/yuri-lowenthal~879"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/rEgMZ15WDwcsBOxzKGC1eX0J6SS.jpg"
                                  alt="Yuri Lowenthal"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/yuri-lowenthal~879"
                              >
                                Yuri Lowenthal
                              </a>
                            </p>
                            <p className="character">
                              Barry Allen / The Flash / Shazam / Mirror Master
                              (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={13}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/derek-phillips~135990"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/r8ylzYKi1mdOanR14899kTzD76x.jpg"
                                  alt="Derek Phillips"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/derek-phillips~135990"
                              >
                                Derek Phillips
                              </a>
                            </p>
                            <p className="character">
                              Dick Grayson / Nightwing / Arthur Curry / Aquaman
                              (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={14}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/kevin-pollak~16153"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/2S5eVHJvGWWtjp6oUZXngQ7MKoD.jpg"
                                  alt="Kevin Pollak"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/kevin-pollak~16153"
                              >
                                Kevin Pollak
                              </a>
                            </p>
                            <p className="character">
                              Joker / Jonathan Kent (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={15}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a className="image" href="/person/reid-scott~186">
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/kBAeDUDA7XJRXFLGNALlpE5d3lA.jpg"
                                  alt="Reid Scott"
                                />
                              </figure>
                            </a>
                            <p>
                              <a className="name" href="/person/reid-scott~186">
                                Reid Scott
                              </a>
                            </p>
                            <p className="character">
                              Oliver Queen / Green Arrow / Victor Zsasz (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={16}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/faran-tahir~10016"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/eVYiHKj9OGRn3MeRqJuwROFqIkg.jpg"
                                  alt="Faran Tahir"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/faran-tahir~10016"
                              >
                                Faran Tahir
                              </a>
                            </p>
                            <p className="character">
                              Ra&apos;s al Ghul (vocie)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={17}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: 'none', width: '5.555555555555555%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <a
                              className="image"
                              href="/person/fred-tatasciore~858"
                            >
                              <figure>
                                <img
                                  src="https://image.tmdb.org/t/p/w138_and_h175_face/busoEz4khUJ0hOoKHexjXwGrsit.jpg"
                                  alt="Fred Tatasciore"
                                />
                              </figure>
                            </a>
                            <p>
                              <a
                                className="name"
                                href="/person/fred-tatasciore~858"
                              >
                                Fred Tatasciore
                              </a>
                            </p>
                            <p className="character">
                              Nathaniel Adam / Captain Atom (voice)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-arrow slick-next"
                    style={{ display: 'block' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="section-header">Trailer</h3>
              <div className="trailers">
                <div className="slick-slider slick-initialized">
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{ width: '50%', left: '0%' }}
                    >
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '50%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="clip">
                              <img
                                alt="img"
                                src="//img.youtube.com/vi/EofvPQAyYp8/mqdefault.jpg"
                              />
                              <div className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: 'none', width: '50%' }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="clip">
                              <img
                                alt="img"
                                src="//img.youtube.com/vi/erZnK6i2JLw/mqdefault.jpg"
                              />
                              <div className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .backdrop {
            background-image: url(https://image.tmdb.org/t/p/original/7bBRldu2hUXQ1tyN6QFUkpBtUKT.jpg);
            height: 600px;
            background-size: cover;
            background-position: 50% 0;
            background-repeat: no-repeat;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              width: 100%;
              top: 0;
              bottom: 0;
              background-color: rgba(2, 13, 24, 0.75);
            }
          }
          .section {
            padding: 3rem 0.8rem;
            background-color: #06121e;
          }
        `}
      </style>
    </div>
  );
}

export default MovieDetail;
