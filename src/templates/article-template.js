import React from "react"
import { graphql } from "gatsby"
import marked from "marked"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleTemplate = data => {
	console.log("test", data)
	const article = data.data.sanityArticle
	return (
		<Layout>
			<SEO title="Article Template" />
			<div className="auxiliary-page">
				<div className="container">
					<h1 className="text-muted mb-5">{article.title}</h1>
					<div className="mb-5">
						<div className="row">
							<div
								className="col-md-4"
								style={{
									backgroundColor: "#303030",
								}}
							>
								<div
									style={{
										minHeight: "700px",
									}}
								>
									<p
										style={{
											textAlign: "center",
											fontSize: "26px",
											border: "3px solid #fff",
											padding: " 2em 1em",
											margin: "2em",
											color: "#fff",
											lineHeight: 1,
										}}
									>
										{article.title}
									</p>
									{article.body ? (
										<div
											style={{ color: "#fff" }}
											dangerouslySetInnerHTML={{ __html: marked(article.body) }}
										></div>
									) : null}
								</div>
							</div>
							<div className="col-md-8">
								<div
									style={{ float: "left", width: "65%", maxHeight: "700px" }}
								>
									<img
										title=""
										src={article.banner.asset.fluid.src}
										className="img-fluid"
										alt={article.title}
									/>
								</div>
							</div>
						</div>
						<div style={{ marginBottom: "25px" }}>&nbsp;</div>{" "}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ArticleTemplate
export const articleSingle = graphql`
	query articleSingleTemplateQuery($id: String!) {
		sanityArticle(id: { eq: $id }) {
			id
			title
			categories {
				id
				title
			}
			banner {
				asset {
					fluid {
						src
					}
				}
			}
			authors {
				person {
					id
					name
				}
			}
			body
		}
	}
`
