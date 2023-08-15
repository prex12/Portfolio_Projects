import React from "react";
import Para from './sub-components/para'
import Imgs from './sub-components/imgs'

const Section1 =()=>{
    
    return(
        <section id="section1" className="container flex-col pb-100 pdg">
            <div className="container flex-space-btw align-top">
                <h1 className="h1-big w-80">EFFICIENT <span className="text-gradient">TEAM</span> COLABORATION</h1>

                <div className="container flex-col small-box text-gradient">
                    <h3>SAAS website</h3>
                    <p>12 Dec. to 12 Dec.</p>
                </div>
            </div>
            <div className="container flex-space-btw">
                <Para color= "#fff" text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus totam vitae. Alias illum totam voluptas a iste hic nostrum explicabo debitis, tempora nemo commodi iusto necessitatibus eos. Nobis, illo."/>
                <Imgs src="https://media.istockphoto.com/id/1340441515/photo/cool-smiley-face.webp?b=1&s=170667a&w=0&k=20&c=GFqoHSySFz0tHn0xpn3AKV1EUYk7rOohdoPg5V1nUvs=" alt="this image" />
            </div>
        </section>
    )
}

export default Section1;