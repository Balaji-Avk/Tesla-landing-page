import TeslaLogo from './assets/TeslaLogo.png';
import ExperienceTesla from './assets/ExperienceTesla.mp4';
import Model3 from './assets/Model3.png';
import ModelS from './assets/ModelS.png';
import ModelX from './assets/ModelX.png';
import ModelY from './assets/ModelY.mp4';
function App() {
  return (
    <>
      <div>
        <nav className="fixed flex justify-between align-middle w-full h-20 text-white">
          <a href="">
            <img src={TeslaLogo} alt="tesla logo" className='w-32 h-8 brightness-0 invert'/>
          </a>
          <ul className="flex list-none gap-5 ">
            <li className='cursor-pointer'>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
          </ul>
          <div className='flex gap-3 cursor-pointer'>
            <i className='transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            </i>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </i>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </i>
          </div>

        </nav>
        <ul className='flex flex-col justify-center text-center list-none'>
            <li className='abosulte flex flex-col'>
              <video src={ExperienceTesla} className='' autoPlay loop muted></video>
              <div>
                <h1>Model Y</h1>
                <h2>From $31,890*</h2>
                <p>After Federal Tax Credit & Est. Gas Savings</p>  
              </div>
              <div>
                <div>
                  <button>Shop Available</button>
                  <button>Demo Drive</button>
                </div>
                <p>*Price before incentives and savings is $42,990, excluding taxes and fees. Subject to change.</p>
                <a href="" className='underline'>Learn about est. gas savings.</a>
              </div>
            </li>
            <li>
              <img src={Model3}></img>
            </li>
            <li>
              <img src={ModelX}></img>
            </li>
            <li>
              <img src={ModelS}></img>
            </li>
            <li>
              <video src={ModelY}></video>
            </li>
        </ul>
      </div>      
    </>
  )
}

export default App
