import styles from "./Header.module.css"
import logo from "../components/images/logo.svg"
import firstMan from "../components/images/firstMan.svg"
import user from "../components/images/user.svg"
import location from "../components/images/location.svg"
import server from "../components/images/server.svg"
import vector from "../components/images/vector.svg" 
const Header = () => {
    return (
    <div> 
      <div className={styles.header}>
         <div >
            <img className={styles.logo} src={logo} />
         </div>
          <table className={styles.table}>
            <tr>
                <td className={styles.table_td}>
                  About
                </td>
                <td className={styles.table_td}>
                  Features
                </td>
                <td className={styles.table_td}>
                  Pricing
                </td>
                <td className={styles.table_td}>
                  Testimonials
                </td>
                <td className={styles.table_td}>
                  Help
                </td>
            </tr>
          </table>
        <div className={styles.header_click}>
            <div className={styles.sign_in}>Sign In</div>
            <div className={styles.sign_up_border}> 
              <div className={styles.sign_up}>Sign up</div>
            </div>
        </div>
      </div>
      <div className={styles.header}>
      <div>
        <div>
            <h1 className={styles.header_title}>Want anything to be easy with LaslesVPN.</h1>
        </div>
        <p className={styles.header_text}>
            Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </p>
        <div className={styles.get_started_border}> 
            <div className={styles.get_started_text}>
              Get Started
            </div>
        </div>
      </div>

        <div className={styles.header_img}>
            <img className={styles.firstMan} src={firstMan} />
        </div>
      </div>
      <div className={styles.footer}>
          <div className={styles.user_logo}>
            <div>
              <img className={styles.user} src={user} />
            </div>
            <div className={styles.text_logo}>
              <div className={styles.number_logo}>90+</div>
              <div className={styles.name_logo}>Users</div>
            </div>
          </div>
          <div>
            <img className={styles.vector} src={vector} />
          </div>
          <div className={styles.user_logo}>
            <div>
              <img className={styles.user} src={location} />
            </div>
            <div className={styles.text_logo}>
              <div className={styles.number_logo}>30+</div>
              <div className={styles.name_logo}>Locations</div>
            </div>
          </div>
          <div>
            <img className={styles.vector} src={vector} />
          </div>
          <div className={styles.user_logo_three}>
            <div>
              <img className={styles.user} src={server} />
            </div>
            <div className={styles.text_logo}>
              <div className={styles.number_logo}>50+</div>
              <div className={styles.name_logo}>Servers</div>
            </div>
          </div>
      </div>
    </div>
    )
}
export default Header;