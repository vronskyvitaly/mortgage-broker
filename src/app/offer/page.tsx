export default function OfferPage() {
  return (
    <main className='bg-gray-50 min-h-screen py-16 px-4'>
      <div className='max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8'>
        <h1 className='text-2xl font-bold text-blue-800 mb-6 text-center'>Публичная оферта</h1>
        {/* TODO: добавить адрес сайта */}
        <p className='text-gray-700 mb-4'>
          Настоящий документ является официальным предложением (публичной офертой) сайта{' '}
          <span className='font-semibold'> Ипотечный брокер</span> (далее — Сайт) о предоставлении консультационных
          услуг по вопросам ипотечного кредитования.
        </p>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>1. Общие положения</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>Настоящая оферта адресована любому дееспособному лицу, желающему воспользоваться услугами Сайта.</li>
          <li>
            Использование Сайта и/или отправка заявки означает полное и безоговорочное принятие условий настоящей
            оферты.
          </li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>2. Предмет оферты</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Сайт предоставляет консультационные услуги по вопросам ипотечного кредитования, подбору банковских программ,
            сопровождению оформления ипотеки.
          </li>
          <li>Услуги предоставляются на безвозмездной основе для клиента, оплата производится банками-партнёрами.</li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>3. Права и обязанности сторон</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>Пользователь обязуется предоставлять достоверную информацию, необходимую для оказания услуг.</li>
          <li>
            Сайт обязуется использовать полученные данные только для целей оказания консультаций и не передавать их
            третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законом.
          </li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>4. Ответственность</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Сайт не несёт ответственности за решения, принятые пользователем на основании предоставленных консультаций.
          </li>
          <li>Сайт не гарантирует одобрение ипотеки банком, так как решение принимается кредитной организацией.</li>
        </ul>
        <h2 className='text-xl font-semibold text-blue-700 mt-6 mb-2'>5. Заключительные положения</h2>
        <ul className='list-disc pl-5 text-gray-700 mb-4'>
          <li>
            Сайт вправе вносить изменения в условия оферты без предварительного уведомления. Новая редакция вступает в
            силу с момента публикации на Сайте.
          </li>
          <li>
            По всем вопросам обращаться по email:{' '}
            <a href='mailto:info_angel@ipoteka-broker.ru' className='text-blue-700 underline'>
              info_angel@ipoteka-broker.ru
            </a>
          </li>
        </ul>
        <p className='text-xs text-gray-400 mt-8 text-center'>
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>
      </div>
    </main>
  )
}
