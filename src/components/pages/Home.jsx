import Header from '../header/Header';

import me from '../../img/me.png';

function Home() {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Обо мне</h1>

                    <div className="content-container">
                        <div className="content-list-image">
                            <img src={me} alt="me" />
                        </div>

                        <ul className="content-list">                      
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, Next.js, React, TypeScript, Redux Toolkit, Zustand, HTML, CSS, Bootstrap, Formik, Yup</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>Node.js, MySQL, MongoDB</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">История</h2>
                                <p className='content-list__history'>
                                    На данный момент являюсь студентом 4 курса направления "Фундаментальная информатика и информационные технологии" вуза НИУ «БелГУ». <br/>
                                    С детства я обожал все технические предметы. В 16 лет я решил попробовать свои силы в разработке и решил остановиться
                                    на фронтенде. Создание интерактивных пользовательских интерфейсов было всегда для меня очень интересно. По возможности проводил дни и ночи, изучая новые технологии, и каждый новый проект приносил мне огромное удовольствие.
                                </p>
                                <br/>
                                <p>Буду рад, если мои знания пригодятся надежной и перспективной компании. В свою очередь, ожидаю от компании интересных задач и профессионального роста в качестве разработчика.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
