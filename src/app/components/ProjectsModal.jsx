export default function ProjectsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="glass-card max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400"
        >
          ✕
        </button>

        <h3 className="text-2xl text-cyan-400 mb-4">
          {project.title}
        </h3>

        <p className="text-slate-300">
          {project.description}
        </p>
      </div>
    </div>
  );
}
