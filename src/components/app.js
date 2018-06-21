import 'materialize-css/dist/css/materialize.min.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css
import React, {Component} from 'react';
import List from './list'; 
import AddItem from './add_item';
import listData from "../data/list"; 

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            list: []
        }

    }

    //called after render already mounted to the dom 
    componentDidMount(){
        this.getListData(); 
    }

    getListData(){
    //normally make call to server to get data 
        this.setState({
            list:listData
        })
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        })

    }

    render(){
        console.log("app state", this.state); 
        return(
            <div className="container">
            <h1 className="center"> To do List</h1>
            <AddItem add={this.addItem.bind(this)}/>
            <List data={this.state.list}/> 
            </div>
        ); 
    }
}

export default App;
