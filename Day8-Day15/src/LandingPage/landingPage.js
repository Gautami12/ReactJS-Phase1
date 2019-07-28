import React from 'react';
import ReactDOM from "react-dom";
import {images} from "./images";
import './landingPage.css'
import {Gallery, GalleryImage} from "react-gesture-gallery";
function LandingPage()
{
  const [index, setIndex]=React.useState(0)
  React.useEffect(()=>{
const interval = setInterval(()=>{
  if(index === images.length-1){
    setIndex(0);
  }
  else{
setIndex(index+1);
  }
}, 5577500)
return () => clearInterval(interval);
  }, [index])
return(
<Gallery
style={{
  background: 'black',

}}
index = {index}
onRequestChange={i => {setIndex(i);}}
>
  {
  images.map(image=> (<GalleryImage className="img" src={image}/>))
  }

</Gallery>

);

}

export default LandingPage;