import '../styles/global.scss';
import { useState, React, render } from "../lib/react";

const App = () => {
  const [data, setData] = useState();

  if (!data) {

  }

  return (
    <div className={'w-screen h-screen overflow-y-auto p-[16px] overflow-x-hidden'}>
     
    </div>
  );
};

render(App, document.getElementById('root'));
