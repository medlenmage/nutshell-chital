/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
import lessonData from '../../helpers/data/lessonsData';

const lessonMaker = () => {
  lessonData.getLessons()
    .then((lessons) => {
      lessons.forEach((lesson) => {
        let domString = `
        <div class="card" style="width: 18rem;" id="${lesson.id}>
          <div class="card-body">
          <h5>${lesson.name}</h5>
          <p>${lesson.hours}</p>
      `;

        if (lesson.materialsProvided === true) {
          domString += `
              <p>"YES"<p>
            </div>
          </div>
          `;
        } else {
          domString += `
              <p>"NO"</p>
            </div>
          </div>
          `;
        }
      });
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

export default { lessonMaker };
