import React from "react"
import styles from "./Footer.module.css"
import logo from "../components/images/logo.svg"
import facebook from "../components/images/facebook.svg"
import twitter from "../components/images/twitter.svg"
import Instagram from "../components/images/Instagram.svg"
import brand from "../components/images/brand.svg"

const Footer = () => {
    return (
<div className={styles.container}>
  <div className={styles.main}>
    <div>
        <div>
            <img src={logo} />
        </div>
        <div className={styles.footer_text}>
        LaslesVPN is a private virtual network that has unique features and has high security.
        </div>
        <div className={styles.footer_icons}>
        <div>
            <div> <img src={facebook} /> </div>
        </div>
        <div>
            <div> <img src={twitter} /> </div>
        </div>
        <div>
            <div> <img src={Instagram} /> </div>
        </div>
        </div>
        <div> <img src={brand} /> </div>
    </div>
    <div className={styles.table_all}>
      <table className={styles.table}>
            <tr>
                <th>Product</th>
                <th>Engage</th>
                <th>Earn Money</th>
            </tr>
            <tr>
                <td>Download </td>
                <td>MCLaslesVPN?</td>
                <td>Affiliate</td>
            </tr>
            <tr>
                <td> Pricing</td>
                <td>FAQ</td>
                <td>Become Partner </td>
            </tr>
            <tr>
                <td>Locations</td>
                <td>Tutorials</td>
            </tr>
            <tr>
                <td>Server</td>
                <td>About Us</td>
            </tr>
            <tr>
                <td>Countries</td>
                <td>Privacy Policy</td>
            </tr>
            <tr>
                <td>Blog</td>
                <td>Terms of Service</td>
            </tr>
        </table>
     </div>
  </div>
</div>
)
}
export default Footer;