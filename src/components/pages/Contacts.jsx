function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Место проживания</h2>
                        <p>Белгород, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p>
                            <a href="tel:123">+7 (924) 141-27-99</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:thera1ngamexd@gmail.com">thera1ngamexd@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;
