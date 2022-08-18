import React from "react";
export default
class Hint extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          fhint: "Click here if you Noopppp"
        }
      }
  
      changeHint = () => {
        this.setState({
          fhint: "For greeting"
        })
      }  
      
      render(){
        return (
          <div>
            <p>{this.state.fhint}</p>
            <button
              type="button" onClick={this.changeHint} >Click me babe</button>
          </div>
        );
      }
  }