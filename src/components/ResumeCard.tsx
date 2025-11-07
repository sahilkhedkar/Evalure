import { Link } from "react-router-dom";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h1 className="text-black! font-black wrap-break-words">
            {resume.companyName}
          </h1>
          <h2 className="text-lg wrap-break-word text-gray-500">
            {resume.jobTitle}
          </h2>
        </div>
        <div className="flex shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
            <img
            src={resume.imagePath}
            alt="resume"
            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
            />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
