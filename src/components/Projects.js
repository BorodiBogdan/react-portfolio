import headerImg from "../assets/img/profile-cut.jpg";

export function Projects(){
    const card_arr = [headerImg, "BBU student", "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania."];
    const final_arr = [card_arr, card_arr, card_arr];
    
    return(
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="cards-wrapper">
                {final_arr.map((card, index) => {
                    return (
                        <div class="card">
                            <img src={card[0]} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{card[1]}</h5>
                                <p class="card-text">{card[2]}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                )})}
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    )
}