import FeatureCard from "@/components/Card/FeatureCard";

interface OurFeaturesProps {
  features: {
    imageSrc: string;
    description: string;
  }[];
}

const OurFeatures: React.FC<OurFeaturesProps> = ({ features }) => {
  return (
    <section className="section-our-features">
      <div className="custom-container">
        <h1 className="text-center">Our Features</h1>
        <div className="row text-center justify-content-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
