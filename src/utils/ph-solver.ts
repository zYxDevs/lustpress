/**
 * solve Pornhub JS challenge (leastFactor)
 * @param html challenge page html
 * @returns KEY cookie string
 */
export async function solveChallenge(html: string): Promise<string> {
  const cleanHtml = html.replace(/\/\*[\s\S]*?\*\//g, "");

  const pMatch = cleanHtml.match(/var p=(\d+);/);
  const sMatch = cleanHtml.match(/var s=(\d+);/);
  const extraMatch = cleanHtml.match(
    /document\.cookie="KEY="\+n\+"\*"\+p\/n\+":"\+s\+":(\d+):1;path=\/;";/
  );

  if (!pMatch || !sMatch || !extraMatch) {
    throw new Error("Challenge variables not found");
  }

  let p = parseInt(pMatch[1]);
  const s = parseInt(sMatch[1]);
  const extra = extraMatch[1];

  const goFuncMatch = cleanHtml.match(
    /function go\(\) \{([\s\S]+?)n=leastFactor\(p\);/
  );
  if (goFuncMatch) {
    const body = goFuncMatch[1].replace(/\s+/g, "");

    // 1. Find and process all if-else blocks, then REMOVE them from body
    const ifElseRegex = /if\(\(s>>(\d+)\)&1\)p(\+|-)=(\d+)\*(\d+);elsep(\+|-)=(\d+)\*(\d+);/g;
    let match;
    let bodyWithoutIfs = body;
    
    while ((match = ifElseRegex.exec(body)) !== null) {
      const shift = parseInt(match[1]);
      const condition = (s >> shift) & 1;
      if (condition) {
        const sign = match[2];
        const val = parseInt(match[3]) * parseInt(match[4]);
        p = sign === "+" ? p + val : p - val;
      } else {
        const sign = match[5];
        const val = parseInt(match[6]) * parseInt(match[7]);
        p = sign === "+" ? p + val : p - val;
      }
      // Remove the matched if-else block to avoid double counting
      bodyWithoutIfs = bodyWithoutIfs.replace(match[0], "");
    }

    // 2. Now process remaining adjustments (p+=... or p-=...) in the cleaned body
    const adjRegex = /p(\+|-)=(\d+);/g;
    let adjMatch;
    while ((adjMatch = adjRegex.exec(bodyWithoutIfs)) !== null) {
      const sign = adjMatch[1];
      const val = parseInt(adjMatch[2]);
      p = sign === "+" ? p + val : p - val;
    }
  }

  const n = leastFactor(p);
  return `KEY=${n}*${p / n}:${s}:${extra}:1`;
}

function leastFactor(n: number): number {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n === 0) return 0;
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 === 0) return 2;
  if (n % 3 === 0) return 3;
  if (n % 5 === 0) return 5;
  const m = Math.sqrt(n);
  for (let i = 7; i <= m; i += 30) {
    if (n % i === 0) return i;
    if (n % (i + 4) === 0) return i + 4;
    if (n % (i + 6) === 0) return i + 6;
    if (n % (i + 10) === 0) return i + 10;
    if (n % (i + 12) === 0) return i + 12;
    if (n % (i + 16) === 0) return i + 16;
    if (n % (i + 22) === 0) return i + 22;
    if (n % (i + 24) === 0) return i + 24;
  }
  return n;
}
