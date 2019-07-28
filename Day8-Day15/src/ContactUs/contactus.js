import React from 'react';
import './contactus.css';
function ContactUs(props){
return (
<div className = {"contact"}>
<h1>{props.name}</h1>
<h2>{props.number}</h2>
</div>

)

}
export default ContactUs;