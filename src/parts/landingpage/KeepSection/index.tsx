import Image from "next/image";

const KeepSection = () => {
  return (
    <section className="section-keep">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={"/images/keep.svg"} alt="Keep" />
        </div>
        <div className="col-md-6 m-auto">
          <h1>Works in a browser on any device. No app needed.</h1>
          <div className="top">
            <img src={"/images/prism.svg"} alt="Prism" />
            <div className="text">
              <span>Click and Report</span>
              <p>
                Quickly load any report from the PBX with the enhanced database
                engine
              </p>
            </div>
          </div>
          <div className="bottom">
            <img src={"/images/heart.svg"} alt="Heart" />
            <div className="text">
              <span>Favorites Fast Reports</span>
              <p>
                If you like a particular report, add to favorite for later
                access when you need again
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepSection;
