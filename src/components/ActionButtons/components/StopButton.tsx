import '../ActionButtons.scss';

interface StopButtonProps {
  onClick: () => void;
}

export function StopButton({ onClick }: StopButtonProps) {
  return (
    <button onClick={onClick} className="action-buttons__stop">
      <span className="action-buttons__icon">⏹️</span>
      <span>Stop</span>
    </button>
  );
}
