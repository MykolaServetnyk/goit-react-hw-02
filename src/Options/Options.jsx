
export default function Options({updateFeedback}) {
    return (
        <div>
        {/* <button onClick={update.good}>Good</button>
        <button onClick={update.neutral}>Neutral</button>
        <button onClick={update.bad}>Bad</button> */}
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
        <button>Reset</button>
        </div>
    )
};