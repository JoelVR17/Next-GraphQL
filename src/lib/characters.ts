import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";

export async function getServerSideProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1, filter: { name: "rick" }) {
          info {
            count
          }
          results {
            name
            image
            status
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results.slice(0, 50),
    },
  };
}
