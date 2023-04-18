import styles from "../CStyles/Output.module.css";
// import { useRef } from "react";
function Output(props){
    // const iframeRef = useRef(null);
    // const handleIframeLoad = () => {
    //     const iframeDoc = iframeRef.current.contentDocument;
    //     iframeDoc.open();
    //     iframeDoc.write(`<html><head><title>My HTML Document</title></head><body>${props.htmlvalue}</body></html>`);
    //     iframeDoc.close();
    //   };
    
    return(<>
    <h2>Your Output:</h2>
    {/* <iframe className={styles.myIframe}  ref={iframeRef} onLoad={handleIframeLoad}></iframe> */}
    </>);
}
export default Output;