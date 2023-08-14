import React from 'react';




export default class Music extends React.Component{
	constructor(props){
		super(props)
		this.state={
			play: false
		}

	}


componentDidMount()
{
	window.addEventListener('keydown', (e)=>this.music(e))
}
  
   music(e){
   
   e.preventDefault();
   let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   if(!audio) return ;
   this.setState({play: true})
    audio.currentTime = 0;
    audio.play();
    console.log("playing")
  
}

componentWillUnmount()
{
	window.removeEventListener('keydown', (e)=>this.music(e))
}


render(){
	return( <div className="keys">
		<audio data-key={this.props.name} src={this.props.source} ></audio>
		
  
		

		</div>)
}

}

