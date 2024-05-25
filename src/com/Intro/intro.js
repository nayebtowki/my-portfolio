import React from 'react';
import './intro.css';
import CV from './NayebTowki_cybersecurity.pdf'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hi">Hi,</span>
                <span className="introText">I'm <span className="introName">Nayeb Towki,</span> <br />a Cybersecurity Enthusiast <br />& Full-Stack Web Developer</span>
                <p className="introPara">As a passionate technologist, I am dedicated to merging the analytical rigor of cybersecurity and <br/> the creative artistry of web development. My journey is a blend of  securing digital landscapes <br/>and crafting engaging web experiences, showcasing a unique synergy between diverse technological domains.</p>
            <div>
                <a href={CV} target="_blank" rel="noopener noreferrer" download>
                    <button className="btn">Download My CV</button>
                </a>
            </div>
            
            </div>

        </section>
    );
}

export default Intro;