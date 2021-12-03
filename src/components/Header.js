import React from 'react';
import InputBox from './InputBox';

export default function Header(props){
    const {title, addNew} = props;

    return(
        // <h1>{title.toUpperCase() } </h1>
        <header>
             <h1>{title.toUpperCase() } </h1>
             <InputBox addNew={addNew}/>             
        </header>
    );
}