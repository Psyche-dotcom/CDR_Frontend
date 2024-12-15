interface FeatureCardProps {
  imageSrc: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, description }) => {
  return (
    <div className="details flex flex-col items-center">
      <img src={imageSrc} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
