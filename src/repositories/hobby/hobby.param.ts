export interface createHobbyParam {
  title: string;
  hobby_type: string;
  max_people: number;
}

export interface getHobbiesParam {
  title: string;
  max_people: number;
  current_people: number;
}

export interface HobbiesResponse extends Response {
  hobby_response_list: getHobbiesParam[];
}
