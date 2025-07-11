import React from 'react';
import { Slot } from '../../typings';
import InventorySlot from './InventorySlot';
import { isSlotWithItem } from '../../helpers';

interface InventorySectionProps {
  title: string;
  icon: string;
  items: Slot[];
  columns: number;
  rows: number;
  showNumbers?: boolean;
  showWeight?: boolean;
  weight?: number;
  maxWeight?: number;
}

const InventorySection: React.FC<InventorySectionProps> = ({
  title,
  icon,
  items,
  columns,
  rows,
  showNumbers = false,
  showWeight = false,
  weight = 0,
  maxWeight = 0,
}) => {
  const totalSlots = columns * rows;
  const slotsArray = Array.from({ length: totalSlots }, (_, index) => {
    const existingItem = items.find(item => item.slot === index + 1);
    return existingItem || { slot: index + 1 };
  });

  return (
    <div className="inventory-section">
      <div className="section-header">
        <span className="section-icon">{icon}</span>
        <span className="section-title">{title}</span>
      </div>
      
      <div 
        className="section-grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {slotsArray.map((item, index) => (
          <div key={index} className="slot-wrapper">
            {showNumbers && index < 5 && (
              <div className="slot-number">{index + 1}</div>
            )}
            <InventorySlot
              item={item}
              inventoryType="player"
              inventoryGroups={{}}
              inventoryId="player"
            />
          </div>
        ))}
      </div>

      {showWeight && (
        <div className="section-footer">
          <div className="weight-info">
            <span className="weight-icon">⚖️</span>
            <span className="weight-text">
              TOTAL WEIGHT {weight}/{maxWeight}kg
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventorySection;