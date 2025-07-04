export default function PrivacyPage() {
  return (
    <main className='bg-gray-50 min-h-screen py-16 px-4'>
      <div className='max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8'>
        <h1 className='text-2xl font-bold text-blue-800 mb-6 text-center'>Политика конфиденциальности</h1>
        <p className='text-gray-700 mb-4'>
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей
          сайта <span className='font-semibold'>Ипотечный брокер</span> (далее — Сайт).
        </p>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>1. Общие положения</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>Использование Сайта означает согласие пользователя с настоящей Политикой.</li>
          <li>В случае несогласия с условиями Политики пользователь должен прекратить использование Сайта.</li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>2. Персональные данные</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Сайт может собирать следующие данные: имя, телефон, email, иные сведения, предоставленные пользователем
            добровольно.
          </li>
          <li>Данные используются исключительно для связи с пользователем и предоставления консультаций по ипотеке.</li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>3. Защита данных</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Сайт принимает необходимые организационные и технические меры для защиты персональных данных от
            неправомерного доступа, изменения, раскрытия или уничтожения.
          </li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>4. Передача данных третьим лицам</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством
            РФ.
          </li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>5. Использование файлов cookie</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>Сайт может использовать файлы cookie для улучшения работы и анализа посещаемости.</li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>6. Изменение политики</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Администрация Сайта вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента
            публикации на Сайте.
          </li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>7. Контакты</h2>
        <p className='text-gray-700 mb-2'>
          По вопросам обработки персональных данных вы можете обратиться по email:{' '}
          <a href='mailto:info_angel@ipoteka-broker.ru' className='text-blue-700 underline'>
            info_angel@ipoteka-broker.ru
          </a>
        </p>
        <p className='text-xs text-gray-400 mt-8 text-center'>
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>
      </div>
    </main>
  )
}
