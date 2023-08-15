import React from "react";
import Para from "./sub-components/para";
import Imgs from "./sub-components/imgs";
const Section3 =()=>{
    return(
        <section id="section3"  className="container pb-100 pdg flex-space-btw">
            <div className="container flex-col w-50">
                <h2>Project heading & Statistics</h2>
                <Para color="#000" text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus totam vitae. Alias illum totam voluptas a iste hic nostrum explicabo debitis, tempora nemo commodi iusto necessitatibus eos. Nobis, illo." />
            </div>
            <Imgs src="https://media.istockphoto.com/id/1340441515/photo/cool-smiley-face.webp?b=1&s=170667a&w=0&k=20&c=GFqoHSySFz0tHn0xpn3AKV1EUYk7rOohdoPg5V1nUvs=" alt="this image" />
        </section>
    )
} 
export default Section3;