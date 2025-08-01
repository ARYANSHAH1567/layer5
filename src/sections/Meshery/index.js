import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import FeaturesTable from "./Features-Col";

import mesheryDemo from "../../assets/video/meshery/dashboard.webm";
import DockerExtensionCTA from "../Docker-Meshery/docker-extension-CTA";

import MesheryWrapper from "./meshery.style";
import FeaturesSection from "./Features-section";
import Features from "./Meshery-features";
import InlineQuotes from "../../components/Inline-quotes";
import Maximiliano from "../../collections/members/maximiliano-churichi/Maximiliano-Churichi.webp";
import Nic from "../../collections/members/nicholas-jackson/nic-jackson.webp";

const MesheryPage = () => {
  return (
    <MesheryWrapper>
      <Container>
        <div className="info">
          <Row className="description">
            <Col className="desc-text" $lg={6} $md={6} $sm={10} $xs={8}>
              <h1 className="heading-1"> Wrangle your infrastructure</h1>
              <h1 className="heading-2"> <span className="heading-2"> collaboratively</span></h1>
              <p className="desc-p">
                {/* Meshery is the cloud native manager. <br /> */}
                Confidently design, deploy, and operate your infrastructure and workloads with Meshery.
              </p>
              <Button $primary className="banner-btn" title="Schedule a Demo" $external={true}
                $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true">
                <GiClockwork size={21} className="button-icon" />
              </Button>
              <Button $secondary className="banner-btn" title="Run Meshery"
                $url="/cloud-native-management/meshery/getting-started">
                <FiDownloadCloud size={21} className="button-icon" />
              </Button>
            </Col>
            <Col $lg={6} $md={6} className="meshery-hero-img desc-text">
              <video autoPlay muted loop controls className="meshery-video" >
                <source src={mesheryDemo} type="video/webm" />
              </video>
              {/* <img className="meshery-sup-img" src={mesheryFullStack} alt="Meshery the multi-mesh manager" /> */}
              <Button $primary className="banner-btn align-btn"
                title="Star the Repository" $url="https://github.com/meshery/meshery" $external={ true }>
                <FaGithub size={21} className="button-icon" />
              </Button>
            </Col>
          </Row>
        </div>
        <FeaturesTable />
      </Container>
      <FeaturesSection />
      <Container>
        <InlineQuotes
          quote="Meshery is the perfect tool for ensuring that your applications are optimally configured and performing well; it also gives you a fantastic visual insight into what can be a large amount of textual configuration"
          person="Nic Jackson"
          title="Principal Developer Advocate at HashiCorp"
          image={Nic} />
        <div className="callout">
          <h1> Manage your clusters with features you won't find anywhere else.</h1>
        </div>
      </Container>
      <Features />
      <Container>
        <DockerExtensionCTA />
        <InlineQuotes
          quote="The Meshery Extension transforms Docker Desktop into a powerful load generation utility, conveniently enabling me to deploy and configure any cloud native infrastructure with a click of the button and invoke and control load-based performance tests from my desktop."
          person="Maximiliano Churichi"
          title="Software Engineer at HPE"
          image={Maximiliano} />
      </Container>
    </MesheryWrapper>

  );
};

export default MesheryPage;
