import React, {Component} from 'react'
import './Form.css'
import axios from 'axios';

class Form extends Component{
    constructor(){
        super()
        this.state={
            inputPrice: 0,
            inputPeriod: 0,
            inputMinPrice: 0,
            inputMaxPrice: 0,
            isBuy: true,
            inputLimit: 0.04,
        }
    }

    componentDidMount(){
    }

    //INPUT UPDATES
    updatePrice(e){
        this.setState({inputPrice: e.target.value})
    }
    updatePeriod(e){
        this.setState({inputPeriod: e.target.value})
    }
    updateMin(e){
        this.setState({inputMinPrice: e.target.value})
    }
    updateMax(e){
        this.setState({inputMaxPrice: e.target.value})
    }
    updateType(e){
        this.setState({isBuy: !this.state.isBuy})
    }
    updateLimit(e){
        this.setState({inputLimit: e.target.value})
    }

    //NETWORKING CALLS
    addTrade(){
        let { inputPrice, inputPeriod, inputMinPrice, inputMaxPrice, isBuy, inputLimit} = this.state
        const tradeType = isBuy ? ' buy ' : ' sell '

        const newTrade = {
            price: inputPrice,
            estPeriod: inputPeriod,
            tradeType,
            date: new Date().toDateString(),
            tradePoint: inputLimit,
            inputMaxPrice,
            inputMinPrice

        }
        console.log(newTrade)
        axios.post('http://localhost:5050/api/stocks', newTrade)
        .catch(error=>{
            console.log(error)
            alert("There was an error, check your connectio. More details in console.")
        })
    }

    updateTrade(id){

        let { inputPrice, inputPeriod, inputMinPrice, inputMaxPrice, isBuy, inputLimit} = this.state
        const tradeType = isBuy ? ' buy ' : ' sell '

        const updatedTrade = {
            price: inputPrice,
            estPeriod: inputPeriod,
            tradeType,
            date: new Date().toDateString(),
            tradePoint: inputLimit,
            inputMaxPrice,
            inputMinPrice

        }
        
        axios.put("http://localhost:5050/api/stock/"+id, updatedTrade)
        .then(response=>
            this.setState({reportList: response.data})
        ).catch(error=>{
            console.log(error)
            alert("There was an error, check your connectio. More details in console.")
        })

        this.setState({isEditing: false})
    }

    render(){

        

        return(<form className="form">
                <input className="price-input" type="number" placeholder="trade price" onChange={e =>{this.updatePrice(e)}}></input>
                <input className="period-input" type="number" placeholder="cycle period in days" onChange={e=>{this.updatePeriod(e)}}></input>
                <input className="min-price-input" type="number" placeholder="period min price" onChange={(e)=>{this.updateMin(e)}}></input>
                <input className="max-price-input" type="number" placeholder="period max price" onChange={(e)=>{this.updateMax(e)}}></input>
                <p> buy </p>
                <input className="type-input" type="radio" name="trade-type" checked={this.state.isBuy} value="buy" id="buy" onChange={(e)=>{this.updateType(e)}}></input>
                <p> sell </p>
                <input className="type-input" type="radio" name="trade-type" checked={!this.state.isBuy} value="sell" id="sell" onChange={(e)=>{this.updateType(e)}}></input>
                <p>limit percent</p>
                <select name="limit-percent" onChange={(e)=>{this.updateLimit(e)}}>
                    <option value=".04">4%</option>
                    <option value=".05">5%</option>
                    <option value=".06">6%</option>
                    <option value=".07">7%</option>
                    <option value=".08">8%</option>
                    <option value=".09">9%</option>
                    <option value=".1">10%</option>
                </select>
                <button type="submit" disabled={this.props.editing} onClick={()=>{this.addTrade()}}>submit</button>
                <button type="submit" disabled={!this.props.editing} onClick={()=>{this.updateTrade(this.props.editIndex)}}>submit edit</button>
                <button type="reset">reset</button>
            </form>
        )   
    }
    
}

export default Form;