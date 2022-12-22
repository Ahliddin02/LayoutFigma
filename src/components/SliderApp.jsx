import styles from "./SliderApp.module.css"
import ViezhRobert from "../components/images/ViezhRobert.svg"
import YessicaChristy from "../components/images/YessicaChristy.svg"
import KimYoungJou from "../components/images/KimYoungJou.svg"
import iconStars from "../components/images/iconStars.svg"
import left from "../components/images/left.svg"
import rightPng from "../components/images/rightPng.png"


const SliderApp = () => {   
    return (
        <div className={styles.container}>
           <div className={styles.SliderApp}>
            <h1 className={styles.SliderApp_title}>
                Trusted by Thousands of Happy Customer
            </h1>
           </div>
           <div className={styles.SliderApp}>
              <div className={styles.SliderApp_text}>
              These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
              </div>
           </div>

         <div className={styles.card_header}>
           <div className={styles.card}> 
              <div className={styles.card_header}>
               <div>
                   <img src={ViezhRobert} />
               </div>
               <div className={styles.card_title}>
                  <div className={styles.card_name}>Viezh Robert</div>
                  <div className={styles.card_region}>Warsaw, Poland</div>
               </div>
               <div>
                  <img src={iconStars} />
               </div>
               </div>
                <div className={styles.card_text}>
               “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
               </div>
           </div>
           <div className={styles.card_}> 
              <div className={styles.card_header}>
               <div>
                   <img src={YessicaChristy} />
               </div>
               <div className={styles.card_title}>
                  <div className={styles.card_name}>Yessica Christy</div>
                  <div className={styles.card_region}>Shanxi, China</div>
               </div>
               <div>
                  <img src={iconStars} />
               </div>
               </div>
                <div className={styles.card_text}>
                “I like it because I like to travel far and 
                still can connect with high speed.”.
               </div>
           </div>
           <div className={styles.card_}> 
              <div className={styles.card_header}>
               <div>
                   <img src={KimYoungJou} />
               </div>
               <div className={styles.card_title}>
                  <div className={styles.card_name}>Kim Young Jou</div>
                  <div className={styles.card_region}>Seoul, South Korea</div>
               </div>
               <div>
                  <img src={iconStars} />
               </div>
               </div>
                <div className={styles.card_text}>
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
               </div>
           </div>
         </div>
               <div className={styles.slider_bottom}>
                <div>
                   <img width={50} src={left} />
                </div>
                <div>
                   <img width={58.5} src={rightPng} />
                </div>
               </div>

            <div className={styles.slider_footer}>
                <div className={styles.sld_footer_card}>
                    <div>
                        <div className={styles.sld_footer_title}> 
                            Subscribe Now for Get Special Features!
                        </div>
                        <div className={styles.sld_footer_text}>
                        Let's subscribe with us and find the fun.
                        </div>
                    </div>
                    <div className={styles.sld_footer_click}>
                        <div className={styles.sld_footer_clickText}>
                            Subscribe Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderApp;