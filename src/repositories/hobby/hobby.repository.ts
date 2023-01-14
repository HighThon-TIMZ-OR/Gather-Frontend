import { customAxios } from "../../lib/axios/customAxios";
import { HobbyResponse } from "../../types/hobby/hobby.type";
import { createHobbyParam, HobbiesResponse } from "./hobby.param";

class HobbyRepository {
  public async createHobbies({
    title,
    hobby_type,
    max_people,
  }: createHobbyParam): Promise<HobbyResponse> {
    const { data } = await customAxios.post(`/hobbies`, {
      title,
      hobby_type,
      max_people,
    });
    return data;
  }

  public async getHobbies(): Promise<HobbiesResponse> {
    const { data } = await customAxios.get(`/hobbies`);
    return data;
  }
}

export default new HobbyRepository();
