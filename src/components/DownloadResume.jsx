import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:ad18a34f-ca10-382c-8ac1-89b2a435de00" download="Aba Opoku_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume