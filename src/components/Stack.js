/* eslint-disable jsx-a11y/img-redundant-alt */
import colorSharp from "../assets/img/color-sharp.png";
import "react-multi-carousel/lib/styles.css";

function Stack() {
  return (
    <section className="stack" id="stacks">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="stack-bx wow zoomIn">
              <h2>Tech-Stacks</h2>
              <p>
                <br></br>
              </p>
              <div className="items">
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="Image"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="Image"
                  />
                  <h5>NextJs</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                    alt="Image"
                  />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                    alt="Image"
                  />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Image"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    alt="Image"
                  />
                  <h5>Spring</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
                    alt="Image"
                  />
                  <h5>Matlab</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"
                    alt="Image"
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Image"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    alt="Image"
                  />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
                    alt="Image"
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg"
                    alt="Image"
                  />
                  <h5>Dart</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="Image"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="Image"
                  />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt="Image"
                  />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Image"
                  />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Image"
                  />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="Image"
                  />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    alt="Image"
                  />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"
                    alt="Image"
                  />
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                    alt="Image"
                  />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                    alt="Image"
                  />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Image"
                  />
                  <h5>Bootstrap</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Stack;
