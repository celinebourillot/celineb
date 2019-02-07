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
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1920,
				settings: {
					slidesToShow: 3,
					infinite: false
				}
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					infinite: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: false,
					dots: false
				}
			}
		]
	};

	return (
		<React.Fragment>
			<Head>
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>
			<section className="testimonials-carousel">
				<div className="container">
							<h3>{title}</h3>
							<div className="testimonials">
								<Slider {...settings}>
									{
										testimonials.map((testimonial, index) => (
											<div className="box">
											  <article className="media">
												{ testimonial.acf.image &&
													<div className="media-left">
													 <figure className="image is-64x64">
														 <img src={testimonial.acf.image.sizes.thumbnail} alt="Image"/>
													 </figure>
												 </div>
												}
											    <div className="media-content">
											      <div className="content">
											        <p>
											          <strong>{testimonial.acf.name}</strong>
											          <br/>
											          {testimonial.acf.testimonial}
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
