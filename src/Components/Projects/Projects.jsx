import React from "react";
import ProjectCard from "./ProjectCard";
import Con from "../../assets/main.jpg"
import Vio from "../../assets/hero-1.jpg.webp"
import Nar from "../../assets/anime-06.jpg"
import Gam from "../../assets/slider-1.jpg"
import It from "../../assets/it.jpg"
import Hot from "../../assets/hot.jpg"

const Projects = () => {
  return (
    <div id="Projects" className="p-6 md:p-16 lg:p-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="VideoGraph Website"
          main="This is a VideoGraph website created in html using a Bootstrap."
          demoUrl="https://videographs.netlify.app/"
          imgUrl={Vio}
          gitUrl="https://github.com/HarshSangani11/videograph.git"
        />
        <ProjectCard
          title="construction"
          main="This is a construction website made with html,css and Bootstrap."
          demoUrl="https://constructionteam.netlify.app/"
          imgUrl={Con}
          gitUrl="https://github.com/HarshSangani11/Construction.git"
        />
        <ProjectCard
          title="Naruto"
          main="This is a VideoGraph website created in html using a Bootstrap."
          imgUrl={Nar}
          demoUrl="https://narutoteube-web.netlify.app/"
          gitUrl="https://github.com/HarshSangani11/Naruto.git"
        />
        <ProjectCard
          title="Game Warrior"
          main="This is a VideoGraph website created in html using a Bootstrap.also use media-query"
          imgUrl={Gam}
          demoUrl="https://preview.colorlib.com/theme/gamewarrior/"
          gitUrl="https://github.com/HarshSangani11/Game.git"
        />
        <ProjectCard
          title="IT-company Website"
          main="This is a IT-company website created in html using a Bootstrap.also use media-query and javascript"
          imgUrl={It}
          demoUrl="https://itcompany-web.netlify.app/"
          gitUrl="https://github.com/HarshSangani11/It-web.git"
        />
        <ProjectCard
          title="Social Media App"
          main="A social media app with user authentication, post sharing, and notifications."
          imgUrl={Hot}
          demoUrl="https://hotelproject-web.netlify.app/"
          gitUrl="https://github.com/HarshSangani11/Hotel.git"
        />
      </div>
    </div>
  );
};

export default Projects;
