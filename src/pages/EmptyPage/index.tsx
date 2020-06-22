
import React, { useState, useEffect } from 'react';
import styles from './index.less'


export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        矿机总资产（DX）
      </span>
      <div className={styles.divide} />
      <div className={styles.titlenumber}>
        300000000.00
      </div>
      <div className={styles.dividebottom} />
      <div className={styles.bottomtitle}>
        <span className={styles.left}>投票质押金额（DX）</span>
        <span className={styles.right}>可用余额（DX）</span>
      </div>
      <div className={styles.divide} />
      <div className={styles.bottomnumber}>
        <span className={styles.left}>326,783,987.00</span>
        <span className={styles.right}>232,000,000.00</span>
      </div>
    </div>
  );
};
