import './../styles/App.scss';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <header>
          <button className='btn'>Next</button>
          <a>Home</a>
          <a>Admin</a>
        </header>
        <div className='question'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis amet repudiandae corporis quaerat nostrum? Dolorum molestias culpa, ipsum officia quos quis soluta dolores nobis ex debitis quae, illum fuga!
        </div>
        <div className='editor'>
          Editor
        </div>
        <div className='output-group'>
          <div className='user-output'>
            <div className='title'>
              <h1>User output</h1>
            </div>
            <div className='output'>
              <div className='output__inner'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum necessitatibus itaque saepe esse eaque vero ipsa nemo eligendi!
              </div>
            </div>
          </div>
          <div className='expected-output'>
            <div className='title'>
              <h1>Expected output</h1>
            </div>
            <div className='output'>
              <div className='output__inner'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum necessitatibus itaque saepe esse eaque vero ipsa nemo eligendi! Unde ratione voluptates ad enim consectetur officia id labore ut ab!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
