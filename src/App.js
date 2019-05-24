import React, {Component} from 'react';
import './App.css';
import ReportList from './components/ReportList/ReportList'
import NavBar from './components/NavBar/NavBar'
import axios from 'axios'

class App extends Component{
  constructor(){
    super()
    this.state={
      filterDate: null,
      reportList: []
    }
    this.filterDate = this.filterDate.bind(this)
    this.getTrades = this.getTrades.bind(this)
    this.deleteTrade = this.deleteTrade.bind(this)
  }

  componentDidMount(){
    console.log("App component did mount")
    
    axios.get('http://localhost:5050/api/stocks').then(response =>{
      console.log("Got the stock data")
      this.setState({reportList: response.data})
      console.log(this.state.reportList)
    }).catch((error)=>{
        console.log(error)
    })
  }

  componentDidUpdate(){
    console.log("App component did update")
  }

  filterDate(date){
    let filterMargin = new Date().getDate()

    if(date === 'last week'){
      filterMargin -= 7
    }
    else if (date === 'last 2 weeks'){
      filterMargin -= 14
    }
    else if (date === 'last month'){
      filterMargin -= 30
    }
    else{
      filterMargin = 0
    }

    this.setState({filterDate: filterMargin},()=>{this.getTrades()})
    
  }

  getTrades(){

    if(this.state.filterDate){
      axios.get('http://localhost:5050/api/stocks/?date='+this.state.filterDate)
      .then(response=>{
        this.setState({reportList: response.data})
      })
    }
    else{
      axios.get('http://localhost:5050/api/stocks')
      .then(response=>{
        this.setState({reportList: response.data})
      })
    }
  }

  deleteTrade(index){
    axios.delete("http://localhost:5050/api/stock/"+index)
    .then(response=>
        this.setState({reportList: response.data})
    ).catch(error=>{
        console.log(error)
        alert("There was an error, check your connectio. More details in console.")
    })

    console.log("deleteTrade ran")
  }

  render(){

    return (
      <div className="App">
        <NavBar 
          filterDate={this.filterDate}/>

        <ReportList 
          filterDate={this.state.filterDate}
          reportList= {this.state.reportList}
          getTrades={this.getTrades}
          deleteTrade={this.deleteTrade}/>
      </div>
    );
  }
  
}

export default App;
