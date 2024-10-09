import team from './assets/team.jpg';
import "./chunks.css"

function Chunks() {
    return (
        <div className="chunks">
            <div>
                <img src={team} alt="Robotics Team Photo" />
            </div>
            <div>
                <p>We are the robotics team and blah blah blah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi, iste saepe animi possimus sunt maxime laborum quaerat reprehenderit modi, sint beatae omnis quae ipsa explicabo! Illum dolorum deleniti doloribus.</p>
            </div>
        </div>
    )
}

export default Chunks
