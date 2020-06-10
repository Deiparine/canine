import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleTemplate = () => (
	<Layout>
		<SEO title="Article Template" />
		<div className="auxiliary-page">
			<div className="container text-center">
				<h1 className="text-muted">NOT FOUND</h1>
				<p>This page does not exist.</p>
				<p>
					<Link to="/">Return Home</Link>
				</p>
			</div>
		</div>
	</Layout>
)

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
