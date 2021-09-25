import React from 'react'
import bucketLogo from './logo.png'
export const ItemListContainer = ( props ) => {
    
    const {greeting} = props;
    console.log(greeting);
    return (
        <article>
            <p>{greeting}</p>
            <img src={bucketLogo} alt="sample bucket main logo" className="main-logo"/>
        </article>
    )
}
