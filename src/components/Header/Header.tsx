import type { HassEntity } from '../../types/homeassistant';
import './Header.scss';

interface HeaderProps {
  entity: HassEntity;
  deviceName: string;
}

export function Header({ entity, deviceName }: HeaderProps) {
  const getStatusText = () => {
    const status = entity.attributes.status;
    return typeof status === 'string' ? status : entity.state;
  };

  const getCleanedArea = () => {
    const area = entity.attributes.cleaned_area;
    return typeof area === 'number' ? area : 0;
  };
  
  const getCleaningTime = () => {
    const time = entity.attributes.cleaning_time;
    return typeof time === 'number' ? time : 0;
  };
  
  const getBatteryLevel = () => {
    const battery = entity.attributes.battery;
    return typeof battery === 'number' ? battery : 0;
  };

  const progress = (() => {
    const cleaningProgress = entity.attributes.cleaning_progress;
    const dryingProgress = entity.attributes.drying_progress;
    const cp = typeof cleaningProgress === 'number' ? cleaningProgress : 0;
    const dp = typeof dryingProgress === 'number' ? dryingProgress : 0;
    return cp || dp;
  })();
  
  const status = entity.attributes.status;
  
  return (
    <div className="header">
      <h2 className="header__title">{deviceName}</h2>
      <p className="header__status">{getStatusText()}</p>

      {status !== "Sleeping" && progress > 0 && (
        <div className="header__progress">
          <div className="header__progress-bar">
            <div
              className="header__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="header__stats">
        <div className="header__stat">
          <span className="header__stat-icon">🏠</span>
          <span className="header__stat-value">{getCleanedArea()} m²</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">⏱️</span>
          <span className="header__stat-value">{getCleaningTime()} min</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">🔋</span>
          <span className="header__stat-value">{getBatteryLevel()} %</span>
        </div>
      </div>
    </div>
  );
}
