import React from 'react';
import JSRes from './resources/JavascriptRes';
import './sections.css';

const JavascriptList = JSRes.map(item => {
    return(
        <li className="box">
            <a href={ item.href } rel="noopener noreferrer" target="_blank" className="has-text-left">
                <img src={ item.img } alt={ item.alt } />
                <h2 className="is-size-4">{ item.name }</h2>
                <p className="is-size-6">{ item.desc }</p>
            </a>
        </li>
    )
})

function JavascriptSection(){
    return(
        <div>
            <h1 className="is-size-2 has-text-centered">Javascript &amp; APIs</h1>
            <h3 className="block is-size-4 has-text-centered">JS libraries, API's, and JS articles about things I wish I knew sooner</h3>
            <hr />
            <div className="container MainContentList">
                <ul className="columns is-vcentered">
                    { JavascriptList }
                </ul>
            </div>
        </div>
    )
}

export default JavascriptSection;