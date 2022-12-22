import React from "react"
import styles from "./Main.module.css" 
import secondMan from "../components/images/secondMan.svg"
import checkMark from "../components/images/checkMark.svg"
import free from "../components/images/free.svg"
import check from "../components/images/check.svg"


const Main = () => {
   return (
     <div className={styles.container}>
       <div className={styles.wrapper}>
        <div>
            <img src={secondMan} />
        </div>
        <div>
          <div>
          <h1 className={styles.wrapper_title}>
            We Provide Many Features You Can Use
          </h1>
        </div>
        <div className={styles.wrapper_text}>
        <p>
          You can explore the features that we provide with fun and have their own functions each feature.
        </p>
        </div>
        <div>
            <table>
              <tr className={styles.table_tr}>
              <td className={styles.table_icon}>
                <img src={checkMark} />
              </td>
              <td className={styles.table_text}>
                  Powerfull online protection.
              </td>
              </tr>
              <tr className={styles.table_tr}>
                <td className={styles.table_icon}>
                  <img src={checkMark} />
                </td>
                <td className={styles.table_text}>
                  Internet without borders.
                </td>
              </tr>
              <tr className={styles.table_tr}>
                <td className={styles.table_icon}>
                  <img src={checkMark} />
                </td>
                <td className={styles.table_text}>
                  Supercharged VPN
                </td>
              </tr>
              <tr className={styles.table_tr}>
                <td className={styles.table_icon}>
                  <img src={checkMark} />
                </td>
                <td className={styles.table_text}>
                  No specific time limits.
                </td>
              </tr>
            </table>
        </div>
       </div>
  </div>
  <div className={styles.main}>
      <h1 className={styles.main_title}>Choose Your Plan</h1>
      <div className={styles.main_text}>Let's choose the package that is best for you and explore it happily and <br />cheerfully.</div>
      <div className={styles.cards_parent}>
          <div className={styles.cards}>
            <div className={styles.cards_img}>
              <img src={free} />
            </div>
            <div className={styles.cards_title}>
              Free Plan
            </div>
            <div>
            <table className={styles.cards_table}>
              <tr className={styles.table_tr_cards}>
              <td className={styles.table_icon}>
                <img src={check} />
              </td>
              <td className={styles.table_text}>
                 Unlimited Bandwitch
              </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Encrypted Connection
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                   No Traffic Logs
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Works on All Devices
                </td>
              </tr>
            </table>
              <div className={styles.cardOne_footer_title}>
                Free
              </div>
              <div className={styles.checkMark_text}>
                <div className={styles.cards_click_parent}>
                  <div className={styles.sign_up}>
                    Select
                  </div>
                </div>
             </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cards_img}>
              <img src={free} />
            </div>
            <div className={styles.cards_title}>
              Standard Plan
            </div>
            <div>
            <table className={styles.cards_table}>
              <tr className={styles.table_tr_cards}>
              <td className={styles.table_icon}>
                <img src={check} />
              </td>
              <td className={styles.table_text}>
                Unlimited Bandwitch
              </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Encrypted Connection
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Yes Traffic Logs
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                   Works on All Devices
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                   Connect Anyware
                </td>
              </tr>
            </table>
              <div className={styles.cardTwo_footer_title}>
                $9 <span style={{color:"#4F5665"}}>/ mo</span>
              </div>
              <div className={styles.checkMark_text}>
                <div className={styles.cards_click_parent}>
                  <div className={styles.sign_up}>
                    Select
                  </div>
                </div>
             </div>
            </div>
          </div>
          <div className={styles.card_three}>
            <div className={styles.cards_img}>
              <img src={free} />
            </div>
            <div className={styles.cards_title}>
            Premium Plan
            </div>
            <div>
            <table className={styles.cards_table}>
              <tr className={styles.table_tr_cards}>
              <td className={styles.table_icon}>
                <img src={check} />
              </td>
              <td className={styles.table_text}>
                Unlimited Bandwitch
              </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                Encrypted Connection
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                Yes Traffic Logs
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Works on All Devices
                </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Connect Anyware
                 </td>
              </tr>
              <tr className={styles.table_tr_cards}>
                <td className={styles.table_icon}>
                  <img src={check} />
                </td>
                <td className={styles.table_text}>
                  Get New Features
                </td>
              </tr>
            </table>
              <div className={styles.cardThree_footer_title}>
                $12 <span style={{color:"#4F5665"}}>/ mo</span>
              </div>
              <div className={styles.checkMark_text}>
                <div className={styles.cardThree_click_parent}>
                  <div className={styles.card_select_three}>
                    Select
                  </div>
                </div>
             </div>
            </div>
          </div>
      </div>

  </div>  
</div>      
  
  )
}
export default Main;