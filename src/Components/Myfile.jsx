import styles from "../CStyles/Myfile.module.css";
function Myfile({filename, value, setValue}){
    return(<>
    <div className={styles.myFile}>
        <label htmlFor="htmlfile"><b>{filename}</b></label>
        <textarea name="htmlfile" spellCheck={false} value={value} onChange={(event)=>{setValue(event.target.value)}} id="htmlfile" cols="30" rows="10"></textarea>
    </div>
    </>);
}
export default Myfile;