/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Notfound from '@/app/not-found'
import ContentLeft from '@/components/home/contentLeft'
import { faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

async function getData(slug?: string) {
  try {
    const { data } = await axios(`https://ophim1.com/v1/api/phim/${slug}`)
    if (data.status === 'success') return data.data
    else return null
  } catch (error) {
    return null
  }
}

const MovieDetail = (props: any) => {
  const [screen, setScreen] = useState<boolean>(false)
  const [autoNext, setAutoNext] = useState<boolean>(false)
  const [light, setLight] = useState<boolean>(true)
  const [movie, setMovie] = useState<any>()
  const [film, setFilm] = useState<any>()
  const [episodes, setEpisodes] = useState<number>(0)

  const endIndex = props.params.slug.indexOf('-tap-')
  const result = props.params.slug.substring(endIndex + 1 + 4)
  const resultName = props.params.slug.substring(-1, endIndex)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(resultName)

      const film =
        data &&
        data.item.episodes[0].server_data.forEach((element: any) => {
          if (element.slug === result) {
            setMovie(element.link_embed)
            setEpisodes(element.slug)
          }
        })
      setFilm(data)
    }

    fetchData()
  }, [result, resultName])
  console.log(result)

  const handleClick = () => {
    setScreen(!screen)
  }
  const handleClickLight = () => {
    setLight(!light)
  }
  // if (!film) return <Notfound />
  return (
    <div className="w-full ">
      <div className="grid grid-cols-12 grid-flow-row-dense gap-2 ">
        <div className={`col-span-12 ${screen ? 'col-span-12 ' : 'lg:col-span-9 '} grid-cols-12 grid`}>
          <div
            className={` col-span-12  rounded-md overflow-hidden `}
          >
            <div
              className={`${screen ? 'h-[580px]' : 'lg:h-[450px] h-[300px]'} ${light ? '' : 'z-30 relative'
                }`}
            >
              {movie ? (
                <iframe
                  className="w-full h-full"
                  title=""
                  src={movie}
                  loading="eager"
                  allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex justify-center items-center bg-ne">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ... text-white bg-indigo-500 "
                    viewBox="0 0 24 24"
                  ></svg>
                </div>
              )}
            </div>
            <div
              className={` py-4 px-2 rounded-b-md ${light ? '' : 'bg-black text-white'
                }  justify-between flex`}
            >
              <div className="">
                <span
                  className={` text-center inline-block whitespace-nowrap  p-1  border-2 bg-neutral-600 border-zinc-800 rounded-md  cursor-pointer text-sm mr-2 `}
                >
                  <a href="#" className="">
                    Tập trước
                  </a>
                </span>

                <span
                  className="p-1 hidden lg:inline-block  border-2 bg-neutral-600 border-zinc-800 rounded-md cursor-pointer text-sm mr-2"
                  onClick={handleClick}
                >
                  {screen ? 'Thu nhỏ' : 'Phóng to'}
                </span>
              </div>
              <div className="flex gap-2">
                <span
                  onClick={() => setAutoNext(!autoNext)}
                  className=" text-center  lg:inline-block whitespace-nowrap  p-1  border-2 bg-neutral-600 border-zinc-800 rounded-md cursor-pointer text-sm mr-2"
                >
                  Chuyển tập : {autoNext ? 'On' : 'Off'}
                </span>
                <span
                  onClick={handleClickLight}
                  className={`text-center border-2 flex items-center flex-nowrap gap-2 bg-neutral-600 border-zinc-800 rounded-md  whitespace-nowrap  p-1   z-20 relative  cursor-pointer text-sm mr-2 `}
                >
                  <FontAwesomeIcon icon={faLightbulb} />
                  <p>{light ? ' Tắt đèn' : 'Bật đèn'}</p>
                </span>
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className={`col-span-12 md:col-span-9 py-2 px-2 border-t-default border-zinc-800 `}>
            <span className="text-xl font-normal">Danh sách tập phim</span>
            <div className="content mt-4 flex gap-2 text-sm flex-wrap">
              {film &&
                film.item.episodes[0].server_data.map(
                  (item: any, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={`/xem-phim/${film.item.slug}-tap-${item.slug}`}
                        className={` py-1  text-white rounded-md min-w-[60px] text-center cursor-pointer ${episodes == item.slug
                          ? 'bg-[#A3765D] '
                          : 'bg-neutral-600'
                          }`}
                      >
                        Tập {item.name}
                      </Link>
                    )
                  }
                )}
            </div>
          </div>
          {film && (
            <div
              className={`col-span-12 md:col-span-9 py-2 border-t border-zinc-800 border-opacity-75 pt-3 mt-2 ${light ? '' : 'hidden'
                }`}
            >
              <h1 className="text-2xl font-bold">
                {film.item.name} tập {result}
              </h1>
              <h2 className="pt-1 text-xl">
                {film.item.name} - {film.item.origin_name} ({film.item.lang})
              </h2>
              <h3 className="text-md font-bold">Tập {result}</h3>
              <div className="pt-2">
                <ul className="flex">
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 mr-1 "
                    />
                  </li>
                </ul>
                <div className="text-sm pt-1 font-medium">
                  ( <span>7.7</span>/<span>100 lượt</span>)
                </div>
              </div>
              <div className="mt-2 p-1 text-gray-400 text-justify">
                <div className="pt-2 leading-relaxed inline">
                  <p
                    className="line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: film.item.content }}
                  ></p>
                  <span className="text-[#d98a5e] hover:text-[#e57131] text-sm font-medium whitespace-nowrap">
                    <Link href={`/info-phim/${film.item.slug}`}>Xem thêm</Link>
                  </span>
                </div>
              </div>
            </div>
          )}
          {film && (
            <div className="col-span-12 md:col-span-9 my-2 border-zinc-800  border-opacity-75 border-t">
              <section
                className="py-3 antialiased border-zinc-800  border mt-2"
                id="sectionComment"
              >
                <div className="mx-auto px-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-md font-medium">Bình luận (28)</h2>
                  </div>
                  <div className="mb-6 pb-2 border-b border-zinc-800 text-sm">
                    <div>
                      Vui lòng&nbsp;
                      <Link
                        className="text-[#d98a5e] hover:text-[#e57131]"
                        href={'/login'}
                      >
                        đăng nhập
                      </Link>
                      &nbsp;để bình luận
                    </div>
                  </div>
                  <div className="min-h-18">
                    <div>
                      <article className="text-sm mb-3">
                        <div className="p-3 rounded-lg bg-zinc-800 border-t-2 mt-2 border-gary-300">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <p className="inline-flex items-center mr-3 text-sm font-semibold">
                                <img
                                  className="mr-2 w-8 h-8 rounded-full"
                                  src="https://ui-avatars.com/api/?background=3f3f46&amp;color=fff&amp;name=hiep xuan"
                                  alt="hiep xuan avatar"
                                />
                                hiep xuan
                              </p>
                              <p className="text-zinc-400 text-xs">
                                <span>3 tiếng trước</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm">
                            cn co tap nua ko nhi
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
        <div
          className={`col-span-3 hidden lg:block bg-[#171717] py-4 px-2 rounded-md  col-start-10 ${screen ? 'row-start-2 row-span-1' : 'row-start-1 row-span-2'}`}
        >
          <ContentLeft />
        </div>
      </div>
      {light ? (
        ''
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-cover"></div>
      )}
    </div>
  )
}

export default MovieDetail
