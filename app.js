const app = document.querySelector("#app");

const china = {
  id: "CHN",
  name: "中国",
  flag: "🇨🇳",
  rating: 72,
  colors: ["#d82236", "#f4c85b"],
};

const teams = [
  china,
  { id: "ARG", name: "阿根廷", flag: "🇦🇷", rating: 94, colors: ["#75b9ee", "#ffffff"] },
  { id: "FRA", name: "法国", flag: "🇫🇷", rating: 94, colors: ["#183a73", "#d9273b"] },
  { id: "BRA", name: "巴西", flag: "🇧🇷", rating: 93, colors: ["#f7d447", "#16854b"] },
  { id: "ENG", name: "英格兰", flag: "🏴", rating: 91, colors: ["#f4f2ec", "#c21e36"] },
  { id: "ESP", name: "西班牙", flag: "🇪🇸", rating: 90, colors: ["#c8222d", "#f0bd30"] },
  { id: "GER", name: "德国", flag: "🇩🇪", rating: 90, colors: ["#eeeeee", "#171717"] },
  { id: "POR", name: "葡萄牙", flag: "🇵🇹", rating: 89, colors: ["#ba1c31", "#197144"] },
  { id: "NED", name: "荷兰", flag: "🇳🇱", rating: 88, colors: ["#f47c20", "#183a73"] },
  { id: "BEL", name: "比利时", flag: "🇧🇪", rating: 87, colors: ["#201915", "#d71920"] },
  { id: "ITA", name: "意大利", flag: "🇮🇹", rating: 87, colors: ["#1f62b2", "#ffffff"] },
  { id: "CRO", name: "克罗地亚", flag: "🇭🇷", rating: 86, colors: ["#ffffff", "#d12632"] },
  { id: "URU", name: "乌拉圭", flag: "🇺🇾", rating: 85, colors: ["#75b9ee", "#111111"] },
  { id: "JPN", name: "日本", flag: "🇯🇵", rating: 84, colors: ["#244d9a", "#ffffff"] },
  { id: "KOR", name: "韩国", flag: "🇰🇷", rating: 83, colors: ["#d72532", "#1f4fa3"] },
  { id: "MAR", name: "摩洛哥", flag: "🇲🇦", rating: 83, colors: ["#c91f32", "#1d8a5a"] },
  { id: "MEX", name: "墨西哥", flag: "🇲🇽", rating: 82, colors: ["#126847", "#d52b3e"] },
  { id: "USA", name: "美国", flag: "🇺🇸", rating: 82, colors: ["#1e4d8f", "#c91f32"] },
  { id: "DEN", name: "丹麦", flag: "🇩🇰", rating: 82, colors: ["#c81e2a", "#ffffff"] },
  { id: "SUI", name: "瑞士", flag: "🇨🇭", rating: 82, colors: ["#d52b2f", "#ffffff"] },
  { id: "COL", name: "哥伦比亚", flag: "🇨🇴", rating: 81, colors: ["#f3cd2f", "#263c8f"] },
  { id: "SEN", name: "塞内加尔", flag: "🇸🇳", rating: 80, colors: ["#16854b", "#f4c85b"] },
  { id: "GHA", name: "加纳", flag: "🇬🇭", rating: 79, colors: ["#f0c338", "#171717"] },
  { id: "NGA", name: "尼日利亚", flag: "🇳🇬", rating: 79, colors: ["#17915b", "#ffffff"] },
  { id: "AUS", name: "澳大利亚", flag: "🇦🇺", rating: 78, colors: ["#f2cf37", "#16513a"] },
  { id: "CAN", name: "加拿大", flag: "🇨🇦", rating: 78, colors: ["#d8202f", "#ffffff"] },
  { id: "POL", name: "波兰", flag: "🇵🇱", rating: 78, colors: ["#ffffff", "#d42135"] },
  { id: "SWE", name: "瑞典", flag: "🇸🇪", rating: 78, colors: ["#275aa2", "#f2cf37"] },
  { id: "SRB", name: "塞尔维亚", flag: "🇷🇸", rating: 77, colors: ["#c51f34", "#224c9a"] },
  { id: "CHI", name: "智利", flag: "🇨🇱", rating: 77, colors: ["#d42332", "#1f4e9a"] },
  { id: "CRC", name: "哥斯达黎加", flag: "🇨🇷", rating: 76, colors: ["#1e4d8f", "#c91f32"] },
  { id: "CMR", name: "喀麦隆", flag: "🇨🇲", rating: 76, colors: ["#177449", "#d42b34"] },
];

const teamById = new Map(teams.map((team) => [team.id, team]));
const eliteTeamIds = ["ENG", "GER", "ESP", "BRA", "ARG", "FRA", "NED", "POR"];

const specialKeeperProfilesByTeam = {
  ARG: {
    id: "argentine-reflex",
    group: "elite",
    className: "keeper-argentine",
    assets: {
      ready: "./assets/keepers/game/argentine-reflex-v2-ready-game.png",
      dive: "./assets/keepers/game/argentine-reflex-v2-dive-game.png",
    },
    kit: ["#69b9ee", "#f7f7f2"],
    trim: "#e7b94a",
    glove: "#f4ead8",
    readyWidth: 62,
    readyHeight: 86,
    diveWidth: 132,
    diveHeight: 54,
    kitAngle: "92deg",
    errorScale: 0.84,
    yErrorScale: 0.86,
    saveRadiusBonus: 3,
    cornerReach: 2,
  },
  FRA: {
    id: "french-athlete",
    group: "elite",
    className: "keeper-french",
    assets: {
      ready: "./assets/keepers/game/french-athlete-ready-game.png",
      dive: "./assets/keepers/game/french-athlete-dive-game.png",
    },
    kit: ["#173a76", "#d9273b"],
    trim: "#ffffff",
    glove: "#eceff5",
    readyWidth: 64,
    readyHeight: 86,
    diveWidth: 128,
    diveHeight: 58,
    kitAngle: "132deg",
    errorScale: 0.82,
    yErrorScale: 0.88,
    saveRadiusBonus: 3,
    highReach: 2,
  },
  BRA: {
    id: "brazil-spring",
    group: "elite",
    className: "keeper-brazil",
    assets: {
      ready: "./assets/keepers/game/brazil-spring-ready-game.png",
      dive: "./assets/keepers/game/brazil-spring-dive-game.png",
    },
    kit: ["#f4d247", "#188f4e"],
    trim: "#21478f",
    glove: "#f8f2d9",
    readyWidth: 60,
    readyHeight: 84,
    diveWidth: 124,
    diveHeight: 60,
    kitAngle: "145deg",
    errorScale: 0.86,
    yErrorScale: 0.82,
    saveRadiusBonus: 2,
    lowReach: 3,
  },
  ENG: {
    id: "english-wall",
    group: "elite",
    className: "keeper-english",
    assets: {
      ready: "./assets/keepers/game/english-wall-ready-game.png",
      dive: "./assets/keepers/game/english-wall-dive-game.png",
    },
    kit: ["#f5f1e8", "#c91f32"],
    trim: "#1e2d4f",
    glove: "#ffffff",
    readyWidth: 62,
    readyHeight: 84,
    diveWidth: 130,
    diveHeight: 54,
    kitAngle: "105deg",
    errorScale: 0.86,
    yErrorScale: 0.9,
    saveRadiusBonus: 3,
    centerReach: 3,
  },
  ESP: {
    id: "spanish-matador",
    group: "elite",
    className: "keeper-spanish",
    assets: {
      ready: "./assets/keepers/game/spanish-matador-ready-game.png",
      dive: "./assets/keepers/game/spanish-matador-dive-game.png",
    },
    kit: ["#c8222d", "#f0bd30"],
    trim: "#241b1b",
    glove: "#f8edd0",
    readyWidth: 60,
    readyHeight: 84,
    diveWidth: 124,
    diveHeight: 60,
    kitAngle: "90deg",
    errorScale: 0.8,
    yErrorScale: 0.88,
    saveRadiusBonus: 2,
    cornerReach: 3,
  },
  GER: {
    id: "german-sweeper",
    group: "elite",
    className: "keeper-german",
    assets: {
      ready: "./assets/keepers/game/german-sweeper-ready-game.png",
      dive: "./assets/keepers/game/german-sweeper-dive-game.png",
    },
    kit: ["#efefea", "#171717"],
    trim: "#f0c338",
    glove: "#f4f4f1",
    readyWidth: 60,
    readyHeight: 84,
    diveWidth: 126,
    diveHeight: 58,
    kitAngle: "120deg",
    errorScale: 0.78,
    yErrorScale: 0.92,
    saveRadiusBonus: 3,
    centerReach: 4,
  },
  POR: {
    id: "portuguese-burst",
    group: "elite",
    className: "keeper-portuguese",
    assets: {
      ready: "./assets/keepers/game/portuguese-burst-ready-game.png",
      dive: "./assets/keepers/game/portuguese-burst-dive-game.png",
    },
    kit: ["#ba1c31", "#197144"],
    trim: "#f0c338",
    glove: "#f9f0d5",
    readyWidth: 62,
    readyHeight: 84,
    diveWidth: 130,
    diveHeight: 54,
    kitAngle: "138deg",
    errorScale: 0.84,
    yErrorScale: 0.84,
    saveRadiusBonus: 2,
    lowReach: 2,
  },
  NED: {
    id: "dutch-long-arm",
    group: "elite",
    className: "keeper-dutch",
    assets: {
      ready: "./assets/keepers/game/dutch-long-arm-ready-game.png",
      dive: "./assets/keepers/game/dutch-long-arm-dive-game.png",
    },
    kit: ["#f47c20", "#183a73"],
    trim: "#ffffff",
    glove: "#f2f4ff",
    readyWidth: 64,
    readyHeight: 88,
    diveWidth: 132,
    diveHeight: 56,
    kitAngle: "118deg",
    errorScale: 0.84,
    yErrorScale: 0.86,
    saveRadiusBonus: 3,
    highReach: 4,
  },
  ITA: {
    id: "italian-reader",
    group: "elite",
    className: "keeper-italian",
    kit: ["#1f62b2", "#ffffff"],
    trim: "#178c4b",
    glove: "#f3f6ff",
    readyWidth: 86,
    readyHeight: 126,
    diveWidth: 160,
    diveHeight: 88,
    kitAngle: "115deg",
    errorScale: 0.82,
    yErrorScale: 0.9,
    saveRadiusBonus: 3,
    centerReach: 2,
  },
};

