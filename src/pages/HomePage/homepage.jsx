//Components
import PageInformation from './components/pageinfo.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
//Sections
import MainSection from './sections/mainSection.jsx';
//CSS
import './css/HomePage.css'




function HomePage() {
    return (
        <div className='Homepage'>
            {/*Sections */}
            <PageInformation />
            <Navbar />
            <MainSection />
            <Footer />
        </div>
    );

}
export default HomePage;