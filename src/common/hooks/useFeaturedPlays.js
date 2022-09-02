import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

const useFeaturedPlays = () => {
  const [viewsData, setViewsData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState([]);
  const [github, setGithub] = useState([]);

  function slugFromViewsData() {
    viewsData.slice(0, 4).filter((v) => {
      return setSlug((oldVal) => [...oldVal, v.x.split("/")[3]]);
    });
  }
  function githubFromViewsData() {
    viewsData.slice(0, 4).filter((v) => {
      return setGithub((oldVal) => [...oldVal, v.x.split("/")[2]]);
    });
  }

  async function fetchTrendingPlays(start, end, headers) {
    return await fetch(
      `https://analytics.reactplay.io/api/website/1/metrics?start_at=${start}&end_at=${end}&type=url`,
      { headers }
    );
  }

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${process.env.UMAMI_BEARER_TOKEN}`,
    };
    const weeklyStartTime = 1661365800000;
    const weeklyEndTime = 1661797800000;

    const unwantedPaths = [
      "/",
      "/plays",
      "/ideas",
      "/plays/",
      "/?ref=madewithreactjs.com",
      "/tech-stacks",
      "/?error=invalid-request&errorDescription=%22redirectTo%22%20does%20not%20match%20any%20of%20the%20allowed%20types",
      "/ideas/",
      "/plays/create",
      "/plays/98415e0a-68d2-4930-a7ff-3559200740fe",
      "/plays/editplay",
    ];
    setViewsData((current) =>
      current.filter((d, index) => {
        return unwantedPaths.includes(d.x) === false;
      })
    );

    (async () => {
      try {
        setLoading(true);
        const viewsRes = await fetchTrendingPlays(
          weeklyStartTime,
          weeklyEndTime,
          headers
        );
        const dataRes = await submit(FetchPlaysSimple());
        setViewsData(viewsRes);
        setData(dataRes);
      } catch (err) {
        setError(err?.[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [loading, error, data, viewsData];
};

export default useFeaturedPlays;
