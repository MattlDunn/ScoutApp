enum MetricTypes {
  Label = "Label",
  Text = "Text",
  Counter = "Counter",
  Checkbox = "Checkbox",
}

class RoboMetric {
  name: string;
  type: MetricTypes;
  value: string | number | boolean;

  constructor(
    name: string,
    type: MetricTypes,
    value?: string | number | boolean
  ) {
    this.name = name;
    this.type = type;
    this.value = value ?? this.defaultValue();
  }

  private defaultValue(): string | number | boolean {
    switch (this.type) {
      case MetricTypes.Label:
        return this.name;
      case MetricTypes.Text:
        return "";
      case MetricTypes.Counter:
        return 0;
      case MetricTypes.Checkbox:
        return false;
    }
  }
}

export { RoboMetric, MetricTypes };
