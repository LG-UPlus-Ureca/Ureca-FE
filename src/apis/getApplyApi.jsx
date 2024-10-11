import { client } from './client';

export const getApplyInfo = async ({ name, email, number }) => {
  try {
    const response = await client.get(
      `/apply/confirm?name=${name}&email=${email}&phoneNumber=${number}`,
    );
    return response.data.userApply;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
