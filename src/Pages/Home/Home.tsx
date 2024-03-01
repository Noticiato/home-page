import './Home.css';
import imgUrl from '../../assets/news-home.jpg';

function Home() {
    return (
        <div className='home'>
            <div className='headline'>
                <div className='main-headline'>
                    <p>O seu ecossistema de notícias.</p>
                    <p>Tenha acesso à informação confiável e de qualidade.</p>
                </div>
                <div className='sub-headline'>
                    <p>No Noticiato, valorizamos a proximidade e o alinhamento entre os
                        criadores de conteúdo e os interesses dos nossos leitores.</p>
                </div>
            </div>
            <div className='image'>
                <img src={imgUrl} alt='newspaper coffe'/>
            </div>
        </div>
    );
};

export default Home