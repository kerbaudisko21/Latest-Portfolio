import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import netflix from '../../assets/Netflix Logo.png'
import threads from '../../assets/Threads logo.png'
import spotify from '../../assets/Spotify Logo.png'
import attendance from '../../assets/Team attendance.png'
import itinerary from '../../assets/Itinerary.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={netflix}
          link="https://github.com/kerbaudisko21/netflix-clone"
          h3="Netflix Clone"
          p="Watching Platform"
        />
        <ProjectCard
          src={threads}
          link="https://github.com/kerbaudisko21/threads-clone"
          h3="Threads Clone"
          p="Social Media Platform"
        />
        <ProjectCard
          src={spotify}
          link="https://github.com/kerbaudisko21/spotify-clone"
          h3="Spotify Clone"
          p="Music Platform"
        />
        <ProjectCard
          src={attendance}
          link="https://team-attendance.vercel.app"
          h3="Team Attendance"
          p="Staff Management Platform"
          p2="(On Progress)"
        />
        <ProjectCard
          src={itinerary}
          link="https://github.com/kerbaudisko21/ittu"
          h3="Ittu"
          p="Travel Itinerary"
        />
      </div>
    </section>
  );
}

export default Projects;
