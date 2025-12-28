import { useCallback } from 'react';
import type { Hass, CleaningMode, Zone } from '../types/homeassistant';

interface VacuumServicesParams {
  hass: Hass;
  entityId: string;
  onSuccess?: (message: string) => void;
}

/**
 * Hook providing vacuum service operations
 */
export function useVacuumServices({ hass, entityId, onSuccess }: VacuumServicesParams) {
  const handleStart = useCallback(() => {
    hass.callService('vacuum', 'start', { entity_id: entityId });
    onSuccess?.('Starting full house cleaning');
  }, [hass, entityId, onSuccess]);

  const handlePause = useCallback(() => {
    hass.callService('vacuum', 'pause', { entity_id: entityId });
    onSuccess?.('Pausing vacuum');
  }, [hass, entityId, onSuccess]);

  const handleStop = useCallback(() => {
    hass.callService('vacuum', 'stop', { entity_id: entityId });
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.('Stopping vacuum');
  }, [hass, entityId, onSuccess]);

  const handleDock = useCallback(() => {
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.('Vacuum returning to dock');
  }, [hass, entityId, onSuccess]);

  const handleCleanSegments = useCallback((segments: number[], count: number) => {
    hass.callService('dreame_vacuum', 'vacuum_clean_segment', {
      entity_id: entityId,
      segments,
    });
    onSuccess?.(`Starting cleaning for ${count} selected room${count > 1 ? 's' : ''}`);
  }, [hass, entityId, onSuccess]);

  const handleCleanZone = useCallback((zone: Zone) => {
    const MAP_SIZE = 12000;
    const MAP_OFFSET = 6000;
    
    const x1 = Math.round((zone.x1 / 100) * MAP_SIZE - MAP_OFFSET);
    const y1 = Math.round((zone.y1 / 100) * MAP_SIZE - MAP_OFFSET);
    const x2 = Math.round((zone.x2 / 100) * MAP_SIZE - MAP_OFFSET);
    const y2 = Math.round((zone.y2 / 100) * MAP_SIZE - MAP_OFFSET);

    hass.callService('dreame_vacuum', 'vacuum_clean_zone', {
      entity_id: entityId,
      zone: [x1, y1, x2, y2],
    });
    onSuccess?.('Starting zone cleaning');
  }, [hass, entityId, onSuccess]);

  const handleClean = useCallback((
    mode: CleaningMode,
    selectedRooms: Map<number, string>,
    selectedZone: Zone | null
  ) => {
    switch (mode) {
      case 'all':
        handleStart();
        break;
      case 'room':
        if (selectedRooms.size > 0) {
          handleCleanSegments(Array.from(selectedRooms.keys()), selectedRooms.size);
        } else {
          onSuccess?.('Please select rooms to clean first');
        }
        break;
      case 'zone':
        if (selectedZone) {
          handleCleanZone(selectedZone);
        } else {
          onSuccess?.('Please select a zone on the map');
        }
        break;
    }
  }, [handleStart, handleCleanSegments, handleCleanZone, onSuccess]);

  return {
    handleStart,
    handlePause,
    handleStop,
    handleDock,
    handleCleanSegments,
    handleCleanZone,
    handleClean,
  };
}
