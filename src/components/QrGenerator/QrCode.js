import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = ({id}) => {
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState({});
  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
    setUrl2({})
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
    setUrl2(`ProductoID:${id}, Nombre: ${e.target.value}`);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url2}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Ingrese su nombre: </label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="Nombre"
          />
          <button type="submit" disabled={!url}>
            Descargar QR
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;