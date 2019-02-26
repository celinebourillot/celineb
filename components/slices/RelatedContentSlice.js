import PropTypes from 'prop-types';
import Link from "next/link";
import Moment from "react-moment";
import Button from '../Button.js';

export default function ContentSlice(props) {

    const {
        title,
        content
    } = props.data;



    return (

      <section className="section related_content_block">
        <div className="container">
        <h3>{title}</h3>
        <div className="columns">

                {content && content.map((column, index) => (
      						<div className="column" key={index}>

                  <div className="card">
                    {column.acf.featured_image &&
                      <div className="card-image">
                        <figure className="image">
                          <img src={column.acf.featured_image.sizes.thumbnail} alt="Placeholder image"/>
                        </figure>
                      </div>
                    }
                    <div className="card-content">

                      <div className="content">
                        <h4>{column.post_title}</h4>
                        {column.acf.intro &&
                          <p>{column.acf.intro}</p>
                        }
                        {/*column.post_type === "post" &&
                        <Moment format="DD/MM/YYYY">{column.post_date}</Moment>*/

                        }

                      </div>

                      <Button
                      slug={column.post_name}
                      post_type={column.post_type}
                      label={"Read More"}
                      link={`/${column.post_type}?slug=${column.post_name}&post_type=${column.post_type}`}
                      type={"Internal"}
                      customClass={'is-primary'}
                      />
                    </div>
                  </div>
                </div>

      					))}
          </div>
        </div>
      </section>
    );
}

ContentSlice.propTypes = {

}
