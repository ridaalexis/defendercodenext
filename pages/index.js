import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.body}>
      {/* Шапка */}
      <div className={styles.header}>
        <img className={styles.image} src={"/icons/icon.png"}></img>
        <img className={styles.image} src={"/icons/logo_name.png"}></img>      
      </div>
    
       <div className={styles.main}>
        <div align="center" >
                    <img className={styles.image} src="/icons/leaf.png" alt="icon"></img>
                    <p><i>Ты в безопасности</i></p>
                </div>
        </div> 

        <div className={styles.side} align="center">
        <a href="/components/docs_page" >
         <img src={"../../icons/documentation.png"} className={styles.image} alt=' Documentation_alt &rarr;' ></img>
        <p align="center">Документы</p>
      </a>
      <a href="/components/support" >
          <img src={"../../icons/support.png"} className={styles.image} alt=' Support &rarr;' ></img> 
        <p align="center">Поддержка</p>
      </a>
              
      </div>

    </div>
  )
}
