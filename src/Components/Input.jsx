import Myfile from "./Myfile";
import styles from "../CStyles/Input.module.css";
function Input(props){
    
    return(<>
    <div className={styles.input}>
    <Myfile filename="HTML" value={props.htmlValue} setValue={props.setHtmlValue}/>
    <Myfile filename="CSS"  value={props.cssValue} setValue={props.setCssValue}/>
    <Myfile filename="JavaScript" value={props.jsValue} setValue={props.setJsValue}/>
    </div>
    </>);
}
export default Input;