import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:65da0a9b-ee8e-4ae7-aaf3-f2e5d35429e2" download="Aba Opoku_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume