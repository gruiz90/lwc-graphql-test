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

export default function fetchProfileInfo() {
  const graphql = JSON.stringify({
    graphql: query,
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

  // try {
  //     const response = await fetch("https://api.philanthropycloud.com.qa3.makanaplatform.com/graphql", requestOptions);
  //     if (response.ok) {
  //         return response.json
  //     }
  // } catch (error) {
  //     console.log('error', error)
  // }
  return fetch(
    "https://api.philanthropycloud.com.qa3.makanaplatform.com/graphql",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
