'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FaEnvelope, FaInstagram, FaPhone, FaTelegramPlane, FaVk } from 'react-icons/fa'

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null)
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className='bg-gray-50'>
      {/* Первый блок: (облако речи + h1) + (изображение)  */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='flex flex-col justify-center items-center bg-gradient-to-b from-blue-800 to-blue-600 text-white text-center px-12 pt-40 py-12 min-h-screen'
      >
        {/* Облачко речи */}
        <div className='relative flex flex-col items-center mb-12'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            className='absolute -top-26 ml-25 sm:-top-27 sm:ml-32 sm:-right-32'
          >
            <h1 className='text-[10px] sm:text-base bg-white text-black p-3 rounded-xl shadow-lg speech-bubble max-w-[220px] sm:max-w-sm text-center'>
              Здравствуйте, меня зовут Ангелина, я ипотечный брокер
            </h1>
          </motion.div>

          {/* Фото */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
            className='z-10'
          >
            <Image
              width={200}
              height={200}
              src='https://img.freepik.com/premium-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-businesswoman-real-estate-broker-showing-clients-good-deal-carry-laptop-hand_1258-59119.jpg'
              alt='Ипотечный брокер Ангелина Крукович'
              className='rounded-full object-cover w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] border-4 border-white shadow-lg'
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className='text-xl sm:text-2xl mt-0 mb-6 max-w-md font-medium'
        >
          Я помогу вам найти лучший ипотечный вариант!
        </motion.p>

        <motion.a
          href={'#contact'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className='bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 mb-6 shadow-md hover:shadow-lg inline-block'
          onClick={handleScrollToContact}
        >
          Связаться со мной
        </motion.a>
      </motion.div>

      {/* Второй блок: услуги */}
      <section className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-center text-blue-800 mb-12'>Услуги</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:scale-105 cursor-pointer'>
            <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-blue-800 mb-2'>Консультации по ипотеке</h3>
            <p className='text-gray-600'>Помогу разобраться в условиях и выбрать оптимальный вариант.</p>
          </div>
          <div className='bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:scale-105 cursor-pointer'>
            <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-blue-800 mb-2'>Выбор банка</h3>
            <p className='text-gray-600'>Сравнение предложений банков для максимальной выгоды.</p>
          </div>
          <div className='bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:scale-105 cursor-pointer'>
            <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-blue-800 mb-2'>Подготовка документов</h3>
            <p className='text-gray-600'>Полный комплект документов для одобрения ипотеки.</p>
          </div>
          <div className='bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:scale-105 cursor-pointer'>
            <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-blue-800 mb-2'>Сопровождение</h3>
            <p className='text-gray-600'>Контроль всех этапов сделки до получения кредита.</p>
          </div>
        </div>
      </section>

      {/* Блок сертификатов */}
      {/*<section className='bg-blue-50 py-16 px-4'>*/}
      {/*  <div className='max-w-6xl mx-auto'>*/}
      {/*    <h2 className='text-3xl font-bold text-center text-blue-800 mb-12'>*/}
      {/*      Сертификаты и лицензии*/}
      {/*    </h2>*/}
      {/*    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>*/}
      {/*      /!* Заглушка сертификата 1 *!/*/}
      {/*      <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center'>*/}
      {/*        <div className='w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500'>*/}
      {/*          <span>Сертификат 1</span>*/}
      {/*        </div>*/}
      {/*        <h3 className='text-lg font-semibold text-blue-800 text-center'>*/}
      {/*          Сертификат ипотечного брокера*/}
      {/*        </h3>*/}
      {/*        <p className='text-gray-600 text-center text-sm mt-2'>*/}
      {/*          №123456 от 12.05.2022*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      /!* Заглушка сертификата 2 *!/*/}
      {/*      <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center'>*/}
      {/*        <div className='w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500'>*/}
      {/*          <span>Сертификат 2</span>*/}
      {/*        </div>*/}
      {/*        <h3 className='text-lg font-semibold text-blue-800 text-center'>*/}
      {/*          Лицензия финансового консультанта*/}
      {/*        </h3>*/}
      {/*        <p className='text-gray-600 text-center text-sm mt-2'>*/}
      {/*          №654321 от 18.11.2021*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      /!* Заглушка сертификата 3 *!/*/}
      {/*      <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center'>*/}
      {/*        <div className='w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500'>*/}
      {/*          <span>Сертификат 3</span>*/}
      {/*        </div>*/}
      {/*        <h3 className='text-lg font-semibold text-blue-800 text-center'>*/}
      {/*          Сертификат повышения квалификации*/}
      {/*        </h3>*/}
      {/*        <p className='text-gray-600 text-center text-sm mt-2'>*/}
      {/*          №789012 от 03.03.2023*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Секция с преимуществами */}
      <section className='bg-white py-16 px-4'>
        <h2 className='text-3xl font-bold text-center text-blue-800 mb-12'>Почему стоит обратиться ко мне</h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              Быстро
            </h4>
            <p className='text-gray-700'>Оформление ипотеки в 3 раза быстрее самостоятельного обращения в банк</p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Выгодно
            </h4>
            <p className='text-gray-700'>Экономия до 1,5% годовых за счет доступа ко всем банкам на рынке</p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              Надежно
            </h4>
            <p className='text-gray-700'>Юридическая проверка всех документов и условий договора</p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                />
              </svg>
              Бесплатно
            </h4>
            <p className='text-gray-700'>Для клиента - оплата моих услуг производится банком</p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Удобно
            </h4>
            <p className='text-gray-700'>Дистанционное оформление без посещения офисов</p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <h4 className='text-xl font-semibold text-blue-800 mb-3 flex items-center'>
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              Персонально
            </h4>
            <p className='text-gray-700'>Подбор программ с учетом вашей ситуации и возможностей</p>
          </div>
        </div>
      </section>

      {/* Секция отзывов */}
      <section className='bg-gray-50 py-16 px-4'>
        <h2 className='text-3xl font-bold text-center text-blue-800 mb-12'>Отзывы моих клиентов</h2>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-4'>
                АК
              </div>
              <div>
                <h4 className='font-semibold text-blue-800'>Анна К.</h4>
                <div className='flex text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-600 italic'>
              {
                'Очень благодарна за помощь в оформлении ипотеки. Все сделали быстро и профессионально. Особенно порадовало, что нашли банк со ставкой ниже, чем я сама смогла найти.'
              }
            </p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-4'>
                ИС
              </div>
              <div>
                <h4 className='font-semibold text-blue-800'>Игорь С.</h4>
                <div className='flex text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-600 italic'>
              {
                'Работали с несколькими брокерами, но здесь реально помогли. Нашли решение, когда другие говорили, что шансов нет. Рекомендую!'
              }
            </p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-4'>
                МР
              </div>
              <div>
                <h4 className='font-semibold text-blue-800'>Марина Р.</h4>
                <div className='flex text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-600 italic'>
              {
                'Как ИП было сложно получить ипотеку, но специалисты нашли банк, который одобрил заявку. Все объяснили, сопроводили на каждом этапе. Спасибо!'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Футер с контактами */}
      <footer id='contact' ref={contactRef} className='bg-blue-800 text-black py-12 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12 text-white'>Свяжитесь со мной</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8'>
            <div className='flex flex-col items-center bg-white bg-opacity-10 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 min-w-[220px]'>
              <div className='w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 mb-4'>
                <FaPhone className='text-white w-7 h-7' />
              </div>
              <h3 className='text-lg font-semibold mb-2 text-black'>Телефон</h3>
              <a
                href='tel:+79067089334'
                className='text-black hover:text-blue-500 font-medium text-base mb-1 transition-colors'
              >
                +7 (906) 708-93-34
              </a>
              <a
                href='tel:+79251313178'
                className='text-black hover:text-blue-500 font-medium text-base transition-colors'
              >
                +7 (925) 131-31-78
              </a>
            </div>
            <div className='flex flex-col items-center bg-white bg-opacity-10 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 min-w-[220px]'>
              <div className='w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 mb-4'>
                <FaEnvelope className='text-white w-7 h-7' />
              </div>
              <h3 className='text-lg font-semibold mb-2 text-back'>Email</h3>
              <a
                href='mailto:info_angel@ipoteka-broker.ru'
                className='text-black hover:text-blue-500 font-medium text-base mb-1 transition-colors'
              >
                info_angel@ipoteka-broker.ru
              </a>
              <a
                href='mailto:angel@ipoteka-broker.ru'
                className='text-black hover:text-blue-500 font-medium text-base transition-colors'
              >
                angel@ipoteka-broker.ru
              </a>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <h3 className='text-xl font-semibold mb-4 text-white'>Мы в соцсетях</h3>
            <div className='flex justify-center space-x-6'>
              <a href='#' className='text-white hover:text-blue-200 transition duration-300'>
                <FaVk className='w-6 h-6' />
              </a>
              <a href='#' className='text-white hover:text-blue-200 transition duration-300'>
                <FaTelegramPlane className='w-6 h-6' />
              </a>
              <a href='#' className='text-white hover:text-blue-200 transition duration-300'>
                <FaInstagram className='w-6 h-6' />
              </a>
            </div>
          </div>

          <div className='mt-12 pt-6 border-t border-blue-700 text-center text-sm text-blue-200'>
            <p>© {new Date().getFullYear()} Ипотечный брокер. Все права защищены.</p>
            <p className='mt-2'>
              <a href='/privacy' className='hover:underline'>
                Политика конфиденциальности
              </a>{' '}
              |
              <a href='/offer' className='hover:underline ml-2'>
                Договор оферты
              </a>
            </p>
            <p className='mt-4 text-blue-300'>
              Сайт разработал{' '}
              <a
                href='https://www.vronskyvitaly.ru/'
                target='_blank'
                className='underline hover:text-blue-100 transition-colors'
              >
                Vitali Vronsky
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
