const separator = document.querySelector('.separator');
const snap1 = document.querySelector('.snap1');
const snap2 = document.querySelector('.snap2');
const snap3 = document.querySelector('.snap3');
const snap4 = document.querySelector('.snap4');

function PopUpsMobile (title, frame1, frame2, frame3, frame4, frame5, snapshot, paragraph, languages1, languages2, languages3, languages4) {
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
};

const project1 = new PopUpsMobile("Tonic","CANOPY",separator,"Back End Dev",separator,"2015",snap1,"A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript");

const project2 = new PopUpsMobile("Multi-Post<br>Stories","CANOPY",separator,"Back End Dev",separator,"2015",snap2,"A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript");

const project3 = new PopUpsMobile("Tonic","CANOPY",separator,"Back End Dev",separator,"2015",snap3,"A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript");

const project4 = new PopUpsMobile("Multi-Post<br>Stories","CANOPY",separator,"Back End Dev",separator,"2015",snap4,"A daily selection of privately personalized reads; no accounts or sign-ups required.","html","CSS","javaScript");

const openProject1 = document.querySelector('.see-more-project-1');
const openProject2 = document.querySelector('.see-more-project-2');
const openProject3 = document.querySelector('.see-more-project-3');
const openProject4 = document.querySelector('.see-more-project-4');

let project = undefined;
function clickProj1() {
    project = project1;
    console.log(project);
    return project;
}
  openProject1.addEventListener('click', clickProj1, popUpRun);

function clickProj2() {
    project = project2;
    console.log(project2);
    return project;
}
  openProject2.addEventListener('click', clickProj2);

function clickProj3() {
    project = project3;
    return project;
}
  openProject3.addEventListener('click', clickProj3);

function clickProj4() {
    project = project4;
    return project;
}
openProject4.addEventListener('click', clickProj4);

function popUpRun() {
    const body = document.querySelector('body');
    const popUp = document.createElement('div');
    body.appendChild(popUp);
    popUp.innerHTML =`
    <div class="card-works">
      <div class="card-work-insider">
        <h2>"${project.title}"</h2>
        <li><img src="Images/Closing-cross.png" class="close"></li>
        <ul class="frame-2">
          <li>"${project.frame1}"</li>
          <li><img src="${project.frame2.src}"></li>
          <li>"${project.frame3}"</li>
          <li><img src="${project.frame4.src}"></li>
          <li>"${project.frame5}"</li>
        </ul>
        <img src="${project.snapshot.src}"></li>>
        <p class="primary-project-text">"${project.paragraph}"</p>
        <ul class="tags-container">
          <li>"${project.languages1}"</li>
          <li>"${project.languages2}"</li>
          <li>"${project.languages3}"</li>
          <li>"${project.languages4}"</li>
        </ul>
        <div class="button-mobile-pop-up-container">
          <button href="#">See live<span><img src="./Images/See-live-icon.svg"></span></button>
          <button href="#">See source<span><img src="./Images/smm-icons/github-Icon.svg"></span></button>
      </div>
    </div>
    `;
} 