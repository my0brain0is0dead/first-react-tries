import React, { useState } from "react";
import styles from '../../styles/iter.module.css'

function Iter() {
    const [setValue, value] = useState()

    return (
        <div className={styles.Iter}>
            <div className={styles.post}>
                <div className="post-content">
                    <strong>1.Javascrpit</strong>
                    <div>
                        Javascrpit - язык програмирования
                    </div>
                </div>
                <div className="post-btns">
                    <button className={styles.btn}>
                        Удалить пост
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Iter