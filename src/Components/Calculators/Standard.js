import React from 'react';
import "./../Styling/Defaults.css";


let CurrentOperation = [null, false]; //[Operation, is there a current one running]

class StandardCalculator extends React.Component {
    constructor(){
        super()


        this.state = {
            Total: null,
            CurrentInput: 0,
            NumericalEntries: [],
            OperationalEntries: [],
            CurrentlyTyping: false,
            FirstEntry: true
        }


    }

    componentDidMount = () => {
        //resets calculator when loads
        this.setState({CurrentInput: null})
        this.setState({CurrentlyTyping: true})
    }

    handleOperation = async (Operation) => {
        const {CurrentInput, NumericalEntries, Total, CurrentlyTyping} = this.state;
        console.log(CurrentOperation);
        //if current operation is for example: ["+", true], the complete operation, then set to [null, false]
        if(CurrentOperation[1] === true){
            if(CurrentOperation[0] === "+"){
                console.log("Current operaton is addition")
            }
            if(CurrentOperation[0] === "-"){
                console.log("Current operaton is -")
            }
            if(CurrentOperation[0] === "*"){
                console.log("Current operaton is *")
            }
            if(CurrentOperation[0] === "/"){
                console.log("Current operaton is /")
            }
        }
        this.setState({CurrentlyTyping: false});
        if(Operation === 'Clear'){
            this.setState({CurrentInput: null})
        }        
        if(Operation === 'Addition'){
            this.setState({CurrentInput: 0})
            CurrentOperation = ["+", true]
        }        
        if(Operation === 'Subtraction'){
            this.setState({CurrentInput: 0})
            CurrentOperation = ["-", true]
            console.log(Total)
        }     
        if(Operation === 'Divide'){
            this.setState({CurrentInput: 0})
            CurrentOperation = ["/", true]
            console.log(Total)
        }     
        if(Operation === 'Multiply'){
            this.setState({CurrentInput: 0})
            CurrentOperation = ["*", true]
            console.log(Total)
        }
    }

    handleNumericalInput = (Number) => {
        const {CurrentInput, CurrentlyTyping} = this.state;
        this.setState({CurrentlyTyping: true})
        //makes to where you can type more than 1 digit without automatically adding or subtracting etc
        if([CurrentInput].length === 0){
            this.setState({CurrentInput: Number})
            this.setState({Total: Number})
            console.log("The current inut is (80)" + CurrentInput);
        }
        if(CurrentlyTyping){
            this.setState({CurrentInput: [this.state.CurrentInput + Number]})
            this.setState({Total: [this.state.Total + Number]})
            console.log("The current inut is (85)" + CurrentInput);
        }
    }

    handleEqual = () => {
    const {CurrentInput, Total} = this.state;
    console.log(CurrentOperation)
    if(CurrentOperation[1] === true){
        if(CurrentOperation[0] === "+"){
            this.setState({Total: [+this.state.Total + +CurrentInput]});
        }
        if(CurrentOperation[0] === "-"){
            console.log("Current operaton is -")
        }
        if(CurrentOperation[0] === "*"){
            console.log("Current operaton is *")
        }
        if(CurrentOperation[0] === "/"){
            console.log("Current operaton is /")
        }
    }
    }

    render(){
        return (
            <div className="Calculator_Main">
                <main className="Calculator_TopSection">
                   <header>Standard</header> 
                   <section className="Calculator_Total">
                       <main>
                           <p>{this.state.CurrentInput}</p>
                           <h3>{this.state.Total}</h3>
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