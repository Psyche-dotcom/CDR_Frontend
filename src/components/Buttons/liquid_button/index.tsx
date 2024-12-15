interface ButtonProps {
  id: string;
  text: string;
  color1: string;
  color2: string;
  color3: string;
  href: string;
}

export const LiquidButton: React.FC<ButtonProps> = ({
  id,
  text,
  color1,
  color2,
  color3,
  href,
}) => (
  <a href={href} id={id}>
    <svg
      className="liquid-button"
      data-text={text}
      data-force-factor="0.1"
      data-layer-1-viscosity="0.5"
      data-layer-2-viscosity="0.4"
      data-layer-1-mouse-force="400"
      data-layer-2-mouse-force="500"
      data-layer-1-force-limit="1"
      data-layer-2-force-limit="2"
      data-color1={color1}
      data-color2={color2}
      data-color3={color3}
    />
  </a>
);
