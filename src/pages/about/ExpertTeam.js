import React from 'react'
import { Row, Col } from "react-bootstrap"
import expert_one from "../../assets/dark/about/expert_one.png"
import expert_two from "../../assets/dark/about/expert_two.png"
import expert_three from "../../assets/dark/about/expert_three.png"
import expert_four from "../../assets/dark/about/expert_four.png"
import expert_five from "../../assets/dark/about/expert_five.png"
const ExpertTeam = () => {
    return (
        <Row className="expert-team-row-wrapper">
            <Col lg={9} className="mx-auto">
                <div>
                    <div className="expert-team-haeding text-center"><h1>Our team, decades of expertise</h1></div>
                    <div className="expert-team-images-wrape">
                        <div className='expert-team-first-image'>
                            <img src={expert_one} alt="..." />
                        </div>
                        <div>
                            <img src={expert_two} alt="..." />
                        </div>
                        <div>
                            <img src={expert_three} alt="..." />
                        </div>
                        <div >
                            <img src={expert_four} alt="..." />
                        </div>
                        <div className='expert-team-image-five'>
                            <img src={expert_five} alt="..." />
                        </div>
                    </div>
                </div>

            </Col>
        </Row>
    )
}

export default ExpertTeam