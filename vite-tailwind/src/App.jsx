import './App.css';
import mark from './assets/images/mark.webp'

function App() {

  return (
    <body>
      {/* Frontend Mentor | Notifications page */}
      <section className='main'>
        <div className='notifications'>
          <h3 className='title'>Notifications<span>3</span></h3>
          <p className='mark'>Mark all as read</p>
        </div>
        <div className='post'>
          <img src={mark} alt="" />
          <div>
            <p>
              <span className='name'>Mark Webber</span>
              <span>reacted to your recent post</span>
              <span className='reaction'>My first tournament today!</span>
              <span className='stsatus'>*</span>
            </p>
            <p className='time'>1m ago</p>
          </div>
        </div>
      </section>





      Angela Gray followed you
      5m ago

      Jacob Thompson has joined your group Chess Club
      1 day ago

      Rizky Hasanuddin sent you a private message
      5 days ago
      Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
      I'm already having lots of fun and improving my game.

      Kimberly Smith commented on your picture
      1 week ago

      Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
      2 weeks ago

      Anna Kim left the group Chess Club
      2 weeks ago
    </body>
  )
}

export default App
