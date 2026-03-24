import { useState } from 'react';
import "../Style/PolicyLink.css";
import CheckedIcon from '../Assets/checked.png';
import DownloadIcon from '../Assets/download.png';

function PolicyLink ({text}) {
    const [downloaded, setDownloaded] = useState(false);
    
      const handleDownload = (e) => {
        e.preventDefault();
        e.stopPropagation();
      const link = document.createElement('a');
        link.href = '/documents/Policy_and_Code_of_Conduct.pdf';
        link.download = 'Policy_and_Code_of_Conduct.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
      };

    return (

        <div className="download-btn" onClick={handleDownload} href='/documents/Policy_and_Code_of_Conduct.pdf' download="Policy_and_Code_of_Conduct.pdf">

                <img src={downloaded ? CheckedIcon : DownloadIcon} alt={downloaded ? 'Downloaded' : 'Download'} />

        </div>

    )
}

export default PolicyLink