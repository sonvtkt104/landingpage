export default function SpeedFlow ({sequence, title, checkNow}) {
    return (
        <div className={`speed-flow sequence${sequence}`} >
            <div><span>{sequence}</span><span></span></div>
            <h3>{title}</h3>
            {checkNow ? <button>Check Now &gt;</button> : <></>}
        </div>
    )
}