import FeatureCard from "./FeatureCard";
import '../App.css';
import '../CSS/Hero.css';
import heroImage from '../assets/cyborg.png'; // вставь сюда своё изображение

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Unleash your survival instincts <br /> in a futuristic apocalypse.
        </h1>
        <p className="hero__text">
          Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.
        </p>

        <div className="hero__buttons">
          <button className="hero__button-primary">Buy Game</button>
          <button className="hero__button-secondary">Learn More</button>
        </div>

        <div className="hero__cards">
          <FeatureCard title="Gameplay and Features" icon="🎮" />
          <FeatureCard title="Items and Collectibles" icon="⚔️" />
          <FeatureCard title="Heroes and Game Locations" icon="🛡️" />
        </div>
      </div>

      <div className="hero__image">
        <img src={heroImage} alt="Hero character" />
      </div>
    </section>
  );
}
