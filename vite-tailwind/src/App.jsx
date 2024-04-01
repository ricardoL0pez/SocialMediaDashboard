import './App.css';
import uno from './assets/images/uno.png';
import dos from './assets/images/dos.png';
import tres from './assets/images/tres.png';
import cuatro from './assets/images/cuatro.png';
import cinco from './assets/images/cinco.png';
import seis from './assets/images/seis.png';
import galaga from './assets/images/galaga.jpeg';


function App() {

  return (
    <body>
      {/* Frontend Mentor | Notifications page */}
      <section className='main'>
        <div className='notifications'>
          <h3 className='title'>Notifications <span className='number'>4</span></h3>
          <p className='mark'>Mark all as read</p>
        </div>

        <div className='post'>
          <img className='image' src={uno} alt="" />
          <div>
            <p>
              <span className='name'>Chica </span>
              <span>reacted to your recent post </span>
              <span className='reaction'>My first tournament today!</span>
              <span className='status not-read'></span>
            </p>
            <p className='time'>1m fa</p>
          </div>
        </div>

        <div className='post'>
          <img className='image' src={dos} alt="" />
          <div>
            <p>
              <span className='name'>Chontaduro </span>
              <span>followed you</span>
              <span className='status not-read'></span>
            </p>
            <p className='time'>5m fa</p>
          </div>
        </div>

        <div className='post'>
          <img className='image' src={tres} alt="" />
          <div>
            <p>
              <span className='name'>Pepita </span>
              <span>has joined your group </span>
              <span className='group'>2600 Club</span>
              <span className='status not-read'></span>
            </p>
            <p className='time'>1 giorno fa</p>
          </div>
        </div>

        <div className='post'>
          <img className='image' src={cuatro} alt="" />
          <div>
            <p>
              <span className='name'>Aracacha </span>
              <span>sent you a private message </span>
              <span className='status not-read'></span>
            </p>
            <p className='time'>5 giorni fa</p>
            <div className='message-container'>
            <p className='message'>Hello, thanks for setting up the 2600 Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
            </div>
          </div>
        </div>

        <div className='post'>
          <img className='image' src={cinco} alt="" />
          <div>
            <p>
              <span className='name'>Mazorca </span>
              <span>commented on your picture </span>
              <span className='status'></span>
            </p>
            <p className='time'>1 settimana fa</p>
          </div>
          <img className='picture' src={galaga} alt="" />
        </div>

        <div className='post'>
          <img className='image' src={seis} alt="" />
          <div>
            <p>
              <span className='name'>Panela </span>
              <span>reacted to your recent post </span>
              <span className='reaction'>5 end-game strategies to increase your win rate</span>
              <span className='status'></span>
            </p>
            <p className='time'>2 settimane fa</p>
          </div>
        </div>

       

      </section>

    </body>
  )
}

export default App
