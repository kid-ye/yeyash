import { octokit } from "@/lib/octokit";
import { unstable_cache as cache } from "next/cache";

export const getGHStats = cache(
  async () => {
    const gql = String.raw;
    const { user } = await octokit.graphql<{
      user: {
        repositoriesContributedTo: { totalCount: number };
        openIssues: { totalCount: number };
        closedIssues: { totalCount: number };
        followers: { totalCount: number };
        repositories: {
          totalCount: number;
          nodes: {
            stargazers: { totalCount: number };
          }[];
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
          };
        };
      };
    }>(
      gql`
        query ($login: String!) {
          user(login: $login) {
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
            followers {
              totalCount
            }
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
              nodes {
                stargazers {
                  totalCount
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      `,
      { login: "kid-ye" },
    );
    return {
      issues: user.closedIssues.totalCount + user.openIssues.totalCount,
      followers: user.followers.totalCount,
      repos: user.repositories.totalCount,
    };
  },
  [],
  { revalidate: 3600 },
);
