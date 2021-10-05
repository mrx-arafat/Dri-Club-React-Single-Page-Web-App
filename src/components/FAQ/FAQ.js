import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">
        <h3>
          Q1: Am I able to have driving lessons in my own/family or friends car?
        </h3>
        <p className="faq-p">
          Under certain circumstances, customers may want to receive lessons in
          their own/family vehicle. This is a good idea where the car will be
          used for a Driver’s Test. It is also a good idea when a learner has a
          new car and wishes to familiarise themselves with it prior to
          licensing. Safe Drive Driving School is able to offer customers
          training in their vehicle, provided the vehicle is registered,
          roadworthy and comprehensively insured. Prior to any training being
          conducted in the customer’s vehicle, the instructor should inspect the
          vehicle for its roadworthiness. The inspection should include, but is
          not limited to, a check of the following items;
        </p>
      </div>
      <div className="faq-container">
        <h3>Q2: Are automatic cars easier to drive?</h3>
        <p className="faq-p">
          When you are ready, your Safe Drive Instructor will arrange your test
          for you on payment of the Transport Booking Fee. Alternatively you can
          call our Central Booking Office, provide us with your learners permit
          number and payment details and we will arrange your test. You can book
          a test directly with Transport, however there is no guarantee that
          your specific Instructor is available at that time.
        </p>
      </div>
      {/* extra part accordion group added */}

      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is the minimum age for licensing ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>18 is the minimum age</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How can I join DriClub ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simple , Just register online then come to our office
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Friday Closed</Typography>
          </AccordionSummary>
        </Accordion>
      </div>

      {/* extra part avatar group added */}
      <div>
        <AvatarGroup max={4}>
          <Avatar
            alt="Mark Zuck"
            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
          />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar
            alt="Lary Page"
            src="data:image/jpeg;base64,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"
          />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
    </div>
  );
};

export default FAQ;
