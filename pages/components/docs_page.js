import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FirstPost() {


  return     <div className={styles.body}>
  {/* Шапка */}
  <div className={styles.header}>
    <img className={styles.image} src={"/icons/icon.png"}></img>
    <img className={styles.image} src={"/icons/logo_name.png"}></img>      
  </div>

    <div className={styles.side} align="center" >

      <a href="/components/support" >
          <img src={"../../icons/support.png"} className={styles.image} alt=' Support &rarr;' ></img> 
        <p align="center">Поддержка</p>
      </a>
      <a href="../" >
          <img src={"../../icons/check.png"} className={styles.image} alt=' Support &rarr;' ></img> 
        <p align="center">Назад</p> </a> 

    
  </div>

  <div className={styles.main}>
  <h1>Основные документы</h1>
                <h4>
                    <a href="https://github.com/PinkHedgehog/HStackAntivirus/blob/master/README.md" target="_blank">README — Инструкция по сборке и эксплуатации</a>
                </h4>


                



    </div>






</div>

  

}
