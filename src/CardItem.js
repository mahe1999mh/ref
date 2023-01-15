
import React from "react";
class CardItem extends React.Component{
       
    constructor () {
        super();
        this.state = {
            price: 999,
            title:'Moble',
            qty:1,
        }

    }
    
    increase = () =>{
        console.log('this', this.state);
    }

    render(){
        const {price, title, qty} = this.state; 
        return(
        <div className="card-item">
            <img style={styles.image}/>
            <div className="left-block">

            </div>
            <div className="right-block">
                
                {/* <div style={{fontSize:25}}>{this.state.title}</div>
                <div style={{color:'#777'}}>{this.state.price}</div>
                <div style={{color:'#777'}}>{this.state.qty}</div> */}

                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>{qty}</div>

                <div className="card-item-action">
                
               

                    <img alt="increase"
                     style={{width:20, height:20, margin:4,}}
                     className="action-icons"
                     onClick={this.increase}
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"/>

                    <img alt="decrease"
                     style={{width:20, height:20,margin:4}} 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"/>

                    <img alt="delete"
                     style={{width:20, 
                     height:20,margin:4}} 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/565/565491.png"/>
                   
                </div>
            </div>
        </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRedius:4,
    }
}

export default CardItem