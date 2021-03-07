import React, {useState, useContext} from 'react';
import './modal.css';
import { ToggleButton } from 'react-bootstrap';
import Context from '../context';

export default function Modal(props) {
  const { removeMatch } = useContext(Context)
  const [state, setState] = useState (
      {isOpen: false}
  )

  const [checked, setChecked] = useState(true);  
  const [radioValue, setRadioValue] = useState();

  const radios = [
    { name: 'Победа хозяев', value: 'Победа хозяев' },
    { name: 'Ничья', value: 'Ничья' },
    { name: 'Победа гостей', value: 'Победа гостей' },
  ];

  function changeButoon() {
    setState({isOpen: false})
    setChecked(false) 
  }



  if(checked === false){
    // return (<div>
    //   Ставка сделана! Ваша ставка - {radioValue}
    //   {/* <button className="buttonClose" onClick={()=>removeMatch(props.index)}>OK</button> */}      
    // </div>)
    return setTimeout(() => {
      removeMatch(props.index);
    }, 3000) && <div>Ставка сделана! Ваша ставка - {radioValue}</div>;
    
  };

    
  return (
      <div>                    
          {checked && (<button onClick={()=>setState({isOpen: true})}>Подробнее</button>)} 
          {/* или конопка "Подробнее", false => что по итогу выдаст сообщение в div */}              
          {state.isOpen && (<div className='modal'>
                  <div className='modal-body'>                        
                    <h2>Сделайте ставку</h2>
                    <p>Матч команд {props.title}, установить коофициент:</p>
                    <form>                      
                    {radios.map((radio) => (
                      <ToggleButton 
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}                        
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                      <button onClick={()=>changeButoon()}>Сделать ставку</button>
                    </form>                    
                    <button onClick={()=>setState({isOpen: false})}>Закрыть</button>          
                  </div>
            </div>)}
      </div>

  )
                  
                
}