const genericKeeperProfiles = [
  {
    id: "europe-command",
    group: "generic",
    className: "keeper-europe-command",
    kit: ["#263241", "#a8b4c2"],
    trim: "#f1d46a",
    glove: "#f4f4f1",
    readyWidth: 60,
    readyHeight: 86,
    diveWidth: 120,
    diveHeight: 58,
    kitAngle: "122deg",
    errorScale: 0.98,
    yErrorScale: 0.98,
    saveRadiusBonus: 0,
    centerReach: 1,
  },
  {
    id: "neutral-grey",
    group: "generic",
    className: "keeper-neutral-grey",
    assets: {
      ready: "./assets/keepers/game/neutral-grey-ready-game.png",
      dive: "./assets/keepers/game/neutral-grey-dive-game.png",
    },
    kit: ["#ecece8", "#585f64"],
    trim: "#c7ccd0",
    glove: "#f4f4f1",
    readyWidth: 62,
    readyHeight: 84,
    diveWidth: 128,
    diveHeight: 54,
    kitAngle: "118deg",
    errorScale: 1.02,
    yErrorScale: 0.96,
    saveRadiusBonus: 0,
    centerReach: 1,
  },
  {
    id: "latin-fast",
    group: "generic",
    className: "keeper-latin-fast",
    kit: ["#0f6f52", "#f0c338"],
    trim: "#d42b34",
    glove: "#f5efd9",
    readyWidth: 58,
    readyHeight: 84,
    diveWidth: 118,
    diveHeight: 56,
    kitAngle: "145deg",
    errorScale: 1,
    yErrorScale: 0.92,
    saveRadiusBonus: 0,
    lowReach: 1,
  },
  {
    id: "asia-agile",
    group: "generic",
    className: "keeper-asia-agile",
    kit: ["#244d9a", "#f5f5f2"],
    trim: "#d72532",
    glove: "#f4f7ff",
    readyWidth: 56,
    readyHeight: 82,
    diveWidth: 112,
    diveHeight: 54,
    kitAngle: "110deg",
    errorScale: 1.04,
    yErrorScale: 0.92,
    saveRadiusBonus: -1,
    cornerReach: 1,
  },
  {
    id: "africa-spring",
    group: "generic",
    className: "keeper-africa-spring",
    kit: ["#16854b", "#f0c338"],
    trim: "#d9273b",
    glove: "#f8f0d8",
    readyWidth: 62,
    readyHeight: 88,
    diveWidth: 122,
    diveHeight: 58,
    kitAngle: "132deg",
    errorScale: 0.96,
    yErrorScale: 0.9,
    saveRadiusBonus: 1,
    highReach: 2,
  },
  {
    id: "north-power",
    group: "generic",
    className: "keeper-north-power",
    kit: ["#1e4d8f", "#c91f32"],
    trim: "#ffffff",
    glove: "#f5f7ff",
    readyWidth: 62,
    readyHeight: 86,
    diveWidth: 120,
    diveHeight: 58,
    kitAngle: "128deg",
    errorScale: 0.98,
    yErrorScale: 1,
    saveRadiusBonus: 1,
    centerReach: 1,
  },
];

const genericKeeperProfileById = new Map(genericKeeperProfiles.map((profile) => [profile.id, profile]));
const keeperProfileById = new Map([
  ...Object.values(specialKeeperProfilesByTeam).map((profile) => [profile.id, profile]),
  ...genericKeeperProfiles.map((profile) => [profile.id, profile]),
]);
const specialKeeperProfileIdByTeam = new Map(
  Object.entries(specialKeeperProfilesByTeam).map(([teamId, profile]) => [teamId, profile.id]),
);
const genericKeeperPoolsByTeam = {
  BEL: ["europe-command", "north-power"],
  CRO: ["europe-command"],
  URU: ["latin-fast", "europe-command"],
  JPN: ["asia-agile"],
  KOR: ["asia-agile"],
  MAR: ["africa-spring", "latin-fast"],
  MEX: ["latin-fast", "north-power"],
  USA: ["north-power"],
  DEN: ["europe-command", "north-power"],
  SUI: ["europe-command"],
  COL: ["latin-fast"],
  SEN: ["africa-spring"],
  GHA: ["africa-spring"],
  NGA: ["africa-spring"],
  AUS: ["north-power", "asia-agile"],
  CAN: ["north-power"],
  POL: ["europe-command"],
  SWE: ["europe-command", "north-power"],
  SRB: ["europe-command"],
  CHI: ["latin-fast"],
  CRC: ["latin-fast", "north-power"],
  CMR: ["africa-spring"],
};

function uniqueTeamsFromBracket(bracket) {
  const seen = new Set();
  return bracket.rounds
    .flat()
    .filter((team) => {
      if (!team || seen.has(team.id)) return false;
      seen.add(team.id);
      return team.id !== "CHN";
    });
}

function pickGenericKeeperProfileId(team) {
  const basePool = genericKeeperPoolsByTeam[team.id] || genericKeeperProfiles.map((profile) => profile.id);
  const pool = basePool.includes("neutral-grey") ? basePool : [...basePool, "neutral-grey"];
  return pool[Math.floor(Math.random() * pool.length)];
}

function assignKeeperProfiles(bracket) {
  return uniqueTeamsFromBracket(bracket).reduce((profiles, team) => {
    profiles[team.id] = specialKeeperProfileIdByTeam.get(team.id) || pickGenericKeeperProfileId(team);
    return profiles;
  }, {});
}

function getKeeperProfile(team) {
  const profileId = state.keeperAssignments?.[team?.id] || specialKeeperProfileIdByTeam.get(team?.id);
  return keeperProfileById.get(profileId) || genericKeeperProfileById.get("europe-command");
}

function keeperStyleVars(team, profile) {
  const usesDefaultReady = !profile.assets?.ready;
  const usesDefaultDive = !profile.assets?.dive;
  const readyHeight = profile.readyHeight || 124;
  const diveHeight = profile.diveHeight || 86;
  const vars = [
    `--keeper-ready-width: ${profile.readyWidth || 82}px`,
    `--keeper-ready-height: ${readyHeight}px`,
    `--keeper-dive-width: ${profile.diveWidth || 150}px`,
    `--keeper-dive-height: ${diveHeight}px`,
    `--keeper-ready-image: url(${profile.assets?.ready || "./assets/keepers/game/keeper-ready-game.png"})`,
    `--keeper-dive-image: url(${profile.assets?.dive || "./assets/keepers/game/keeper-dive-game.png"})`,
    `--keeper-ready-foot-shift: ${usesDefaultReady ? Math.round(readyHeight * 0.115) : 0}px`,
    `--keeper-dive-foot-shift: ${usesDefaultDive ? Math.round(diveHeight * 0.14) : 0}px`,
  ];
  return `style="${vars.join("; ")}"`;
}

function flagSvg(team, variant = "") {
  const className = `flag-svg${variant ? ` ${variant}` : ""}`;
  return `<span class="${className}" aria-label="${team.name}国旗">${flagMarkup(team.id)}</span>`;
}

function flagMarkup(id) {
  const svg = (inner) => `<svg viewBox="0 0 36 24" role="img" aria-hidden="true">${inner}</svg>`;
  const rect = (fill, x = 0, y = 0, w = 36, h = 24) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`;
  const star = (fill, cx = 18, cy = 12, scale = 1) =>
    `<polygon points="${[
      [18, 6],
      [19.8, 10.1],
      [24.2, 10.1],
      [20.7, 12.8],
      [22.1, 17],
      [18, 14.4],
      [13.9, 17],
      [15.3, 12.8],
      [11.8, 10.1],
      [16.2, 10.1],
    ]
      .map(([x, y]) => `${cx + (x - 18) * scale},${cy + (y - 12) * scale}`)
      .join(" ")}" fill="${fill}"/>`;
  const cross = (fill, x, y, w, h) => rect(fill, x, y, w, h);

  const cases = {
    CHN: svg(`${rect("#d82236")}${star("#f4c85b", 9, 7, 0.82)}`),
    ARG: svg(`${rect("#77bde8", 0, 0, 36, 8)}${rect("#fff", 0, 8, 36, 8)}${rect("#77bde8", 0, 16, 36, 8)}<circle cx="18" cy="12" r="2.2" fill="#e7b53d"/>`),
    FRA: svg(`${rect("#183a73", 0, 0, 12, 24)}${rect("#fff", 12, 0, 12, 24)}${rect("#d9273b", 24, 0, 12, 24)}`),
    BRA: svg(`${rect("#178c4b")}<polygon points="18,3 33,12 18,21 3,12" fill="#f2d04b"/><circle cx="18" cy="12" r="5" fill="#243d8f"/>`),
    ENG: svg(`${rect("#fff")}${cross("#c91f32", 15, 0, 6, 24)}${cross("#c91f32", 0, 9, 36, 6)}`),
    ESP: svg(`${rect("#c8222d", 0, 0, 36, 6)}${rect("#f0bd30", 0, 6, 36, 12)}${rect("#c8222d", 0, 18, 36, 6)}`),
    GER: svg(`${rect("#111", 0, 0, 36, 8)}${rect("#c91f32", 0, 8, 36, 8)}${rect("#f0c338", 0, 16, 36, 8)}`),
    POR: svg(`${rect("#197144", 0, 0, 14, 24)}${rect("#ba1c31", 14, 0, 22, 24)}<circle cx="14" cy="12" r="3.3" fill="#f1c84b"/>`),
    NED: svg(`${rect("#c91f32", 0, 0, 36, 8)}${rect("#fff", 0, 8, 36, 8)}${rect("#183a73", 0, 16, 36, 8)}`),
    BEL: svg(`${rect("#151515", 0, 0, 12, 24)}${rect("#f0c338", 12, 0, 12, 24)}${rect("#c91f32", 24, 0, 12, 24)}`),
    ITA: svg(`${rect("#178c4b", 0, 0, 12, 24)}${rect("#fff", 12, 0, 12, 24)}${rect("#d9273b", 24, 0, 12, 24)}`),
    CRO: svg(`${rect("#d12632", 0, 0, 36, 8)}${rect("#fff", 0, 8, 36, 8)}${rect("#244d9a", 0, 16, 36, 8)}${rect("#d12632", 15, 8, 3, 3)}${rect("#d12632", 21, 8, 3, 3)}${rect("#d12632", 18, 11, 3, 3)}`),
    URU: svg(`${rect("#fff")}${rect("#75b9ee", 0, 4, 36, 3)}${rect("#75b9ee", 0, 10, 36, 3)}${rect("#75b9ee", 0, 16, 36, 3)}${rect("#fff2b8", 0, 0, 12, 10)}<circle cx="6" cy="5" r="2.4" fill="#e7b53d"/>`),
    JPN: svg(`${rect("#fff")}<circle cx="18" cy="12" r="6" fill="#d42135"/>`),
    KOR: svg(`${rect("#fff")}<path d="M18 7a5 5 0 0 1 0 10 2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5z" fill="#d72532"/><path d="M18 17a5 5 0 0 1 0-10 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 1 0 5z" fill="#244d9a"/>`),
    MAR: svg(`${rect("#c91f32")}<path d="M18 6l1.8 4h4.4l-3.5 2.7 1.3 4.2-4-2.5-4 2.5 1.3-4.2-3.5-2.7h4.4z" fill="none" stroke="#178c4b" stroke-width="1.4"/>`),
    MEX: svg(`${rect("#178c4b", 0, 0, 12, 24)}${rect("#fff", 12, 0, 12, 24)}${rect("#d9273b", 24, 0, 12, 24)}<circle cx="18" cy="12" r="2.4" fill="#9f7a32"/>`),
    USA: svg(`${rect("#fff")}${rect("#c91f32", 0, 0, 36, 2.1)}${rect("#c91f32", 0, 4.2, 36, 2.1)}${rect("#c91f32", 0, 8.4, 36, 2.1)}${rect("#c91f32", 0, 12.6, 36, 2.1)}${rect("#c91f32", 0, 16.8, 36, 2.1)}${rect("#c91f32", 0, 21, 36, 2.1)}${rect("#1e4d8f", 0, 0, 16, 11)}${star("#fff", 5, 4, 0.25)}${star("#fff", 10, 7, 0.25)}`),
    DEN: svg(`${rect("#c81e2a")}${cross("#fff", 10, 0, 4, 24)}${cross("#fff", 0, 10, 36, 4)}`),
    SUI: svg(`${rect("#d52b2f")}${cross("#fff", 15, 5, 6, 14)}${cross("#fff", 11, 9, 14, 6)}`),
    COL: svg(`${rect("#f3cd2f", 0, 0, 36, 12)}${rect("#263c8f", 0, 12, 36, 6)}${rect("#d9273b", 0, 18, 36, 6)}`),
    SEN: svg(`${rect("#178c4b", 0, 0, 12, 24)}${rect("#f0c338", 12, 0, 12, 24)}${rect("#d9273b", 24, 0, 12, 24)}${star("#178c4b", 18, 12, 0.48)}`),
    GHA: svg(`${rect("#d9273b", 0, 0, 36, 8)}${rect("#f0c338", 0, 8, 36, 8)}${rect("#178c4b", 0, 16, 36, 8)}${star("#111", 18, 12, 0.48)}`),
    NGA: svg(`${rect("#178c4b", 0, 0, 12, 24)}${rect("#fff", 12, 0, 12, 24)}${rect("#178c4b", 24, 0, 12, 24)}`),
    AUS: svg(`${rect("#183a73")}${star("#fff", 25, 8, 0.34)}${star("#fff", 29, 16, 0.28)}${rect("#1e4d8f", 0, 0, 15, 10)}${cross("#fff", 6, 0, 3, 10)}${cross("#fff", 0, 4, 15, 2)}${cross("#c91f32", 7, 0, 1.5, 10)}${cross("#c91f32", 0, 4.5, 15, 1)}`),
    CAN: svg(`${rect("#d8202f", 0, 0, 9, 24)}${rect("#fff", 9, 0, 18, 24)}${rect("#d8202f", 27, 0, 9, 24)}${star("#d8202f", 18, 12, 0.62)}`),
    POL: svg(`${rect("#fff", 0, 0, 36, 12)}${rect("#d42135", 0, 12, 36, 12)}`),
    SWE: svg(`${rect("#275aa2")}${cross("#f2cf37", 11, 0, 4, 24)}${cross("#f2cf37", 0, 10, 36, 4)}`),
    SRB: svg(`${rect("#c51f34", 0, 0, 36, 8)}${rect("#224c9a", 0, 8, 36, 8)}${rect("#fff", 0, 16, 36, 8)}`),
    CHI: svg(`${rect("#fff", 0, 0, 36, 12)}${rect("#d42332", 0, 12, 36, 12)}${rect("#1f4e9a", 0, 0, 12, 12)}${star("#fff", 6, 6, 0.36)}`),
    CRC: svg(`${rect("#1e4d8f", 0, 0, 36, 4)}${rect("#fff", 0, 4, 36, 3)}${rect("#c91f32", 0, 7, 36, 10)}${rect("#fff", 0, 17, 36, 3)}${rect("#1e4d8f", 0, 20, 36, 4)}`),
    CMR: svg(`${rect("#177449", 0, 0, 12, 24)}${rect("#d42b34", 12, 0, 12, 24)}${rect("#f0c338", 24, 0, 12, 24)}${star("#f0c338", 18, 12, 0.44)}`),
  };

  const team = teamById.get(id);
  return cases[id] || svg(`${rect(team?.colors?.[0] || "#244d9a", 0, 0, 18, 24)}${rect(team?.colors?.[1] || "#fff", 18, 0, 18, 24)}`);
}

const roundMeta = [
  {
    label: "32强",
    intro: "进了，就是中国队世界杯淘汰赛首胜。",
    success: "中国队拿下世界杯淘汰赛首胜。别问过程，这就是历史。",
  },
  {
    label: "16强",
    intro: "进了，中国队就是世界八强。",
    success: "中国队，世界八强。今晚的故事已经开始不讲道理。",
  },
  {
    label: "8强",
    intro: "进了，就站上世界杯半决赛。",
    success: "中国队闯进半决赛。现实已经开始跟不上了。",
  },
  {
    label: "半决赛",
    intro: "进了，中国队进入世界杯决赛。",
    success: "中国队进入世界杯决赛。只差最后一脚。",
  },
  {
    label: "决赛",
    intro: "进了，中国队就是世界冠军。",
    success: "中国队，世界冠军。你刚刚踢进了历史上最离谱的一球。",
  },
];

const state = {
  view: "home",
  bracket: null,
  currentRound: 0,
  history: [],
  message: "",
  penalty: null,
  result: null,
  keeperAssignments: {},
};

const stadiumSound = {
  ctx: null,
  master: null,
  crowd: null,
  crowdGain: null,
  backingTrack: null,
  backingTrackFadeFrame: null,
  goalCheer: null,
  goalCheerBuffer: null,
  goalCheerLoading: null,
  goalCheerSource: null,
  cheerDuckUntil: 0,
  usingBackingTrack: false,
  chantTimer: null,
  enabled: false,
};

const BACKGROUND_TRACK_SRC = "./assets/bg-sound.aac";
const BACKGROUND_TRACK_VOLUME = 0.62;
const BACKGROUND_TRACK_LOOP_SECONDS = 60;
const BACKGROUND_TRACK_FADE_SECONDS = 2.8;
const GOAL_CHEER_SRC = "./assets/goal-cheer.wav";
const GOAL_CHEER_VOLUME = 0.92;
const GOAL_CHEER_DUCK_MULTIPLIER = 0.32;
const GOAL_CHEER_DUCK_MS = 2400;
const GAME_IMAGE_ASSETS = [
  "./assets/game/ball-realistic-game.png",
  "./assets/game/player-realistic-game.png",
  "./assets/game/player-kick-game.png",
];
const warmedImages = new Set();

function warmImage(src) {
  if (!src || warmedImages.has(src)) return;
  warmedImages.add(src);
  const image = new Image();
  image.src = src;
  image.decode?.().catch(() => {});
}

function warmPenaltyImages(profile) {
  GAME_IMAGE_ASSETS.forEach(warmImage);
  warmImage(profile?.assets?.ready || "./assets/keepers/game/keeper-ready-game.png");
  warmImage(profile?.assets?.dive || "./assets/keepers/game/keeper-dive-game.png");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function takeSeededTeam(available, preferred, fallback = () => true) {
  const preferredPool = available.filter(preferred);
  const fallbackPool = preferredPool.length ? preferredPool : available.filter(fallback);
  const pool = fallbackPool.length ? fallbackPool : available;
  const team = pool[Math.floor(Math.random() * pool.length)];
  available.splice(available.indexOf(team), 1);
  return team;
}

function takeSeededGroup(available, count, preferred, fallback) {
  const group = [];
  for (let i = 0; i < count; i += 1) {
    group.push(takeSeededTeam(available, preferred, fallback));
  }
  return shuffle(group);
}

function takeTeamById(available, id) {
  const team = available.find((item) => item.id === id);
  if (!team) return null;
  available.splice(available.indexOf(team), 1);
  return team;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function createStadiumSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || stadiumSound.ctx) return;

  const ctx = new AudioContextClass();
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseData.length; i += 1) {
    noiseData[i] = (Math.random() * 2 - 1) * 0.42;
  }

  const crowd = ctx.createBufferSource();
  const crowdFilter = ctx.createBiquadFilter();
  const crowdGain = ctx.createGain();
  crowd.buffer = noiseBuffer;
  crowd.loop = true;
  crowdFilter.type = "bandpass";
  crowdFilter.frequency.value = 720;
  crowdFilter.Q.value = 0.65;
  crowdGain.gain.value = 0.22;
  crowd.connect(crowdFilter).connect(crowdGain).connect(master);
  crowd.start();

  stadiumSound.ctx = ctx;
  stadiumSound.master = master;
  stadiumSound.crowd = crowd;
  stadiumSound.crowdGain = crowdGain;
}

function createBackingTrack() {
  if (stadiumSound.backingTrack) return stadiumSound.backingTrack;

  const track = new Audio(BACKGROUND_TRACK_SRC);
  track.loop = false;
  track.preload = "auto";
  track.volume = 0;
  track.addEventListener("timeupdate", syncBackingTrackLoop);
  track.addEventListener("error", () => {
    stadiumSound.usingBackingTrack = false;
    startSyntheticCrowd();
  });
  stadiumSound.backingTrack = track;
  return track;
}

function createGoalCheer() {
  if (stadiumSound.goalCheer) return stadiumSound.goalCheer;

  const cheer = new Audio(GOAL_CHEER_SRC);
  cheer.preload = "auto";
  cheer.volume = GOAL_CHEER_VOLUME;
  stadiumSound.goalCheer = cheer;
  return cheer;
}

function decodeAudioBuffer(ctx, arrayBuffer) {
  return new Promise((resolve, reject) => {
    const promise = ctx.decodeAudioData(arrayBuffer, resolve, reject);
    if (promise?.then) promise.then(resolve).catch(reject);
  });
}

function loadGoalCheerBuffer() {
  if (!stadiumSound.ctx) return Promise.resolve(null);
  if (stadiumSound.goalCheerBuffer) return Promise.resolve(stadiumSound.goalCheerBuffer);
  if (stadiumSound.goalCheerLoading) return stadiumSound.goalCheerLoading;

  stadiumSound.goalCheerLoading = fetch(GOAL_CHEER_SRC)
    .then((response) => {
      if (!response.ok) throw new Error("Goal cheer unavailable");
      return response.arrayBuffer();
    })
    .then((arrayBuffer) => decodeAudioBuffer(stadiumSound.ctx, arrayBuffer))
    .then((buffer) => {
      stadiumSound.goalCheerBuffer = buffer;
      return buffer;
    })
    .catch(() => null);

  return stadiumSound.goalCheerLoading;
}

function playGoalCheerBuffer() {
  if (!stadiumSound.goalCheerBuffer || !stadiumSound.ctx || !stadiumSound.master) return false;

  if (stadiumSound.goalCheerSource) {
    try {
      stadiumSound.goalCheerSource.stop();
    } catch (error) {
      // Source may have already ended.
    }
    stadiumSound.goalCheerSource = null;
  }

  const source = stadiumSound.ctx.createBufferSource();
  const gain = stadiumSound.ctx.createGain();
  source.buffer = stadiumSound.goalCheerBuffer;
  gain.gain.value = GOAL_CHEER_VOLUME;
  source.connect(gain).connect(stadiumSound.master);
  source.onended = () => {
    if (stadiumSound.goalCheerSource === source) stadiumSound.goalCheerSource = null;
  };
  stadiumSound.goalCheerSource = source;
  source.start();
  return true;
}

function backingTrackVolumeAt(time) {
  const loopEnd = BACKGROUND_TRACK_LOOP_SECONDS;
  const fade = BACKGROUND_TRACK_FADE_SECONDS;
  const fadeIn = clamp(time / fade, 0, 1);
  const fadeOut = clamp((loopEnd - time) / fade, 0, 1);
  return BACKGROUND_TRACK_VOLUME * Math.min(fadeIn, fadeOut);
}

function syncBackingTrackLoop() {
  const track = stadiumSound.backingTrack;
  if (!track || track.paused) return;
  if (track.currentTime >= BACKGROUND_TRACK_LOOP_SECONDS) {
    track.currentTime = 0;
  }
  const ducking = stadiumSound.cheerDuckUntil > performance.now();
  track.volume = backingTrackVolumeAt(track.currentTime) * (ducking ? GOAL_CHEER_DUCK_MULTIPLIER : 1);
}

function stopBackingTrackFadeLoop() {
  if (!stadiumSound.backingTrackFadeFrame) return;
  window.cancelAnimationFrame(stadiumSound.backingTrackFadeFrame);
  stadiumSound.backingTrackFadeFrame = null;
}

function runBackingTrackFadeLoop() {
  const track = stadiumSound.backingTrack;
  if (!track || !stadiumSound.enabled || track.paused) {
    stopBackingTrackFadeLoop();
    return;
  }

  syncBackingTrackLoop();
  stadiumSound.backingTrackFadeFrame = window.requestAnimationFrame(runBackingTrackFadeLoop);
}

function startSyntheticCrowd() {
  if (!stadiumSound.enabled) return;
  if (!stadiumSound.master || !stadiumSound.ctx) return;
  stadiumSound.master.gain.setTargetAtTime(0.18, stadiumSound.ctx.currentTime, 0.18);
  if (stadiumSound.crowdGain) {
    stadiumSound.crowdGain.gain.setTargetAtTime(0.22, stadiumSound.ctx.currentTime, 0.18);
  }
  if (!stadiumSound.chantTimer) {
    stadiumSound.chantTimer = window.setInterval(playChinaChant, 7600);
    window.setTimeout(playChinaChant, 900);
  }
}

