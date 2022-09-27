import '../css/navbar.css';
function Navbar() {
    return (
        <div className="NavbarBlock">
            <div class="navBaseSkeleton">
                <div class="Nav">
                    <div class="Navbar">
                        <ul class="navbarList">
                            <div class="navbarSection1">
                                <h3 class="navbarItem">
                                    <strong>
                                        <a class="navLink" href="../index.html">BorDev Tech</a>
                                    </strong>
                                </h3>
                            </div>
                            <div class="navbarSection2">
                                <ul class="navbarSection2List">
                                    <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">About</a></strong></li>
                                    <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Services</a></strong></li>
                                    <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Portfolio</a></strong></li>
                                    <li class="navbarSection2ListItem"><strong><a class="navLink" href="../index.html">Contact</a></strong></li>
                                    <li><button class="GetStarted">Get Started</button></li>
                                </ul>
                            </div>
                        </ul>
                    </div >
                </div >
            </div >
            <div class="Welcome">
                <div class="loader">
                </div>
            </div>
        </div >
    );
}

export default Navbar;
