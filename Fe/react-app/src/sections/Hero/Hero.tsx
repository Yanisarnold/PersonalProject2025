import HeroData from "../../data/Hero.json"
function Hero() {
    const heroData = HeroData
    return (
        <div>
            <h1>{heroData.title}</h1>
            <p>{heroData.subtitle}</p>
            <button>{heroData.tagLine}</button>
        </div>
    )
}

export default Hero