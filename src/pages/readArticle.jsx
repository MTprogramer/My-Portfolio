import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							{article().image &&
								<img src={article().image} alt={article().title} style={{width: '100%'}}/>
							}
							<div className="title read-article-title">
								{article().title}
							</div>

							<div className="read-article-body">
								<article>
									<section>
										<h2>Purpose</h2>
										<p>{article().purpose}</p>
									</section>
									<section>
										<h2>Description</h2>
										<p>{article().detailedDescription}</p>
									</section>
									<section>
										<h2>Technologies Used</h2>
										<ul>
											{
												article().technologiesUsed.map((technology) => (
													<li>{technology}</li>
												))
											}
										</ul>
									</section>
									<section>
										<h2>Key Features</h2>
										<ul>
											{
												article().features.map((feature) => (
													<li>{feature}</li>
												))
											}
										</ul>
									</section>
								</article>
							</div>
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

export default ReadArticle;
