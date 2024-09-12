import React from "react";
import styles from "../page.module.css";
import OutputLoading from "./OutputLoading";

const Output = ({ qrCode, loading, onQrCodeLoad }) => {
  return (
    <div className={styles.output_box}>
      {loading && <OutputLoading />}
      {qrCode && (
        <div className={styles.qrCode}>
          <div className={styles.imageDiv}>
            <img src={qrCode} alt="Generated QR Code" onLoad={onQrCodeLoad} />
          </div>
          <a href={qrCode} download="QRCode">
            <button className={styles.outputBtn} type="button">
              Download
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Output;
