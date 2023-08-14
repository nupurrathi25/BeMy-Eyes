import React from 'react';
import Music from '../logic/Logic.js'
import Sound1 from '../audio/row5/1.wav'
import Sound2 from '../audio/row5/3.wav'
import Sound3 from '../audio/row5/2.wav'
import Sound4 from '../audio/row5/4.wav'
import Sound5 from '../audio/row5/5.wav'
import Sound6 from '../audio/row5/6.wav'
import Sound7 from '../audio/row5/7.wav'
import Sound8 from '../audio/row5/8.wav'
import Sound9 from '../audio/row5/9.wav'
import Sound10 from '../audio/row5/10.wav'






export default class Row5 extends React.Component{
  
  render(){
  return(
           <div>
         <Music name="17" source={Sound1} />
         <Music name="18" source={Sound2} />
          <Music name="91" source={Sound3} />
           <Music name="32" source={Sound4} />
         <Music name="18" source={Sound5} />
         <Music name="17" source={Sound6} />
         <Music name="37" source={Sound7} />
       <Music name="38" source={Sound8} />
        <Music name="40" source={Sound9} />
         <Music name="39" source={Sound10} />   
         

           </div>
         


    )
}






}