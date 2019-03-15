import React from "react"

import "./style.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleBackwardClick = this.handleBackwardClick.bind(this)
    }
    
    handleForwardClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    handleBackwardClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        return (
            <div className="flex-buttons">               
                <button onClick={this.handleForwardClick}>Forward</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleBackwardClick}>Backward</button>
            </div>
        )
    }
}

export default App
