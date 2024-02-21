import React from 'react'
import { Row, Col } from "react-bootstrap"
import expert_one from "../../assets/dark/about/expert_one.png"
import expert_two from "../../assets/dark/about/expert_two.png"
import expert_three from "../../assets/dark/about/expert_three.png"
import expert_four from "../../assets/dark/about/expert_four.png"
import expert_five from "../../assets/dark/about/expert_five.png"

import team1 from "../../assets/light/team1.png";
import team2 from "../../assets/light/team2.png";
import team3 from "../../assets/light/team3.png";
import team4 from "../../assets/light/team4.png";
import team5 from "../../assets/light/team5.png";
import { useTheme } from '../../ThemeContext'
const ExpertTeam = () => {
    const {theme} =useTheme()
    return (
        <Row className="expert-team-row-wrapper" style={{overflow:"hidden"}}>
            <Col lg={9} className="mx-auto">
            <div style={{ width: "100%" }}>
              <div className="expert-team-haeding text-center">
                <h1>Our team, decades of expertise</h1>
              </div>
              <div
                className="expert-team-images-wrape"
                style={{ width: "100%" }}
              >
                <div>
                  <img src={theme === "dark" ? expert_one : team1} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_two : team2} alt="..." />
                </div>
                <div>
                  <img
                    src={theme === "dark" ? expert_three : team3}
                    alt="..."
                  />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_four : team4} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_five : team5} alt="..." />
                </div>
              </div>
            </div>

            </Col>
        </Row>
    )
}

export default ExpertTeam