import React from 'react';
import './Footer.css';
function Footer(props){
return (
<div>
    <footer className = "footer">
    <p className = "posted"> Posted by - {props.posted}</p>
    <p className = "contact">Contact information: <a href={props.email}>
  {props.email}</a>.</p>
    </footer>

</div>

)

}
export default Footer;