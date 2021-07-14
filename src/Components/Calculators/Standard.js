import React from 'react';
import "./../Styling/Defaults.css"

class StandardCalculator extends React.Component {
    constructor(){
        super()


        this.state = {
            Total: '25,748,658',
            History: [],
            CurrentOperation: null,
            CurrentInput: null
        }


    }

    componentDidMount = () => {
        //resets calculator when loads
        this.setState({Total: +0})
        this.setState({CurrentInput: null})
    }

    handleOperation = (Operation) => {
        const {CurrentInput} = this.state;
        this.setState({History: [this.state.History.push(CurrentInput)]});
        if(Operation === 'Clear'){
            this.setState({CurrentInput: 0})
        }
    }

    handleNumericalInput = async (Number) => {
        const {CurrentInput} = this.state;
        if(CurrentInput === null){
            this.setState({CurrentInput: Number})
        }
        this.setState({CurrentInput: [this.state.CurrentInput + Number]})
    }

    render(){
        return (
            <div className="Calculator_Main">
                <main className="Calculator_TopSection">
                   <header>Standard</header> 
                   <section className="Calculator_Total">
                       <div id="Calculator_History">
                            <p>2+2</p>
                       </div>
                       <main>
                           {+this.state.CurrentInput ? <p>{this.state.CurrentInput}</p>: <p>{this.state.Total}</p>}
                       </main>
                   </section>
                </main>
                <main className="Calculator_MidSection">
                    <p>MC</p>
                    <p>MR</p>
                    <p>M+</p>
                    <p>M-</p>
                    <p>MS</p>
                    <p>M*</p>
                </main>
                <main className="Calculator_BottomSection">
                    <section>
                        <button id="Button_Operation_NotWorking">%</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Clear')}>CE</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Clear')}>C</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Delete')}>DEL</button>
                    </section>
                    <section>
                        <button id="Button_Operation_NotWorking">1/X</button>
                        <button id="Button_Operation_NotWorking">X2</button>
                        <button id="Button_Operation_NotWorking">2/X</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Divide')}>/</button>
                    </section>
                    <section>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(7)}>7</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(8)}>8</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(9)}>9</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Multiply')}>*</button>
                    </section>
                    <section>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(4)}>4</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(5)}>5</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(6)}>6</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Subtraction')}>-</button>
                    </section>
                    <section>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(1)}>1</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(2)}>2</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(3)}>3</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Addition')}>+</button>
                    </section>
                    <section>
                        <button id="Button_Operation_NotWorking">+/-</button>
                        <button id="Button_Numerical" onClick={() => this.handleNumericalInput(0)}>0</button>
                        <button id="Button_Operation_NotWorking">.</button>
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleOperation('Equal')}>=</button>
                    </section>
                </main>
            </div>
        )
    }
}

export default StandardCalculator;