import React from 'react';
import Music from '../logic/Logic.js'
import Sound1 from '../audio/row2/Sa.mp3'
import Sound2 from '../audio/row2/Re.mp3'
import Sound3 from '../audio/row2/Ga.mp3'
import Sound4 from '../audio/row2/Ma.mp3'
import Sound5 from '../audio/row2/Pa.mp3'
import Sound6 from '../audio/row2/Dha.mp3'
import Sound7 from '../audio/row2/Ni.mp3'
import Sound8 from '../audio/row2/Sa 2.mp3'
import Sound9 from '../audio/row2/1.mp3'
import Sound10 from '../audio/row2/2.mp3'
import Sound11 from '../audio/row2/3.mp3'
import Sound12 from '../audio/row2/4.mp3'
import Sound13 from '../audio/row2/5.mp3'
import Sound14 from '../audio/row2/5.wav'





export default class Row2 extends React.Component{
	
	render(){
	return(
           <div>
         <Music name="81" source={Sound1} />
         <Music name="87" source={Sound2} />
          <Music name="69" source={Sound3} />
           <Music name="82" source={Sound4} />
         <Music name="84" source={Sound5} />
         <Music name="89" source={Sound6} />
         <Music name="85" source={Sound7} />
       <Music name="73" source={Sound8} />
       <Music name="79" source={Sound9} />
         <Music name="80" source={Sound10} />
       <Music name="219" source={Sound11} />
       <Music name="221" source={Sound12} />
       <Music name="220" source={Sound13} />
        <Music name="9" source={Sound14} />
        
        
       


           </div>
         


		)
}






}