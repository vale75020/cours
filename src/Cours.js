import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';



class Cours extends React.Component {

    state={
        courstab:[],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cours/')
              .then(res => {
                  console.log(res)
              this.setState({
                  courstab : res.data
              },()=> console.log(this.state.courstab))
        
              })
            } 
            
    
        


    render() {
        return (
           
            <div className="gr">
             {this.state.courstab.map((element, index)=>{
                 return (
                    <div key={index} className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`./uploads/${element.img}`} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{element.name}</h4>
                        <h6>Written by : {element.author}</h6>
                        <p className="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte</p>
                        <Link className="btn btn-primary" to={`/cours/${element._id}`}>Go to the cour</Link>
                    </div>
                </div>
                )

            })}
                
            </div>
        )
    }
}

export default Cours;