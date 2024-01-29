import React, {useState} from "react";

function InputArea (props){

    const [inputValue, setInputValue] = useState('');

    function getValue(e){
        let {value} = e.target;
        setInputValue(value)
      }

    return(
        <div className="form">
        <input type="text" onChange={getValue} value={inputValue}/>
        <button onClick={ () => {props.addClickedFunc(inputValue,setInputValue)}}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea