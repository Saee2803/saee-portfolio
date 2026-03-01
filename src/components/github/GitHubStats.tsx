"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCode, FiGitCommit, FiGithub, FiStar, FiUsers } from "react-icons/fi";

interface GitHubStatsData {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: { name: string; count: number; color: string }[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
};

const GITHUB_USERNAME = "siddhesh940";

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        );
        if (!userRes.ok) throw new Error("User fetch failed");
        const userData = await userRes.json();

        // Fetch repos (up to 100)
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        );
        if (!reposRes.ok) throw new Error("Repos fetch failed");
        const reposData = await reposRes.json();

        if (!Array.isArray(reposData)) throw new Error("Invalid repos data");

        // Calculate total stars
        const totalStars = reposData.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + (repo.stargazers_count || 0),
          0,
        );

        // Count languages
        const langMap: Record<string, number> = {};
        reposData.forEach((repo: { language: string | null }) => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            count,
            color: LANGUAGE_COLORS[name] || "#6366f1",
          }));

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          totalStars,
          topLanguages,
        });
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
        // Fallback data
        setStats({
          publicRepos: 25,
          followers: 10,
          totalStars: 15,
          topLanguages: [
            { name: "Python", count: 10, color: "#3572A5" },
            { name: "TypeScript", count: 5, color: "#3178c6" },
            { name: "JavaScript", count: 4, color: "#f1e05a" },
            { name: "Java", count: 3, color: "#b07219" },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const statCards = stats
    ? [
        {
          icon: FiCode,
          label: "Repositories",
          value: stats.publicRepos,
          color: "from-indigo-500 to-blue-500",
        },
        {
          icon: FiStar,
          label: "Total Stars",
          value: stats.totalStars,
          color: "from-yellow-500 to-orange-500",
        },
        {
          icon: FiUsers,
          label: "Followers",
          value: stats.followers,
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: FiGitCommit,
          label: "Top Languages",
          value: stats.topLanguages.length,
          color: "from-purple-500 to-pink-500",
        },
      ]
    : [];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Statistics
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            A snapshot of my open-source contributions and coding activity
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {statCards.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative group p-6 rounded-2xl
                             bg-white dark:bg-slate-900/60 backdrop-blur
                             border border-slate-200 dark:border-slate-700
                             hover:border-indigo-500/40 transition-all duration-300
                             text-center overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    <CountUp target={stat.value} />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Top Languages */}
            {stats && stats.topLanguages.length > 0 && (
              <motion.div
                className="p-6 md:p-8 rounded-2xl
                           bg-white dark:bg-slate-900/60 backdrop-blur
                           border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FiCode className="w-5 h-5 text-primary-500" />
                  Most Used Languages
                </h3>

                <div className="space-y-4">
                  {stats.topLanguages.map((lang, i) => {
                    const maxCount = stats.topLanguages[0].count;
                    const percentage = (lang.count / maxCount) * 100;

                    return (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: lang.color }}
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {lang.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {lang.count} repos
                          </span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: lang.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.2 + 0.1 * i,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* View on GitHub */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-gray-900 dark:bg-white text-white dark:text-gray-900
                           font-medium hover:scale-105 transition-transform"
              >
                <FiGithub className="w-5 h-5" />
                View Full Profile
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

// Animated count-up component
function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target <= 0) return;

    setCount(0);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return <>{count}</>;
}
