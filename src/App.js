import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
        <header className='header'>
          <img src='https://papik.pro/uploads/posts/2021-01/1610456240_pin_by_sandi_rentz_on_art_animal_drawings_animal_sketches.jpg'/>
        </header>
      <nav className='nav'>
          <div>
              <a>Profile</a>
          </div>
          <div>
              <a>Messages</a>
          </div>
          <div>
              <a>News</a>
          </div>
          <div>
              <a>Settings</a>
          </div>

      </nav>
      <div className='content'>
          <div>
          <img src='https://wallpapershome.ru/images/wallpapers/4k-7680x4320-5k-8k-abstrakciya-oboi-249.jpg'/>
          </div>
          <div>
              ava + description
          </div>
          <div>
              My post
              <div>
                  new post
              </div>
              <div>
                  post 1
              </div>
              <div>
                  post 2
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
