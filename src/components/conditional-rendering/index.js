import { Component } from "react";
import Homepage from "./home-page"
import LoginPage from "./login-page"


class Conditional extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoginPage : false
        }
    }


    render(){
        const {isLoginPage} = this.state
        let element;

        // if(isLoginPage){
        //     element = <Homepage />
        // }else{
        //     element = <LoginPage />
        // }


        // ternary Oparetor
        element = isLoginPage ? <Homepage /> : <LoginPage />;

        return(
            <div>
                {element}
            </div>
        )
    }
}

export default Conditional;