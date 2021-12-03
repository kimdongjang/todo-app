import React from 'react';
import Filter from './Filter';

export default function Footer(props){
    const {count, filter, changeFilter} = props;

    return(
        // <div className='todo-footer'>
        //     <strong>
        //         <span className='count-todos'>{count}</span>
        //     </strong>
        //     {'items left'}
        // </div>
        <div className="todo-footer clearfix">
            <div className="pull-left">
                <strong className="count-todos">{count}</strong>
                {' items left'}
            </div>                    
            <div className="pull-right">
                <Filter filter={filter} change={changeFilter}/>
            </div>
        </div>
        
    )
}