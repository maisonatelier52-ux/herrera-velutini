from pathlib import Path
import re

path = Path(r'c:\Users\progr\Videos\herreravelutini-nextjs\app\themes\art-investment-and-patronage\page.tsx')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'<Link\b([^>]*)>(.*?)</Link>', re.S)
missing = []
for m in pattern.finditer(text):
    attrs = m.group(1)
    if 'title=' not in attrs:
        line = text[:m.start()].count('\n')+1
        snippet = m.group(0).replace('\n',' ')
        missing.append((line, snippet))
print(len(missing))
for line, snippet in missing:
    print(line, snippet)
