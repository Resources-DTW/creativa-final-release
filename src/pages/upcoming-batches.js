import Counter from "../components/sections/counter";
import Notes from "../assets/images/notes.jpg";
import UiUxCourse from "../components/sections/ui-ux-course";
import useCustom from "../hooks/useCustom";
import { useEffect } from "react";
import EnrollModal from "../components/enroll-modal";
import { Container, Button } from "react-bootstrap";
import BatchesCard from "../components/batches-card";
import BookaSeat from "../components/sections/book-a-seat";
import { Helmet } from "react-helmet";

const UpcomingBatches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { show, handleClose, handleShow, bookMySeat, upComingBatchesCounter } =
    useCustom();

  return (
    <div className="body-wrap overflow-hidden">
      <Helmet>
        <title>Upcoming Batches | Enroll in the Next Design Journey</title>
        <meta
          name="description"
          content="Discover our upcoming batches at Creativa Design Academy. Secure your spot and embark on your journey to master UI/UX design."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, design, Creativa, Academy, UI/UX"
        />
        <meta
          name="title"
          content="Upcoming Batches | Enroll in the Next Design Journey"
        />
      </Helmet>
      <Container>
        <h1 className="about-us-title text-center my-5">
          Join the Next Wave:{" "}
          <span className="theme-color-green">
            {" "}
            Upcoming <br className="d-none d-lg-block" /> Batches
          </span>{" "}
        </h1>
        <div className="pt-4 position-relative">
          <div className="design-circle-upcoming-batch position-absolute"></div>
          <img
            src={Notes}
            style={{
              height: "60%",
              width: "100%",
              objectFit: "contain",
              borderRadius: 20,
            }}
            alt="Notes"
          />
          {/* <ImageGallery img={Notes} /> */}
        </div>
      </Container>

      {/* Counter Design Section */}
      <section className="section">
        <div>
          <Counter counterValues={upComingBatchesCounter} />
        </div>
      </section>

      <section className="section">
        <div className="position-relative">
          <div className="design-circle-about-us-counter position-absolute"></div>
          {/* UI/UX Design Course */}
          <UiUxCourse bookMySeat={bookMySeat} />
        </div>
      </section>

      <section className="section">
        <Container>
          <div className="text-md-center">
            <h1 className="creative-learning-title">Upcoming Batches</h1>
            <p className="creative-learning-desc">
              Plan your design journey! Check here to see our upcoming batches
              and secure your spot.{" "}
            </p>
          </div>

          <BatchesCard />

          <div className="text-center my-md-4 pb-4 pb-md-0 mt-5">
            <Button
              bsPrefix="home"
              variant="button"
              onClick={bookMySeat}
              className="mt-md-4 enroll-btns"
              size="lg"
            >
              Enroll Now
            </Button>
          </div>
        </Container>
      </section>

      <section className="section">
        <div className="position-relative">
          <div className="design-circle-our-founder position-absolute"></div>
          {/* Book a Seat */}
          <BookaSeat handleShow={handleShow} />
        </div>
      </section>

      <EnrollModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
};

export default UpcomingBatches;
