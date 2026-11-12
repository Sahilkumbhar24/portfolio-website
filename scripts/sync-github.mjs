// Refreshes src/data/github.json from the public GitHub API.
//   npm run sync:github
//   GITHUB_TOKEN=... npm run sync:github

import { writeFile } from 'node:fs/promises';

const USER = 'Sahilkumbhar24';
const OUT = new URL('../src/data/github.json', import.meta.url);
const REPOS = [
  'Sahilkumbhar24/ai-fitness-app',
  'Sahilkumbhar24/AR-Powered-Interior-Decorator-',
  'Sahilkumbhar24/AI-Resume-Ranker',
  'Sahilkumbhar24/Movie-Recommendation-System',
  'Sahilkumbhar24/Portfolio',
  'Sahilkumbhar24/Money-Tracker',
  'Sahilkumbhar24/Registration-Form',
  'Sahilkumbhar24/AI-Interior-Designer',
  'Sahilkumbhar24/Facial-Recognition-using-Facenet',
  'Sahilkumbhar24/AI-Based-Plagiarism-Detection-System',
  'Sahilkumbhar24/Steganography',
  'Sahilkumbhar24/Hotel-Booking-System',
  'Sahilkumbhar24/E-Commerce-Shopping-Cart',
];

const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio-sync`,
  ...(token && { Authorization: `Bearer ${token}` }),
};

async function main() {
  const repoQuery = REPOS.map((full) => `repo:${full}`).join(' ');
  const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(repoQuery)}&per_page=100`, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const found = await res.json();
  const byName = new Map(found.items.map((r) => [r.full_name.toLowerCase(), r.stargazers_count]));
  const stars = Object.fromEntries(REPOS.map((full) => [full, byName.get(full.toLowerCase()) ?? 0]));

  const snapshot = {
    syncedAt: new Date().toISOString().slice(0, 10),
    stars,
  };
  await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n');
  console.log(`Updated ${OUT.pathname} with repository stars.`);
}

main().catch((err) => {
  console.error(`GitHub sync failed, snapshot left unchanged: ${err.message}`);
  process.exit(1);
});
