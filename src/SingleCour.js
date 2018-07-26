import React from "react";
import {Link} from "react-router-dom";
import axios from "axios"

class SingleCour extends React.Component {
    state={
        courstab:[],
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
        <h4>{this.state.courstab.name}</h4>
        <h6>Written by : {this.state.courstab.author}</h6>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
        </p>
        <Link className="btn btn-primary" to={`/cours/edit/${id}`}>EDIT</Link>
        <a className="btn btn-danger" href={`http://localhost:5000/cours/delete/${id}`}>DELETE</a>
        </div>
    )

}
    
}

export default SingleCour;