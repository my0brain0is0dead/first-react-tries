import React, {useState} from "react";
import styles from './Home.module.css'

const PasswordGenerator = function PasswordGenerator() {

    const [passwordLength, setPasswordLength] = useState(28)
    const [numbersFlag, setNumbersFlag] = useState (false)
    const [lowercaseFlag, setLowercaseFlag] = useState (false)
    const [uppercaseFlag, setUppercaseFlag] = useState (false)
    const [specSymbolsFlag, setSpecSymbolsFlag] = useState (false)
    let usedSymbols = ''
    let generatedPassword = ''

    function switchNumbersFlag() {
        setNumbersFlag(!numbersFlag)
    }

    function switchLowercaseFlag() {
        setLowercaseFlag(!lowercaseFlag)
    }

    function switchUppercaseFlag() {
        setUppercaseFlag(!uppercaseFlag)
    }

    function switchSpecSymbolsFlag() {
        setSpecSymbolsFlag(!specSymbolsFlag)
    }

    function generateList() {
        const numbersList = "1234567890"
        const lowercaseLettersList = "abcdefghijklmnopqrstuvwxyz"
        const uppercaseLettersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const specSymbolsList = "!#$%^&*+"

        if (numbersFlag === true) {
            usedSymbols += numbersList
        }
        if (lowercaseFlag === true) {
            usedSymbols += lowercaseLettersList
        }
        if (uppercaseFlag === true) {
            usedSymbols += uppercaseLettersList
        }
        if (specSymbolsFlag === true) {
            usedSymbols += specSymbolsList
        }
        return usedSymbols
    }

    function generatePassword() {
        generateList()
        for (let i = 0; i < passwordLength; i++) {
            let newCharIndex = Math.floor(Math.random() * usedSymbols.length)
            let newChar = usedSymbols.charAt(newCharIndex)
            generatedPassword += newChar
        }
        return generatedPassword
    }

    return(
        <div className={styles.bodyDiv}>
            <div className={styles.chechboxDiv}>
                <p>
                    <input
                        onClick={switchNumbersFlag}
                        className={styles.checkbox}
                        type="checkbox"
                        id="numbersFlag">
                    </input>
                    <label for="numbersFlag">Включить цифры</label>
                </p>

                <p>
                    <input
                        onChange={switchLowercaseFlag}
                        className={styles.item}
                        type="checkbox"
                        id="lowercaseFlag">
                    </input>
                    <label for="lowercaseFlag">Включить нижний регистр</label>
                </p>

                <p>
                    <input
                        onChange={switchUppercaseFlag}
                        className={styles.item}
                        type="checkbox"
                        id="uppercaseFlag"
                    ></input>
                    <label for="uppercaseFlag">Включить верхний регистр</label>
                </p>

                <p>
                    <input
                        onChange={switchSpecSymbolsFlag}
                        className={styles.item}
                        type="checkbox"
                        id="specSymbolsFlag">
                    </input>
                    <label for="specSymbolsFlag">Включить специальные символы</label>
                </p>
            <div className={styles.div1}>
                <input 
                    className={styles.outp}
                    type='text'
                    value={passwordLength}
                    onChange={event => setPasswordLength(event.target.value)}
                />
                <input 
                    className={styles.range}
                    type='range' 
                    value={passwordLength}
                    onChange={event => setPasswordLength(event.target.value)}
                    min = '4' max = '64' step = '1'
                />
            </div>
            </div>
                <div className={styles.buttonDiv}>
                    <button
                    onClick={generatePassword}
                    className={styles.btn}>Сгенерировать пароль
                    </button>
                    <button className={styles.btn}>Сгенерировать кастомный пароль</button>
                </div>
            <div>
                <input
                className={styles.outp}
                type="text">{generatedPassword}</input>
            </div>
        </div>
    )
}

export default PasswordGenerator

/*
вобщем я пока не знаю нормального синтаксиса, потому что не могу понять как получать и принимать values и еще вызывать функции с пропсами в OnClick
я пока заброшу этот проект, может быть потом его закончу. буду пока изучать базу react'a
*/