export interface ISkillsList {
  name: string;
  img: string;
  description: string;
  experience: string;
}
export interface IProjectsList {
  name: string;
  video: string;
  description: string;
  links: ILinksProject[];
}
export interface ILinksProject {
  name: string;
  ref: string;
}
