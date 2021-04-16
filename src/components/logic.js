import {useState} from 'react'

const Toggle = () => {
    const [on, setOn] = useState(false)
    const toggling = () => {
        if (on === false) {
            return 'Play'
        } else if (on === true) {
            return 'Pause'
        }
    }
    return {toggling, on, setOn}
}
export default Toggle