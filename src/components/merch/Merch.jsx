import React, { useState } from 'react'
import Points from '../points/Points';
import Hudi from './Hudi';
import styles from './Merch.module.scss'
import Merchi from './Merchi';
import merch1 from '../photos/merch1.png'
import merch2 from '../photos/merch2.png'

export default function Merch() {

  const [active, setActive] = useState(null);

  const hendleMerch = (e) => {
    e.preventDefault()
    setActive('Merchi')
};

const hendleHudi = (e) => {
    e.preventDefault()
    setActive('Hudi')
}

  return (
    <div>
        <div>
            <div className={styles.uslugi}>Наши услуги</div>
            <div className={styles.tochki}>
              <Points/>
            </div>
            <div className={styles.mag}>
                <a href='merch' onClick={hendleMerch} className={styles.merch}>МЕРЧИ</a>
                <a href='hudi' onClick={hendleHudi} className={styles.hudi}>ХУДИ</a>
            </div>
            <div>
              {active === Merchi ? <Merchi/> : <Hudi/>}
              {active === Hudi && <Hudi/>}
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.b}>
              <img src={merch1} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch2} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch1} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch2} alt=''/>
            </div>
        </div>
    </div>
  )
}
