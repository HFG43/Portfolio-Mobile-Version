const body = document.querySelector('body');
const popUpMobile = document.createElement('section');
body.append(popUpMobile);
section.innerHTML =`    
<div>
    <div>
      <h2></h2>
      <ul>
        <li></li>
        <li><img></li>
        <li>/li>
        <li><img></li>
        <li></li>
      </ul>
      <img>
      <p>hghgfg</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="button-mobile-pop-up-container">
        <button href="#">See live<span><img src="Images/See-live-icon.svg"></span></button>
        <button href="#">See source<span><img src="/Images/smm-icons/github-Icon.svg"></span></button>
    </div>
  </div>
  `;

function PopUpsMobile (title, frame1, frame2, frame3, frame4, frame5, snapshot, paragraph, languages1, languages2, languages3, languages4, button1, button2) {
    this.title = title;
    this.frame1 = frame1;
    this.frame2 = frame2;
    this.frame3 = frame3;
    this.frame4 = frame4;
    this.frame5 = frame5;
    this.snapshot = snapshot;
    this.paragraph = paragraph;
    this.languages1 = languages1;
    this.languages2 = languages2;
    this.languages3 = languages3;
    this.languages4 = languages4;
    this.button1 = button1;
    this.button2 = button2;
};

const body = document.querySelector('body');
const popUpMobile = document.createElement('section');
body.append(popUpMobile);
section.innerHTML =`    
<div>
    <div>
      <h2>`${title}`</h2>
      <ul>
        <li></li>
        <li><img></li>
        <li>/li>
        <li><img></li>
        <li></li>
      </ul>
      <img>
      <p>hghgfg</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="button-mobile-pop-up-container">
        <button href="#">See live<span><img src="Images/See-live-icon.svg"></span></button>
        <button href="#">See source<span><img src="/Images/smm-icons/github-Icon.svg"></span></button>
    </div>
  </div>
  `;

const project1 = new PopUpsMobile("Tonic","CANOPY","IMAGEN","Back End Dev","IMAGEN","2015","IMAGEN","A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript",1,1);

// const project1 = new PopUpsMobile("Tonic","CANOPY",img.src="Images/Counter.png","Back End Dev",img.src="Images/Counter.png","2015",img.src="Images/Snapshoot Portfolio.png","A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript",1,1);
