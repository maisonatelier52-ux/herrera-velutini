from pathlib import Path
import re

path = Path(r'c:\Users\progr\Videos\herreravelutini-nextjs\app\places\gleichen\page.tsx')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'<Link([^>]*?href="([^"]+)"[^>]*)>(.*?)</Link>', re.S)
changed = 0

def clean_inner(inner):
    s = re.sub(r'\{\s*"\s*"\s*\}', ' ', inner)
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('&amp;', '&').replace('&apos;', "'").replace('&quot;', '"')
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


def repl(m):
    global changed
    attrs = m.group(1)
    inner = m.group(3)
    if 'title=' in attrs:
        return m.group(0)
    title = clean_inner(inner)
    if not title:
        return m.group(0)
    changed += 1
    safe_title = title.replace('"', '&quot;')
    return f'<Link{attrs} title="{safe_title}">{inner}</Link>'

new_text = pattern.sub(repl, text)
if changed > 0:
    path.write_text(new_text, encoding='utf-8')
print(changed)
