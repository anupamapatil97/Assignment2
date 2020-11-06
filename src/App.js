import React, { Component } from 'react'
import Char from './Components/CharComponent/Char';
import CheckValidation from './Components/Validation/CheckValidation';

export default class App extends Component {
    state={
        enteredValue:""
    }
    handleInputChange=(event)=>{
        this.setState({enteredValue:event.target.value});
        console.log(this.state.enteredValue)
   

    }
   handleDelete=(index)=>{
       let splited=this.state.enteredValue.split('');
       splited.splice(index,1);
       const joining=splited.join('');
       this.setState({enteredValue:joining})
   }
    render() {
       let splitting=this.state.enteredValue.split("",this.state.enteredValue.length);
       console.log(splitting);
     let chara=splitting.map((character,index)=>{
        return <Char ch={character} charClicked={()=>this.handleDelete(index)}/>
       })
        return (
            <div>
                <input type="text" onChange={this.handleInputChange} value={this.state.enteredValue}/>
                <CheckValidation lenghtValue={this.state.enteredValue.length}/>
                {chara}
            </div>
        )
    }
}
