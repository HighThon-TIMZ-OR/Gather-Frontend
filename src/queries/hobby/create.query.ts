import { useMutation, useQuery } from "react-query";
import { createHobbyParam } from "../../repositories/hobby/hobby.param";
import hobbyRepository from "../../repositories/hobby/hobby.repository";

export const useCreateMutation = () => {
  const mutation = useMutation(
    ({ title, hobby_type, max_people }: createHobbyParam) =>
      hobbyRepository.createHobbies({ title, hobby_type, max_people })
  );
  return mutation;
};

export const useGetHobbiesQuery = () =>
  useQuery(["todo/useGetTodos"], () => hobbyRepository.getHobbies(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
