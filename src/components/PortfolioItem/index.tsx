interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
}

export function PortfolioItem({
  title,
  img,
  description,
}: PortifolioItemProps) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="Imagem do projeto" />
    </div>
  );
}
