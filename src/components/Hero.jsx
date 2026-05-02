
export default function Hero() {
    return (
        <>
            <h5>Welcome to the Gym Planner</h5>
            <p>Build strength, improve mobility, and stay consistent with a practical training plan.</p>
            <ol className='benefits-list'>
                <li>Structured workouts designed for balanced progress</li>
                <li>Simple tracking tools to measure daily improvements</li>
                <li>Supportive guidance for all experience levels</li>
                <li>Flexible routine that adapts to your schedule</li>
            </ol>
            <h3>Core Guidelines</h3>
            <p>Train smart, recover well, and keep a steady pace.</p>
            <ul className="rules-list">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Take a rest day after every 3 workout days. This will help your body recover and prevent burnout.</p>
                </div>
                <div className="rule-item">
                    <p><b>Nutrition</b></p>
                    <p> Maintain a balanced <abbr title="Nutrition">diet</abbr>  to fuel your workouts and support your recovery.</p>
                </div>
                <div className="rule-item">
                    <p><b>Weight</b></p>
                    <p>Monitor your weight and adjust your diet and workouts accordingly to achieve your fitness goals.</p>
                </div>
            </ul>
            <small>Every step forward counts.</small>
            <h3>The Training Plan</h3>
            <p>This is a simple and effective workout routine designed to help you achieve your <b>fitness</b> goals.</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete all of the workouts below and track your progress along the way.</p>
        </>
    )
}