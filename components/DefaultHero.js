import PropTypes from 'prop-types';

export default function DefaultHero(props) {

  const {
      title,
      intro

  } = props;


    return (

      <section className="hero hero_default">

          <div className="container">

            <h1>
              {title}
            </h1>

            {intro &&
            <div className="intro"
                dangerouslySetInnerHTML={{
                    __html: intro
                }}
            />
          }

          </div>

      </section>
    );
}

DefaultHero.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string

}
