import React, {useState} from 'react'
import styles from '../../styles/Home.module.css'

function BoundRangeText() {
    const [someValue, setSomeValue] = useState(28)
    return(
        <div className={styles.div1}>
            <input 
                className={styles.input}
                type='text'
                value={someValue}
                onChange={event => setSomeValue(event.target.value)}
            />
            <input 
                className={styles.input}
                type='range' 
                value={someValue}
                onChange={event => setSomeValue(event.target.value)}
                min = '4' max = '64' step = '1'
            />
        </div>
    )
}

export default BoundRangeText

/*
с помощью скриптов описаных в pass-generator/connect.js сделать генератор паролей на реакте
*/