

import React from 'react';
import './App.css';
import Home from "./pages/FirstPage";
import Game from "./pages/SecondPage";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  

  return (
    


    



    
    <div className="main">
      <div className="h1">
        <h1 className='zagolov' id='zagolov1'>JS Forge</h1>

        <nav className="tabs">
          <a href="#install" onClick={(e) => { e.preventDefault(); scrollToSection('install'); }}>Установка</a>
          <a href="#usage" onClick={(e) => { e.preventDefault(); scrollToSection('usage'); }}>Использование</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
        </nav>
     



  <div className="body">
        <Routes>
          <Route path="/" element={(
            <>
            
              {/* здесь оставляем все твои секции, включая prestart */}
              <section id='prestart'>
                <h2>От нуля к интерактивности: твой первый код</h2>                
                <div id='start'>
                  <button id='start-button' onClick={() => navigate('/SecondPage')}>
                    Начать
                  </button>
                </div>
              </section>
              {/* остальные секции */}
            </>
          )} />

          <Route path="/FirstPage" element={<Home />} />
          <Route path="/SecondPage" element={<Game />} />
        </Routes>
      </div>

    <div className='intro'>
  <section id="install">
  <h2 id='text'>Установка JavaScript</h2>
    <p>
      JavaScript — это язык, который уже встроен в браузер. Чтобы начать обучение, тебе не нужно ничего устанавливать.
    </p>


    <div id='install-ex'>
      <p>Для старта понадобится:</p>


      <ul>
        <li>Современный браузер (Chrome, Firefox, Edge)</li>
        <li>Текстовые редакторы: (VS Code, Sublime Text, Atom, WebStorm, Notepad++) </li>
      </ul>

      <p>Советую именно VS Code так как, он имеет внушительный инструментарий доступный прямо из коробки, и благодоря большому колличеству расширений сделает написание кода быстрым и приятным</p>
      <a id="button" href="https://code.visualstudio.com/download">Ссылка на VsCode</a>
    </div>

  </section>

  <section id="usage">
    <h2>Использование</h2>
    <p>Где используется JavaScript?</p>

    <p>С его помощью страницы реагируют на действия пользователя: клики, ввод текста и нажатия кнопок.

      JavaScript работает прямо в браузере, поэтому ничего устанавливать не нужно.
      Также его используют на серверах и в приложениях, но для начала достаточно знать, что именно он отвечает за интерактивность сайтов.
        
      Если без JavaScript — сайт статичный.
      С JavaScript — сайт «оживает».</p>
  </section>




 
















    

<section id="reviews">
  <h2>Отзывы наших учеников</h2>

  <div className="reviews-wrapper">
    <div className="review">
      <img className="review-avatar" id='R1' src="data:image/jpeg;base64,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" alt="" /> 
      <div className="review-content">
        <p className="review-author">ilove2018lebron</p>
        <p className="review-text">Гайд помог мне понять JS с нуля. Всё ясно и просто!</p>
      </div>
    </div>

    <div className="review">
      <img className="review-avatar" id='R1' src="data:image/jpeg;base64,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" alt="" />
      <div className="review-content">
        <p className="review-author">pre.10nn</p>
        <p className="review-text">Очень крутой интерактивный урок. Никакой воды, только практика</p>
      </div>
    </div>

    <div className="review">
      <img className="review-avatar" id='R1' src="https://i1.sndcdn.com/artworks-JcoJDN2nSiuWJ2S5-dzpy1w-t500x500.jpg" alt="" />
      <div className="review-content">
        <p className="review-author">roberthsi</p>
        <p className="review-text">Сразу можно писать код в браузере. Мне очень понравилось!</p>
      </div>
    </div>
  </div>
</section>


  <section id="faq">
    <h2>FAQ</h2>
    <p>все вопрсы оставляйте на почту  example@mail.com</p>
  </section>

    </div>
  </div>
</div>
  );
}

export default App;
