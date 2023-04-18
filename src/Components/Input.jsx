import Myfile from "./Myfile";
import styles from "../CStyles/Input.module.css";
function Input(){
    return(<>
    <div className={styles.input}>
    <Myfile/>
    <Myfile/>
    <Myfile/>
    </div>
    </>);
}
export default Input;