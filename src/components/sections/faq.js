import { Col, Container, Row } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import useCustom from "../../hooks/useCustom";

const Faq = () => {
  const { faq } = useCustom();

  return (
    <Container>
      <h2 className="students-activitiy-title mb-md-5 mb-3">FAQ's</h2>

      <Accordion>
        {faq.map((faqItem, index) => (
          <Accordion.Item eventKey={index} key={faqItem.faqID}>
            <Accordion.Header>
              {/* <div > */}
              <Row className="w-100">
                <Col xs={12} lg={12} className="position-relative">
                  <h1 className="accordian-title count mt-1 position-absolute">
                    {faqItem.faqID}
                  </h1>
                  <h1 className="accordian-title">{faqItem.question}</h1>
                </Col>
              </Row>
              {/* </div> */}
            </Accordion.Header>
            <Accordion.Body style={{ marginTop: -25 }}>
              <p className="text-white faq-content">{faqItem.answer}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Faq;
