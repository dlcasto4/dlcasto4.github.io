function updateNavAndFooter() {
    const navm = document.getElementById("navm");
    navm.classList.add("m");
    navm.innerHTML = `
        <button class="navbtn" onclick="window.location.href='/';"><i class="wicon wicon-home"></i><br><span class="navtext">Home</span></button>
        <div class="right">
            <button class="navbtn" onclick="window.location.href='/axis/';"><i class="wicon wicon-axis"></i><br><span class="navtext">Axis</span></button>
           <button class="navbtn" onclick="window.location.href='/games/';"><i class="wicon wicon-gamepad-handles"></i><br><span class="navtext">Games</span></button>
           <button class="navbtn" onclick="window.location.href='/music/';"><br><span class="navtext">music</span></button>
            <button class="navbtn" onclick="window.location.href='/apps/';"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg><br><span class="navtext">apps</span></button>
        </div>
    
    `;
    const navs = document.getElementById("sidenav");
    navs.innerHTML = `
        <div style="height: 55px; width: 100%;"></div> <!-- spacer -->
        <button onclick="window.location.href='/';"><i class="wicon wicon-home"></i><br><span class="navtext">Home</span></button>
        <button onclick="window.location.href='/axis/';"><i class="wicon wicon-axis"></i><br><span class="navtext">Axis</span></button>
        <button onclick="window.location.href='/games/';"><i class="wicon wicon-gamepad-handles"></i><br><span class="navtext">Games</span></button>
        <button onclick="window.location.href='/apps/';"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg><br><span class="navtext">apps</span></button>
    `;
            
    const footer = document.getElementById("footer");
    footer.innerHTML += `
        <div class="top">
            <h5>Made with <span class="wicon wicon-coffee"></span> by dlcasto4 <i class="wicon wicon-copyright"></i> <span id="footerYear">****</span></h5>
            <div class="spacer"></div>
            <h5 id="status">Status: <span>LOADING</span></h5>
        </div>
        <div class="bottom">
            <div class="leftwrapper">
                <div class="section">
                    <p>Personal links</p>
                    <a href="https://github.com/dlcasto4"><i class="wicon wicon-github"></i>&nbsp;Github</a>
                </div>
                    <div class="section">
                    <p>Navigation</p>
                </div>
            </div>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", updateNavAndFooter)
