import './App.css'

function App() {

  return (
    // app container
    <div className='app'>

      {/* timer's clock */}
      <div className="clock">

        <svg height="100" width="100" 
            xmlns="http://www.w3.org/2000/svg" className='clock-stroke'>

          <circle r="45" cx="50" cy="50" 
              stroke="green" strokeWidth="3" fill="white"/>

          Sorry, your browser does not support inline SVG.  
        </svg> 

        <div className="clock-hands">
          <div className="clock-hand-1"></div>
          <div className="clock-hand-2"></div>
        </div>
      </div>


      {/* timer's ctn */}
      <div className="timer">

        {/* timer's inputs */}
        <div className="timer-input-ctn">
          <div className="timer-input">

            <span className="material-symbols-outlined input-increment-control">
              keyboard_arrow_up
            </span>

            <span className='input-value'>
              23
            </span>
            
            <span className="material-symbols-outlined input-decrement-control">
              keyboard_arrow_down
            </span>
          </div>

          <div className="timer-input">

            <span className="material-symbols-outlined input-increment-control">
              keyboard_arrow_up
            </span>

            <span className='input-value'>
              23
            </span>
            
            <span className="material-symbols-outlined input-decrement-control">
              keyboard_arrow_down
            </span>
          </div>

          <div className="timer-input">

            <span className="material-symbols-outlined input-increment-control">
              keyboard_arrow_up
            </span>

            <span className='input-value'>
              23
            </span>
            
            <span className="material-symbols-outlined input-decrement-control">
              keyboard_arrow_down
            </span>
          </div>

          <div className="timer-input">

            <span className="material-symbols-outlined input-increment-control">
              keyboard_arrow_up
            </span>

            <span className='input-value'>
              23
            </span>
            
            <span className="material-symbols-outlined input-decrement-control">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* timer's status text */}
        <p>
          timer running
        </p>

        {/* timer's controls */}
        <div className="timer-controls">
          <button className='reset-btn'>
            <span className="material-symbols-outlined">
              replay
            </span>

            <span>reset</span>
          </button>

          <button className='stop-btn'>
            <span className="material-symbols-outlined">
              stop_circle
            </span>

            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
