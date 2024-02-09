import React from "react";
import PaymentDetails from "./PaymentDetails";
import Summary from "./Summary";
import FAQ from "./FAQ";

const Checkout = () => {
  return (
    <div className="px-48 py-4 max-xl:px-12">
      <section className="main-body flex gap-8 mb-8">
        <article className="w-[70%]">
          <PaymentDetails />
        </article>
        <div className="w-[30%]">
          <article className="sticky top-10">
            <Summary />
          </article>
        </div>
      </section>
      <hr />
      <FAQ />
    </div>
  );
};

export default Checkout;
