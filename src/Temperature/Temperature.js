import React,{Component} from 'react'
import temperature from './Temperature.css'
class Temperature extends Component{
    state={
        value_celcius:"",
        value_fahrenhiet:"",
        value_kelvin:"",   
    }
    namehandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    celciusbuttonhandler=()=>{
        this.setState({value_fahrenhiet:((Number(this.state.value_celcius)*9/5)+32)});
        this.setState({value_kelvin:Number(this.state.value_celcius)+273});
    }
    Fahrenhietbuttonhandler=()=>{ 
        this.setState({value_celcius:((Number(this.state.value_fahrenhiet)-32)*5/9)});
        this.setState({value_kelvin:((Number(this.state.value_fahrenhiet)+459)*(5/9))});
    }
    Kelvinbuttonhandler=()=>{
        this.setState({value_celcius:Number(this.state.value_kelvin)-273});
        this.setState({value_fahrenhiet:((Number(this.state.value_kelvin)*(9/5))-459
        )});
        
    }
    render(){
        return (
            <div className="main">
                <h1 id="temp">Temperature Converter</h1>
                <div className="temp">               <div>  <h1>Celcius</h1>
               <input name="value_celcius" onChange={this.namehandler} placeholder="input here"></input>
               <button onClick={this.celciusbuttonhandler}>submit</button>
               <p >{this.state.value_celcius}&#8451;</p>
               </div>
                <div><h1>Fahrenhiet</h1>
                <input name="value_fahrenhiet" onChange={this.namehandler} placeholder="input here"></input>
               <button onClick={this.Fahrenhietbuttonhandler}>submit</button>
               <p >{this.state.value_fahrenhiet} &#8457;</p>
                </div>
                <div><h1>Kelvin</h1>
                <input name="value_kelvin" onChange={this.namehandler} placeholder="input here"></input>
               <button onClick={this.Kelvinbuttonhandler}>submit</button>
               <p >{this.state.value_kelvin}K</p>
               </div> 
               </div>

               <div className="copy">
                   <p>&copy; ARRJAY</p><hr></hr>
                     <p>Made With React&ensp;<i class="fab fa-react"></i></p>  
               </div>

            </div>
        );
    }
}
export default Temperature