export default function Layout(props) {

const {children} = props

const header = (
    <header>
        <h1 className = 'text-gradient'>The GYM Planner</h1>
        <p><strong>The 30 Simple Workouts Program</strong></p>
    </header>
)

const footer = (
    <footer>
        <p>Built by Kareem Farhat</p>
    </footer>
)

    return (
        <> 
            {header}
            {children}
            {footer}
        </>
    )
}