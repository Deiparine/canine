import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"
import tploVid from "../images/tplo-vid.png"
import { Container, Row, Col } from "reactstrap"
import { graphql, Link } from "gatsby"
class Article extends React.Component {
	render() {
		const { allSanityArticle } = this.props.data
		console.log("article", allSanityArticle)
		return (
			<Layout>
				<SEO title="Article" description="Article Page" />
				<Hero videoImg={tploVid} pageTitle="TPLO" />
				<div className="page-content">
					<Container>
						<table class="category table table-striped table-bordered table-hover">
							<thead>
								<tr>
									<th id="categorylist_header_title">
										<a href="#">Title</a>
									</th>
									<th id="categorylist_header_author">
										<a href="#">
											Author<span class="icon-arrow-up-3"></span>
										</a>{" "}
									</th>
									<th id="categorylist_header_hits">
										<a href="#">Hits</a>{" "}
									</th>
								</tr>
							</thead>
							<tbody>
								{allSanityArticle.edges.map(article => (
									<tr class="cat-list-row0" key={article.node.id}>
										<td>
											<Link to={article.node.slug.current}>
												{article.node.title}
											</Link>
										</td>
										<td>Written by {article.node.authors[0].person.name} </td>
										<td headers="categorylist_header_hits" class="list-hits">
											<span class="badge badge-info">
												Hits: {Math.floor(Math.random())}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</Container>
				</div>
			</Layout>
		)
	}
}

export default Article

export const articlequery = graphql`
	query articleQuery {
		allSanityArticle(sort: { fields: publishedAt, order: DESC }) {
			edges {
				node {
					id
					title
					authors {
						person {
							id
							name
						}
					}
					slug {
						current
					}
					publishedAt(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`
