const Contacts = () => {
  return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Izhevsk, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79199198470">+7 (919) 919-84-70</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:4x11aabluea9136mnmn@gmail.com">4x11aabluea9136mnmn@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
  )
}

export default Contacts
