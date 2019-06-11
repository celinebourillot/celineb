import PropTypes from "prop-types";
//import _ from "lodash";
import Head from 'next/head';
import Slider from 'react-slick';

export default function TestimonialsSlice(props) {

	const {
		title,
		testimonials
	} = props.data;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};

	return (
		<React.Fragment>
			<Head>
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>
			<section className="testimonials-carousel section">
				<div className="container">
							<h3>{title}</h3>
							<div className="testimonials">
								<Slider {...settings}>
									{
										testimonials.map((testimonial, index) => (
											<div className="testimonial" key={index}>

											  <article className="media">
												{ testimonial.acf.image.sizes.square_thumb &&
													<div className="media-left">
													 <figure className="image is-64x64">
														 <img src={testimonial.acf.image.sizes.square_thumb} alt="Image"/>
													 </figure>
												 </div>
												}
											    <div className="media-content">
											      <div className="content">
											        <p>

											          {testimonial.acf.testimonial}
																<strong>{testimonial.acf.name}</strong>
											        </p>
											      </div>



											    </div>
											  </article>

											</div>

										))
									}
								</Slider>
							</div>
				</div>
			</section>
		</React.Fragment>
	);
};

TestimonialsSlice.propTypes = {
	testimonials: PropTypes.arrayOf(
		PropTypes.shape({
			testimonial: PropTypes.string,
			image: PropTypes.string,
			name: PropTypes.string
		})
	)
};
