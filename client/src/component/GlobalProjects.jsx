import PropTypes from 'prop-types';
import { useContext, useRef, useState } from 'react'
import projectContext from '../context/projectContext';
import GlobalProjectItem from './GlobalProjectItem';
import UploadProject from './UploadProject';

const Projects = (props) => {
    const [project, setproject] = useState({ id: "", etitle: "", edescription: "", egitHubLink: "", eyouTubeLink: "" });

    const [showVideo, setShowVideo] = useState(false);

    const handleVideo = () => {
      setShowVideo(true)
    }
  
    const handleVideoClose = () => {
      setShowVideo(false);
    };
  

    const context = useContext(projectContext)
    const { projects, getGlobalProjects } = context;
    getGlobalProjects();

    const refDetails = useRef(null)

    const showDetailProject = (currentProject) => {
        refDetails.current.click();
        // Set the title, description and link to edit modal 
        setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, egitHubLink: currentProject.gitHubLink, eyouTubeLink: currentProject.youTubeLink })
    }
    return (
        <>
            {/* Detail Button trigger modal */}
            <button ref={refDetails} className="btn" data-bs-toggle="modal" data-bs-target="#detailToggle">

            </button>

            {/* Project Details Modal */}
            <div className="modal fade" id="detailToggle" tabIndex="-1" aria-labelledby="detailToggle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Project Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {project.edescription ? (<p>{project.edescription}</p>) : (<p>No description to display</p>)}
                        </div>
                        <div className="modal-footer">
                            <button href={project.gitHubLink} target="_blank" className="card-link btn btn-warning">Github Link</button>
                            <button className="btn btn-danger" onClick={handleVideo}>Youtube Link</button>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailToggle">Close</button>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div className='container Global-Sec-Container'>
                <div className="content">
                    <h1 className='Heading-Page text-center mb-4'>Welcome to BitBox Community</h1>
                </div>
                {projects.length === 0 && <UploadProject title="Click Here To Upload" />}
                <div className='row'>
                    {projects.map((project) => {
                        return <GlobalProjectItem showAlert={props.showAlert} showDetailProject={showDetailProject} key={project._id} project={project} />;
                    })}
                </div>
            </div>
            {/* youTube video Modal */}
      {showVideo && (
        <div className="video-overlays container">
          <div className="Video-Modal container">
            <div className="Video-card ">
              <div className="Video-content">
                <button className="exit2-button" onClick={handleVideoClose}>
                  <svg height="20px" viewBox="0 0 384 512">
                    <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    ></path>
                  </svg>
                </button>
                <p className="video-heading fs-1">Project Video</p>
                <p>
                  <iframe className='youtube-Frame' width="350" height="315" src={project.youTubeLink} frameBorder="0" allowfullscreen></iframe>
                </p>
              </div>
              <div className="card-button-wrapper">
                <button className="card-button secondary" onClick={handleVideoClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

// Props Vadilation
Projects.propTypes = {
    project: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Projects
