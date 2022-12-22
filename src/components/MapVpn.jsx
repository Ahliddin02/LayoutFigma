import React from "react"
import styles from  "./MapVpn.module.css"
import mapvpn from "../components/images/mapvpn.svg"
import netflix from "../components/images/netflix.png"
import reddit from "../components/images/reddit.png"
import amazon from "../components/images/amazon.png"
import discord from "../components/images/discord.png"
import spotify from "../components/images/spotify.png"



const MapVpn = () => {
    return (
        <div className={styles.container}>
          <div className={styles.mapVpn}>
            <h1 className={styles.mapVpn_title}>
                Huge Global Network of Fast VPN
            </h1>
          </div>
         <div className={styles.mapVpn}>
           <p className={styles.mapVpn_text}>
           See <span className={styles.span_text}> LaslesVPN </span> everywhere to make it easier for you when you move locations.
           </p>
        </div>
        <div className={styles.map_img}>
            <img src={mapvpn} />
        </div>
        <div className={styles.mapVpn_icons}>
          <div>
            <img width={"150px"} height={"40px"} src=  {netflix} />
          </div>
          <div>
            <img width={"150px"} height={"50px"} src=  {reddit} />
          </div>
          <div>
            <img width={"150px"} height={"40px"} src=  {amazon} />
          </div>
          <div>
            <img width={"150px"} height={"40px"} src=  {discord} />
          </div>
          <div>
            <img width={"150px"} height={"40px"} src=  {spotify} />
          </div>
          
        </div>
        </div>
    )
}
export default MapVpn;