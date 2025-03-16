import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	// Ensure content-wrapper matches the page background color
	const contentWrapperStyle = {
		backgroundColor: "var(--bg-color)",
		color: "var(--font-color)",
		transition: "background-color 0.3s ease, color 0.3s ease",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper" style={contentWrapperStyle}>
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects I've built while exploring data science and
							software development.
						</div>

						<div className="subtitle projects-subtitle">
							Throughout my academic journey, I've engaged in
							various projects that reflect my dedication to
							learning and innovation. Many of these projects are
							open-source, inviting exploration and collaboration.
							If you're interested in any of my work, please feel
							free to check out the code and share your insights
							or suggestions. Collaborative learning is a
							cornerstone of growth, and I'm always open to new
							ideas and feedback.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
