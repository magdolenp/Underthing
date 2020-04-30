export interface MonsterModel {
  slug: string;
  name: string;
  size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
  type: string;
  subtype: string;
  group: string | null;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: {
    hover?: boolean;
    walk?: number;
    swim?: number;
    fly?: number;
    burrow?: number;
    climb?: number;
  };
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
  perception: number | null;
  skills: {
    acrobatics?: number;
    animal_handling?: number;
    arcana?: number;
    athletics?: number;
    deception?: number;
    history?: number;
    insight?: number;
    intimidation?: number;
    investigation?: number;
    medicine?: number;
    nature?: number;
    perception?: number;
    performance?: number;
    persuasion?: number;
    religion?: number;
    sleight_of_hand?: number;
    stealth?: number;
    survival?: number;
  };
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  actions: {
    attack_bonus?: number;
    damage_bonus?: number;
    damage_dice?: string;
    desc: string;
    name: string;
  }[];
  reactions: string;
  legendary_desc: string;
  legendary_actions: {
    desc: string;
    name: string;
  }[];
  special_abilities: {
    desc: string;
    name: string;
  }[];
  spell_list: string[]; // this should be url to spell
  img_main: null;
  document__slug: string;
  document__title: string;
  document__license_url: string;
}
