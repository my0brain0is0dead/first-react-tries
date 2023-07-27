import React from "react";
import styles from './Home.module.css'

class ClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.decrementCounter = this.decrementCounter.bind(this)
        this.clearCounter = this.clearCounter.bind(this)
    }
    
    incrementCounter() {
        this.setState({count: this.state.count + 1})
    }

    decrementCounter() {
        this.setState({count: this.state.count - 1})
    }
    clearCounter() {
        this.setState({count: this.state.count = 0})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button className={styles.btn} onClick={this.incrementCounter}>+1</button>
                <button className={styles.btn} onClick={this.decrementCounter}>-1</button>
                <button className={styles.btn} onClick={this.clearCounter}></button>
            </div>
        )
    }
}

export default ClassCounter