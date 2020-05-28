import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
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

export default NotFoundPage
