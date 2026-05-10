import React from 'react';
import { RangeRoverIcon, MercedesMaybachIcon, CadillacEscaladeIcon } from '@/icons/cars';

/**
 * CarIconShowcase
 * Demo component showing all luxury car icons
 * Use for vehicle selection, class indicators, or listings
 */
export const CarIconShowcase = () => {
  const vehicles = [
    {
      name: 'Range Rover',
      class: 'EXECUTIVE',
      icon: RangeRoverIcon,
      description: '5 Seats • Executive SUV',
    },
    {
      name: 'Mercedes-Maybach GLS',
      class: 'ULTRA_LUXE',
      icon: MercedesMaybachIcon,
      description: '4 Seats • Ultra Luxury',
    },
    {
      name: 'Cadillac Escalade',
      class: 'PREMIUM',
      icon: CadillacEscaladeIcon,
      description: '6 Seats • Premium SUV',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {vehicles.map((vehicle) => {
        const Icon = vehicle.icon;
        return (
          <div key={vehicle.name} className="flex flex-col items-center gap-4">
            {/* Icon at multiple sizes */}
            <div className="flex gap-4 mb-4">
              <Icon width={48} height={48} color="#D9C280" />
              <Icon width={64} height={64} color="#D9C280" />
              <Icon width={80} height={80} color="#D9C280" />
            </div>

            {/* Vehicle info */}
            <div className="text-center">
              <h3 className="font-serif text-lg font-semibold text-concierge-black">
                {vehicle.name}
              </h3>
              <p className="text-sm text-concierge-slate mt-1">
                {vehicle.description}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-concierge-gold/10 text-concierge-gold text-xs font-medium rounded-full">
                {vehicle.class}
              </span>
            </div>

            {/* Color variants */}
            <div className="flex gap-2 mt-4">
              <div className="p-4 rounded-lg border border-gray-200">
                <Icon width={48} height={48} color="#0D0D0D" />
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <Icon width={48} height={48} color="#D9C280" />
              </div>
              <div className="p-4 rounded-lg bg-concierge-black rounded-lg p-4">
                <Icon width={48} height={48} color="#FAFAFA" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
