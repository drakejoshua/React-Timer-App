import AppStyles from './App.module.css';

function App() {

  return (
    // app container
    <div className={ AppStyles.app }>

      {/* app's nav */}
      <nav>
        <span className={AppStyles.navTitle}>
          <span className={`material-symbols-outlined ${AppStyles.navTitleIcon}`}>
            timer
          </span>

          <span className='nav-title-text'>
            react timer app
          </span>
        </span>

        <a href="https://github.com/drakejoshua" className={AppStyles.navLink }>
          made by mabawonku joshua
        </a>
      </nav>

      {/* timer */}
      <div className={AppStyles.timer}>

        {/* timer's clock */}
        <div className={ AppStyles.clock }>

          <svg xmlns="http://www.w3.org/2000/svg">
            <circle r="150" cx="50%" cy="50%"/>

            Sorry, your browser does not support inline SVG.  
          </svg> 

          <div className={AppStyles.clockHands}>
            <div className={AppStyles.clockHands1}>
              <div></div>
            </div>
            <div className={AppStyles.clockHands2}>
              <div></div>
            </div>
            <div className={ AppStyles.clockKnob }></div>
          </div>
        </div>


        {/* timer's ctn */}
        <div className={ AppStyles.timerCtn }>

          {/* timer's inputs */}
          <div className={ AppStyles.timerInputCtn }>
            <div className={ AppStyles.timerInput }>

              <span className={`material-symbols-outlined ${ AppStyles.inputIncrementControl }`}>
                keyboard_arrow_up
              </span>

              <span className={ AppStyles.inputValue }>
                23 D
              </span>
              
              <span className={`material-symbols-outlined ${ AppStyles.inputDecrementControl }`}>
                keyboard_arrow_down
              </span>
            </div>

            <div className={ AppStyles.timerInput }>

              <span className={`material-symbols-outlined ${ AppStyles.inputIncrementControl }`}>
                keyboard_arrow_up
              </span>

              <span className={ AppStyles.inputValue }>
                23 H
              </span>
              
              <span className={`material-symbols-outlined ${ AppStyles.inputDecrementControl }`}>
                keyboard_arrow_down
              </span>
            </div>

            <div className={ AppStyles.timerInput }>

              <span className={`material-symbols-outlined ${ AppStyles.inputIncrementControl }`}>
                keyboard_arrow_up
              </span>

              <span className={ AppStyles.inputValue }>
                23 M
              </span>
              
              <span className={`material-symbols-outlined ${ AppStyles.inputDecrementControl }`}>
                keyboard_arrow_down
              </span>
            </div>

            <div className={ AppStyles.timerInput }>

              <span className={`material-symbols-outlined ${ AppStyles.inputIncrementControl }`}>
                keyboard_arrow_up
              </span>

              <span className={ AppStyles.inputValue }>
                23 S
              </span>
              
              <span className={`material-symbols-outlined ${ AppStyles.inputDecrementControl }`}>
                keyboard_arrow_down
              </span>
            </div>
          </div>

          {/* timer's status text */}
          <p className={ AppStyles.timerStatusText }>
            timer running
          </p>

          {/* timer's controls */}
          <div className={ AppStyles.timerControlsCtn }>
            <button className={ AppStyles.resetBtn }>
              <span className="material-symbols-outlined">
                replay
              </span>

              <span>reset</span>
            </button>

            <button className={ AppStyles.toggleBtn }>
              <span className="material-symbols-outlined">
                stop_circle
              </span>

              <span>stop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
