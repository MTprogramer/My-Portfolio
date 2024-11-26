import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="homepage-article-content">
					<h3 className="homepage-article-title">{title}</h3>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						<Link to={link}>
							Read More{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