function stopSyntheticCrowd(muteMaster = false) {
  if (stadiumSound.crowdGain && stadiumSound.ctx) {
    stadiumSound.crowdGain.gain.setTargetAtTime(0, stadiumSound.ctx.currentTime, 0.16);
  }
  if (muteMaster && stadiumSound.master && stadiumSound.ctx) {
    stadiumSound.master.gain.setTargetAtTime(0, stadiumSound.ctx.currentTime, 0.16);
  }
  if (stadiumSound.chantTimer) {
    window.clearInterval(stadiumSound.chantTimer);
    stadiumSound.chantTimer = null;
  }
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function startBackingTrack() {
  const track = createBackingTrack();
  if (track.currentTime >= BACKGROUND_TRACK_LOOP_SECONDS) track.currentTime = 0;
  track.volume = backingTrackVolumeAt(track.currentTime);
  return track
    .play()
    .then(() => {
      stadiumSound.usingBackingTrack = true;
      stopSyntheticCrowd();
      stopBackingTrackFadeLoop();
      runBackingTrackFadeLoop();
      if (stadiumSound.master && stadiumSound.ctx) {
        stadiumSound.master.gain.setTargetAtTime(0.18, stadiumSound.ctx.currentTime, 0.18);
      }
      updateSoundButtons();
    })
    .catch(() => {
      stadiumSound.usingBackingTrack = false;
      startSyntheticCrowd();
      updateSoundButtons();
    });
}

function stopBackingTrack() {
  if (!stadiumSound.backingTrack) return;
  stopBackingTrackFadeLoop();
  stadiumSound.backingTrack.pause();
  stadiumSound.backingTrack.currentTime = 0;
  stadiumSound.backingTrack.volume = 0;
  stadiumSound.usingBackingTrack = false;
}

function stopGoalCheer() {
  if (stadiumSound.goalCheerSource) {
    try {
      stadiumSound.goalCheerSource.stop();
    } catch (error) {
      // Source may have already ended.
    }
    stadiumSound.goalCheerSource = null;
  }
  if (stadiumSound.goalCheer) {
    stadiumSound.goalCheer.pause();
    stadiumSound.goalCheer.currentTime = 0;
  }
  stadiumSound.cheerDuckUntil = 0;
}

function updateSoundButtons() {
  document.querySelectorAll("[data-action='toggle-sound']").forEach((button) => {
    button.innerHTML = soundIconMarkup(stadiumSound.enabled);
    button.setAttribute("aria-label", stadiumSound.enabled ? "关闭声音" : "打开声音");
    button.setAttribute("title", stadiumSound.enabled ? "关闭声音" : "打开声音");
    button.setAttribute("aria-pressed", String(stadiumSound.enabled));
  });
}

function soundIconMarkup(enabled) {
  return enabled
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 8.5c1.1 1 1.7 2.2 1.7 3.5S17.1 14.5 16 15.5"/><path d="M18.5 6c1.8 1.6 2.8 3.6 2.8 6s-1 4.4-2.8 6"/></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M17 9l5 5"/><path d="M22 9l-5 5"/></svg>`;
}

function startStadiumSound() {
  createStadiumSound();
  if (!stadiumSound.ctx) return;
  stadiumSound.ctx.resume();
  stadiumSound.enabled = true;
  createGoalCheer();
  loadGoalCheerBuffer();
  startBackingTrack();
  updateSoundButtons();
}

function stopStadiumSound() {
  stadiumSound.enabled = false;
  stopGoalCheer();
  stopBackingTrack();
  stopSyntheticCrowd(true);
  updateSoundButtons();
}

function toggleStadiumSound() {
  if (stadiumSound.enabled) {
    stopStadiumSound();
  } else {
    startStadiumSound();
  }
}

function playTone({ frequency, duration = 0.12, type = "sine", gain = 0.08, when = 0 }) {
  if (!stadiumSound.enabled || !stadiumSound.ctx || !stadiumSound.master) return;
  const ctx = stadiumSound.ctx;
  const startAt = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  amp.gain.setValueAtTime(0.0001, startAt);
  amp.gain.exponentialRampToValueAtTime(gain, startAt + 0.018);
  amp.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  osc.connect(amp).connect(stadiumSound.master);
  osc.start(startAt);
  osc.stop(startAt + duration + 0.04);
}

function playKickSound() {
  playTone({ frequency: 98, duration: 0.16, type: "triangle", gain: 0.16 });
  playTone({ frequency: 54, duration: 0.2, type: "sine", gain: 0.1, when: 0.02 });
}

function playGoalCheer() {
  if (!stadiumSound.enabled) return;

  stadiumSound.cheerDuckUntil = performance.now() + GOAL_CHEER_DUCK_MS;
  syncBackingTrackLoop();
  if (playGoalCheerBuffer()) return;

  const cheer = createGoalCheer();
  cheer.pause();
  cheer.currentTime = 0;
  cheer.volume = GOAL_CHEER_VOLUME;
  const fallbackPromise = cheer
    .play()
    .then(() => true)
    .catch(() => false);

  loadGoalCheerBuffer().then((buffer) => {
    if (!stadiumSound.enabled || !buffer) return;
    fallbackPromise.then((fallbackPlayed) => {
      if (!fallbackPlayed) playGoalCheerBuffer();
    });
  });
}

function playCrowdReaction(goal) {
  if (goal) {
    playGoalCheer();
    [0, 0.1, 0.22].forEach((when, index) => {
      playTone({ frequency: 520 + index * 95, duration: 0.12, type: "sawtooth", gain: 0.028, when });
    });
  } else {
    playTone({ frequency: 135, duration: 0.24, type: "sine", gain: 0.08 });
    playTone({ frequency: 92, duration: 0.28, type: "triangle", gain: 0.06, when: 0.1 });
  }
}

function playChinaChant() {
  if (!stadiumSound.enabled) return;
  [0, 0.32, 0.64, 0.96, 1.28].forEach((when, index) => {
    playTone({ frequency: index < 3 ? 180 : 230, duration: 0.14, type: "square", gain: 0.045, when });
    playTone({ frequency: 90, duration: 0.08, type: "triangle", gain: 0.05, when });
  });

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const chant = new SpeechSynthesisUtterance("中国队，加油");
    chant.lang = "zh-CN";
    chant.rate = 0.88;
    chant.pitch = 0.72;
    chant.volume = 0.28;
    window.speechSynthesis.speak(chant);
  }
}

function render() {
  if (state.view === "home") renderHome();
  if (state.view === "penalty") renderPenalty();
  if (state.view === "qualified") renderQualified();
  if (state.view === "bracket") renderBracket();
  if (state.view === "intro") renderIntro();
  if (state.view === "result") renderResult();
}

function renderHome() {
  app.innerHTML = `
    <section class="screen home-screen">
      <img class="hero-art" src="./assets/opening-penalty.png" alt="" />
      <div class="hero-shade"></div>
      <div class="home-copy">
        <div class="title-stack">
          <h1 class="game-title">一脚成名<span>为中国队赢世界杯</span></h1>
          <div class="primary-actions">
            <button class="btn btn-primary" data-action="start-qualifier">开始挑战</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function startQualifier() {
  state.history = [];
  state.bracket = null;
  state.currentRound = 0;
  state.message = "";
  state.result = null;
  state.keeperAssignments = {};
  state.penalty = {
    type: "qualifier",
    roundLabel: "外卡赛",
    opponent: null,
    keeper: false,
    difficulty: -1,
    line: "踢进这个球，中国队就能打进世界杯啦！",
  };
  state.view = "penalty";
  render();
}

function buildBracket() {
  const available = teams.filter((team) => team.id !== "CHN");
  const eliteTeams = eliteTeamIds
    .map((id) => takeTeamById(available, id))
    .filter(Boolean)
    .sort((a, b) => a.rating - b.rating);
  const eliteForQuarter = eliteTeams.splice(0, 1);
  const eliteForSemi = eliteTeams.splice(0, 3);
  const eliteForFinal = eliteTeams;

  const firstOpponent = takeSeededTeam(available, (team) => team.rating <= 82);
  const roundOf16Pod = takeSeededGroup(
    available,
    2,
    (team) => team.rating >= 80 && team.rating <= 84,
    (team) => team.rating <= 85,
  );
  const quarterFinalPod = shuffle([
    ...eliteForQuarter,
    ...takeSeededGroup(
      available,
      3,
      (team) => team.rating >= 84 && team.rating <= 87,
      (team) => team.rating <= 88,
    ),
  ]);
  const semiFinalPod = shuffle([
    ...eliteForSemi,
    ...takeSeededGroup(
      available,
      5,
      (team) => team.rating >= 84 && team.rating <= 88,
      (team) => team.rating <= 89,
    ),
  ]);
  const finalPod = shuffle([
    ...eliteForFinal,
    ...takeSeededGroup(
      available,
      16 - eliteForFinal.length,
      () => true,
      () => true,
    ),
  ]);

  return {
    rounds: [[china, firstOpponent, ...roundOf16Pod, ...quarterFinalPod, ...semiFinalPod, ...finalPod], [], [], [], [], []],
    champion: null,
  };
}

function previewLikelyRoute(bracket) {
  const round = bracket.rounds[0];
  return [
    round[1],
    strongestTeam(round.slice(2, 4)),
    strongestTeam(round.slice(4, 8)),
    strongestTeam(round.slice(8, 16)),
    strongestTeam(round.slice(16, 32)),
  ].filter(Boolean);
}

function strongestTeam(group) {
  return group.reduce((best, team) => (!best || team.rating > best.rating ? team : best), null);
}

function routePreviewText(bracket) {
  return previewLikelyRoute(bracket)
    .map((team) => team.name)
    .join("、");
}

function currentPair() {
  const round = state.bracket.rounds[state.currentRound];
  const chinaIndex = round.findIndex((team) => team?.id === "CHN");
  const opponentIndex = chinaIndex % 2 === 0 ? chinaIndex + 1 : chinaIndex - 1;
  return {
    chinaIndex,
    opponentIndex,
    opponent: round[opponentIndex],
  };
}

function prepareBracketAfterQualifier() {
  if (state.bracket) return;
  state.bracket = buildBracket();
  state.keeperAssignments = assignKeeperProfiles(state.bracket);
  state.currentRound = 0;
  state.history.push({
    round: "外卡赛",
    opponent: "空门",
    icon: "🥅",
    result: "进球",
  });
  state.message = `中国队进入世界杯32强。潜在路线：${routePreviewText(state.bracket)}。越往后，对手越像真正的世界杯。`;
}

function showQualifiedAfterQualifier() {
  prepareBracketAfterQualifier();
  state.view = "qualified";
  render();
}

function goToBracketAfterQualifier() {
  prepareBracketAfterQualifier();
  state.view = "bracket";
  render();
}

function renderQualified() {
  app.innerHTML = `
    <section class="screen qualified-screen">
      <img class="qualified-art" src="./assets/qualified-celebration.png" alt="" />
      <div class="qualified-shade"></div>
      <div class="qualified-copy">
        <p class="qualified-kicker">这一脚，真的进了</p>
        <h2>中国队进世界杯啦！</h2>
        <p>世界杯大门已经打开，接下来就是去创造新的历史！</p>
        <button class="btn btn-primary" data-action="continue-worldcup">继续世界杯挑战</button>
      </div>
    </section>
  `;
}

function showCurrentIntro() {
  const { opponent } = currentPair();
  state.penalty = {
    type: "match",
    roundLabel: roundMeta[state.currentRound].label,
    opponent,
    keeper: true,
    difficulty: state.currentRound,
    line: roundMeta[state.currentRound].intro,
  };
  state.view = "intro";
  render();
}

function chinaIntroCopy(roundIndex) {
  const copies = [
    "长风破浪会有时。红衣10号站上点球点，中国队要把世界杯淘汰赛首胜踢出来。",
    "会当凌绝顶，一览众山小。再往前一步，中国队就要站进世界八强。",
    "黄沙百战穿金甲，不破楼兰终不还。八强之夜，只看这一脚够不够硬。",
    "大鹏一日同风起，扶摇直上九万里。半决赛这一脚，踢进就是世界杯决赛。",
    "俱往矣，数风流人物，还看今朝。最后一脚，踢进去就是世界冠军。",
  ];
  return copies[roundIndex] || copies[0];
}

const opponentIntroCopy = {
  ARG: "潘帕斯雄鹰带着冠军气质而来，技术、经验和大心脏全都在线。",
  FRA: "高卢雄鸡阵容豪华，速度、身体和冠军经验都拉满，是最难啃的硬骨头。",
  BRA: "五星巴西自带世界杯光环，桑巴足球不是传说，是每一脚都可能改写比赛。",
  ENG: "三狮军团星光满满，英超节奏和豪门气质摆在门前，绝不是普通对手。",
  ESP: "斗牛士军团可是世界杯冠军队伍，传控和大赛经验都在线，超级强队。",
  GER: "德国队是世界杯老牌冠军，铁血、纪律和点球心理素质都很可怕。",
  POR: "葡萄牙有顶级球星和欧洲冠军底色，门前这一关不会轻易让路。",
  NED: "橙衣军团是著名无冕之王，技术流、压迫感和门前气场都很足。",
  BEL: "欧洲红魔黄金一代余威还在，强度一上来，任何射门都会变难。",
  ITA: "蓝衣军团最懂防守，也最懂点球大战，这一关考验的是胆子。",
  CRO: "格子军团大赛韧性极强，加时、点球、逆境，他们都太熟了。",
  URU: "乌拉圭有世界杯冠军血统，硬朗、凶悍，门前不会给轻松路线。",
  JPN: "日本队脚下细、纪律强，亚洲强队的压迫会让这一脚更紧。",
  KOR: "韩国队冲击力十足，跑动和对抗都很凶，这一脚要稳住节奏。",
  MAR: "摩洛哥曾把黑马故事写进四强，防线硬、门将狠，绝不好打。",
  MEX: "墨西哥世界杯经验丰富，节奏快、斗志足，点球点前也不会虚。",
  USA: "美国队身体强、速度快，年轻冲击力摆在这里，门将反应很快。",
  DEN: "丹麦童话不是随便叫的，整体性和冷静感会把比赛拖得很紧。",
  SUI: "瑞士队最擅长把强队拖进苦战，稳、硬、耐心，是典型难关。",
  COL: "哥伦比亚有南美的脚法和冲击力，门前这一关不会轻松。",
  SEN: "塞内加尔身体天赋出色，非洲冠军气质很足，扑救范围很吓人。",
  GHA: "加纳速度和爆发力都强，越到关键时刻越敢对抗。",
  NGA: "尼日利亚节奏快、冲击猛，一旦门将猜对方向就很危险。",
  AUS: "澳大利亚硬朗直接，身体对抗强，门前这一脚不能犹豫。",
  CAN: "加拿大速度和冲击力很强，年轻球队敢压上，也敢搏命。",
  POL: "波兰有欧洲老派硬度，门前站位稳，这一脚要打得足够刁。",
  SWE: "瑞典高大硬朗，防守纪律很强，禁区前的压迫感很重。",
  SRB: "塞尔维亚身体和脚法兼具，东欧强队的硬度摆在门前。",
  CHI: "智利有南美冠军底色，凶悍、快速，关键球从不手软。",
  CRC: "哥斯达黎加曾经靠铁血防守惊艳世界杯，门将这一关很难骗。",
  CMR: "喀麦隆冲击力十足，非洲雄狮站到门前，气势先压上来了。",
};

function opponentCopy(opponent) {
  return opponentIntroCopy[opponent.id] || `${opponent.name}能走到这里，已经说明他们不是普通球队。这一脚必须够准。`;
}

function matchFooterCopy(roundIndex, opponent) {
  const copies = [
    `赢下${opponent.name}，中国队就是世界杯16强。第一步，先把历史踢开。`,
    `赢下${opponent.name}，中国队就是世界八强。故事已经离谱，但脚下还要稳。`,
    `赢下${opponent.name}，中国队就进半决赛。每往前一步，都像在改写现实。`,
    `赢下${opponent.name}，中国队就进世界杯决赛。段子到这里，已经有点热血了。`,
    `赢下${opponent.name}，中国队就是世界冠军。全场只剩这一脚，别眨眼。`,
  ];
  return copies[roundIndex] || copies[0];
}

function introStageLabel(roundIndex) {
  const labels = ["32进16", "16进8", "8进4", "半决赛", "决赛"];
  return labels[roundIndex] || roundMeta[roundIndex]?.label || "";
}

function shotResultCopy(kind) {
  const winCopies = [
    { title: "球进啦！", body: "皮球应声入网，中国队闯进世界杯16强。" },
    { title: "应声入网！", body: "这一脚干净利落，中国队站上世界八强。" },
    { title: "进啦！", body: "皮球钻进死角，中国队杀进世界杯半决赛。" },
    { title: "杀进决赛！", body: "这一脚穿过门将指尖，中国队站上世界杯决赛舞台。" },
    { title: "世界冠军！", body: "球应声入网，中国队把世界杯捧回来了。" },
  ];
  const copies = {
    qualifierGoal: {
      title: "进啦！",
      body: "这一脚踢开世界杯大门，中国队拿到入场券。",
    },
    weak: {
      title: "力量小了",
      body: "皮球速度不够，门前差了一口气。",
    },
    high: {
      title: "高了",
      body: "皮球越过横梁，离名场面只差一点点。",
    },
    wide: {
      title: "偏了",
      body: "角度想得很刁，可惜稍稍滑出门框。",
    },
    qualifierWide: {
      title: "偏了",
      body: "空门就在眼前，这一脚还是和门柱擦肩而过。",
    },
    standee: {
      title: "打中机器人",
      body: "世界杯大门已经敞开，先别让它挡住这脚球。",
    },
    saved: {
      title: "被扑出",
      body: "门将判断对了方向，这一次只差半步。",
    },
  };

  if (kind === "goal") return winCopies[state.currentRound] || winCopies[0];
  return copies[kind] || copies.wide;
}

function advanceCelebrationCopy(roundIndex) {
  const copies = [
    {
      eyebrow: "中国队，前进！",
      title: "杀进16强！",
      body: "这一脚把中国队写进世界杯淘汰赛，新的历史开始了。",
    },
    {
      eyebrow: "中国队，前进！",
      title: "世界八强！",
      body: "皮球入网的一瞬间，中国队站上世界八强。",
    },
    {
      eyebrow: "中国队，前进！",
      title: "杀进半决赛！",
      body: "这一脚穿过门将，中国队继续把不可能往前踢。",
    },
    {
      eyebrow: "中国队，前进！",
      title: "冲进决赛！",
      body: "世界杯决赛的大门打开了，只差最后一脚。",
    },
    {
      eyebrow: "中国队，冠军！",
      title: "世界冠军！",
      body: "球应声入网，中国队站上世界之巅。",
    },
  ];
  return copies[roundIndex] || copies[0];
}

function celebrationConfettiMarkup() {
  return Array.from({ length: 24 }, (_, index) => {
    const left = 8 + ((index * 37) % 84);
    const delay = (index % 8) * 0.08;
    const drift = ((index % 5) - 2) * 18;
    return `<span style="--left:${left}%; --delay:${delay}s; --drift:${drift}px"></span>`;
  }).join("");
}

function renderIntro() {
  const { opponent } = currentPair();
  const chinaCopy = chinaIntroCopy(state.currentRound);
  const opponentDescription = opponentCopy(opponent);
  const footerCopy = matchFooterCopy(state.currentRound, opponent);
  const stageLabel = introStageLabel(state.currentRound);
  app.innerHTML = `
    <section class="screen intro-screen">
      <div class="versus">
        <div class="page-head">
          <div>
            <span class="round-chip"><strong>${stageLabel}</strong></span>
            <h2>中国队 vs ${opponent.name}</h2>
            <p>${footerCopy}</p>
          </div>
          <button class="btn btn-ghost" data-action="back-bracket">查看晋级图</button>
        </div>
        <div class="versus-board">
          <article class="team-hero china-card">
            <div class="big-flag">${flagSvg(china, "large")}</div>
            <h3>中国</h3>
            <p>${chinaCopy}</p>
          </article>
          <div class="vs-mark">VS</div>
          <article class="team-hero opponent-card" style="--team-a: ${opponent.colors[0]}; --team-b: ${opponent.colors[1]}">
            <div class="big-flag">${flagSvg(opponent, "large")}</div>
            <h3>${opponent.name}</h3>
            <p>${opponentDescription}</p>
          </article>
        </div>
        <div class="intro-copy intro-action-only">
          <button class="btn btn-primary" data-action="start-match">继续挑战</button>
        </div>
      </div>
    </section>
  `;
}

function renderPenalty() {
  const penalty = state.penalty;
  const opponent = penalty.opponent;
  const keeperProfile = opponent ? getKeeperProfile(opponent) : null;
  warmPenaltyImages(keeperProfile);
  const keeperStyle = opponent && keeperProfile ? keeperStyleVars(opponent, keeperProfile) : "";
  const keeperClass = keeperProfile
    ? `keeper keeper-profile ${keeperProfile.group === "elite" ? "keeper-elite" : "keeper-generic"} ${keeperProfile.className}`
    : "keeper";
  app.innerHTML = `
    <section class="screen stage">
      <header class="stage-header">
        <div class="match-line">
          <span class="round-chip"><strong>${penalty.roundLabel}</strong></span>
          <span>${opponent ? `中国 vs ${opponent.name}` : "中国队 vs 机器人"}</span>
        </div>
        <div class="stage-prompt">${penalty.line}</div>
        <button class="sound-toggle" data-action="toggle-sound" aria-pressed="${stadiumSound.enabled}" aria-label="${stadiumSound.enabled ? "关闭声音" : "打开声音"}" title="${stadiumSound.enabled ? "关闭声音" : "打开声音"}">${soundIconMarkup(stadiumSound.enabled)}</button>
      </header>
      <div class="pitch-wrap">
        <div id="pitch" class="pitch realistic-pitch">
          <div class="crowd-band"></div>
          <div class="floodlight left"></div>
          <div class="floodlight right"></div>
          <div class="goal"></div>
          <div class="goal-label">${penalty.keeper ? `${opponent.name}门将` : "人形机器人"}</div>
          ${!penalty.keeper ? `
            <div id="standee" class="standee robot-standee" aria-hidden="true">
              <div class="robot-head"></div>
              <div class="robot-neck"></div>
              <div class="robot-body"></div>
              <div class="robot-arm left"></div>
              <div class="robot-arm right"></div>
              <div class="robot-leg left"></div>
              <div class="robot-leg right"></div>
            </div>
          ` : ""}
          ${penalty.keeper ? `
            <div id="keeper" class="${keeperClass}" ${keeperStyle}>
              <div class="keeper-head"></div>
              <div class="keeper-body"></div>
              <div class="keeper-arm left"></div>
              <div class="keeper-arm right"></div>
              <div class="keeper-leg left"></div>
              <div class="keeper-leg right"></div>
            </div>
          ` : ""}
          <div class="penalty-dot"></div>
          <div class="kicker">
            <div class="head"></div>
            <div class="body"></div>
            <div class="arm left"></div>
            <div class="arm right"></div>
            <div class="leg left"></div>
            <div class="leg right"></div>
          </div>
          <div id="aimLine" class="aim-line"></div>
          <div id="targetDot" class="target-dot"></div>
          <div id="pullHandle" class="pull-handle" aria-hidden="true"></div>
          <button id="ball" class="ball" aria-label="足球"></button>
          <div id="toast" class="toast" hidden></div>
          <div id="advanceCelebration" class="advance-celebration" hidden></div>
          <div class="shot-panel">
            <div class="hint"><strong>按住球往后拉</strong> 拉出来的是方向点，松手射门</div>
            <div class="power-wrap">
              <span id="powerText">力度 0%</span>
              <div class="power-meter"><span id="powerBar"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  attachPenaltyControls();
}

function attachPenaltyControls() {
  const pitch = document.querySelector("#pitch");
  const ball = document.querySelector("#ball");
  const aimLine = document.querySelector("#aimLine");
  const targetDot = document.querySelector("#targetDot");
  const pullHandle = document.querySelector("#pullHandle");
  const penaltyDot = document.querySelector(".penalty-dot");
  const powerBar = document.querySelector("#powerBar");
  const powerText = document.querySelector("#powerText");
  const keeper = document.querySelector("#keeper");
  const kicker = document.querySelector(".kicker");
  const standee = document.querySelector("#standee");
  const toast = document.querySelector("#toast");
  const advanceCelebration = document.querySelector("#advanceCelebration");
  let rect = pitch.getBoundingClientRect();
  let base = { x: rect.width / 2, y: rect.height * 0.72 };
  let drag = { ...base };
  let target = { x: rect.width / 2, y: rect.height * 0.22 };
  let goalBox = null;
  let standeeBox = null;
  let goalLineY = 0;
  let power = 0;
  let dragging = false;
  let locked = false;
  const keeperProfile = state.penalty?.opponent ? getKeeperProfile(state.penalty.opponent) : null;

  const place = (element, x, y) => {
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  };

  const readPenaltySpot = () => {
    const pitchBox = pitch.getBoundingClientRect();
    if (!penaltyDot) return { x: pitchBox.width / 2, y: pitchBox.height * 0.72 };
    const spotBox = penaltyDot.getBoundingClientRect();
    return {
      x: spotBox.left - pitchBox.left + spotBox.width / 2,
      y: spotBox.top - pitchBox.top + spotBox.height / 2,
    };
  };

  const readLayout = () => {
    rect = pitch.getBoundingClientRect();
    base = readPenaltySpot();
    const goal = pitch.querySelector(".goal").getBoundingClientRect();
    const pitchBox = pitch.getBoundingClientRect();
    goalLineY = goal.bottom - pitchBox.top;
    goalBox = {
      left: goal.left - pitchBox.left + 16,
      right: goal.right - pitchBox.left - 16,
      top: goal.top - pitchBox.top + 14,
      bottom: goal.bottom - pitchBox.top - 14,
      width: goal.width - 32,
      height: goal.height - 28,
    };
    if (standee) {
      const standeeRect = standee.getBoundingClientRect();
      standeeBox = {
        left: standeeRect.left - pitchBox.left,
        right: standeeRect.right - pitchBox.left,
        top: standeeRect.top - pitchBox.top,
        bottom: standeeRect.bottom - pitchBox.top,
      };
    }
    target = {
      x: goalBox.left + goalBox.width / 2,
      y: goalBox.top + goalBox.height / 2,
    };
  };

  const keeperHomeTop = () => {
    if (!keeper || !goalLineY) return pitch.classList.contains("realistic-pitch") ? "20.3%" : "28%";
    return `${goalLineY}px`;
  };

  const resetPositions = () => {
    readLayout();
    drag = { ...base };
    power = 0;
    ball.style.transition = "";
    ball.style.pointerEvents = "";
    ball.style.opacity = "";
    ball.style.zIndex = "";
    ball.style.transform = "translate(-50%, -50%) scale(1)";
    place(ball, base.x, base.y);
    place(pullHandle, base.x, base.y);
    pullHandle.style.opacity = "0";
    aimLine.style.opacity = "0";
    targetDot.style.opacity = "0";
    targetDot.classList.remove("is-aimed", "is-miss");
    pitch.classList.remove("is-shooting");
    kicker?.classList.remove("is-aiming", "is-kicking");
    updatePower(power);
    if (keeper) {
      keeper.classList.remove("is-diving", "dive-left", "dive-right");
      keeper.style.transition = "";
      keeper.style.left = "50%";
      keeper.style.top = keeperHomeTop();
      keeper.style.transform = "translate(-50%, -100%)";
    }
  };

  const updatePower = (value) => {
    power = clamp(value, 0, 1);
    powerBar.style.setProperty("--power", `${Math.round(power * 100)}%`);
    powerText.textContent = `力度 ${Math.round(power * 100)}%`;
  };

  const setAimLine = (from, to, visible) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.hypot(dx, dy);

    aimLine.style.opacity = visible && distance > 8 ? "1" : "0";
    aimLine.style.left = `${from.x}px`;
    aimLine.style.top = `${from.y}px`;
    aimLine.style.height = `${distance}px`;
    aimLine.style.transform = `translateX(-50%) rotate(${Math.atan2(dy, dx) - Math.PI / 2}rad)`;
  };

  const rayBoxPoint = (origin, direction, box, mix) => {
    let enter = 0;
    let exit = Infinity;

    const clipAxis = (originValue, directionValue, min, max) => {
      if (Math.abs(directionValue) < 0.001) {
        return originValue >= min && originValue <= max;
      }

      const first = (min - originValue) / directionValue;
      const second = (max - originValue) / directionValue;
      enter = Math.max(enter, Math.min(first, second));
      exit = Math.min(exit, Math.max(first, second));
      return enter <= exit;
    };

    const insetBox = {
      left: box.left + 8,
      right: box.right - 8,
      top: box.top + 8,
      bottom: box.bottom - 8,
    };

    if (
      !clipAxis(origin.x, direction.x, insetBox.left, insetBox.right) ||
      !clipAxis(origin.y, direction.y, insetBox.top, insetBox.bottom) ||
      exit < 0
    ) {
      return null;
    }

    const entry = Math.max(enter, 0);
    const t = entry + (exit - entry) * clamp(mix, 0, 1);
    return {
      x: origin.x + direction.x * t,
      y: origin.y + direction.y * t,
    };
  };

  const rayPitchEdge = (origin, direction) => {
    const margin = 16;
    const bounds = {
      left: margin,
      right: rect.width - margin,
      top: margin,
      bottom: rect.height - margin,
    };
    const candidates = [];

    const addCandidate = (t) => {
      if (t <= 0) return;
      const point = {
        x: origin.x + direction.x * t,
        y: origin.y + direction.y * t,
      };
      if (
        point.x >= bounds.left &&
        point.x <= bounds.right &&
        point.y >= bounds.top &&
        point.y <= bounds.bottom
      ) {
        candidates.push({ t, point });
      }
    };

    if (Math.abs(direction.x) > 0.001) {
      addCandidate((bounds.left - origin.x) / direction.x);
      addCandidate((bounds.right - origin.x) / direction.x);
    }
    if (Math.abs(direction.y) > 0.001) {
      addCandidate((bounds.top - origin.y) / direction.y);
      addCandidate((bounds.bottom - origin.y) / direction.y);
    }

    candidates.sort((a, b) => a.t - b.t);
    return candidates[0]?.point ?? { ...origin };
  };

  const aimFromPull = (direction, pullPower) => {
    const heightMix = 0.18 + pullPower * 0.82;
    return rayBoxPoint(base, direction, goalBox, heightMix) ?? rayPitchEdge(base, direction);
  };

  const shotPreview = (point) => {
    const maxPull = Math.min(154, rect.width * 0.32, rect.height * 0.24);
    let dx = point.x - base.x;
    let dy = point.y - base.y;
    const distance = Math.hypot(dx, dy);

    if (distance > maxPull) {
      const scale = maxPull / distance;
      dx *= scale;
      dy *= scale;
    }

    drag = { x: base.x + dx, y: base.y + dy };

    const pullPower = Math.hypot(dx, dy) / maxPull;
    updatePower(pullPower);
    place(pullHandle, drag.x, drag.y);
    pullHandle.style.opacity = pullPower > 0.08 ? "1" : "0";

    const goalCenterX = goalBox.left + goalBox.width / 2;
    const goalCenterY = goalBox.top + goalBox.height / 2;
    const shot = { x: -dx, y: -dy };
    target = pullPower > 0.08 ? aimFromPull(shot, pullPower) : { x: goalCenterX, y: goalCenterY };

    targetDot.style.opacity = pullPower > 0.08 ? "1" : "0";
    targetDot.classList.toggle("is-aimed", pullPower > 0.08);
    place(targetDot, target.x, target.y);
    setAimLine(drag, target, pullPower > 0.08);
  };

  const pointerToPitch = (event) => {
    rect = pitch.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const shoot = () => {
    const dragX = drag.x - base.x;
    const dragY = drag.y - base.y;
    const distance = Math.hypot(dragX, dragY);

    if (distance < 24) {
      resetPositions();
      return;
    }

    locked = true;
    ball.style.pointerEvents = "none";
    pullHandle.style.opacity = "0";
    pitch.classList.add("is-shooting");
    kicker?.classList.remove("is-aiming");
    kicker?.classList.add("is-kicking");

    const outcome = resolveOutcome({ ...target }, power);
    window.setTimeout(() => {
      playKickSound();
      targetDot.classList.toggle("is-miss", !outcome.goal);
      place(targetDot, outcome.ballX, outcome.ballY);
      setAimLine(base, { x: outcome.ballX, y: outcome.ballY }, true);

      const ballDuration = outcome.ballVanish ? 560 : outcome.goal ? 420 : 540;
      const keeperDuration = outcome.goal ? 780 : 540;
      ball.style.zIndex = outcome.ballLayer === "behind-keeper" ? "4" : outcome.ballLayer === "front-keeper" ? "8" : "";
      ball.style.opacity = "1";
      ball.style.transition = `left ${ballDuration}ms cubic-bezier(.12,.82,.18,1), top ${ballDuration}ms cubic-bezier(.12,.82,.18,1), transform ${ballDuration}ms ease, opacity ${outcome.ballVanish ? ballDuration : 180}ms ease`;
      ball.style.transform = `translate(-50%, -50%) scale(${outcome.ballVanish ? 0.18 : 0.58})`;
      ball.style.opacity = outcome.ballVanish ? "0" : "1";
      place(ball, outcome.ballX, outcome.ballY);

      if (keeper && typeof outcome.keeperX === "number") {
        const diveLeft = outcome.keeperX < rect.width / 2;
        keeper.classList.add("is-diving", diveLeft ? "dive-left" : "dive-right");
        keeper.style.transition = `left ${keeperDuration}ms cubic-bezier(.18,.76,.25,1), top ${keeperDuration}ms ease`;
        keeper.style.left = `${outcome.keeperX}px`;
        keeper.style.top = `${outcome.keeperY}px`;
        keeper.style.transform = `translate(-50%, -50%) scaleX(${diveLeft ? -1 : 1}) rotate(${diveLeft ? -9 : 9}deg)`;
      }
    }, 260);

    window.setTimeout(() => {
      playCrowdReaction(outcome.goal);
      if (outcome.goal && state.penalty.type === "match") {
        showAdvanceCelebration();
        window.setTimeout(() => handleShotResult(true), 3800);
      } else {
        showShotToast(outcome, toast);
        window.setTimeout(() => handleShotResult(outcome.goal), 960);
      }
    }, 1020);
  };

  const resolveOutcome = (aim, shotPower) => {
    const difficulty = state.penalty.difficulty < 0 ? 0 : state.penalty.difficulty;
    const powerError = 4 + shotPower * shotPower * (18 + difficulty * 6);
    const aimVectorX = aim.x - base.x;
    const aimVectorY = aim.y - base.y;
    const aimDistance = Math.hypot(aimVectorX, aimVectorY) || 1;
    const alongError = (Math.random() - 0.5) * powerError;
    const ballX = aim.x + (aimVectorX / aimDistance) * alongError;
    const ballY = aim.y + (aimVectorY / aimDistance) * alongError;
    const onTarget = ballX > goalBox.left && ballX < goalBox.right && ballY > goalBox.top && ballY < goalBox.bottom;

    if (shotPower < 0.24) {
      const copy = shotResultCopy("weak");
      return {
        goal: false,
        ballX,
        ballY: clamp(ballY + goalBox.height * 0.5, goalBox.top, goalBox.bottom + 52),
        ballLayer: "front-keeper",
        ...copy,
      };
    }

    if (!onTarget) {
      const copy = shotResultCopy(ballY <= goalBox.top ? "high" : state.penalty.type === "qualifier" ? "qualifierWide" : "wide");
      return {
        goal: false,
        ballX,
        ballY,
        ballVanish: true,
        ...copy,
      };
    }

    if (!state.penalty.keeper) {
      const hitStandee =
        standeeBox &&
        ballX > standeeBox.left - 8 &&
        ballX < standeeBox.right + 8 &&
        ballY > standeeBox.top - 8 &&
        ballY < standeeBox.bottom + 8;

      if (hitStandee) {
        const copy = shotResultCopy("standee");
        return {
          goal: false,
          ballX,
          ballY,
          ballLayer: "front-keeper",
          ...copy,
        };
      }

      const copy = shotResultCopy("qualifierGoal");
      return {
        goal: true,
        ballX,
        ballY,
        ballLayer: "behind-keeper",
        ...copy,
      };
    }

    const clampInsideRange = (value, min, max) => {
      if (min > max) return (min + max) / 2;
      return clamp(value, min, max);
    };
    const keeperDiveHalfWidth = pitch.classList.contains("realistic-pitch") ? (keeperProfile?.diveWidth || 150) / 2 : 36;
    const keeperDiveHalfHeight = pitch.classList.contains("realistic-pitch") ? (keeperProfile?.diveHeight || 86) / 2 : 44;
    const keeperMinX = goalBox.left + keeperDiveHalfWidth;
    const keeperMaxX = goalBox.right - keeperDiveHalfWidth;
    const keeperMinY = goalBox.top + keeperDiveHalfHeight;
    const keeperMaxY = goalBox.bottom - keeperDiveHalfHeight;
    const keeperErrors = [148, 128, 108, 88, 70];
    const saveRadii = [22, 26, 30, 34, 38];
    const keeperErrorScale = keeperProfile?.errorScale ?? 1;
    const keeperYErrorScale = keeperProfile?.yErrorScale ?? 1;
    const errorX = (Math.random() - 0.5) * keeperErrors[difficulty] * 2 * keeperErrorScale;
    const errorY = (Math.random() - 0.5) * keeperErrors[difficulty] * 0.72 * keeperYErrorScale;
    const keeperX = clampInsideRange(ballX + errorX, keeperMinX, keeperMaxX);
    const keeperY = clampInsideRange(ballY + errorY, keeperMinY, keeperMaxY);
    const cornerBonus = Math.min(Math.abs(ballX - goalBox.left), Math.abs(goalBox.right - ballX), Math.abs(ballY - goalBox.top), Math.abs(goalBox.bottom - ballY)) < 18 ? 14 : 0;
    const highReach = ballY < goalBox.top + goalBox.height * 0.28 ? keeperProfile?.highReach || 0 : 0;
    const lowReach = ballY > goalBox.bottom - goalBox.height * 0.25 ? keeperProfile?.lowReach || 0 : 0;
    const centerReach = Math.abs(ballX - (goalBox.left + goalBox.width / 2)) < goalBox.width * 0.16 ? keeperProfile?.centerReach || 0 : 0;
    const edgeReach = Math.min(Math.abs(ballX - goalBox.left), Math.abs(goalBox.right - ballX)) < goalBox.width * 0.16 ? keeperProfile?.cornerReach || 0 : 0;
    const profileReach = highReach + lowReach + centerReach + edgeReach;
    const distanceToBall = Math.hypot(keeperX - ballX, (keeperY - ballY) * 1.35);
    const speedBonus = Math.max(0, shotPower - 0.58) * 18;
    const saveRadius = Math.max(12, saveRadii[difficulty] + (keeperProfile?.saveRadiusBonus || 0) + profileReach);
    const saved = distanceToBall < saveRadius - cornerBonus - speedBonus;
    const copy = shotResultCopy(saved ? "saved" : "goal");

    return {
      goal: !saved,
      ballX,
      ballY,
      keeperX,
      keeperY,
      ballLayer: saved ? "front-keeper" : "behind-keeper",
      ...copy,
    };
  };

  const showShotToast = (outcome, target) => {
    target.hidden = false;
    target.innerHTML = `<h3>${outcome.title}</h3><p>${outcome.body}</p>`;
  };

  const showAdvanceCelebration = () => {
    if (!advanceCelebration) return;
    const copy = advanceCelebrationCopy(state.currentRound);
    toast.hidden = true;
    advanceCelebration.hidden = false;
    advanceCelebration.innerHTML = `
      <div class="advance-rays"></div>
      <div class="advance-confetti">${celebrationConfettiMarkup()}</div>
      <div class="advance-card">
        <p class="advance-eyebrow">${copy.eyebrow}</p>
        <h3>${copy.title}</h3>
        <p>${copy.body}</p>
      </div>
    `;
  };

  ball.addEventListener("pointerdown", (event) => {
    if (locked) return;
    startStadiumSound();
    dragging = true;
    kicker?.classList.add("is-aiming");
    ball.setPointerCapture(event.pointerId);
    shotPreview(pointerToPitch(event));
  });

  ball.addEventListener("pointermove", (event) => {
    if (!dragging || locked) return;
    shotPreview(pointerToPitch(event));
  });

  ball.addEventListener("pointerup", () => {
    if (!dragging || locked) return;
    dragging = false;
    shoot();
  });

  ball.addEventListener("pointercancel", () => {
    dragging = false;
    kicker?.classList.remove("is-aiming");
    resetPositions();
  });

  ball.addEventListener("keydown", (event) => {
    if (locked || (event.key !== " " && event.key !== "Enter")) return;
    event.preventDefault();
    startStadiumSound();
    shotPreview({ x: base.x, y: base.y + Math.min(128, rect.height * 0.2) });
    shoot();
  });

  window.addEventListener("resize", () => {
    if (!locked) resetPositions();
  });
  resetPositions();
  window.requestAnimationFrame(resetPositions);
  window.requestAnimationFrame(() => window.requestAnimationFrame(resetPositions));
  updateSoundButtons();
}

function handleShotResult(goal) {
  if (state.penalty.type === "qualifier") {
    if (goal) {
      showQualifiedAfterQualifier();
    } else {
      state.result = {
        won: false,
        stage: "还差这一脚",
        badge: "空门挑战者",
        body: "这脚差了一点。中国队的世界杯，还在门线上等你。",
      };
      state.view = "result";
      render();
    }
    return;
  }

  if (goal) {
    advanceChina();
  } else {
    loseAtCurrentRound();
  }
}

function advanceChina() {
  const roundIndex = state.currentRound;
  const currentRound = state.bracket.rounds[roundIndex];
  const nextRound = [];
  const { opponent } = currentPair();

  for (let i = 0; i < currentRound.length; i += 2) {
    const a = currentRound[i];
    const b = currentRound[i + 1];
    if (a?.id === "CHN" || b?.id === "CHN") {
      nextRound.push(china);
    } else {
      nextRound.push(simulateWinner(a, b));
    }
  }

  state.bracket.rounds[roundIndex + 1] = nextRound;
  state.history.push({
    round: roundMeta[roundIndex].label,
    opponent: opponent.name,
    teamId: opponent.id,
    result: "晋级",
  });

  if (roundIndex === roundMeta.length - 1) {
    state.bracket.champion = china;
    state.result = {
      won: true,
      stage: "中国队捧起世界杯",
      badge: "这一脚，写进历史",
      body: "从外卡赛到决赛，六次站上点球点。最后这一脚，真的把世界杯踢回来了。",
      breakthrough: "这不是梦，这是你亲手踢出的结局。",
    };
    state.view = "result";
    render();
    return;
  }

  state.currentRound += 1;
  state.message = roundMeta[roundIndex].success;
  state.view = "bracket";
  render();
}

function simulateWinner(a, b) {
  if (!a) return b;
  if (!b) return a;
  const ratingGap = a.rating - b.rating;
  const chanceA = clamp(0.5 + ratingGap * 0.035 + (Math.random() - 0.5) * 0.12, 0.08, 0.92);
  return Math.random() < chanceA ? a : b;
}

function loseAtCurrentRound() {
  const roundIndex = state.currentRound;
  const { opponent } = currentPair();
  state.history.push({
    round: roundMeta[roundIndex].label,
    opponent: opponent.name,
    teamId: opponent.id,
    result: "止步",
  });

  const loss = [
    {
      stage: "止步32强",
      badge: "世界杯入场券",
      body: "中国队已经站上世界杯淘汰赛，这本身就是历史。",
    },
    {
      stage: "止步16强",
      badge: "淘汰赛首胜",
      body: "中国队已经赢过一场世界杯淘汰赛。这一步，足够写进这个夏天。",
    },
    {
      stage: "世界8强",
      badge: "八强缔造者",
      body: "世界八强，已经足够让这个夜晚不真实。",
    },
    {
      stage: "世界四强",
      badge: "半决赛亲历者",
      body: "离决赛只差一脚，但这一路已经是奇迹。",
    },
    {
      stage: "世界亚军",
      badge: "决赛见证者",
      body: "离世界冠军只差最后一脚。亚军，也已经是中国队的世界杯。",
    },
  ][roundIndex];

  state.result = {
    won: false,
    ...loss,
  };
  state.view = "result";
  render();
}

function renderBracket() {
  const next = !state.bracket.champion && state.currentRound < roundMeta.length ? currentPair().opponent : null;
  app.innerHTML = `
    <section class="screen bracket-screen">
      <div class="page-head">
        <div>
          <h2>中国队，前进！</h2>
          <p>向前的每一步，都是创造历史！</p>
        </div>
      </div>
      <div class="bracket-scroll" aria-label="世界杯晋级图">
        <div class="bracket">
          ${renderBracketTree()}
        </div>
      </div>
      <footer class="bracket-footer">
        <div class="message-bar">
          ${next ? `下一轮：中国 vs ${next.name}。${roundMeta[state.currentRound].intro}` : "中国队已经站到最高处。"}
        </div>
        ${next ? `<button class="btn btn-primary" data-action="intro">继续挑战</button>` : ""}
      </footer>
    </section>
  `;
}

function renderBracketColumns() {
  const labels = ["32强", "16强", "8强", "半决赛", "决赛", "冠军"];
  const sizes = [32, 16, 8, 4, 2, 1];

  return labels
    .map((label, index) => {
      const round = state.bracket.rounds[index] || [];
      if (index === 5) {
        return `
          <section class="round-column">
            <h3>${label}</h3>
            ${renderTeamCard(round[0], false)}
          </section>
        `;
      }

      const pairCount = sizes[index] / 2;
      const pairs = Array.from({ length: pairCount }, (_, pairIndex) => {
        const first = round[pairIndex * 2];
        const second = round[pairIndex * 2 + 1];
        return `<div class="match-pair">${renderTeamCard(first, isCurrentTeam(first))}${renderTeamCard(second, isCurrentTeam(second))}</div>`;
      }).join("");

      return `
        <section class="round-column">
          <h3>${label}</h3>
          ${pairs}
        </section>
      `;
    })
    .join("");
}

function isCurrentTeam(team) {
  if (!team || state.view !== "bracket" || state.currentRound >= roundMeta.length) return false;
  const { opponent } = currentPair();
  return team.id === "CHN" || team.id === opponent?.id;
}

function renderTeamCard(team, current) {
  if (!team) {
    return `<div class="team-card empty"><span class="team-name">待定</span></div>`;
  }

  const className = ["team-card", team.id === "CHN" ? "china" : "", current ? "current" : ""]
    .filter(Boolean)
    .join(" ");

  return `
    <div class="${className}">
      <span class="team-name">${flagSvg(team)} ${team.name}</span>
      ${team.id === "CHN" ? "<strong>路线</strong>" : ""}
    </div>
  `;
}

function renderBracketTree() {
  const rows = [
    { label: "冠军", roundIndex: 5, matches: 1, champion: true },
    { label: "决赛", roundIndex: 4, matches: 1 },
    { label: "半决赛", roundIndex: 3, matches: 2 },
    { label: "8强", roundIndex: 2, matches: 4 },
    { label: "16强", roundIndex: 1, matches: 8 },
    { label: "32强", roundIndex: 0, matches: 16 },
  ];

  return `
    <div class="bracket-tree">
      ${rows
        .map((row) => `
          <section class="tree-row ${row.champion ? "champion-row" : ""}" style="--matches: ${row.matches}">
            <h3 class="tree-label">${row.label}</h3>
            <div class="tree-matches">
              ${row.champion ? renderChampionNode() : renderTreeMatches(row.roundIndex, row.matches)}
            </div>
          </section>
        `)
        .join("")}
    </div>
  `;
}

function renderTreeMatches(roundIndex, matchCount) {
  return Array.from({ length: matchCount }, (_, pairIndex) => renderTreeMatch(roundIndex, pairIndex)).join("");
}

function renderTreeMatch(roundIndex, pairIndex) {
  const round = state.bracket.rounds[roundIndex] || [];
  const nextRound = state.bracket.rounds[roundIndex + 1] || [];
  const first = round[pairIndex * 2];
  const second = round[pairIndex * 2 + 1];
  const winner = nextRound[pairIndex];
  const current = !state.bracket.champion && roundIndex === state.currentRound && [first?.id, second?.id].includes("CHN");
  const chinaPath = [first?.id, second?.id, winner?.id].includes("CHN");
  const completed = Boolean(winner);
  const className = ["tree-match", current ? "current-match" : "", chinaPath ? "china-path" : "", completed ? "completed" : ""]
    .filter(Boolean)
    .join(" ");

  return `
    <article class="${className}">
      <div class="tree-team-list">
        ${renderTreeTeamCard(first, isCurrentTeam(first), completed && winner?.id === first?.id ? "winner" : completed ? "out" : "")}
        ${renderTreeTeamCard(second, isCurrentTeam(second), completed && winner?.id === second?.id ? "winner" : completed ? "out" : "")}
      </div>
      <div class="tree-winner">
        ${winner ? `${flagSvg(winner)} <strong>${winner.name}</strong> 晋级` : current ? "下一脚决定晋级" : "待定"}
      </div>
    </article>
  `;
}

function renderChampionNode() {
  const champion = state.bracket.champion || state.bracket.rounds[5]?.[0];
  return `
    <article class="tree-match champion-node ${champion?.id === "CHN" ? "china-path completed" : ""}">
      ${renderTreeTeamCard(champion, false, champion ? "winner" : "")}
      <div class="tree-winner">${champion ? "捧杯" : "冠军待定"}</div>
    </article>
  `;
}

function renderTreeTeamCard(team, current, extraClass = "") {
  if (!team) {
    return `<div class="team-card empty ${extraClass}"><span class="team-name">待定</span></div>`;
  }

  const className = ["team-card", team.id === "CHN" ? "china" : "", current ? "current" : "", extraClass]
    .filter(Boolean)
    .join(" ");

  return `
    <div class="${className}">
      <span class="team-name">${flagSvg(team)} ${team.name}</span>
      ${team.id === "CHN" ? "<strong>路线</strong>" : ""}
    </div>
  `;
}

function renderResult() {
  const result = state.result;
  const isWorldCupResult = Boolean(state.bracket);
  const isChampionResult = Boolean(result.won && state.bracket?.champion?.id === "CHN");
  const route = state.history.length
    ? state.history.map(renderRouteItem).join("")
    : renderRouteItem({ round: "外卡赛", opponent: "空门", icon: "🥅", result: "未完成" });

  if (isWorldCupResult) {
    app.innerHTML = `
      <section class="screen result-screen result-poster ${isChampionResult ? "result-champion" : ""}">
        <img class="result-art" src="./assets/qualified-celebration.png" alt="" />
        <div class="result-shade"></div>
        ${result.won ? `<div class="champion-glow"></div>` : ""}
        <div class="result-board">
          <p class="result-kicker">${result.badge}</p>
          ${
            isChampionResult
              ? `<h2 class="result-title champion-title"><span>中国队</span><span>捧起世界杯</span></h2>`
              : `<h2 class="result-title">${result.stage}</h2>`
          }
          <p class="result-body">${result.body}</p>
          <p class="result-breakthrough">${result.breakthrough || "向前的每一步，都是创造历史。"}</p>
          ${isChampionResult ? `<p class="champion-route-title">夺冠之路</p>` : ""}
          <div class="route-list ${isChampionResult ? "champion-route" : ""}">
            ${route}
          </div>
          <div class="result-actions">
            <button class="btn btn-primary" data-action="restart">再来一次</button>
            <button class="btn btn-ghost" data-action="show-bracket">查看这届世界杯</button>
          </div>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="screen result-screen">
      ${result.won ? `<div class="champion-glow"></div>` : ""}
      <div class="result-board">
        <div class="result-kicker">${result.badge}</div>
        <h2 class="result-title">${result.stage}</h2>
        <p class="result-body">${result.body}</p>
        <div class="route-list">
          ${route}
        </div>
        <div class="result-actions">
          <button class="btn btn-primary" data-action="restart">再来一次</button>
          ${state.bracket ? `<button class="btn btn-ghost" data-action="show-bracket">查看这届世界杯</button>` : ""}
        </div>
      </div>
    </section>
  `;
}

function renderRouteItem(item) {
  const team = item.teamId ? teamById.get(item.teamId) : null;
  const marker = team ? flagSvg(team) : `<span class="route-icon">${item.icon || ""}</span>`;
  return `
    <div class="route-item">
      <span class="route-flag"><b>${item.round}</b> vs ${marker} ${item.opponent}</span>
      <span>${item.result}</span>
    </div>
  `;
}

function renderBracketTree() {
  const rounds = [
    { label: "32强", roundIndex: 0, matches: 16 },
    { label: "16强", roundIndex: 1, matches: 8 },
    { label: "8强", roundIndex: 2, matches: 4 },
    { label: "半决赛", roundIndex: 3, matches: 2 },
    { label: "决赛", roundIndex: 4, matches: 1 },
  ];

  return `
    <div class="knockout-bracket">
      ${rounds.map(renderKnockoutRoundLabel).join("")}
      ${rounds.map(renderKnockoutRound).join("")}
      ${rounds.slice(0, -1).map(renderKnockoutConnectors).join("")}
      ${renderKnockoutChampion()}
    </div>
  `;
}

function knockoutRowStart(roundIndex, pairIndex) {
  if (roundIndex === 0) return pairIndex * 2 + 1;
  return pairIndex * 2 ** (roundIndex + 1) + 2 ** roundIndex;
}

function renderKnockoutRoundLabel(round) {
  return `<div class="knockout-round-label" style="--col: ${round.roundIndex + 1}">${round.label}</div>`;
}

function renderKnockoutRound(round) {
  return Array.from({ length: round.matches }, (_, pairIndex) => renderKnockoutMatch(round.roundIndex, pairIndex)).join("");
}

function renderKnockoutMatch(roundIndex, pairIndex) {
  const round = state.bracket.rounds[roundIndex] || [];
  const nextRound = state.bracket.rounds[roundIndex + 1] || [];
  const first = round[pairIndex * 2];
  const second = round[pairIndex * 2 + 1];
  const winner = nextRound[pairIndex];
  const current = !state.bracket.champion && roundIndex === state.currentRound && [first?.id, second?.id].includes("CHN");
  const chinaPath = [first?.id, second?.id, winner?.id].includes("CHN");
  const completed = Boolean(winner);
  const className = [
    "knockout-match",
    roundIndex === 0 ? "first-round" : "",
    roundIndex === 4 ? "final-round" : "",
    current ? "current-match" : "",
    chinaPath ? "china-path" : "",
    completed ? "completed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `
    <article class="${className}" style="--col: ${roundIndex + 1}; --row: ${knockoutRowStart(roundIndex, pairIndex)}">
      <div class="match-table">
        ${renderKnockoutTeamRow(first, winner, current, completed)}
        ${renderKnockoutTeamRow(second, winner, current, completed)}
      </div>
    </article>
  `;
}

function renderKnockoutTeamRow(team, winner, current, completed) {
  if (!team) {
    return `
      <div class="knockout-team empty">
        <span class="team-name">待定</span>
        <span class="team-score"> </span>
      </div>
    `;
  }

  const won = completed && winner?.id === team.id;
  const out = completed && winner?.id !== team.id;
  const className = ["knockout-team", team.id === "CHN" ? "china" : "", won ? "winner" : "", out ? "out" : "", current ? "current" : ""]
    .filter(Boolean)
    .join(" ");
  const score = won ? "晋" : current && team.id === "CHN" ? "踢" : "";

  return `
    <div class="${className}">
      <span class="team-name">${flagSvg(team)} ${team.name}</span>
      <span class="team-score">${score}</span>
    </div>
  `;
}

function renderKnockoutConnectors(round) {
  return Array.from({ length: round.matches / 2 }, (_, groupIndex) => {
    const topRow = knockoutRowStart(round.roundIndex, groupIndex * 2) + 1;
    const bottomRow = knockoutRowStart(round.roundIndex, groupIndex * 2 + 1) + 1;
    return `
      <span
        class="knockout-connector"
        style="--col: ${round.roundIndex + 1}; --row-start: ${topRow}; --row-end: ${bottomRow}"
      ></span>
    `;
  }).join("");
}

function renderKnockoutChampion() {
  const champion = state.bracket.champion || state.bracket.rounds[5]?.[0];
  return `
    <section class="knockout-champion ${champion?.id === "CHN" ? "china-path completed" : ""}">
      <div class="knockout-round-label">冠军</div>
      <div class="champion-card">
        ${champion ? `${flagSvg(champion)} <strong>${champion.name}</strong>` : "冠军待定"}
      </div>
    </section>
  `;
}

function quickBracket() {
  state.bracket = buildBracket();
  state.keeperAssignments = assignKeeperProfiles(state.bracket);
  state.currentRound = 0;
  state.history = [
    {
      round: "外卡赛",
      opponent: "空门",
      icon: "🥅",
      result: "进球",
    },
  ];
  state.message = `试玩模式：先进入32强晋级图。潜在路线：${routePreviewText(state.bracket)}。后面会越来越硬。`;
  state.view = "bracket";
  render();
}

app.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "toggle-sound") {
    toggleStadiumSound();
    return;
  }
  if (action === "start-qualifier" || action === "start-match") startStadiumSound();
  if (action === "start-qualifier" || action === "restart") startQualifier();
  if (action === "quick-bracket") quickBracket();
  if (action === "continue-worldcup") goToBracketAfterQualifier();
  if (action === "intro") showCurrentIntro();
  if (action === "start-match") {
    state.view = "penalty";
    render();
  }
  if (action === "back-bracket" || action === "show-bracket") {
    state.view = "bracket";
    render();
  }
});

render();
