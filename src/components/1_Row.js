import React from 'react';
import Music from '../logic/Logic.js'
import Sound1 from '../audio/row1/1.wav'
import Sound2 from '../audio/row1/3.wav'
import Sound3 from '../audio/row1/2.wav'
import Sound4 from '../audio/row1/4.wav'
import Sound5 from '../audio/row1/5.wav'
import Sound6 from '../audio/row1/6.wav'
import Sound7 from '../audio/row1/7.wav'
import Sound8 from '../audio/row1/8.wav'
import Sound9 from '../audio/row1/9.wav'
import Sound10 from '../audio/row1/10.wav'
import Sound11 from '../audio/row1/11.wav'
import Sound12 from '../audio/row1/12.wav'
import Sound13 from '../audio/row1/13.wav'
import Sound14 from '../audio/row1/14.wav'





export default class Row1 extends React.Component{
	
	render(){
	return(
           <div>
         <Music name="49" source={Sound1} />
         <Music name="50" source={Sound2} />
          <Music name="51" source={Sound3} />
           <Music name="52" source={Sound4} />
         <Music name="53" source={Sound5} />
         <Music name="54" source={Sound6} />
         <Music name="55" source={Sound7} />
       <Music name="56" source={Sound8} />
        <Music name="57" source={Sound9} />
         <Music name="48" source={Sound10} />   
           <Music name="192" source={Sound11} />
       <Music name="189" source={Sound12} />
        <Music name="187" source={Sound13} />
         <Music name="8" source={Sound14} />     


           </div>
         


		)
}






}