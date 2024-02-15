import headerImg from "../assets/img/profile-cut.jpg";

export function About() {

    return (
        <div className="about-container">
            <h1>About me!</h1>

            <div className="about-div">
                <div className="info-div">
                    <div className="picture-of-me">
                        <img src={headerImg} alt="Profile picture" />
                    </div>
                    <div className="info-about-me">
                        <h1>Hi, I'm Borodi Bogdan!</h1>
                        <p>
                            I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}