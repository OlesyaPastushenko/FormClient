import Form from "../form/Form"
import "./sectionRichOut.css"
import map from "./imgRichOut/map.svg"
import yellowBall from './imgRichOut/GroupYellow.png'
import pinkBall from './imgRichOut/Group.png'
import yellowBall2 from './imgRichOut/GroupYellow2.png'
import ellipse from './imgRichOut/Ellipse.png'
import cloud from './imgRichOut/cloud.svg'
export default function SectionRichOut (){
    return (
        <div className="secRich">
            <img src={map} className="map"/>
            <img src={yellowBall} className="yellowBall"/>
            <img src={ellipse} className="ellipse"/>
            <img src={pinkBall} className="pinkBall"/>
            <img src={yellowBall2} className="yellowBall2"/>
            <img src={cloud} className="cl1"/>
            <img src={cloud} className="cl2"/>
            <img src={cloud} className="cl3"/>
            <img src={cloud} className="cl4"/>
            <img src={cloud} className="cl5"/>
            <img src={cloud} className="cl6"/>
            <img src={cloud} className="cl7"/>
            <div className="title">Reach out to us!</div>
            <Form/>
        </div>
    )
}