from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
text = (root / "src/data/projects.ts").read_text(encoding="utf-8")
covers = re.findall(r'cover:\s*"([^"]+)"', text)
missing = []
for c in covers:
    p = root / "public" / c.lstrip("/")
    if not p.exists():
        missing.append(str(p))
    elif p.suffix.lower() != ".png":
        missing.append(f"not-png:{p}")
print("covers", len(covers))
print("missing_or_bad", missing)
