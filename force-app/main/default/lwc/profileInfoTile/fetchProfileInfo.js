const query = `
    query profileInfo {
        me {
            person {
                id
                firstName
                lastName
                jobTitle
                avatar
                __typename
            }
        }
    }
`;

const TOKEN = "SECRET_TOKEN";

export default async function fetchProfileInfo() {
  const graphql = JSON.stringify({
    query: query,
    variables: {}
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${TOKEN}`
    },
    body: graphql,
    redirect: "follow"
  };

  try {
    const response = await fetch(
      "https://api.philanthropycloud.com.qa3.makanaplatform.com/graphql",
      requestOptions
    );
    console.log("response: ", response);
    return await response.json();
  } catch (error) {
    return console.log("error", error);
  }
}
