
import './css/app.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>BDT | Home</title>
        <link rel="stylesheet" href="../CSS/index.css"></link>
      </head>
      <div class="page-base-skeleton">
        <section class="Nav">
          <div class="Navbar">
            <ul class="navbarList">
              <div class="navbarSection1">
                <h3 class="navbarItem"><strong><a class="navLink" href="../index.html">BorDev Tech</a></strong></h3>
              </div>
              <div class="navbarSection2">
                <ul class="navbarSection2List">
                  <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Products</a></strong></li>
                  <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Services</a></strong></li>
                  <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Resources</a></strong></li>
                </ul>
              </div>
            </ul>
          </div >
        </section >
      </div >
      <section class="Welcome">
        <div class="loader">
        </div>
      </section>
    </div >
  );
}

export default App;
