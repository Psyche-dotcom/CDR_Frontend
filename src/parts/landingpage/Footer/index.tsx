import Link from "next/link";

export default function FooterSection() {
  return (
    <section className="section-ready">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6 text-center">
            <h1>Ready to get started?</h1>
          </div>
          <div className="col-md-6 text-center">
            <Link href="/login">Start for free</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
