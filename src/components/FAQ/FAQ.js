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
    </div>
  );
};

export default FAQ;
