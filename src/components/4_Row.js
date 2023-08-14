import React from 'react';
import Music from '../logic/Logic.js'
import Sound1 from '../audio/row4/Sa.mp3'
import Sound2 from '../audio/row4/Re.mp3'
import Sound3 from '../audio/row4/Ga.mp3'
import Sound4 from '../audio/row4/Ma.mp3'
import Sound5 from '../audio/row4/Pa.mp3'
import Sound6 from '../audio/row4/Dha.mp3'
import Sound7 from '../audio/row4/Ni.mp3'
import Sound8 from '../audio/row4/Sa 2.mp3'
import Sound9 from '../audio/row4/6.wav'
import Sound10 from '../audio/row4/7.wav'
import Sound11 from '../audio/row4/8.wav'





export default class Row4 extends React.Component{
	
	render(){
	return(
           <div>
         <Music name="90" source={Sound1} />
         <Music name="88" source={Sound2} />
          <Music name="67" source={Sound3} />
           <Music name="86" source={Sound4} />
         <Music name="66" source={Sound5} />
         <Music name="78" source={Sound6} />
         <Music name="77" source={Sound7} />
       <Music name="188" source={Sound8} />
       <Music name="190" source={Sound9} />
         <Music name="191" source={Sound10} />
       <Music name="16" source={Sound11} />
       
       


           </div>
         


		)
}






}