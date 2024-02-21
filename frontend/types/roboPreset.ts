import { RoboMetric } from "./roboMetric";

class RoboPreset {
  name: string;
  metrics: RoboMetric[];

  constructor(name: string, metrics: RoboMetric[]) {
    this.name = name;
    this.metrics = metrics;
  }
}

export { RoboPreset };
