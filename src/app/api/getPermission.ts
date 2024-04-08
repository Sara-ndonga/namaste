const USERNAME = "Sara-ndonga";
const REPO = "Sara-ndonga.github.io";
const FILEPATH = "namaste-permission.json";
const GITHUB_TOKEN = "4kDuomfquVwFbMLMXpCQqcXxAkNXEV4Hagbq";

export const getPermission = async (): Promise<boolean> => {
  const response: Response = await fetch(
    `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${FILEPATH}`,
    {
      method: "GET",
      headers: {
        Authorization: `token ghp_${GITHUB_TOKEN}`,
      },
      body: null,
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data: any = await response.json();
  const content: any = Buffer.from(data.content, "base64").toString("utf-8");
  const contentObject: any = JSON.parse(content);
  const permission: boolean = contentObject.permission;

  return permission;
};
