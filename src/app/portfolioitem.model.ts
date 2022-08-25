

export class PortfolioItem {


public projectId: string;


public projectName: string;

public projectDescription: string;

public projectSkills: Array<any>;

public projectImages: Array<any>;

public projectVideos?: Array<any>;

public projectLink: string;

constructor(projectId: string, projectName: string, projectDescription: string, projectSkills: Array<any>, projectImages: Array<any>, projectVideos: Array<any>, projectLink: string) {

this.projectId = projectId;
this.projectName = projectName;
this.projectDescription = projectDescription;
this.projectSkills = projectSkills;
this.projectImages = projectImages;
this.projectVideos = projectVideos;
this.projectLink = projectLink;




}

}