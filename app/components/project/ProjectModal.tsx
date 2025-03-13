import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface ProjectModalProps {
  project: {
    title: string;
    date: string;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-0" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden relative shadow-lg  mx-2 sm:mx-4 md:mx-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 모달 내용 */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-64 object-cover"
        />
        <div className="p-6 sm:p-6 space-y-4 overflow-y-auto max-h-[70vh]">
          <h2 className="text-darkgray text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-500">{project.date}</p>
          
          {/* 마크다운 렌더링 */}
          <div className="prose prose-slate max-w-none sm:text-base">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize, rehypeRaw]}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
