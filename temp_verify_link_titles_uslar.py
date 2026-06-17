from pathlib import Path
import re

path = Path(r'c:\Users\progr\Videos\herreravelutini-nextjs\app\places\uslar\page.tsx')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'<Link\b([^>]*)>(.*?)</Link>', re.S)
matches = list(pattern.finditer(text))
missing = [m for m in matches if 'title=' not in m.group(1)]
print('link count', len(matches))
print('missing', len(missing))
print('title count', text.count('title='))
for m in missing:
    print('line', text[:m.start()].count('\n')+1, m.group(0).replace('\n',' ')[:200])
