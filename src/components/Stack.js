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

              <div className="three-rows">
                <div className="frontend">
                  <div className="title">
                    <h4>Frontend</h4>
                  </div>
                  <div className="stacks-row">
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">React</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Vue</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">NextJs</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Flutter</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">JavaScript</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Redux</h6>
                    </div>
                  </div>
                </div>
                <div className="backend">
                  <div className="title">
                    <h4>Backend</h4>
                  </div>
                  <div className="stacks-row">
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Spring</h6>
                    </div>

                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Python</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Node.js</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Laravel</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Flask</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">PHP</h6>
                    </div>
                  </div>
                </div>
                <div className="tools">
                  <div className="title">
                    <h4>Tools</h4>
                  </div>
                  <div className="stacks-row">
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Git</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">MongoDB</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">PostgreSQL</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">MySQL</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Docker</h6>
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"
                        alt="Image"
                      />
                      <h6 className="stack-title">Kubernetes</h6>
                    </div>
                  </div>
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

{
  /* <div className="items">
                
                
        
                
                
                
                
                
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Image"
                  />
                  <h6>Express.js</h6>
                </div>
                
                
                
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                    alt="Image"
                  />
                  <h6>Adobe Illustrator</h6>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                    alt="Image"
                  />
                  <h6>Adobe Photoshop</h6>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Image"
                  />
                  <h6>Bootstrap</h6>
                </div>
              </div> */
}
