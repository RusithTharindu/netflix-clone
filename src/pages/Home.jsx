import Header from '../components/Header';
import './pageStyles/home.css'
import tv from '../assets/tv.png'
import mobile from '../assets/mobile.jpg'
import kids from '../assets/kids.png'

const Home = () => {
    return(
        <div className='all-container'>
            
            <div className='homepage__container'>
                <Header/>
                <div className='homepage__content'>
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='homepage__content-email__section'>
                        <form action="">
                            <input type="email" placeholder='Email Address' className='textbox' required/>
                            <input type="submit" value='Get Started' className='submit-btn'/>
                        </form>
                    </div>  
                </div>
                
            </div>

            <div className='bottom-cards'>
                <div className='tv-div-cont'>
                    <h1 className='heading-sty'>Enjoy on your TV</h1>
                    <p className='para-sty'>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className='tv-div-img'>
                    <img src={tv} alt="tv png" />
                </div>
            </div>

            <div className='bottom-cards'>
                <div className='mobile-div-img'>
                    <img src={mobile} alt="mobile" />
                </div>
                <div className='mobile-div-cont'>
                    <h1 className='heading-sty'>Download your shows to <br />watch offline</h1>
                    <p className='para-sty'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>

            <div className="bottom-cards">
                <div className='watch-div'>
                    <h1 className="heading-sty">
                        Watch everywhere
                    </h1>
                    <p className="para-sty">
                        Stream unlimited movies and TV <br />shows on your phone, tablet, laptop,<br /> and TV.
                    </p>
                </div>
            </div>

            <div className="bottom-cards">
                <div className='kids-img'>
                    <img src={kids} alt="" />
                </div>
                <div className="kids-cont">
                    <h1 className='heading-sty'>Create profiles for kids</h1>
                    <p className='para-sty'>Send kids on adventures with their favorite <br />characters in a space made just for them—free with <br /> your membership.</p>
                </div>
            </div>

        </div>
    );
}
export default Home;