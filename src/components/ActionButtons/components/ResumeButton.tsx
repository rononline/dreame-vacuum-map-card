import '../ActionButtons.scss';

interface ResumeButtonProps {
  onClick: () => void;
}

export function ResumeButton({ onClick }: ResumeButtonProps) {
  return (
    <button onClick={onClick} className="action-buttons__resume">
      <span className="action-buttons__icon">▶️</span>
      <span>Resume</span>
    </button>
  );
}
