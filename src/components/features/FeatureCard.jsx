import * as Icons from 'lucide-react';

function FeatureCard({ title, icon, description }) {
  const LucideIcon = Icons[icon]; 
  // console.log(LucideIcon);

  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all duration-200  space-y-2">
      <LucideIcon className="w-6 h-6 text-green-500" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
}

export default FeatureCard
