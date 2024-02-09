import React from "react";
import PaymentDetails from "./PaymentDetails";
import Summary from "./Summary";
import FAQ from "./FAQ";

const Checkout = () => {
  return (
    <div className="px-48 py-4 max-xl:px-12 max-sm:p-4 mt-4">
      <h1 className="text-5xl max-sm:text-4xl mt-12 mb-8 max-md:my-2 font-Roboto ">
        Confirm & pay
      </h1>
      <section className="main-body flex max-md:flex-col gap-8 mb-8">
        <article className="w-[70%] max-md:w-full max-md:order-1">
          <PaymentDetails />
        </article>
        <div className="w-[30%] max-sm:w-full">
          <article className="sticky top-10 max-md:order-2">
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
