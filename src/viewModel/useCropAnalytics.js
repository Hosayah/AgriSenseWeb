import { useEffect, useState } from 'react';
import {
  analyticsSummaryApi,
  analyticsTrendApi,
  analyticsRiskApi
} from '../model/cropTrendApi';

export function useCropAnalytics({ horizon = 4, province = 'ALL', crops = [] }) {
  const [summary, setSummary] = useState([]);
  const [trend, setTrend] = useState(null);
  const [risk, setRisk] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);

        const [summaryRes, trendRes, riskRes] = await Promise.all([
          analyticsSummaryApi({ horizon, province }),
          analyticsTrendApi({ horizon, province, crop: crops }),
          analyticsRiskApi({ horizon, province })
        ]);

        if (!mounted) return;

        setSummary(summaryRes.data.summary);
        setTrend(trendRes.data);
        setRisk(riskRes.data);
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => (mounted = false);
  }, [horizon, province, JSON.stringify(crops)]);

  return {
    summary,
    trend,
    risk,
    loading,
    error
  };
}
