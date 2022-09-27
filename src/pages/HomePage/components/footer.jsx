import '../css/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            &lt;Footer&gt;
            <div className='FooterBox'>
                Bordev Tech

            </div>
            <div>
                <ul className='FlexTicks'>
                    <ul>
                        <div>
                            <ul>
                                <li>Socials
                                    <ul>
                                        <li><a href="https://github.com/BorDevTech">GitHub</a></li>
                                        <li><a href="https://github.com/BorDevTech">Instagram</a></li>
                                        <li><a href="https://github.com/BorDevTech">Meta "FaceBook"</a></li>
                                        <li><a href="https://github.com/BorDevTech">Reddit</a></li>
                                        <li><a href="https://github.com/BorDevTech">Telegram</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Products
                                    <ul>
                                        <li>3D Creations</li>
                                        <li>APIs</li>
                                        <li>Calculations</li>
                                        <li>Discord Bots</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </ul>
                    <ul>
                        <div>
                            <ul>
                                <li>Services
                                    <ul>
                                        <li>Design</li>
                                        <li>Development</li>
                                        <li>Business Research</li>
                                        <li>Organization</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li>Support
                                    <ul>
                                        <li>Guides</li>
                                        <li>Blogs</li>
                                        <li>Contact
                                            <ul>
                                                <li>Email</li>
                                                <li>Calls</li>
                                                <li>Messaging (Apple Business Chat or Google Chat)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div></ul>



                </ul>
                <div>
                    <ul>
                        <li>More...
                            <ul>
                                <li>Sponsors</li>
                                <li>Partners</li>
                                <li>
                                    <iframe className='github' src="https://github.com/sponsors/BorDevTech/button" title="Sponsor BorDevTech" alt="Sponsor BorDevTech"></iframe>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
            {/*<div><iframe className='github' src="https://github.com/sponsors/BorDevTech/button" title="Sponsor BorDevTech"></iframe></div> */}
            {/* CopyRight when able */}
            {/*<p>Site design / logo © 2022 BorDev Tech; user contributions licensed under CC BY-SA. rev YYYY.MM.DD._ _ _ _ _</p>*/}
            {/* Terms & Conditions */} {/* Privacy Policy */}
        </div >
    );
}

export default Footer;
