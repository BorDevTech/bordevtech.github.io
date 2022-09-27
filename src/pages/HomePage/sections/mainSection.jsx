function MainSection() {
    return (
        <div className="MainSection">
            &lt;Main&gt;
            <div>
                <h2>&lt;Calender&gt;</h2>
                {/*Starts with Daily Section for Current Viewers*/}
                <ul>
                    <li>Daily</li>
                    {/*Must implement way to switch between WEEKLY and MONTHLY views W/O reloading page.. using ROUTING*/}
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
            <div>
                <h2>&lt;News and Events&gt;</h2>
                {/* Used to show news and events such as 
                Options:
                New sponsors, New partners, New projects
                New Features , New Products, New Services
                */}
            </div>
            <div>a</div>
            <div>b</div>
        </div >
    );
}

export default MainSection;
