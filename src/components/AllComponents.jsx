import styles from "./AllComponents.module.css"
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MapVpn from "./MapVpn";
import SliderApp from "./SliderApp";
const AllComponents = () => {
    return (
        <div>
          <div className={styles.container}>
            <Header />
            <Main />
            <MapVpn />
            <SliderApp />
         </div>      
            <Footer />      
         </div>

    )
}
export default AllComponents;