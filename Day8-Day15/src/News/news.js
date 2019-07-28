import React from 'react';
import './news.css';
import {data} from './newsdata';
//import { isTemplateElement } from '@babel/types';
function News(){
const itemresult = data.map((items)=>{
    return(
<div className = "flex-parent">
   <div className="flex-child"> 
   <img src = {items.url} ></img>
   <h1>{items.description}</h1></div>
</div>
    )
})

return(
    <div>
        <h1 className = "events">EVENTS</h1>
    <div className = "flex-container">
    {itemresult}
    </div>
    </div>
)
}
export default News;