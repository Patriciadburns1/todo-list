import 'materialize-css/dist/css/materialize.min.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css
import React, {Component} from 'react';
import List from './list'; 
import AddItem from './add_item';
// import listData from "../data/list"; 
import axios from 'axios'; 

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            list: []
        }
        this.base_url="http://api.reactprototypes.com"; 
        this.api_key="?key=c418Patricia"; 
    }

    //called after render already mounted to the dom 
    componentDidMount(){
        this.getListData(); 
    }

    async getListData(){
    //normally make call to server to get data 
        // this.setState({
        //     list:listData
        // // })
        // axios.get(`${this.base_url}/todo ${this.api_key}`).then(response=> {
        //     console.log('Get To Dos Response', response.data.todos);
        //     this.setState({
        //             list: response.data.todos
        //         })
        //     }).catch(error=> {
        //     console.log('Get Todos Error', error.message); 
        // })
        try{
            const resp= await axios.get(`${this.base_url}/todos${this.api_key}`);
            console.log('Get Data Response', resp); 
            this.setState({
                list: resp.data.todos
            });
        }
        catch(err){
            console.log("get data error", err.message); 
        }  
    }

    async addItem(item){
        // this.setState({
        //     list: [item, ...this.state.list]
        // })
        //submit with titles and details 
        try{
            await axios.post(`${this.base_url}/todos${this.api_key}`, item); 
            this.getListData();
        }
        catch(error){
            console.log('error adding item', error.response.data.error); 
            // error.response.data to access data 
        }
        // const resp= await axios.post(`${this.base_url}/todos${this.api_key}`, item); 
        // console.log("add response", resp); 
        
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
