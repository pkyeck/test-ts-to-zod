import type { TemplateType } from "./a.types";

export type TAudioData = {
  a: string;
  b?: string;
};

export type TAudioRequest = {
  _template: TemplateType.Audio;
} & TAudioData;
