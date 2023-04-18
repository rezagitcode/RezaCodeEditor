import styles from "../CStyles/Myfile.module.css";
function Myfile(){
    return(<>
    <div className={styles.myFile}>
        <label htmlFor="htmlfile"><b>HTML</b></label>
        <textarea name="htmlfile" id="htmlfile" cols="30" rows="10"></textarea>
    </div>
    </>);
}
export default Myfile;