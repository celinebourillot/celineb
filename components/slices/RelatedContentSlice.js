import PropTypes from 'prop-types';
import Link from "next/link";
import Moment from "react-moment";

export default function ContentSlice(props) {

    const {
        content
    } = props.data;



    return (

      <section className="section related_content_block">
        <div className="container">
        <div className="columns">
                {content && content.map((column, index) => (
      						<div className="column" key={index}>

                  <div className="card">
                    {column.acf.featured_image &&
                      <div className="card-image">
                        <figure className="image is-4by3">
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
                        {column.post_type === "post" &&
                        <Moment format="DD/MM/YYYY">{column.post_date}</Moment>

                        }

                      </div>


                      <Link href={`/post?slug=${column.post_name}&post_type=${column.post_type}`}>
                          <button className="button is-primary">Read more</button>
                      </Link>
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
