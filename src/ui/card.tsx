import { memo } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = memo(function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white shadow-lg p-4 ${className}`}>{children}</div>
  );
})

export default Card;