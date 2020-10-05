import React, {Component} from 'react' ; 
import {touchpadNumbers} from '../shared/touchpadNumbers';
import {touchpadOperations} from '../shared/touchpadOperations';

class Calculator extends Component {

	constructor(props){
		super(props);

		this.state = {
			input : '',
			output : 0,
			reset: false
		}

		this.handleAddNumber=this.handleAddNumber.bind(this);
		this.handleClear=this.handleClear.bind(this);
		this.handleDecimal=this.handleDecimal.bind(this);
		this.handleOperator=this.handleOperator.bind(this);
		this.evaluate=this.evaluate.bind(this);
	};

	handleClear(){
		this.setState({
			input:'',
			output:0,
			reset:false
		});
	};

	handleAddNumber(event){
		const value = event.target.innerText ; 
		//handle reset case
		if (this.state.reset && value !=='0') {
			this.setState({
				input:value,
				output:0,
				reset:false
			})
		}
		else if (!(value==='0' && this.state.input==='')) {
			this.setState({
				input:this.state.input + value,
				reset:false
			})
		}
	};

	handleDecimal(event){
		if (!/\.[0-9]*$/.test(this.state.input)){
			this.setState({
				input:this.state.input + ".",
				reset:false
			})
		}
	}

	handleOperator(event){
		const input = this.state.input;
		let operator = event.target.innerText;

		if (this.state.reset){
			this.setState({
				reset:false
			})
		}
	
		if (operator === "x") {
			operator="*";
		}

		// if input empty, add operator to output
		if (input === '') {
			this.setState({
				input : this.state.output.toString() + operator,
			});
		}
		// if no consecutive operator
		else if ((/[0-9.-{1}]$/).test(input)) {
			this.setState({
				input: this.state.input + operator,
			})
		}
		// case minus sign
		else if (operator === "-" && !(/-$/).test(input)){
			this.setState({
				input: this.state.input + operator,
			})
		}
		// have only one operator at the end 
		else {
			this.setState({
				input:this.state.input.replace(/[*+-/]*$/,"") + operator,
			})
		}
	};

	evaluate(){
		const final = eval(this.state.input.replace(/[*+-/]*$/,""),"{0:F2}");
		this.setState({
			output:final,
			input:final,
			reset:true
		})
	}


	render(){

		const touchpadNumbersRendered = touchpadNumbers.map(x => {
			return(
				<div id={x.id} className="number key" key={x.value} onClick={this.handleAddNumber}>
					{x.value}
				</div>
			)
		});

		const touchpadOperationsRendered = touchpadOperations.map(x => {
			return(
				<div id={x.id} className="operation key" key={x.value} onClick={this.handleOperator}>
					{x.value}
				</div>
			)
		});
		
		return(
			<div id="calculator">
				<div id="displayBlock">
					<p id="display">{this.state.input==='' ? 0 : this.state.input}</p>
					<p id="output">{this.state.output}</p>
				</div>
				<div id="touchpad">
					<div id="inputElementsMain">
						<div id="clear" className="key" onClick={this.handleClear}>
							AC
						</div>
						{touchpadNumbersRendered}
						<div id="decimal"  className="key" onClick={this.handleDecimal}>
							.
						</div>
					</div>
					<div id="inputElementsOps">
						{touchpadOperationsRendered}
						<div id="equals" className="key" onClick={this.evaluate}>
							=
						</div>
					</div>
				</div>
			</div>
		);
	}
};


export default Calculator;