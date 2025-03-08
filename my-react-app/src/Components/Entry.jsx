import PropTypes from "prop-types";
function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="../public/marker.png"
          alt="map marker icon"
        />
        <span className="country">{props.country}</span>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        >
          {props.googleMapsUrl}
        </a>
        <h2 className="title">{props.title}</h2>
        <p className="trip-dates">
          {props.startDate}-{props.endDate}
        </p>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}
Entry.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
};
export default Entry;
