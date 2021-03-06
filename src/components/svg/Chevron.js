import { animated } from "react-spring";

function Chevron(props) {
    return (
        <animated.svg width={props.width} viewBox="0 0 16 10" style={props.style} className={props.className}>
            <path fill={props.fill} d="M7.27734 9.67969C7.59375 9.99609 8.12109 9.99609 8.4375 9.67969L15.293 2.85938C15.6094 2.50781 15.6094 1.98047 15.293 1.66406L14.4844 0.855469C14.168 0.539062 13.6406 0.539062 13.2891 0.855469L7.875 6.26953L2.42578 0.855469C2.07422 0.539062 1.54688 0.539062 1.23047 0.855469L0.421875 1.66406C0.105469 1.98047 0.105469 2.50781 0.421875 2.85938L7.27734 9.67969Z" />
        </animated.svg>
    )
}

export default Chevron;