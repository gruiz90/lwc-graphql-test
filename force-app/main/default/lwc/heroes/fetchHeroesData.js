export default function fetchHeroesData() {
  const bodyData = {
    query: `query heroes($id: Int!) {\n  organization(id: $id) {\n    id\n    homepageSettings {\n      heroes {\n        ...ContentCard\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentCard on Content {\n  ... on Campaign {\n    ...CampaignCard\n    __typename\n  }\n  ... on ImpactFund {\n    ...ImpactFundCard\n    __typename\n  }\n  ... on NpoPage {\n    ...NpoPageCard\n    __typename\n  }\n  ... on SchoolPage {\n    ...SchoolPageCard\n    __typename\n  }\n  ... on Story {\n    ...StoryCard\n    __typename\n  }\n  ... on VolunteeringOpportunity
    {\n    ...VolunteeringOpportunityCard\n    __typename\n  }\n  __typename\n}\n\nfragment CampaignCard on Campaign {\n  tag: __typename\n  id\n  name\n  excerpt\n  subheading\n  ctaText\n  availableActions\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n}\n\nfragment ImpactFundCard on ImpactFund {\n  tag: __typename\n  id\n  name\n  excerpt\n  subheading\n  ctaText\n  availableActions\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n}\n\nfragment NpoPageCard on NpoPage {\n  tag: __typename\n  id\n  name\n  excerpt\n  subheading\n  ctaText\n  availableActions\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n  sdgs {\n    id\n    name\n    __typename\n  }\n  causes {\n    id\n    name\n    __typename\n  }\n}\n\nfragment SchoolPageCard on SchoolPage
    {\n  tag: __typename\n  id\n  name\n  subheading\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n}\n\nfragment StoryCard on Story {\n  tag: __typename\n  id\n  name\n  excerpt\n  subheading\n  ctaText\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n}\n\nfragment VolunteeringOpportunityCard on VolunteeringOpportunity {\n  tag: __typename\n  id\n  name\n  excerpt\n  subheading\n  ctaText\n  availableActions\n  primaryImageCrid\n  primaryImageAlt\n  engagePrimaryCause {\n    id\n    name\n    __typename\n  }\n  nameDisambiguation\n  locationType\n  opportunityType\n  locationDisambiguation {\n    locality\n    adminArea\n    __typename\n  }\n  identifierDisambiguation {\n    identifier\n    value\n    __typename\n  }\n  opportunitySchedulingDetails {\n    ...OpportunityDetails\n    __typename\n  }\n}\n\nfragment OpportunityDetails on OpportunitySchedulingDetails {\n  ... on ShiftsSchedulingDetails
    {\n    ...ShiftsDetails\n    __typename\n  }\n  ... on OneTimeSchedulingDetails {\n    ...OneTimeDetails\n    __typename\n  }\n  ... on FlexibleSchedulingDetails {\n    ...FlexibleDetails\n    __typename\n  }\n  __typename\n}\n\nfragment ShiftsDetails on ShiftsSchedulingDetails {\n  shifts {\n    ...ShiftDetails\n    __typename\n  }\n  __typename\n}\n\nfragment ShiftDetails on Shift {\n  id\n  name\n  start {\n    localDateTime\n    timeZone\n    derivedUTC\n    __typename\n  }\n  end {\n    localDateTime\n    timeZone\n    derivedUTC\n    __typename\n  }\n  status\n  totalCapacity\n  remainingCapacity\n  __typename\n}\n\nfragment OneTimeDetails on OneTimeSchedulingDetails {\n  shift {\n    ...ShiftDetails\n    __typename\n  }\n  __typename\n}\n\nfragment FlexibleDetails on FlexibleSchedulingDetails {\n  shift {\n    ...ShiftDetails\n    __typename\n  }\n  __typename\n}\n
    `,
    variables: { id: 1027 }
  };

  // TODO: Generate Bearer token and retrieve from custom settings probably
  return fetch(
    "https://api.philanthropycloud.com.qa3.makanaplatform.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer SECRET_TOKEN"
      },
      body: JSON.stringify(bodyData)
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
