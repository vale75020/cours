import React from "react";
import axios from 'axios';

class Edit extends React.Component {

state = {
    courstab:[]

}



componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`http://localhost:5000/cours/${id}`)
          .then(res => {
            //   console.log(res)
          this.setState({
              courstab : res.data
          },()=> console.log(this.state.courstab))
    
          })
        } 
    render() {
        const {id} = this.props.match.params;
        return(
            <div>
            <form method="POST" action={`http://localhost:5000/cours/edit/${id}`}>
            <input name="name" className="form-control" type="text" placeholder="Name"  />
            <input name="author" className="form-control" type="text" placeholder="Author" />
            <input name="tags" className="form-control" type="text" placeholder="Tags" />
            <input name="date" className="form-control" type="date" placeholder="Date" />
            
            <button className='btn btn-danger' type='submit'>EDIT</button>
            </form>
            </div>
        )
    }
}

export default Edit;