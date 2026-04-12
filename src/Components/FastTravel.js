import '../Style/FastTravel.css'

function FastTravel({ onOpenContact }) {

    return (
        <div className="fast-travel-container" onClick={onOpenContact}>
            <span>Get in Contact</span>
        </div>

    )
}

export default FastTravel;