import Header from '../components/Header';
import './pageStyles/home.css'

const Home = () => {
    return(
        <div>
            
            <div className='homepage__container'>
                <Header/>
                <div className='homepage__content'>
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                
            </div>
        </div>
    );
}
export default Home;