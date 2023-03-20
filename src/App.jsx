import { useState } from 'react';
import './App.css';
import { control, brand } from './AppHelper';

function App() {
  const [nav, setNav] = useState(true);

  const Menus = [
    { title: "Dashboard", src: require("./assets/Chart_fill.png") },
    { title: "Inbox", src: require("./assets/Chat.png") },
    { title: "Accounts", src: require("./assets/User.png"), gap: true },
    { title: "Schedule ", src: require("./assets/Calendar.png") },
    { title: "Search", src: require("./assets/Search.png") },
    { title: "Analytics", src: require("./assets/Chart.png") },
    { title: "Files ", src: require("./assets/Folder.png"), gap: true },
    { title: "Setting", src: require("./assets/Setting.png") },
  ];

  return (
    <div className='flex'>
      <div className={`${nav ? 'w-72' : 'w-20'
        } h-screen   duration-300 p-5 pt-5 bg-indigo-900 relative`}>
        <img src={control} alt="/" className={
          `absolute 
          cursor-pointer 
          rounded-full 
          -right-3 
          top-9 w-8 bottom-2 duration-300 border-indigo-900  rotate-180 bg-white ${!nav && "rotate-0"}`
        }
          onClick={() => setNav(!nav)} />

        <div className='flex gap-x-4 items-center'>
          <img src={brand} width="30px" className={`cursor-pointer duration-500 ${!nav && "rotate-[360deg]"}`} />
          <h1 className={`text-white cursor-pointer origin-left font-medium text-xl duration-300 ${!nav && "scale-0"}`}>
            Brand.
          </h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
            p-2 hover:bg-indigo-700 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
              <img src={menu.src} />
              <span className={`${!nav && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>


      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
