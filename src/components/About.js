import { useEffect, useState } from "react";
import IMAGES from "../assets/records/images";
import Records from "../assets/records/about-record.json";

export function About() {
    const [content, setContent] = useState(1);
    const [txt, setTxt] = useState(Records[0]['content']);
    const [img, setImg] = useState(IMAGES[0]);
    const [active, setActive] = useState('about me');

    const updateContent = (value, activeButton) => {
        setContent(value);
        setTxt(Records[value - 1]['content']);
        setImg(IMAGES[value - 1]);
        setActive(activeButton);
    }

    useEffect(() => {

    }, [content]);

    return (
        <div className="about-container">
            <div className="about-me-description">
                <h1 className="about-me-title">About me!</h1>
                <p>
                    The console below is a summary of who I am, what I do and what I like.<br></br>
                    Press the corresponding buttons to discover more about me
                </p>
            </div>
            <div className="about-info">
                <div className="controls">
                    <p className={active == 'about me' ? "active-button control-button" : "control-button"} onClick={() => updateContent(1, 'about me')}>About me</p>
                    <p className={active == 'education' ? "active-button control-button" : "control-button"} onClick={() => updateContent(2, 'education')}>Education</p>
                    <p className={active == 'activities' ? "active-button control-button" : "control-button"} onClick={() => updateContent(3, 'activities')}>Extracuricullar activities</p>
                    <p className={active == 'passions' ? "active-button control-button" : "control-button"} onClick={() => updateContent(4, 'passions')}>Passions</p>
                    <p className={active == 'skills' ? "active-button control-button" : "control-button"} onClick={() => updateContent(5, 'skills')}>Skills</p>
                </div>
                <div className="about-me">
                    <div className="about-me-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="about-me-text">
                        <p className="alice">{txt}</p>
                    </div>
                </div>
            </div>

        </div >
    )
}