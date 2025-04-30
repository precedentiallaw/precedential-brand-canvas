
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to brand guidelines page
    navigate('/brand-guidelines');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-precedential-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-precedential-gold">Redirecting to Brand Guidelines</h1>
        <p className="text-xl text-precedential-white">Please wait...</p>
      </div>
    </div>
  );
};

export default Index;
