import React from 'react';
import { useAppSelector } from '../../store';
import { selectLeftInventory, selectRightInventory } from '../../store/inventory';
import InventorySection from './InventorySection';
import KeyboardShortcuts from './KeyboardShortcuts';

const NewInventoryLayout: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const rightInventory = useAppSelector(selectRightInventory);

  // Mock data for demonstration - in real implementation this would come from the store
  const hotbarItems = leftInventory.items.slice(0, 5);
  const clothesItems = Array.from({ length: 8 }, (_, i) => ({ slot: i + 1 }));
  const backpackItems = leftInventory.items.slice(5, 35);
  const groundItems = rightInventory.items || Array.from({ length: 25 }, (_, i) => ({ slot: i + 1 }));

  return (
    <div className="new-inventory-layout">
      <div className="inventory-header">
        <div className="inventory-title">
          <div className="lock-icon">🔒</div>
          <div className="title-text">
            <h2>INVENTORY</h2>
            <p>Omnia mea mecum porto.</p>
            <p>All that is mine I carry with me.</p>
          </div>
        </div>
        <KeyboardShortcuts />
      </div>

      <div className="inventory-content">
        <div className="left-side">
          <InventorySection
            title="HOTBAR"
            icon="👁"
            items={hotbarItems}
            columns={1}
            rows={5}
            showNumbers={true}
          />
          <InventorySection
            title="CLOTHES"
            icon="👕"
            items={clothesItems}
            columns={2}
            rows={4}
          />
        </div>

        <div className="center-section">
          <InventorySection
            title="BACKPACK"
            icon="🎒"
            items={backpackItems}
            columns={5}
            rows={6}
            showWeight={true}
            weight={3635}
            maxWeight={35}
          />
        </div>

        <div className="right-side">
          <InventorySection
            title="GROUND"
            icon="🌍"
            items={groundItems}
            columns={5}
            rows={6}
            showWeight={true}
            weight={0}
            maxWeight={35}
          />
        </div>
      </div>
    </div>
  );
};

export default NewInventoryLayout;