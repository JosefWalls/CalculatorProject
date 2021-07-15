import React from 'react';
import "./../Styling/Defaults.css";


class StandardCalculator extends React.Component {
    constructor(){
        super()


        this.state = {
            Total: null,
            CurrentOperation: null,
            CurrentInput: 0,
            NumericalEntries: [],
            OperationalEntries: []
        }


    }

    componentDidMount = () => {
        //resets calculator when loads
        this.setState({Total: +0})
        this.setState({CurrentInput: null})
    }

    handleOperation = async (Operation) => {
        const {CurrentInput, NumericalEntries, OperationalEntries} = this.state;
        const JoinedArray = NumericalEntries.concat(CurrentInput);
        this.setState({NumericalEntries: JoinedArray});

        if(Operation === 'Clear'){
            this.setState({CurrentInput: 0})
            this.setState({NumericalEntries: []})//resets calculation history
            this.setState({OperationalEntries: []}) //resets calculation history
        }        
        if(Operation === 'Addition'){
            this.setState({CurrentInput: 0})
            const JoinedArray = OperationalEntries.concat("+");
            this.setState({OperationalEntries: JoinedArray});
        }        
        if(Operation === 'Subtraction'){
            this.setState({CurrentInput: 0})
            const JoinedArray = OperationalEntries.concat("-");
            this.setState({OperationalEntries: JoinedArray});
        }     
        if(Operation === 'Divide'){
            this.setState({CurrentInput: 0})
            const JoinedArray = OperationalEntries.concat("/");
            this.setState({OperationalEntries: JoinedArray});
        }     
        if(Operation === 'Multiply'){
            this.setState({CurrentInput: 0})
            const JoinedArray = OperationalEntries.concat("*");
            this.setState({OperationalEntries: JoinedArray});
        }
    }

    handleNumericalInput = (Number) => {
        this.setState({CurrentInput: [this.state.CurrentInput + Number]})
    }

    handleEqual = () => {
        const {NumericalEntries, OperationalEntries, CurrentInput} = this.state;
        const Total = NumericalEntries[1];
        for(let i = 0; i <= NumericalEntries.length - 1; i++){
            for(let b = 0; b <= OperationalEntries.length - 1; b++){

            }
        }
        console.log(Total)
    }

    render(){
        return (
            <div className="Calculator_Main">
                <main className="Calculator_TopSection">
                   <header>Standard</header> 
                   <section className="Calculator_Total">
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
                        <button id="Button_Operation_NotWorking" onClick={() => this.handleEqual()}>=</button>
                    </section>
                </main>
            </div>
        )
    }
}

export default StandardCalculator;