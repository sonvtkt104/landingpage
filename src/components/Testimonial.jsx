import star from "../assets/images/star.png";

export default function Testimonial({image, link, before, after, description}) {
    return (
        <div className="testimonial-item">
            <img src={image} alt={description} />
            <div className="testimonial-item-link"><a href={link}>{link}</a></div>
            <ul className="testimonial-item-list">
                <li>
                    <span style={{backgroundColor: 'var(--color-red)'}}></span>
                    0-49
                </li>
                <li>
                    <span style={{backgroundColor: 'var(--color-yellow)'}}></span>
                    50-89
                </li>
                <li>
                    <span style={{backgroundColor: 'var(--color-green)'}}></span>
                    90-100
                </li>
            </ul>
            <div className="testimonial-item-index">
                <div>
                    <span style={{backgroundColor: 'rgba(255,51,51,0.15)', color: 'var(--color-red)'}}>{before}</span>
                    <h4>BEFORE</h4>
                </div>
                <div>
                    <span style={{backgroundColor: 'rgba(0,204,102,0.2)', color: 'var(--color-green)'}}>{after}</span>
                    <h4>AFTER</h4>
                </div>
            </div>
            <p>{description}</p>
            <ul className="star">
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
            </ul>
        </div>
    )
}