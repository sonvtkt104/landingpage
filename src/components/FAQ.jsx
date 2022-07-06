export default function FAQ({title, description}) {
    return (
        <div className="FAQ-item">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}