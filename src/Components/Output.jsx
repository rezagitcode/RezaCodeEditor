import styles from "../CStyles/Output.module.css";
function Output({htmlValue,cssValue,jsValue}){
    const combinedCode = `
    <html>
    <head>
      <style>${cssValue}</style>
    </head>
    <body>
      ${htmlValue}
    <script>${jsValue}</script>
    </body>
  </html>
    `;
    return(<>
    <h2>Your Output:</h2>
    <iframe className={styles.myIframe} srcDoc={combinedCode} ></iframe>
    </>);
}
export default Output;