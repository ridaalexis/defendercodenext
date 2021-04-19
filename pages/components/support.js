import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FirstPost() {


  return     <div className={styles.body}>

  <div className={styles.header}>
    <img className={styles.image} src={"/icons/icon.png"}></img>
    <img className={styles.image} src={"/icons/logo_name.png"}></img>      
  </div>

    <div className={styles.side} align="center">
    <a href="/components/docs_page" >
         <img src={"../../icons/documentation.png"} className={styles.image} alt=' Documentation_alt &rarr;' ></img>
        <p align="center">Документы</p>
      </a>

      <a href="../" >
          <img src={"../../icons/check.png"} className={styles.image} alt=' Support &rarr;' ></img> 
        <p align="center">Назад</p> </a> 
  
  </div>

    <div className={styles.main}>
    <h1> FAQ</h1>
                    <i>Что это такое? </i>
                    <p>HTML, но не совсем... </p>
                    <i>Что может эта программа? </i>
                    <p>Данная программа просто показывает картинки :,)</p>       

<div ><h1> Поддержка</h1>
<p class="answers">Поддержка осуществляется компанией "DAREMMA Group"</p>

</div>

    </div>



</div>

  

}


