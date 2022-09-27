import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import qrcodelink from "qrcode";
import { useState } from "react";
import { LoadingButton } from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

function App() {
  const [link, setLink] = useState("");
  const [codelink, setcodelink] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleGerarlink = (link_url) => {
    qrcodelink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setcodelink(url);
      }
    );
  };
  const handleQRcode = (e) => {
    setLink(e.target.value);
    handleGerarlink(e.target.value);
  };
  return (
    <div className="container">
      <QRCode value={link} />
      <input
        className="input"
        placeholder="Digite seu link"
        value={link}
        onChange={(e) => handleQRcode(e)}
      ></input>
      <Button isLoading={true} variant="contained" href={codelink} download={'foto.png'}>Contained</Button>
    </div>
  );
}

export default App;
