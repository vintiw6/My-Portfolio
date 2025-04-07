import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import Socials from '../components/about/socials';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/contact.css';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === 'contact');

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(', ')}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect and Collaborate!
						</div>

						<div className="subtitle contact-subtitle">
							I'm always excited to connect with like-minded
							individuals, discuss new ideas, and collaborate on
							meaningful projects. If you have a question, an
							opportunity, or just want to say hello, feel free to
							reach out! You can email me at &nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I try to respond within 24 hours. For professional
							networking, let's connect on &nbsp;
							<a
								href="https://www.linkedin.com/in/vintiw6/"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							, where I share insights and updates about my work
							in data science, software development, and
							engineering. Looking forward to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
