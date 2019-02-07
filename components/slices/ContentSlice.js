import PropTypes from 'prop-types';
import Button from '../Button.js';

export default function ContentSlice(props) {
    const {
        content

    } = props.data;



    return (

      <section className="section content_block">
        <div className="container">
        <div className="columns">
                {content && content.map((column, index) => (
      						<div className="column" key={index}>

                    {column.content_type === "Image" &&
                      <div className="usp_icon">
                        <img src={column.image} alt={column.title}/>
                      </div>
                    }

                    {column.content_type === "Text" &&
        							<div className="usp_content">
        								<h4>{column.title}</h4>
                        <div className="small-text"
                            dangerouslySetInnerHTML={{
                                __html: column.text
                            }}
                        />
                        <Button
                        label={column.button_label}
                        link={column.link_type === 'Internal'? column.select_page : column.link_url}
                        type={column.link_type}
                        customClass={'is-primary is-yellow'}
                        />
        							</div>
                    }

                    {column.content_type === "Video" &&
                      <div className="videoWrapper">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${column.video_iframe}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    }

      						</div>
      					))}
          </div>
        </div>
      </section>
    );
}

ContentSlice.propTypes = {

}
