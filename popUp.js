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
const project1 = new PopUpsMobile("Tonic","CANOPY","IMAGEN","Back End Dev","IMAGEN","2015","IMAGEN","A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript",1,1);

const body = document.querySelector('body');
const popUpMobile = document.createElement('section');
body.append(popUpMobile);
section.innerHTML =`    
<div class="card-works">
    <div class="card-work-insider">
      <h2>"${PopUpsMobile.title}"</h2>
      <ul class="frame-2">
        <li>"${PopUpsMobile.frame1}"</li>
        <li><img src="${popUpMobile.frame2.src}"></li>
        <li>"${PopUpsMobile.frame3}"</li>
        <li><img src="${popUpMobile.frame4.src}"></li>
        <li>"${PopUpsMobile.frame5}"</li>
      </ul>
      <img src="${popUpMobile.snapshot.src}"></li>>
      <p class="primary-project-text">"${PopUpsMobile.paragraph}"</p>
      <ul class="tags-container">
        <li>"${PopUpsMobile.languages1}"</li>
        <li>"${PopUpsMobile.languages2}"</li>
        <li>"${PopUpsMobile.languages3}"</li>
        <li>"${PopUpsMobile.languages4}"</li>
      </ul>
      <div class="button-mobile-pop-up-container">
        <button href="#">See live<span><img src="Images/See-live-icon.svg"></span></button>
        <button href="#">See source<span><img src="/Images/smm-icons/github-Icon.svg"></span></button>
    </div>
  </div>
  `;



// const project1 = new PopUpsMobile("Tonic","CANOPY",img.src="Images/Counter.png","Back End Dev",img.src="Images/Counter.png","2015",img.src="Images/Snapshoot Portfolio.png","A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript",1,1);
