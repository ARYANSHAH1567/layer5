import React, { useState } from "react";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";
import { Col, Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { NewcomersGuideWrapper } from "./NewcomersPageWrapper.style";
import CommunityImage4 from "../Community-pictures/community.png";
import TutorialsTable from "./Tutorials-table";
import NewcomersMap from "./newcomers-map";
import JoinCommunity from "../Join-community";
import longArrow from "./long-arrow.svg";
import { StaticImage } from "gatsby-plugin-image";

const CommunityImage2 = "../Community-pictures/five-finding-issue.png";
const CommunityImage3 = "../../../assets/images/newcomers-page-images/community-collage.webp";
const FiveWorking = "../Community-pictures/five-working.png";
const CommunityHandbook = "../Community-pictures/community-handbook.webp";

const NewcomersGuide = () => {
  const [hover, setHover] = useState(false);

  return (
    <NewcomersGuideWrapper>
      <PageHeader title="Welcome Newcomers!" />
      <Container>
        <div className="newcomers-welcome">
          <p>
            Whether you are a first time contributor or an open source
            veteran, you are welcome to contribute to and actively engage in the
            development of projects at Layer5. Here are some instructions to get
            you started and if you haven’t joined yet, join the{" "}
            <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer">
              Slack workspace</a>{" "}
            to collaborate with the community and the <a href="https://discuss.layer5.io" target="">discussion forum</a> for questions. Also, you can check the
            quick-links below for jumping straight into things.</p>
          <Row style={{
            flexWrap: "wrap"
          }} className="newcomers-journey">
            <Col
              className="heading"
              $sm={12}
              $lg={6}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <h2>Contributor's Journey</h2>
              <div className="heading-start">
                <h4>Start Here</h4>
                <img className="heading-start__arrow" src={longArrow} />
              </div>
            </Col>
            <Col $sm={12} $lg={6}>
              <NewcomersMap handleMouseHover={hover} />
            </Col>
          </Row>
          <Row className="how-to-contribute">
            <h3>How to Contribute?</h3>
          </Row>
          <Row className="how-to-contribute">
            <p>
              These steps outline the process by which you can
              openly engage, learn, and participate in the broad set of open
              source projects at Layer5. If at any time you get stuck, please
              seek help in the{" "}
              <a
                href="https://discuss.layer5.io"
                target="_blank"
                rel="noreferrer"
              >
                community forum</a>{""}.
              Our{" "}
              <Link to="/community/meshmates">MeshMates</Link> and community
              members are here to help!
            </p>
          </Row>
        </div>
        <div className="instructions">
          <Row style={{
            flexWrap: "wrap"
          }} className="step">
            <Col $sm={12} $lg={6}>
              <h3>Fill in the Community Member Form</h3>
              <p>Help us get to know you, so that we can highlight projects and initiatives that align with your interests. Fill-in a community member form. Gain access to community resources.</p>
            </Col>
            <Col $sm={12} $lg={6}>
              <Button $primary className="newcomers-form" title="Submit a Member Form" $url="/newcomer" $external={false} />
            </Col>
            <Col $sm={12} $lg={6}>
              <div className="finding-an-issue">
                <StaticImage src={CommunityImage2} alt="Five Working Image" />
              </div>
            </Col>
            <Col $sm={12} $lg={6}>
              <h3>Finding an Issue to Work On</h3>
              <p>Note that the Layer5 community spans six GitHub organizations. See all in the <Link to="/community/handbook/repository-overview">repository overview</Link>.</p>
              <ol type="i">
                <li>
                  Browse the list of{" "}
                  <a
                    href="https://github.com/layer5io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Layer5 org
                  </a>{" "}
                  issues bearing the “
                  <a
                    href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Alayer5labs+org%3Aservice-mesh-patterns+label%3A%22good+first+issue%22"
                    target="_blank"
                    rel="noreferrer"
                  >
                    good first issue
                  </a>
                  ” label, “
                  <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Alayer5labs+org%3Aservice-mesh-patterns+label%3A%22first-timers-only%22+">
                    first timers only
                  </a>
                  ” or the “
                  <a
                    href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Alayer5labs+org%3Aservice-mesh-patterns++label%3A%22help+wanted%22+"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help wanted
                  </a>
                  ” label.
                </li>
                <li>
                  Find an area of interest by perusing the list of projects by repository and technology in the{" "}
                  <Link to="/community/handbook/repository-overview/">
                    Layer5 Repository Overview
                  </Link>.
                </li>
                <li>
                  After identifying the issue you wish to work on, check whether
                  it has been assigned or not by taking a look at the assignee
                  section on the issue. If it hasn't been, signal your interest
                  by commenting on the issue, so that it can be assigned to you.
                </li>
              </ol>
            </Col>
          </Row>
          <Row style={{
            flexWrap: "wrap"
          }} className="step">
            <Col $sm={12} $lg={6}>
              <h3>Working on Your Issue</h3>
              <ol type="i">
                <li>
                  Once an issue has been assigned to you, it’s time to get
                  started! Make sure you take a look at the{" "}
                  <a
                    href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contributing Guidelines
                  </a>
                  .
                </li>
                <li>
                  Be sure to{" "}
                  <a
                    href="https://docs.meshery.io/project/contributing#general-contribution-flow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sign-off on your commits
                  </a>
                  .
                </li>
                <li>Contributions of all sizes are welcome.</li>
                <li>
                  If you need some additional help, please join Layer5{" "}
                  <a
                    href="https://discuss.layer5.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    discussion forum
                  </a>{" "}
                  or find your way to the{" "}
                  <a
                    href="https://slack.layer5.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    #newcomers
                  </a>{" "}
                  channel in our Slack workspace. Introduce yourself and ask questions.
                </li>
              </ol>
            </Col>
            <Col $sm={12} $lg={6} className="community-img">
              <StaticImage src={FiveWorking} alt="Five Working Image" />
            </Col>
          </Row>
          <Row style={{ flexWrap: "wrap" }} className="step">
            <Col $sm={12} $lg={6} className="community-collage">
              <a className="book-container" href="https://layer5.io/community/handbook/">
                <div className="book">
                  <div>
                    <StaticImage src={CommunityHandbook} alt="Community Image" />
                  </div>
                </div>
              </a>
            </Col>
            <Col $sm={12} $lg={6}>
              <h3>Explore the Meshery Community</h3>
              <p>
              The community is growing at a tremendous rate. We value our connections
              and that is what makes us unique. Whether it is your first meeting or
              your tenth contribution, we want to make sure that you are supported and
              equipped to take advantage of all of that the community has to offer.
              </p>
            </Col>
          </Row>

          <Row style={{ flexWrap: "wrap" }} className="step">
            <Col $sm={12} $lg={6}>
              <h3>While Your Issue is Under Review</h3>
              <p>
                Be patient. There are a large number of contributors and only a
                small number of maintainers/reviewers. All contributors are
                equally important to us, and we'll be sure to get to you as soon
                as possible. In the meanwhile, you are welcome to engage in the Layer5{" "}
                <a
                  href="https://discuss.layer5.io/"
                  target="_blank"
                  rel="noreferrer"
                >
        discussion forum
                </a>, join our{" "}
                <a
                  href="https://slack.layer5.io/"
                  target="_blank"
                  rel="noreferrer"
                >
        Slack workspace
                </a>{" "}
      and take a look at all our <Link to="/projects">projects</Link>.
              </p>
            </Col>
            <Col $sm={12} $lg={6} className="community-collage">
              <StaticImage src={CommunityImage3} alt="Community Image" />
            </Col>
          </Row>
        </div>
        <div className="table-wrapper" id="tutorials">
          <h2>Tutorials</h2>
          <h5>Checkout some of the resources to get going</h5>
          <TutorialsTable />
        </div>
        <JoinCommunity image={CommunityImage4} />
      </Container>
    </NewcomersGuideWrapper>
  );
};

export default NewcomersGuide;
