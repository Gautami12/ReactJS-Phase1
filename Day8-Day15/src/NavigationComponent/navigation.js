import React from 'react';
import  './navigation.css';
function Navigation(props){
return(
<div className= "nav-parent"> 
<div><a href="#home">HOME</a></div>

<div className="dropdown"> 
<a className="dropbtn" href="#about">ABOUT <i class="down"></i></a>
<div className= "dropdown-content">
    <a href = "#Overview">{props.overiew}</a>
    <a href = "#Core Values">{props.core}</a>
    <a href = "#The Principal">{props.principal}</a>
    <a href = "#comittee">{props.comitte}</a>
</div>
</div>
<div className="dropdown">
<a className="dropbtn" href="#academics">ACADEMICS <i class="down"></i></a>
<div className= "dropdown-content">
    <a href = "#computer">{props.comps}</a>
    <a href = "#mechanical">{props.mech}</a>
    <a href = "#IT">{props.IT}</a>
    <a href = "#ppt">{props.PPT}</a>
</div>

</div>
<div><a href="#admissions">ADMISSIONS</a></div>
<div><a href="#careers">CAREERS</a></div>
<div className = "imgpa">
<img src className= "imgsies" src = "https://yt3.ggpht.com/a/AGF-l7-R97RMeaNI1o0-vGveZV-YJiOG6iSbvNq_6g=s900-mo-c-c0xffffffff-rj-k-no" ></img>  

</div>

<div className="dropdown">
<a className="dropbtn" href="#amenities">AMENITIES <i class="down"></i></a>
<div className= "dropdown-content">
    <a href = "#library">Library</a>
    <a href = "#intranet">Intranet</a>
    <a href = "#laboratories">Laboratories</a>
    <a href = "#audi">Auditorium</a>
</div>

</div>
<div className="dropdown">
<a className="dropbtn" href="#lifegst">LIFE@GST <i class="down"></i></a>
<div className= "dropdown-content">
    <a href = "#nss">NSS</a>
    <a href = "#studentcouncil">Student Council</a>
    <a href = "#dreamrun">Dream Run</a>
    <a href = "#festivals">festivals</a>
</div>

</div>
<div><a href="#clied">CLIED</a></div>
<div><a href="#alumini">ALUMINI</a></div>
<div><a href="#contactus">CONTACT US</a></div>

</div>

)





}
export default Navigation;