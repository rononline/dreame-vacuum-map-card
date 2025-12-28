import type { CleaningMode } from '../../types/homeassistant';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton } from './components';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningMode;
  selectedRoomsCount: number;
  isRunning: boolean;
  isPaused: boolean;
  isDocked: boolean;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onDock: () => void;
}

function getCleanButtonText(mode: CleaningMode, roomsCount: number): string {
  switch (mode) {
    case 'room':
      return roomsCount > 0
        ? `Clean ${roomsCount} Room${roomsCount > 1 ? 's' : ''}`
        : 'Select Rooms';
    case 'all':
      return 'Clean All';
    case 'zone':
      return 'Zone Clean';
    default:
      return 'Clean';
  }
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  isRunning,
  isPaused,
  isDocked,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
}: ActionButtonsProps) {
  const cleanButtonText = getCleanButtonText(selectedMode, selectedRoomsCount);

  // Running state - show pause and stop
  if (isRunning && !isPaused && !isDocked) {
    return (
      <div className="action-buttons">
        <PauseButton onClick={onPause} />
        <StopButton onClick={onStop} />
      </div>
    );
  }

  // Paused state - show resume and stop
  if (isPaused) {
    return (
      <div className="action-buttons">
        <ResumeButton onClick={onResume} />
        <StopButton onClick={onStop} />
      </div>
    );
  }

  // Idle/docked state - show clean and dock
  return (
    <div className="action-buttons">
      <CleanButton onClick={onClean} text={cleanButtonText} />
      <DockButton onClick={onDock} />
    </div>
  );
}
