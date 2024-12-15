const PaymentSection: React.FC = () => {
  return (
    <section className="section-security">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <h1>Payment and renewals</h1>
            <p>
              CDR tool is only sold via the distribution channel, yet if you
              don’t have any distributor in your area, then you can choose to
              pay by using one of the payment methods available in our online
              shop
            </p>
          </div>
          <div className="col-md-7 col-sm-7 text-center">
            <div
              className="flex flex-wrap  gap-6 items-center justify-center"
              style={{ maxWidth: "400px" }}
            >
              <img src="/images/iyzico.png" />
              <img src="/images/mastercard seeklogo.com.svg" />

              <img src="/images/visa.svg" />

              <img src="/images/AmericanExpress.svg" />
              <img src="/images/ssl.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
