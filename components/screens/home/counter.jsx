import React, {useState} from 'react'
import styles from './Home.module.css'

const Counter = function Counter() {
    // хук
    const [clickCounter, setCount] = useState(0)

    //возвращает поле со счетчиком и три кнопки
    return (
        <div>
            <h1>{clickCounter}</h1>
            <button className={styles.btn} onClick={() => setCount((clickCounter) => clickCounter + 1)}>+1</button>
            <button className={styles.btn} onClick={() => setCount((clickCounter) => clickCounter - 1)}>-1</button>
            <button className={styles.btn} onClick={() => setCount((clickCounter) => clickCounter = 0)}>Clear</button>
        </div>
    )
}

export default Counter

/*
*/