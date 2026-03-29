export enum EngineStatus {
  Idle,
  Running,
  Paused,
  Stopped
}

export type EngineConfig = {
  port: number;
  debug: boolean;
  workers: number;
};

export type EngineOptions = {
  status: EngineStatus;
};

export type EngineEvent =
  | {
      type: 'start';
      config: EngineConfig;
    }
  | {
      type: 'stop';
      reason: string;
    }
  | {
      type: 'status';
      status: EngineStatus;
    };

export type EngineCallback = (event: EngineEvent) => void;