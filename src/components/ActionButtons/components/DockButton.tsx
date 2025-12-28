import '../ActionButtons.scss';

interface DockButtonProps {
  onClick: () => void;
}

export function DockButton({ onClick }: DockButtonProps) {
  return (
    <button onClick={onClick} className="action-buttons__dock">
      <span className="action-buttons__icon">🏠</span>
      <span>Dock</span>
    </button>
  );
}
