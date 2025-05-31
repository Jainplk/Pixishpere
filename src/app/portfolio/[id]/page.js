
import PhotographerData from '../../../data/db.json';
import PhotographerPortfolio from '@/components/PhotographerPortfolio';

export default function PortfolioPage({ params }) {
  const { id } = params;

 
  const photographer = PhotographerData.photographers.find(
    (p) => p.id === parseInt(id)
  );


  if (!photographer) {
    return <div className="p-4">Photographer not found.</div>;
  }

  return (
    <main className="p-6">
      <PhotographerPortfolio photographer={photographer} />
    </main>
  );
}
