import { SchoolEnum } from './school.enum';
import { ClassEnum } from './class.enum';
import { Modify } from '../utils';

export enum ComponentsEnum {
  Verbal = 'V',
  Somatic = 'S',
  Material = 'M',
  Focus = 'F',
  DivineFocus = 'DF',
  XPCost = 'XP',
}

export interface SpellModel {
  slug: string;
  name: string;
  desc: string;
  higher_level: string;
  page: string;
  range: string;
  components: ComponentsEnum[];
  material: string;
  ritual: 'yes' | 'no';
  duration: string;
  concentration: 'yes' | 'no';
  casting_time: string;
  level: string;
  level_int: number;
  school: SchoolEnum;
  dnd_class: ClassEnum[];
  archetype: string;
  circles: string;
  document__slug: string;
  document__title: string;
  document__license_url: string;
}

export type ApiSpellTable = Modify<
  SpellModel,
  {
    components: string;
    dnd_class: string;
  }
>;
