import './RoomSelectionDisplay.scss';

interface RoomSelectionDisplayProps {
  selectedRooms: Map<number, string>;
}

export function RoomSelectionDisplay({ selectedRooms }: RoomSelectionDisplayProps) {
  if (selectedRooms.size === 0) {
    return null;
  }

  const roomNames = Array.from(selectedRooms.values()).join(', ');

  return (
    <div className="room-selection-display">
      <span className="room-selection-display__label">Selected:</span>
      <span className="room-selection-display__rooms">{roomNames}</span>
    </div>
  );
}
