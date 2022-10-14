import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

export default function Introduction() {
    return (
        <Container>
            <h2 className="title-header">VIỆN THẨM MỸ HHG</h2>
            <Row>
                <Col xs={12} lg={7}>
                    <div>Chặng đường và sứ mệnh</div>
                    <p>Trong suốt hơn 6 năm hình thành và phát triển, hiện tại Viện thẩm mỹ LIGI DOCTOR CLINIC đã trở thành địa điểm làm đẹp uy tín hàng đầu đối với khách hàng khu vực miền Nam nói chung và một số tỉnh thành khu vực miền Đông nói riêng. Viện thẩm mỹ LIGI DOCTOR CLINIC vẫn luôn không ngừng hoàn thiện về mọi mặt và từng bước phát triển hệ thống rộng khắp cả nước với mong muốn là địa điểm làm đẹp xứng đáng để chị em phụ nữ lựa chọn và gửi gắm niềm tin thay đổi nhan sắc hoàn hảo.</p>
                    <p>Bên cạnh đó Viện thẩm mỹ LIGI DOCTOR CLINIC luôn nâng cao chất lượng dịch vụ với cơ sở vật chất và trang thiết bị hiện đại bậc nhất nhằm đem đến sự hài lòng và thoải mái nhất trong suốt quá trình sử dụng dịch vụ. Chính nhờ những nỗ lực không ngừng trong suốt 3 năm qua với hơn 26 chi nhánh được hình thành trải dài khắp các tỉnh thành trên cả nước, chặng đường tuy không dài nhưng đã gặt hái được rất nhiều thành tích và giải thưởng cao quý trong lĩnh vực làm đẹp, được hàng triệu khách hàng tin tưởng và yêu mến.</p>
                </Col>
                <Col xs={12} lg={5}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>


            </Row>
        </Container>
    )
}
