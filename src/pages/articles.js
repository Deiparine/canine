import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"
import tploVid from "../images/tplo-vid.png"
import { Container } from "reactstrap"
import { graphql, Link } from "gatsby"
import JwPagination from "../components/pagination"

import { useQueryParam, StringParam } from "use-query-params"
const customLabels = {
	first: <i className="fa fa-angle-double-left" />,
	last: <i className="fa fa-angle-double-right" />,
	previous: <i class="fa fa-angle-left" />,
	next: <i class="fa fa-angle-right" />,
}

const UseQueryParamExample = props => {
	// something like: ?x=123&foo=bar in the URL

	const [search] = useQueryParam("search", StringParam)
	const { allSanityArticle } = props.data
	console.log("allSanityArticle", allSanityArticle)
	const alldata = allSanityArticle.edges.map(t => t.node)
	const filterData = search
		? alldata.filter(t => t.title.includes(search ? search : null))
		: alldata
	console.log("filterData", filterData)
	console.log("searching", search)
	return (
		<Layout>
			<SEO title="Article" description="Article Page" />
			<Hero videoImg={tploVid} pageTitle="TPLO" />
			<div className="page-content">
				<Container>
					<div>
						<form>
							<div className=" d-inline">
								<label htmlFor="searhform" className="d-none">
									Search
								</label>
								<input type="search" name="search" id="searhform" />
							</div>
							<button type="submit">Search</button>
						</form>
						<Article allSanityArticle={filterData} />
					</div>
				</Container>
			</div>
		</Layout>
	)
}
export default UseQueryParamExample

class Article extends React.Component {
	constructor(props) {
		super(props)

		// an example array of items to be paged

		const filterEvent = props.allSanityArticle
		// bind the onChangePage method to this React component
		this.onChangePage = this.onChangePage.bind(this)

		// store example items and current page of items in local state
		this.state = {
			filterEvent,
			pageOfItems: [],
		}
	}

	onChangePage(pageOfItems) {
		// update local state with new page of items
		this.setState({ pageOfItems })
	}
	render() {
		console.log("properties", this.props)

		return (
			<div>
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
						{this.state.pageOfItems.map(article => (
							<tr class="cat-list-row0" key={article.id}>
								<td>
									<Link to={article.slug.current}>{article.title}</Link>
								</td>
								<td>Written by {article.authors[0].person.name} </td>
								<td headers="categorylist_header_hits" class="list-hits">
									<span class="badge badge-info">
										Hits: {Math.floor(Math.random())}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<JwPagination
					items={this.state.filterEvent}
					onChangePage={this.onChangePage}
					pageSize={5}
					labels={customLabels}
				/>
			</div>
		)
	}
}

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
