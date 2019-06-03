import React, {Component} from 'react'
import Report from '../../components/Report/Report'
import Form from '../../components/Form/Form'
import './ReportList.css'

class ReportList extends Component{
    constructor(props){
        super(props)
        this.state={
            isEditing: false,
            editIndex: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    componentDidMount(){
    }

    componentWillUpdate(){
        console.log("ReportList component will")
    }

    componentDidUpdate(){
        console.log("ReportList component did update")
    }

    addTrade(trade){
        this.setState({reportList: [...this.state.reportList, trade]})
        .then(response=>
            this.setState({reportList: response.data})
        ).catch(error=>{
            console.log(error)
            alert("There was an error, check your connectio. More details in console.")
        })
    }

    

    toggleEdit(index){
        console.log(index)
        if(!this.state.isEditing){
            this.setState({isEditing: true})
            this.setState({editIndex: index})
        }
        else{
            this.setState({isEditing: false})
            this.setState({editIndex: ''})
        }
        
    }
    
    render(){
        const reports = this.props.reportList.map((report, index)=>{
            
            if(this.state.isEditing && (index === +this.state.editIndex)){
                
                return <Report 
                    key={index}
                    id={index}
                    price={"Price: " + report.price + " "}
                    estPeriod={"Period: " + report.estPeriod + " days "}
                    date={"Trade date: "+ report.date}
                    tradeType={report.tradeType}
                    tradePoint={"Trade point: "+ report.tradePoint}
                    deleteTrade= {this.props.deleteTrade}
                    edit= {this.toggleEdit}
                />
                
            }
            else if(this.state.isEditing){
                return <div key={index}></div>
            }
            else{
                return <Report 
                    key={index}
                    id={index}
                    price={report.price}
                    estPeriod={report.estPeriod}
                    date={report.date}
                    tradeType={report.tradeType}
                    tradePoint={"Trade point: "+ report.tradePoint}
                    deleteTrade= {this.props.deleteTrade}
                    edit= {this.toggleEdit}
                />
            }
            
            
        })
        // console.log(reports)

        return(
            
            <section className="report-list">
                <Form 
                    editing={this.state.isEditing} 
                    addTrade={this.addTrade}
                    editIndex={this.state.editIndex}/>
                {reports}
            </section>
           
        )
    }
}

export default ReportList