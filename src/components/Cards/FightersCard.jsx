import React from "react";
import styles from "../Cards/CardsFighters.module.scss";

export default function FightersCard({ item }) {
  return (
    <>
      <div className={styles.cards_main}>
        <div className={styles.under_main}>
          <div key={item.id} className={styles.card}>
            <img
              className={styles.card_image}
              src={item.image}
              alt=""
              width={150}
              height={160}
            />
            <div className={styles.card_name}>{item.name}</div>
            <div className="">{item.lastName}</div>
            <div className="">{item.alias}</div>
            <div className="">{item.weight}</div>
            <div className="">{item.victory}/{item.defeat}/{item.draw}</div>
            <div className="">{item.isChamp && "Чемпион"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
