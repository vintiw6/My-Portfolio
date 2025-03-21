import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => {
	return (
		<div className="project">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className="project-container">
					<div className="project-logo">
						<img
							src={logo}
							alt={`${title} Logo`}
							className="project-logo-img"
						/>
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Project;
