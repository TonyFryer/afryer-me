import React from "react";
import about from "../../data/about.json";

export default function Header() {
  return (
    <header className="resume-header pt-2 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img
          className="mr-3 img-fluid picture mx-auto rounded-circle img-thumbnail"
          src={about.imageUrl}
          alt=""
        />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
              {about.name}
            </h1>
            <div className="title mb-3">{about.title}</div>
            <div className="mb-3 lead">{about.motto}</div>
            <ul className="list-unstyled social-location">
              <li>
                <i
                  className="fas fa-globe fa-fw mr-2"
                  data-fa-transform="grow-6"
                />
                <span>{about.location}</span>
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              {about.links &&
                about.links.map((lnk, i) => {
                  return (
                    <li key={i} className="mb-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        href={lnk.href}
                      >
                        <span className="fa-container text-center mr-2">
                          <i
                            style={{ marginTop: "4px" }}
                            className={`${lnk.icon} fa-fw`}
                          />
                        </span>
                        <span className="social-text">{lnk.name}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
