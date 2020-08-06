import React from "react"
import Form from "./Form"

class ContactForm extends React.Component {
	render() {
		return (
			<div>
				<Form
					form_name="contact"
					form_id="9554371d-7f86-4323-9766-ee4ad7ff3e1d"
					form_classname="contact-form"
					action="/thank-you"
					method="post"
				>
					<div className="form-row">
						<div className="col-md-6">
							<div className="form-group">
								<input
									className="form-control"
									type="text"
									name="Full Name"
									id="full_name"
									required
								/>
								<label htmlFor="full_name">
									Your Name<sup>*</sup>
								</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input
									className="form-control"
									type="text"
									name="Pet's Name"
									id="pets_name"
									required
								/>
								<label htmlFor="pets_name">
									Pet's Name<sup>*</sup>
								</label>
							</div>
						</div>
						<div className="col-md-12">
							<label className="position-relative">
								What kind of problem is your pet having?<sup>*</sup>
							</label>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="front-limb"
									id="front-limb"
								/>
								<label className="form-check-label" for="front-limb">
									Limping on a front limb
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="rear-limb"
									id="rear-limb"
								/>
								<label className="form-check-label" for="rear-limb">
									Limping on a rear limb
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="neurologic-problem"
									id="neurologic-problem"
								/>
								<label className="form-check-label" for="neurologic-problem">
									Having a neurologic problem
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="acl-tear"
									id="acl-tear"
								/>
								<label className="form-check-label" for="acl-tear">
									Been diagnosed with an ACL tear
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="hip-dysplasia"
									id="hip-dysplasia"
								/>
								<label className="form-check-label" for="hip-dysplasia">
									Been diagnosed with hip dysplasia
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="elbow-shoulder"
									id="elbow-shoulder"
								/>
								<label className="form-check-label" for="elbow-shoulder">
									Been diagnosed with an elbow or shoulder problem
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value="not-sure"
									id="not-sure"
								/>
								<label className="form-check-label" for="not-sure">
									Not sure
								</label>
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<textarea
									className="form-control"
									name="phone-number"
									id="phone-number"
									required
									type="number"
								/>
								<label htmlFor="phone-number">Phone Number w/ Area</label>
							</div>
						</div>
						<div className="col-md-12">
							<div className="centered-captcha">
								<div className="webriq-recaptcha" />
							</div>
						</div>
						<div className="col-md-12 text-center">
							<div className="form-group">
								<button className="btn btn-primary pink-btn" type="submit">
									Send Message
								</button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		)
	}
}
export default ContactForm
