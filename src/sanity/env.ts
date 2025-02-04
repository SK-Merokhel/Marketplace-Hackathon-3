export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-03";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  "skd9sen68kXyjDwx9iB5T5bNi3QsHjfOfGPBexcuCclWVwcBTABnNmAYOgq9TKU6DVXti4LUoIYpouNZYPasA453zJXP6W1IzGuthhPqie84xMmkQMuuMj2E63KuhcLuxkEqohyC1gIBdQLfSedpkQLz3L3ivBVPMeySvVMmzUehCuEiM4zK",
  "Missing environment variable: SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
