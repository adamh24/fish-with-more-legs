import flavours from '../Data/flavours.json';

const PROFILE = {
  'Sweet-Sour':     0.90, 
  'Sweet-Salty':    0.80, 
  'Sweet-Bitter':   0.75,
  'Sweet-Umami':    0.55, 
  'Sour-Salty':     0.50, 
  'Sour-Bitter':    0.35,
  'Sour-Umami':     0.70, 
  'Salty-Bitter':   0.50, 
  'Salty-Umami':    0.90,
  'Bitter-Umami':   0.60,
  'Sweet-Sweet':    0.80, 
  'Sour-Sour':      0.50, 
  'Salty-Salty':    0.70,
  'Bitter-Bitter':  0.35, 
  'Umami-Umami':    0.85,
};

const CATEGORY = {
  'Fruit-Fruit':                        0.70,
  'Fruit-Vegetable':                    0.55,
  'Fruit-Dairy':                        0.75,
  'Fruit-Meat & Fish':                  0.50,
  'Fruit-Herb':                         0.60,
  'Fruit-Spice':                        0.55,
  'Fruit-Ferment & Pickel':             0.65,
  'Fruit-Grain & Nut':                  0.60,
  'Fruit-Flower':                       0.75,
  'Fruit-Mushroom':                     0.45,
  'Fruit-Sweet':                        0.85,
  'Fruit-Tree':                         0.40,

  'Vegetable-Vegetable':                0.75,
  'Vegetable-Dairy':                    0.65,
  'Vegetable-Meat & Fish':              0.70,
  'Vegetable-Herb':                     0.80,
  'Vegetable-Spice':                    0.65,
  'Vegetable-Ferment & Pickel':         0.70,
  'Vegetable-Grain & Nut':              0.70,
  'Vegetable-Flower':                   0.60,
  'Vegetable-Mushroom':                 0.75,
  'Vegetable-Sweet':                    0.50,
  'Vegetable-Tree':                     0.45,

  'Dairy-Dairy':                        0.60,
  'Dairy-Meat & Fish':                  0.65,
  'Dairy-Herb':                         0.70,
  'Dairy-Spice':                        0.60,
  'Dairy-Ferment & Pickel':             0.70,
  'Dairy-Grain & Nut':                  0.65,
  'Dairy-Flower':                       0.65,
  'Dairy-Mushroom':                     0.60,
  'Dairy-Sweet':                        0.80,
  'Dairy-Tree':                         0.45,

  'Meat & Fish-Meat & Fish':            0.70,
  'Meat & Fish-Herb':                   0.80,
  'Meat & Fish-Spice':                  0.80,
  'Meat & Fish-Ferment & Pickel':       0.65,
  'Meat & Fish-Grain & Nut':            0.60,
  'Meat & Fish-Flower':                 0.40,
  'Meat & Fish-Mushroom':               0.70,
  'Meat & Fish-Sweet':                  0.45,
  'Meat & Fish-Tree':                   0.40,

  'Herb-Herb':                          0.55,
  'Herb-Spice':                         0.70,
  'Herb-Ferment & Pickel':              0.65,
  'Herb-Grain & Nut':                   0.60,
  'Herb-Flower':                        0.75,
  'Herb-Mushroom':                      0.70,
  'Herb-Sweet':                         0.50,
  'Herb-Tree':                          0.55,

  'Spice-Spice':                        0.55,
  'Spice-Ferment & Pickel':             0.60,
  'Spice-Grain & Nut':                  0.65,
  'Spice-Flower':                       0.55,
  'Spice-Mushroom':                     0.65,
  'Spice-Sweet':                        0.70,
  'Spice-Tree':                         0.65,

  'Ferment & Pickel-Ferment & Pickel':  0.60,
  'Ferment & Pickel-Grain & Nut':       0.60,
  'Ferment & Pickel-Flower':            0.45,
  'Ferment & Pickel-Mushroom':          0.75,
  'Ferment & Pickel-Sweet':             0.50,
  'Ferment & Pickel-Tree':              0.50,

  'Grain & Nut-Grain & Nut':            0.65,
  'Grain & Nut-Flower':                 0.55,
  'Grain & Nut-Mushroom':               0.60,
  'Grain & Nut-Sweet':                  0.70,
  'Grain & Nut-Tree':                   0.55,

  'Flower-Flower':                      0.55,
  'Flower-Mushroom':                    0.40,
  'Flower-Sweet':                       0.80,
  'Flower-Tree':                        0.65,

  'Mushroom-Mushroom':                  0.70,
  'Mushroom-Sweet':                     0.40,
  'Mushroom-Tree':                      0.65,

  'Sweet-Sweet':                        0.70,
  'Sweet-Tree':                         0.55,

  'Tree-Tree':                          0.60,
};
const STRENGTH = {
  'low-low':          0.5, 
  'low-neutral':      1.0, 
  'low-high':         0.0,
  'neutral-neutral':  0.5, 
  'neutral-high':     1.0, 
  'high-high':        0.5,
};

const ACID = {
  'citric-citric':      1.00,   
  'citric-acetic':      0.40, 
  'citric-lactic':      0.60,
  'citric-malic':       0.85, 
  'citric-tartaric':    0.75,
  'acetic-acetic':      1.00,   
  'acetic-lactic':      0.65, 
  'acetic-malic':       0.45,
  'acetic-tartaric':    0.35,
  'lactic-lactic':      1.00,   
  'lactic-malic':       0.65, 
  'lactic-tartaric':    0.55,
  'malic-malic':        1.00,     
  'malic-tartaric':     0.80,
  'tartaric-tartaric':  1.00,
};

const profileScore  = (a, b) => PROFILE[`${a}-${b}`] ?? PROFILE[`${b}-${a}`] ?? 0;
const categoryScore = (a, b) => CATEGORY[`${a}-${b}`] ?? CATEGORY[`${b}-${a}`] ?? 0;
const strengthScore = (a, b) => STRENGTH[`${a}-${b}`] ?? STRENGTH[`${b}-${a}`] ?? 0;
const acidScore     = (a, b) => ACID[`${a}-${b}`] ?? ACID[`${b}-${a}`] ?? 0;


function computeScore(i, j) {
  if (i.id === j.id) return 100;
  const s =
    0.55 * profileScore(i.profile, j.profile) +
    0.15 * categoryScore(i.category, j.category) +
    0.15 * strengthScore(i.strength, j.strength) +
    0.15 * acidScore(i.acid, j.acid);
  return Math.round(Math.min(Math.max(s, 0), 1) * 100);
}

const matrix = {};
for (const i of flavours) {
  matrix[i.id] = {};
  for (const j of flavours) {
    matrix[i.id][j.id] = computeScore(i, j);
  }
}

export default matrix;