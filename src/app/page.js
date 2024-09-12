"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Input from "./components/Input";
import Features from "./components/Features";
import Output from "./components/Output";

export default function Home() {
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState("ffffff");
  const [size, setSize] = useState(400);
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate QR Code URL when the input changes
  useEffect(() => {
    if (word) {
      setLoading(true); // Set loading to true before updating the QR code URL
      setQrCode(
        `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
      );
    }
  }, [word, size, bgColor]);

  // Handle input changes from child components
  const handleInputChange = (newWord) => setWord(newWord);
  const handleBgColorChange = (newBgColor) => setBgColor(newBgColor);
  const handleSizeChange = (newSize) => setSize(newSize);

  // Handle QR code image load completion
  const handleQrCodeLoad = () => {
    console.log("this loads");
    
    setLoading(false); // Hide loading spinner when the image has fully loaded
  };

  return (
    <div className={styles.App}>
      <h1>QR Code Generator</h1>
      <Input handleInputChange={handleInputChange} />
      {/* <Features bgColor={bgColor} size={size} setBgColor={handleBgColorChange} setSize={handleSizeChange} /> */}
      <Output qrCode={qrCode} loading={loading} onQrCodeLoad={handleQrCodeLoad} />
    </div>
  );
}
