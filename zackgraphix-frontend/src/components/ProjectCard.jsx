

const ProjectCard = ({ project, aspect = 'aspect-[4/3]' }) => {
  return (
    <a
   href="#projects"
aria-label={`${project.title}, ${project.category}`}
      className={`relative block overflow-hidden rounded-2xl ${aspect}`}
      style={{ background: project.gradient }}
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-4 right-1 font-heading text-[6rem] font-bold leading-none sm:text-[8rem]"
        style={{ color: project.letterColor, opacity: 0.25 }}
      >
        {project.letter}
      </span>
      <span className="absolute left-3 top-3 rounded-full bg-canvas px-3 py-1 text-xs font-medium text-ink">
        {project.category}
      </span>
    </a>
  )
  
}

export default ProjectCard