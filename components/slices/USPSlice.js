import PropTypes from 'prop-types';
import Button from '../Button.js';

export default function USPSlice(props) {
    const {
        title,
        subtitle,
        columns

    } = props.data;


    return (



      <section className="section usps">
        <div className="container">
        {title && <h3>{title}</h3>}
        {subtitle && <p className="intro">{subtitle}</p>}
        <div className="columns">
                {columns && columns.map((column, index) => (
      						<div className="column" key={index}>
                    <div className="usp">
                    {column.usp_picture &&
                      <div className="usp_icon">
                        <img src={column.usp_picture.sizes.thumbnail} alt={column.usp_picture.title}/>
                      </div>
                    }
        							<div className="usp_content">
        								<h4>{column.subtitle}</h4>
                        <div className="small-text"
                            dangerouslySetInnerHTML={{
                                __html: column.content
                            }}
                        />
                        <Button
                        label={column.button_label}
                        link={column.link_type === 'Internal'? column.select_page : column.link_url}
                        type={column.link_type}
                        customClass={'is-primary is-yellow'}
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

USPSlice.propTypes = {

}
