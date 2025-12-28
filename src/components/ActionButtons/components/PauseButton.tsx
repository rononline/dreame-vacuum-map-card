import '../ActionButtons.scss';

interface PauseButtonProps {
  onClick: () => void;
}

export function PauseButton({ onClick }: PauseButtonProps) {
  return (
    <button onClick={onClick} className="action-buttons__pause">
      <span className="action-buttons__icon">⏸️</span>
      <span>Pause</span>
    </button>
  );
}
