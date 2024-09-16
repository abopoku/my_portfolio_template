import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:80bdcb4e-25db-4c75-805c-efb598ac0b8e" download="Aba Opoku_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume