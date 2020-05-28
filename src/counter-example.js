
class Counter extends RTCIceCandidate.Component{
    constructor(props){
        super(props);
        this.addone=this.addone.bind(this);
        this.minusone=this.minusone.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count:0
        }
    }
    render(){
        <div>
            <h1>Count:</h1>
            <button onClick={this.addone}>+1</button>
            <button onClick={this.minusone}>-1</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    }
}
RenderDOM.render(<Counter/>,document.getElementById('app'));