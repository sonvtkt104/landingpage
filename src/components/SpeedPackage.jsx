export default function SpeedPackage({image, title, description}) {
    return (
        <div className="speed-package">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}