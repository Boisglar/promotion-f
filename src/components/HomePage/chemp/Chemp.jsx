import React from 'react'
import Points from '../points/Points'
import styles from './Chemp.module.scss'
import image1 from '../photos/1.png'
import image2 from '../photos/2.png'
import image3 from '../photos/3.png'
import image4 from '../photos/4.png'
import image5 from '../photos/5.png'
import image6 from '../photos/6.png'
import image7 from '../photos/7.png'
import image8 from '../photos/8.png'
import poyas from '../main/poyyas.png'

export default function Chemp() {
  return (
    <div className={styles.main}>
        <div className={styles.chempBlock}>
            <div className={styles.chemp_text}>НАШИ ДОСТИЖЕНИЯ ЧЕМПИОНЫ ЛИГИ LFL</div>
            <Points />
            <div className={styles.chemp_text2}>К вашему вниманию представлены действующие чемпионы разных весовых категорий</div>
        </div>
        <div className={styles.imagesBlock}>
            <div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Яндаев Ризван</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Кочевник</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>84кг. средний</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>20</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Абдразаков Асхаб</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Мудрый</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>77кг. полусредний</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>12</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image2} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Байраев Лом-Али</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Умный</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>63кг. полулегкий</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>20</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image3} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Мехтиев Дени</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Механик</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>93кг. полутяжелый</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>24</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image4} alt=''/>
                    </div>
                </div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Янгулбаев Малик</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Скала</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>77кг. полусредний</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>18</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image5} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Цуров Адам</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Гитлер</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>120кг. тяжелый</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>2000</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image6} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Джукаев Дени</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Добряк</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>100кг. тяжелый</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>200</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image7} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Мартазанов Саид</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <d>Препод</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <d>70кг. легкий</d>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <d>16</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <d>0</d>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <d>0</d>
                            </div>
                        </div>
                        <img className={styles.images} src={image8} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
